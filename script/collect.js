#!/usr/bin/env node

require('make-promises-safe')
if (!process.env.GH_TOKEN) {
  require('dotenv-safe').config()
}

const fs = require('fs')
const path = require('path')
const semver = require('semver')
const hubdown = require('hubdown')
const { Octokit } = require('@octokit/rest')
const got = require('got')
const parseLinkHeader = require('parse-link-header')
const { getPlatformFromFilename } = require('platform-utils')

// `electron` was once a different module on npm. prior to 1.3.1 it was
// published as `electron-prebuilt`
const firstNpmVersion = '1.3.1'

const github = new Octokit({
  auth: process.env.GH_TOKEN,
})

main()

async function main() {
  console.log('fetching list of `electron` releases on npm')
  const rawElectronData = await got('https://registry.npmjs.com/electron')
  const electronData = JSON.parse(rawElectronData.body)
  const validElectronVersions = Object.keys(electronData.versions)
    // filter out old versions of `electron` that were actually a different module
    .filter((version) => semver.gte(version, firstNpmVersion))

  console.log('fetching list of `electron-prebuilt` releases on npm')
  const rawPrebuiltData = await got(
    'https://registry.npmjs.com/electron-prebuilt'
  )
  const prebuiltData = JSON.parse(rawPrebuiltData.body)

  const validPrebuiltVersions = Object.keys(prebuiltData.versions)
    // filter out `electron-prebuilt` versions that were published in tandem with `electron` for a while.
    .filter((version) => semver.lt(version, firstNpmVersion))

  console.log('fetching list of `electron-nightly` releases on npm')
  const rawNightlyData = await got(
    'https://registry.npmjs.com/electron-nightly'
  )
  const nightlyData = JSON.parse(rawNightlyData.body)
  const validNightlyVersions = Object.keys(nightlyData.versions)

  console.log('fetching npm dist-tags')
  const distTags = electronData['dist-tags']
  const npmDistTaggedVersions = Object.entries(distTags).reduce(
    (acc, tagAndVersion) => {
      const [tag, version] = tagAndVersion
      if (!tag.includes('nightly')) {
        let o = acc[version]
        if (!o) acc[version] = o = []
        o.push(tag)
      }
      return acc
    },
    {}
  )
  const latestNightly = nightlyData['dist-tags'].latest
  npmDistTaggedVersions[latestNightly] = ['nightly']
  console.log('fetched npmDistTaggedVersions:\n', npmDistTaggedVersions)

  console.log('fetching GitHub Releases page count')
  let releases = []
  releases = releases.concat(await fetchAllRepoReleases('electron'))
  releases = releases.concat(await fetchAllRepoReleases('nightlies'))
  console.log(`found ${releases.length} releases on GitHub`)

  console.log('fetching version data for deps like V8, Chromium, and Node.js')
  const depDataRes = await got('https://electronjs.org/headers/index.json')

  const depData = JSON.parse(depDataRes.body)

  releases = releases
    .filter((release) => !release.draft)
    .filter((release) => semver.valid(release.tag_name.substring(1)))
    .map((release) => {
      // derive version from tag_name for semver comparisons
      release.version = release.tag_name.substring(1)

      // published to npm? electron? electron-prebuilt?
      if (validElectronVersions.includes(release.version))
        release.npm_package_name = 'electron'
      if (validPrebuiltVersions.includes(release.version))
        release.npm_package_name = 'electron-prebuilt'
      if (validNightlyVersions.includes(release.version))
        release.npm_package_name = 'electron-nightly'

      // weave in version data for V8, Chromium, Node.js, etc
      const deps = depData.find(
        (version) => version.version === release.version
      )
      if (deps) release.deps = deps

      // apply dist tags from npm (usually `latest`, `beta` or `nightly`)
      release.npm_dist_tags = npmDistTaggedVersions[release.version] || []

      if (release.assets) {
        release.total_downloads = release.assets.reduce((acc, asset) => {
          const platform = getPlatformFromFilename(asset.name)
          if (platform) acc += asset.download_count
          return acc
        }, 0)
      }

      return release
    })

    // highest versions first
    .sort((a, b) => semver.compare(b.version, a.version))

  console.log('processing changelogs to HTML')
  releases = await Promise.all(releases.map(processRelease))

  // Compare the old data to the new data
  // and abort the build early if key data hasn't changed.
  const old = require('..')
  // Convert the 2.x npm_dist_tag (string) format to the
  // 3.x npm_dist_tags (array) format.
  // This can be removed once a 3.x release is published.
  old.forEach((release) => {
    if (release.npm_dist_tag) {
      release.npm_dist_tags = [release.npm_dist_tag]
      delete release.npm_dist_tag
    }
  })

  let tagsChanged
  for (const tag of ['latest', 'beta', 'nightly']) {
    const oldVersion = findVersionForTag(old, tag, 'index.json')
    const newVersion = findVersionForTag(
      releases,
      tag,
      'electron/electron and electron/nightlies repos'
    )
    if (oldVersion !== newVersion) tagsChanged = true
  }

  const oldNpmCount = old.filter(
    (release) => release.npm_package_name === 'electron'
  ).length
  const newNpmCount = releases.filter(
    (release) => release.npm_package_name === 'electron'
  ).length
  const releaseBodyChanged = old.some((oldRelease) => {
    const newRelease = releases.find(
      (release) => release.version === oldRelease.version
    )
    return !newRelease || newRelease.body !== oldRelease.body
  })

  if (
    old.length === releases.length &&
    oldNpmCount === newNpmCount &&
    !tagsChanged &&
    !releaseBodyChanged
  ) {
    console.log('module content is already up to date. exiting.')
    process.exit()
  }

  const fullFile = path.join(__dirname, '../index.json')
  fs.writeFileSync(fullFile, JSON.stringify(releases, null, 2))
  console.log(`wrote ${path.relative(process.cwd(), fullFile)}`)
}

// helpers

const findVersionForTag = (releases, tag, source) => {
  for (const release of releases) {
    const tags = release.npm_dist_tags
    if (tags && tags.includes(tag)) return release.version
  }
  throw new Error(`No release with tag '${tag}' found in ${source}!`)
}

async function processRelease(release) {
  release.version = release.tag_name.substring(1)
  release.body = release.body

    // turn PR references like #123 into hyperlinks
    .replace(
      / #(\d+)/gm,
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

class Options {
  constructor(opts) {
    const defaults = {
      owner: 'electron',
      repo: 'electron',
      per_page: 100,
    }
    this._opts = Object.assign({}, defaults, opts)
  }

  withRepo(repo) {
    this._opts.repo = repo
    return this
  }

  get() {
    console.log(this._opts)
    return this._opts
  }
}

function ghOpts(opts) {
  return new Options(opts)
}

async function fetchAllRepoReleases(repo) {
  const countRes = await github.repos.listReleases(
    ghOpts({ per_page: 1 }).withRepo(repo).get()
  )

  let pagesToFetch
  try {
    const count = Number(parseLinkHeader(countRes.headers.link).last.page)
    console.log(`found ${count} releases on GitHub for repo:`, repo)
    pagesToFetch = Math.ceil(count / 100)
  } catch (err) {
    console.error('problem fetching number of releases for repo', repo)
    console.error(err)
    process.exit(1)
  }

  console.log('fetching release data from GitHub for repo', repo)
  let releases = []
  for (let i = 1; i <= pagesToFetch; i++) {
    const batch = await github.repos.listReleases(
      ghOpts({ page: i }).withRepo(repo).get()
    )
    releases = releases.concat(batch.data)
  }

  return releases
}
