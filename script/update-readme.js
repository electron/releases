#!/usr/bin/env node

const tableify = require('json-to-markdown-table')
const versions = require('..')
const fs = require('fs')
const path = require('path')
const readmePath = path.join(__dirname, '../readme.md')
const readmeContent = fs.readFileSync(readmePath, 'utf8')
const startComment = '<!-- START RELEASES TABLE -->'
const endComment = '<!-- END RELEASES TABLE -->'
const pattern = new RegExp(`${startComment}[\\s\\S]*${endComment}`, 'gm')
const data = versions.map((version) => {
  return {
    Tag: `[${version.tag_name}](https://github.com/electron/electron/releases/tag/${version.tag_name})`,
    Published: version.published_at.substring(0, 10),
    npm: version.npm_dist_tags ? version.npm_dist_tags.join(', ') : '',
    Prerelease: version.prerelease ? 'yes' : 'no',
    Node: version.deps ? version.deps.node : '',
    Chrome: version.deps ? version.deps.chrome : '',
    Downloads: version.total_downloads,
  }
})
const html = tableify(data, Object.keys(data[0]))
const replacement = [startComment, html, endComment].join('\n')
const newReadmeContent = readmeContent.replace(pattern, replacement)

fs.writeFileSync(readmePath, newReadmeContent)
