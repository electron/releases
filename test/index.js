require('chai').should()
const {describe, it} = require('mocha')
const releases = require('..')
const lite = require('../lite')
const semver = require('semver')

describe('electron-releases', () => {
  it('is an array', () => {
    releases.should.be.an('array')
  })

  it('contains over 270 releases', () => {
    releases.length.should.be.above(270)
  })

  it('sets `tag_name` on every release', () => {
    releases.every(release => {
      return release.tag_name &&
        release.tag_name.length &&
        release.tag_name.startsWith('v') &&
        semver.valid(release.tag_name.replace('v', ''))
    }).should.eq(true)
  })

  it('sets `version` on every release', () => {
    releases.every(release => semver.valid(release.version)).should.eq(true)
  })

  it('does NOT include drafts', () => {
    const prereleases = releases.filter(release => release.prerelease)
    prereleases.length.should.be.above(0)
  })

  it('includes prereleases', () => {
    const prereleases = releases.filter(release => release.prerelease)
    prereleases.length.should.be.above(0)
  })

  it('includes version data for V8, Chromium, Node.js, etc', () => {
    const releasesWithVersionData = releases.filter(release => release.dependencyVersions)
    releasesWithVersionData.length.should.be.above(154)
  })

  it('includes one release with the `beta` npm dist tag', () => {
    const betas = releases.filter(release => release.npmDistTag === 'beta')
    betas.length.should.eq(1)
  })

  it('includes one release with the `latest` npm dist tag', () => {
    const latests = releases.filter(release => release.npmDistTag === 'latest')
    latests.length.should.eq(1)
  })

  it('include booleans indicating npm published status', () => {
    releases.find(release => release.version === '1.4.7').onNPM.should.eq(true)
    releases.filter(release => release.onNPM).length.should.be.above(64)
  })

  it('includes processed changelogs in HTML format')//, () => {
  // })
})

describe('electron-releases/lite', () => {
  it('contains the same number of releases as the regular module', () => {
    lite.length.should.eq(releases.length)
  })

  it('exports a minimal subset of props', () => {
    const expectedProps = [
      'tag_name',
      'version',
      'published_at',
      'prerelease'
    ]
    const props = Object.keys(lite[0])

    props.should.deep.equal(expectedProps)
  })
})
