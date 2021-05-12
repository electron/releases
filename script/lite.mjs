import releases from '../index.json'

const lite = releases.map((release) => {
  delete release.assets
  delete release.author
  delete release.body
  delete release.body_html
  delete release.url
  delete release.assets_url
  delete release.upload_url
  delete release.draft
  delete release.html_url
  delete release.created_at
  delete release.target_commitish
  delete release.id
  delete release.tarball_url
  delete release.zipball_url
  if (release.deps) {
    delete release.deps.version
    delete release.deps.date
    delete release.deps.files
  }
  return release
})

process.stdout.write(JSON.stringify(lite, null, 2))
