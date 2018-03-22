#!/usr/bin/env node

const tableify = require('tableify')
const versions = require('..')
const fs = require('fs')
const path = require('path')
const readmePath = path.join(__dirname, '../readme.md')
const readmeContent = fs.readFileSync(readmePath, 'utf8')
const startComment = '<!-- START RELEASES TABLE -->'
const endComment = '<!-- END RELEASES TABLE -->'
const pattern = new RegExp(`${startComment}[\\s\\S]*${endComment}`, 'gm')
const data = versions.map(version => {
  return {
    Tag: `<a href="https://github.com/electron/electron/releases/tag/${version.tag_name}">${version.tag_name}</a>`,
    published: version.published_at.substring(0, 10),
    'npm dist tag': version.npm_dist_tag,
    Prerelease: version.prerelease,
    Node: version.deps ? version.deps.node : '',
    Chrome: version.deps ? version.deps.chrome.split('.')[0] : '',
    Downloads: version.total_downloads
  }
})
const html = tableify(data)
const replacement = [startComment, html, endComment].join('\n')
const newReadmeContent = readmeContent.replace(pattern, replacement)

fs.writeFileSync(readmePath, newReadmeContent)