#!/usr/bin/env node

require('dotenv-safe').load()

const fs = require('fs')
const path = require('path')
const semver = require('semver')
const hubdown = require('hubdown')
const {pick} = require('lodash')
const GitHub = require('github')
const got = require('got')
const parseLinkHeader = require('parse-link-header')
const {promisify} = require('util')
const exec = promisify(require('child_process').exec)
const github = new GitHub()

github.authenticate({type: 'token', token: process.env.GITHUB_AUTH_TOKEN})

main()

async function main () {
  console.log('fetching npm releases list')
  let {stdout: npmVersions} = await exec('npm show electron versions')

  console.log('fetching npm dist-tags')
  let {stdout: npmDistTags} = await exec('npm dist-tag ls electron')
  const npmDistTaggedVersions = {}
  npmDistTags.split('\n').forEach(line => {
    const parts = line.split(': ')
    if (parts.length === 2) {
      npmDistTaggedVersions[parts[1]] = parts[0]
    }
  })

  console.log('fetching GitHub Releases page count')
  const countRes = await github.repos.getReleases(
    Object.assign(ghOpts({per_page: 1}))
  )

  // TODO: abort if npm releases and github releases count are equal to old data

  let pagesToFetch
  try {
    const count = Number(parseLinkHeader(countRes.meta.link).last.page)
    console.log(`found ${count} releases on GitHub`)
    pagesToFetch = Math.ceil(count / 100)
  } catch (err) {
    console.error('problem fetching number of releases')
    console.error(err)
    process.exit(1)
  }

  console.log('fetching release data from GitHub')
  let releases = []
  for (let i = 1; i <= pagesToFetch; i++) {
    const batch = await github.repos.getReleases(ghOpts({page: i}))
    releases = releases.concat(batch.data)
  }

  console.log(`found ${releases.length} TOTAL releases on GitHub`)

  console.log('fetching version data for deps like V8, Chromium, and Node.js')
  const depDataRes = await got('https://atom.io/download/electron/index.json', {json: true})
  const depData = depDataRes.body

  releases = releases
  .filter(release => !release.draft)
  .filter(release => semver.valid(release.tag_name.substring(1)))

  // derive `version` and `onNPM` props
  .map(release => {
    const version = release.tag_name.substring(1)
    return Object.assign(release, {
      version: version,
      onNPM: npmVersions.includes(version)
    })
  })

  // weave in version data for V8, Chromium, Node.js, etc
  .map(release => {
    const deps = depData.find(version => version.version === release.version)
    if (deps) release.dependencyVersions = deps
    return release
  })

  // apply dist tags from npm (usually `latest` and `beta`)
  .map(release => {
    const npmDistTag = npmDistTaggedVersions[release.version]
    if (npmDistTag) release.npmDistTag = npmDistTag
    return release
  })

  // highest versions first
  .sort((a, b) => semver.compare(b.version, a.version))

  console.log(`found ${releases.length} VALID releases on GitHub`)

  // releases = await Promise.all(releases.map(processRelease))

  const liteProps = [
    'tag_name',
    'version',
    'published_at',
    'prerelease'
  ]
  const lite = releases.map(release => pick(release, liteProps))
  const liteFile = path.join(__dirname, '../lite.json')
  fs.writeFileSync(liteFile, JSON.stringify(lite, null, 2))
  console.log(`wrote ${path.relative(process.cwd(), liteFile)}`)

  const fullFile = path.join(__dirname, '../index.json')
  fs.writeFileSync(fullFile, JSON.stringify(releases, null, 2))
  console.log(`wrote ${path.relative(process.cwd(), fullFile)}`)
}

// helpers

async function processRelease (release) {
  release.version = release.tag_name.substring(1)
  release.body = release.body

  // turn PR references like #123 into hyperlinks
  .replace(
    / #(\d+)$/gm,
    ' <a href="https://github.com/electron/electron/pull/$1">#$1</a>'
  )

  // adjust heading levels (h2 becomes h3, etc)
  .replace(/^#### /gm, '##### ')
  .replace(/^### /gm, '#### ')
  .replace(/^## /gm, '### ')

  const parsed = await hubdown(release.body)
  release.body_html = parsed.content

  return release
}

function ghOpts (opts) {
  const defaults = {
    owner: 'electron',
    repo: 'electron',
    per_page: 100
  }
  return Object.assign({}, defaults, opts)
}
