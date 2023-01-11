#!/usr/bin/env bash

set -v            # print commands before execution, but don't expand env vars in output
set -o errexit    # always exit on error
set -o pipefail   # honor exit codes when piping
set -o nounset    # fail on unset variables

git clone "https://electron-bot:$ELECTRON_BOT_TOKEN@github.com/electron/releases" module
cd module
npm ci

npm run build
npm test

# bail if nothing changed
if [ "$(git status --porcelain)" = "" ]; then
  echo "no new content found; goodbye!"
  exit
fi

git config user.email electron@github.com
git config user.name electron-bot
git add .
git commit -am "update electron-releases"
npm version minor -m "bump minor to %s"
git push origin master --follow-tags
echo //registry.npmjs.org/:_authToken=${NPM_AUTH_TOKEN} > .npmrc
npm publish
