#!/usr/bin/env node

require('make-promises-safe')
require('dotenv-safe').load()

const fs = require('fs')
const path = require('path')
const semver = require('semver')
const hubdown = require('hubdown')
const GitHub = require('github')
const got = require('got')
const parseLinkHeader = require('parse-link-header')
const github = new GitHub()

// `electron` was once a different module on npm. prior to 1.3.1 it was
// published as `electron-prebuilt`
const firstNpmVersion = '1.3.1'

github.authenticate({
  type: 'token',
  token: process.env.GITHUB_AUTH_TOKEN
})

main()

async function main () {
  console.log('fetching list of `electron` releases on npm')
  const npmElectronData = await got('https://registry.npmjs.com/electron', {json: true})
  const npmVersions = Object.keys(npmElectronData.body.versions)
    // filter out old versions of `electron` that were actually a different module
    .filter(version => semver.gte(version, firstNpmVersion))

  console.log('fetching list of `electron-prebuilt` releases on npm')
  const npmElectronPrebuiltData = await got('https://registry.npmjs.com/electron-prebuilt', {json: true})

  const npmVersionsPrebuilt = Object.keys(npmElectronPrebuiltData.body.versions)
    // filter out `electron-prebuilt` versions that were published in tandem with `electron` for a while.
    .filter(version => semver.lt(version, firstNpmVersion))

  console.log('fetching npm dist-tags')
  const distTags = npmElectronData.body['dist-tags']
  const npmDistTaggedVersions = Object.keys(distTags)
    .reduce((acc, key) => {
      acc[distTags[key]] = key
      return acc
    }, {})

  console.log('fetching GitHub Releases page count')
  const countRes = await github.repos.getReleases(ghOpts({per_page: 1}))

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
  .map(release => {
    // derive version from tag_name for semver comparisons
    release.version = release.tag_name.substring(1)

    // published to npm? electron? electron-prebuilt?
    if (npmVersions.includes(release.version)) release.npmPackageName = 'electron'
    if (npmVersionsPrebuilt.includes(release.version)) release.npmPackageName = 'electron-prebuilt'

    // weave in version data for V8, Chromium, Node.js, etc
    const deps = depData.find(version => version.version === release.version)
    if (deps) release.dependencyVersions = deps

    // apply dist tags from npm (usually `latest` and `beta`)
    const npmDistTag = npmDistTaggedVersions[release.version]
    if (npmDistTag) release.npmDistTag = npmDistTag

    return release
  })

  // highest versions first
  .sort((a, b) => semver.compare(b.version, a.version))

  console.log(`found ${releases.length} VALID releases on GitHub`)

  console.log('processing changelogs to HTML')
  releases = await Promise.all(releases.map(processRelease))

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
