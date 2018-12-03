# electron-releases

[![Greenkeeper badge](https://badges.greenkeeper.io/electron/releases.svg)](https://greenkeeper.io/)

> Complete and up-to-date info about every release of Electron.

This package:

- includes all [GitHub Releases](https://developer.github.com/v3/repos/releases/#get-a-single-release) data about Electron.
- does not include draft releases.
- includes prereleases which are not published to npm.
- tracks which versions are published to npm.
- tracks [npm dist-tags](https://docs.npmjs.com/cli/dist-tag) like `latest` and `beta`.
- includes V8, Chromium, and Node.js version data.
- includes [GitHub-flavored HTML](https://ghub.io/hubdown) for each release's changelog.
- ignores npm versions from the days before [Electron was `electron`](https://electronjs.org/blog/npm-install-electron).
- is [updated regularly](#updates).

## Sources

This module collects metadata from various sources:

- [GitHub Releases of `electron/electron`](https://github.com/electron/electron)
- [dist-tags from npm registry for `electron`](https://registry.npmjs.com/electron)
- [dist-tags from npm registry `electron-prebuilt`](https://registry.npmjs.com/electron-prebuilt)
- [Dependency data for Chromium, Node.js, V8, etc](https://atom.io/download/electron/index.json)

## Releases

<!-- START RELEASES TABLE -->
|Tag|Published|npm|Prerelease|Node|Chrome|Downloads|
|----|----|----|----|----|----|----|
|[v4.0.0-nightly.20181010](https://github.com/electron/electron/releases/tag/v4.0.0-nightly.20181010)|2018-10-10||yes|10.11.0|69|829|
|[v4.0.0-nightly.20181006](https://github.com/electron/electron/releases/tag/v4.0.0-nightly.20181006)|2018-10-06||yes|10.11.0|68|97|
|[v4.0.0-nightly.20180929](https://github.com/electron/electron/releases/tag/v4.0.0-nightly.20180929)|2018-09-29||yes|10.6.0|67|68|
|[v4.0.0-nightly.20180821](https://github.com/electron/electron/releases/tag/v4.0.0-nightly.20180821)|2018-08-21||yes|10.2.0|66|67|
|[v4.0.0-nightly.20180819](https://github.com/electron/electron/releases/tag/v4.0.0-nightly.20180819)|2018-08-19||yes|10.2.0|66|13|
|[v4.0.0-nightly.20180817](https://github.com/electron/electron/releases/tag/v4.0.0-nightly.20180817)|2018-08-18||yes|10.2.0|66|10|
|[v4.0.0-beta.8](https://github.com/electron/electron/releases/tag/v4.0.0-beta.8)|2018-11-30||yes|10.11.0|69|243|
|[v4.0.0-beta.7](https://github.com/electron/electron/releases/tag/v4.0.0-beta.7)|2018-11-06||yes|10.11.0|69|1328|
|[v4.0.0-beta.6](https://github.com/electron/electron/releases/tag/v4.0.0-beta.6)|2018-11-01||yes|10.11.0|69|599|
|[v4.0.0-beta.5](https://github.com/electron/electron/releases/tag/v4.0.0-beta.5)|2018-10-23||yes|10.11.0|69|1084|
|[v4.0.0-beta.4](https://github.com/electron/electron/releases/tag/v4.0.0-beta.4)|2018-10-19||yes|10.11.0|69|759|
|[v4.0.0-beta.3](https://github.com/electron/electron/releases/tag/v4.0.0-beta.3)|2018-10-12||yes|10.11.0|69|653|
|[v4.0.0-beta.2](https://github.com/electron/electron/releases/tag/v4.0.0-beta.2)|2018-10-12||yes|10.11.0|69|465|
|[v4.0.0-beta.1](https://github.com/electron/electron/releases/tag/v4.0.0-beta.1)|2018-10-11||yes|10.11.0|69|492|
|[v3.1.0-beta.1](https://github.com/electron/electron/releases/tag/v3.1.0-beta.1)|2018-12-02||yes|10.2.0|66|75|
|[v3.0.10](https://github.com/electron/electron/releases/tag/v3.0.10)|2018-11-19||no|10.2.0|66|15117|
|[v3.0.9](https://github.com/electron/electron/releases/tag/v3.0.9)|2018-11-13||no|10.2.0|66|8892|
|[v3.0.8](https://github.com/electron/electron/releases/tag/v3.0.8)|2018-11-05||no|10.2.0|66|10139|
|[v3.0.7](https://github.com/electron/electron/releases/tag/v3.0.7)|2018-11-01||no|10.2.0|66|8800|
|[v3.0.6](https://github.com/electron/electron/releases/tag/v3.0.6)|2018-10-24||no|10.2.0|66|11603|
|[v3.0.5](https://github.com/electron/electron/releases/tag/v3.0.5)|2018-10-19||no|10.2.0|66|8757|
|[v3.0.4](https://github.com/electron/electron/releases/tag/v3.0.4)|2018-10-11||no|10.2.0|66|16834|
|[v3.0.3](https://github.com/electron/electron/releases/tag/v3.0.3)|2018-10-07||no|10.2.0|66|11267|
|[v3.0.2](https://github.com/electron/electron/releases/tag/v3.0.2)|2018-09-27||no|10.2.0|66|12331|
|[v3.0.1](https://github.com/electron/electron/releases/tag/v3.0.1)|2018-09-27||no|10.2.0|66|1987|
|[v3.0.0](https://github.com/electron/electron/releases/tag/v3.0.0)|2018-09-18||no|10.2.0|66|21576|
|[v3.0.0-nightly.20180904](https://github.com/electron/electron/releases/tag/v3.0.0-nightly.20180904)|2018-09-05||yes|10.2.0|66|190|
|[v3.0.0-nightly.20180823](https://github.com/electron/electron/releases/tag/v3.0.0-nightly.20180823)|2018-08-24||yes|10.2.0|66|7|
|[v3.0.0-nightly.20180821](https://github.com/electron/electron/releases/tag/v3.0.0-nightly.20180821)|2018-08-21||yes|10.2.0|66|233|
|[v3.0.0-nightly.20180818](https://github.com/electron/electron/releases/tag/v3.0.0-nightly.20180818)|2018-08-18||yes|10.2.0|66|68|
|[v3.0.0-beta.13](https://github.com/electron/electron/releases/tag/v3.0.0-beta.13)|2018-09-17||yes|10.2.0|66|486|
|[v3.0.0-beta.12](https://github.com/electron/electron/releases/tag/v3.0.0-beta.12)|2018-09-12||yes|10.2.0|66|1019|
|[v3.0.0-beta.11](https://github.com/electron/electron/releases/tag/v3.0.0-beta.11)|2018-09-12||yes|10.2.0|66|399|
|[v3.0.0-beta.10](https://github.com/electron/electron/releases/tag/v3.0.0-beta.10)|2018-09-08||yes|10.2.0|66|623|
|[v3.0.0-beta.9](https://github.com/electron/electron/releases/tag/v3.0.0-beta.9)|2018-09-06||yes|10.2.0|66|522|
|[v3.0.0-beta.8](https://github.com/electron/electron/releases/tag/v3.0.0-beta.8)|2018-08-29||yes|10.2.0|66|1351|
|[v3.0.0-beta.7](https://github.com/electron/electron/releases/tag/v3.0.0-beta.7)|2018-08-22||yes|10.2.0|66|738|
|[v3.0.0-beta.6](https://github.com/electron/electron/releases/tag/v3.0.0-beta.6)|2018-08-20||yes|10.2.0|66|983|
|[v3.0.0-beta.5](https://github.com/electron/electron/releases/tag/v3.0.0-beta.5)|2018-08-13||yes|10.2.0|66|1255|
|[v3.0.0-beta.4](https://github.com/electron/electron/releases/tag/v3.0.0-beta.4)|2018-08-01||yes|10.2.0|66|5072|
|[v3.0.0-beta.3](https://github.com/electron/electron/releases/tag/v3.0.0-beta.3)|2018-07-17||yes|10.2.0|66|1461|
|[v3.0.0-beta.2](https://github.com/electron/electron/releases/tag/v3.0.0-beta.2)|2018-07-10||yes|10.2.0|66|965|
|[v3.0.0-beta.1](https://github.com/electron/electron/releases/tag/v3.0.0-beta.1)|2018-06-21||yes|10.2.0|66|6512|
|[v2.1.0-unsupported.20180809](https://github.com/electron/electron/releases/tag/v2.1.0-unsupported.20180809)|2018-08-09||no|8.9.3|61|934|
|[v2.0.14](https://github.com/electron/electron/releases/tag/v2.0.14)|2018-11-19||no|8.9.3|61|5031|
|[v2.0.13](https://github.com/electron/electron/releases/tag/v2.0.13)|2018-11-01||no|8.9.3|61|10200|
|[v2.0.12](https://github.com/electron/electron/releases/tag/v2.0.12)|2018-10-19||no|8.9.3|61|22397|
|[v2.0.11](https://github.com/electron/electron/releases/tag/v2.0.11)|2018-10-01||no|8.9.3|61|15345|
|[v2.0.10](https://github.com/electron/electron/releases/tag/v2.0.10)|2018-09-19||no|8.9.3|61|11625|
|[v2.0.9](https://github.com/electron/electron/releases/tag/v2.0.9)|2018-09-10||no|8.9.3|61|28390|
|[v2.0.8](https://github.com/electron/electron/releases/tag/v2.0.8)|2018-08-22||no|8.9.3|61|41141|
|[v2.0.8-nightly.20180820](https://github.com/electron/electron/releases/tag/v2.0.8-nightly.20180820)|2018-08-21||yes|8.9.3|61|13|
|[v2.0.8-nightly.20180819](https://github.com/electron/electron/releases/tag/v2.0.8-nightly.20180819)|2018-08-20||yes|8.9.3|61|7|
|[v2.0.7](https://github.com/electron/electron/releases/tag/v2.0.7)|2018-08-08||no|8.9.3|61|33063|
|[v2.0.6](https://github.com/electron/electron/releases/tag/v2.0.6)|2018-08-01||no|8.9.3|61|32177|
|[v2.0.5](https://github.com/electron/electron/releases/tag/v2.0.5)|2018-07-13||no|8.9.3|61|36063|
|[v2.0.4](https://github.com/electron/electron/releases/tag/v2.0.4)|2018-07-03||no|8.9.3|61|25468|
|[v2.0.3](https://github.com/electron/electron/releases/tag/v2.0.3)|2018-06-21||no|8.9.3|61|21247|
|[v2.0.2](https://github.com/electron/electron/releases/tag/v2.0.2)|2018-05-22||no|8.9.3|61|76512|
|[v2.0.1](https://github.com/electron/electron/releases/tag/v2.0.1)|2018-05-16||no|8.9.3|61|20651|
|[v2.0.0](https://github.com/electron/electron/releases/tag/v2.0.0)|2018-05-01||no|8.9.3|61|73201|
|[v2.0.0-beta.8](https://github.com/electron/electron/releases/tag/v2.0.0-beta.8)|2018-04-26||yes|8.9.3|61|2666|
|[v2.0.0-beta.7](https://github.com/electron/electron/releases/tag/v2.0.0-beta.7)|2018-04-03||yes|8.9.3|61|7667|
|[v2.0.0-beta.6](https://github.com/electron/electron/releases/tag/v2.0.0-beta.6)|2018-03-27||yes|8.9.3|61|2466|
|[v2.0.0-beta.5](https://github.com/electron/electron/releases/tag/v2.0.0-beta.5)|2018-03-20||yes|8.9.3|61|2292|
|[v2.0.0-beta.4](https://github.com/electron/electron/releases/tag/v2.0.0-beta.4)|2018-03-15||yes|8.9.3|61|2066|
|[v2.0.0-beta.3](https://github.com/electron/electron/releases/tag/v2.0.0-beta.3)|2018-03-09||yes|8.9.3|61|1903|
|[v2.0.0-beta.2](https://github.com/electron/electron/releases/tag/v2.0.0-beta.2)|2018-03-05||yes|8.9.3|61|5361|
|[v2.0.0-beta.1](https://github.com/electron/electron/releases/tag/v2.0.0-beta.1)|2018-02-21||yes|8.9.3|61|1375|
|[v1.8.8](https://github.com/electron/electron/releases/tag/v1.8.8)|2018-08-22||no|8.2.1|59|81118|
|[v1.8.7](https://github.com/electron/electron/releases/tag/v1.8.7)|2018-05-16||no|8.2.1|59|112891|
|[v1.8.6](https://github.com/electron/electron/releases/tag/v1.8.6)|2018-04-27||no|8.2.1|59|36382|
|[v1.8.5](https://github.com/electron/electron/releases/tag/v1.8.5)|2018-04-26||no|8.2.1|59|2594|
|[v1.8.4](https://github.com/electron/electron/releases/tag/v1.8.4)|2018-03-16||no|8.2.1|59|119683|
|[v1.8.3](https://github.com/electron/electron/releases/tag/v1.8.3)|2018-03-06||no|8.2.1|59|57380|
|[v1.8.2](https://github.com/electron/electron/releases/tag/v1.8.2)|2018-02-07||no|8.2.1|59|76962|
|[v1.8.2-beta.5](https://github.com/electron/electron/releases/tag/v1.8.2-beta.5)|2018-01-31||yes|8.2.1|59|6651|
|[v1.8.2-beta.4](https://github.com/electron/electron/releases/tag/v1.8.2-beta.4)|2018-01-23||yes|8.2.1|59|3692|
|[v1.8.2-beta.3](https://github.com/electron/electron/releases/tag/v1.8.2-beta.3)|2017-12-04||yes|8.2.1|59|6513|
|[v1.8.2-beta.2](https://github.com/electron/electron/releases/tag/v1.8.2-beta.2)|2017-11-06||yes|8.2.1|59|6555|
|[v1.8.2-beta.1](https://github.com/electron/electron/releases/tag/v1.8.2-beta.1)|2017-10-19||yes|8.2.1|59|3179|
|[v1.8.1](https://github.com/electron/electron/releases/tag/v1.8.1)|2017-09-29||yes|8.2.1|59|64703|
|[v1.8.0](https://github.com/electron/electron/releases/tag/v1.8.0)|2017-12-12||yes|8.2.1|59|104856|
|[v1.7.16](https://github.com/electron/electron/releases/tag/v1.7.16)|2018-08-22||no|7.9.0|58|6329|
|[v1.7.15](https://github.com/electron/electron/releases/tag/v1.7.15)|2018-05-16||no|7.9.0|58|7099|
|[v1.7.14](https://github.com/electron/electron/releases/tag/v1.7.14)|2018-04-27||no|7.9.0|58|2279|
|[v1.7.13](https://github.com/electron/electron/releases/tag/v1.7.13)|2018-03-15||no|7.9.0|58|5422|
|[v1.7.12](https://github.com/electron/electron/releases/tag/v1.7.12)|2018-01-31||no|7.9.0|58|44103|
|[v1.7.11](https://github.com/electron/electron/releases/tag/v1.7.11)|2018-01-23||no|7.9.0|58|45350|
|[v1.7.10](https://github.com/electron/electron/releases/tag/v1.7.10)|2017-12-18||no|7.9.0|58|240715|
|[v1.7.9](https://github.com/electron/electron/releases/tag/v1.7.9)|2017-10-11||no|7.9.0|58|199395|
|[v1.7.8](https://github.com/electron/electron/releases/tag/v1.7.8)|2017-09-24||no|7.9.0|58|54558|
|[v1.7.7](https://github.com/electron/electron/releases/tag/v1.7.7)|2017-09-05||yes|7.9.0|58|35329|
|[v1.7.6](https://github.com/electron/electron/releases/tag/v1.7.6)|2017-08-09||no|7.9.0|58|49610|
|[v1.7.5](https://github.com/electron/electron/releases/tag/v1.7.5)|2017-07-17||no|7.9.0|58|67017|
|[v1.7.4](https://github.com/electron/electron/releases/tag/v1.7.4)|2017-06-28||yes|7.9.0|58|15247|
|[v1.7.3](https://github.com/electron/electron/releases/tag/v1.7.3)|2017-06-08||yes|7.9.0|58|21714|
|[v1.7.2](https://github.com/electron/electron/releases/tag/v1.7.2)|2017-05-26||yes|7.9.0|58|11928|
|[v1.7.1](https://github.com/electron/electron/releases/tag/v1.7.1)|2017-05-16||yes|7.9.0|58|13586|
|[v1.7.0](https://github.com/electron/electron/releases/tag/v1.7.0)|2017-05-10||yes|7.9.0|58|111612|
|[v1.6.18](https://github.com/electron/electron/releases/tag/v1.6.18)|2018-05-15||no|7.4.0|56|3731|
|[v1.6.17](https://github.com/electron/electron/releases/tag/v1.6.17)|2018-01-31||no|7.4.0|56|5393|
|[v1.6.16](https://github.com/electron/electron/releases/tag/v1.6.16)|2018-01-23||no|7.4.0|56|5871|
|[v1.6.15](https://github.com/electron/electron/releases/tag/v1.6.15)|2017-10-11||no|7.4.0|56|12174|
|[v1.6.14](https://github.com/electron/electron/releases/tag/v1.6.14)|2017-09-28||no|7.4.0|56|5232|
|[v1.6.13](https://github.com/electron/electron/releases/tag/v1.6.13)|2017-09-06||yes|7.4.0|56|9617|
|[v1.6.12](https://github.com/electron/electron/releases/tag/v1.6.12)|2017-09-06||yes|7.4.0|56|9995|
|[v1.6.11](https://github.com/electron/electron/releases/tag/v1.6.11)|2017-05-25||no|7.4.0|56|114457|
|[v1.6.10](https://github.com/electron/electron/releases/tag/v1.6.10)|2017-05-16||no|7.4.0|56|35471|
|[v1.6.9](https://github.com/electron/electron/releases/tag/v1.6.9)|2017-05-10||no|7.4.0|56|3218|
|[v1.6.8](https://github.com/electron/electron/releases/tag/v1.6.8)|2017-05-01||no|7.4.0|56|27002|
|[v1.6.7](https://github.com/electron/electron/releases/tag/v1.6.7)|2017-04-18||no|7.4.0|56|20352|
|[v1.6.6](https://github.com/electron/electron/releases/tag/v1.6.6)|2017-04-07||no|7.4.0|56|68658|
|[v1.6.5](https://github.com/electron/electron/releases/tag/v1.6.5)|2017-03-31||no|7.4.0|56|18233|
|[v1.6.4](https://github.com/electron/electron/releases/tag/v1.6.4)|2017-03-22||yes|7.4.0|56|8330|
|[v1.6.3](https://github.com/electron/electron/releases/tag/v1.6.3)|2017-03-07||yes|7.4.0|56|6167|
|[v1.6.2](https://github.com/electron/electron/releases/tag/v1.6.2)|2017-03-01||no|7.4.0|56|72438|
|[v1.6.1](https://github.com/electron/electron/releases/tag/v1.6.1)|2017-02-21||no|7.4.0|56|22647|
|[v1.6.0](https://github.com/electron/electron/releases/tag/v1.6.0)|2017-02-07||yes|7.4.0|56|65606|
|[v1.5.1](https://github.com/electron/electron/releases/tag/v1.5.1)|2017-02-06||yes|7.4.0|54|3734|
|[v1.5.0](https://github.com/electron/electron/releases/tag/v1.5.0)|2017-01-24||yes|7.4.0|54|11012|
|[v1.4.16](https://github.com/electron/electron/releases/tag/v1.4.16)|2017-04-05||no|6.5.0|53|39870|
|[v1.4.15](https://github.com/electron/electron/releases/tag/v1.4.15)|2017-01-19||no|6.5.0|53|80884|
|[v1.4.14](https://github.com/electron/electron/releases/tag/v1.4.14)|2017-01-10||no|6.5.0|53|76417|
|[v1.4.13](https://github.com/electron/electron/releases/tag/v1.4.13)|2016-12-20||no|6.5.0|53|108085|
|[v1.4.12](https://github.com/electron/electron/releases/tag/v1.4.12)|2016-12-10||no|6.5.0|54|22273|
|[v1.4.11](https://github.com/electron/electron/releases/tag/v1.4.11)|2016-12-07||no|6.5.0|53|7348|
|[v1.4.10](https://github.com/electron/electron/releases/tag/v1.4.10)|2016-11-28||no|6.5.0|53|17417|
|[v1.4.8](https://github.com/electron/electron/releases/tag/v1.4.8)|2016-11-22||no|6.5.0|53|9540|
|[v1.4.7](https://github.com/electron/electron/releases/tag/v1.4.7)|2016-11-16||no|6.5.0|53|10215|
|[v1.4.6](https://github.com/electron/electron/releases/tag/v1.4.6)|2016-11-09||no|6.5.0|53|31031|
|[v1.4.5](https://github.com/electron/electron/releases/tag/v1.4.5)|2016-11-01||no|6.5.0|53|13317|
|[v1.4.4](https://github.com/electron/electron/releases/tag/v1.4.4)|2016-10-20||no|6.5.0|53|19093|
|[v1.4.3](https://github.com/electron/electron/releases/tag/v1.4.3)|2016-10-06||no|6.5.0|53|38163|
|[v1.4.2](https://github.com/electron/electron/releases/tag/v1.4.2)|2016-09-30||no|6.5.0|53|9517|
|[v1.4.1](https://github.com/electron/electron/releases/tag/v1.4.1)|2016-09-22||no|6.5.0|53|13982|
|[v1.4.0](https://github.com/electron/electron/releases/tag/v1.4.0)|2016-09-15||no|6.5.0|53|67691|
|[v1.3.15](https://github.com/electron/electron/releases/tag/v1.3.15)|2017-04-21||no|6.5.0|52|2887|
|[v1.3.14](https://github.com/electron/electron/releases/tag/v1.3.14)|2017-03-14||no|6.5.0|52|3249|
|[v1.3.13](https://github.com/electron/electron/releases/tag/v1.3.13)|2016-12-06||no|6.5.0|52|4327|
|[v1.3.12](https://github.com/electron/electron/releases/tag/v1.3.12)|2016-11-28||no|||383|
|[v1.3.10](https://github.com/electron/electron/releases/tag/v1.3.10)|2016-11-22||no|6.5.0|52|368|
|[v1.3.9](https://github.com/electron/electron/releases/tag/v1.3.9)|2016-11-16||no|6.5.0|52|5652|
|[v1.3.8](https://github.com/electron/electron/releases/tag/v1.3.8)|2016-10-20||no|||7151|
|[v1.3.7](https://github.com/electron/electron/releases/tag/v1.3.7)|2016-09-27||no|6.5.0|52|2839|
|[v1.3.6](https://github.com/electron/electron/releases/tag/v1.3.6)|2016-09-15||no|6.3.0|52|3058|
|[v1.3.5](https://github.com/electron/electron/releases/tag/v1.3.5)|2016-09-02||no|6.3.0|52|18744|
|[v1.3.4](https://github.com/electron/electron/releases/tag/v1.3.4)|2016-08-23||no|6.3.0|52|19365|
|[v1.3.3](https://github.com/electron/electron/releases/tag/v1.3.3)|2016-08-10||no|6.3.0|52|25048|
|[v1.3.2](https://github.com/electron/electron/releases/tag/v1.3.2)|2016-08-02||no|6.3.0|52|16618|
|[v1.3.1](https://github.com/electron/electron/releases/tag/v1.3.1)|2016-07-27||no|6.3.0|52|22498|
|[v1.3.0](https://github.com/electron/electron/releases/tag/v1.3.0)|2016-07-25||no|6.3.0|52|32299|
|[v1.2.8](https://github.com/electron/electron/releases/tag/v1.2.8)|2016-07-21||no|6.1.0|51|15208|
|[v1.2.7](https://github.com/electron/electron/releases/tag/v1.2.7)|2016-07-13||no|6.1.0|51|15011|
|[v1.2.6](https://github.com/electron/electron/releases/tag/v1.2.6)|2016-07-06||no|6.1.0|51|13987|
|[v1.2.5](https://github.com/electron/electron/releases/tag/v1.2.5)|2016-06-23||no|6.1.0|51|17824|
|[v1.2.4](https://github.com/electron/electron/releases/tag/v1.2.4)|2016-06-22||no|6.1.0|51|5606|
|[v1.2.3](https://github.com/electron/electron/releases/tag/v1.2.3)|2016-06-16||no|6.1.0|51|10760|
|[v1.2.2](https://github.com/electron/electron/releases/tag/v1.2.2)|2016-06-08||no|6.1.0|51|14323|
|[v1.2.1](https://github.com/electron/electron/releases/tag/v1.2.1)|2016-06-01||no|6.1.0|51|12370|
|[v1.2.0](https://github.com/electron/electron/releases/tag/v1.2.0)|2016-05-26||no|6.1.0|51|24101|
|[v1.1.3](https://github.com/electron/electron/releases/tag/v1.1.3)|2016-05-25||no|6.1.0|50|20335|
|[v1.1.2](https://github.com/electron/electron/releases/tag/v1.1.2)|2016-05-24||no|6.1.0|50|6192|
|[v1.1.1](https://github.com/electron/electron/releases/tag/v1.1.1)|2016-05-20||no|6.1.0|50|19503|
|[v1.1.0](https://github.com/electron/electron/releases/tag/v1.1.0)|2016-05-14||no|6.1.0|50|19408|
|[v1.0.2](https://github.com/electron/electron/releases/tag/v1.0.2)|2016-05-13||no|5.10.0|49|9741|
|[v1.0.1](https://github.com/electron/electron/releases/tag/v1.0.1)|2016-05-11||no|5.10.0|49|8918|
|[v1.0.0](https://github.com/electron/electron/releases/tag/v1.0.0)|2016-05-11||no|5.10.0|49|49288|
|[v0.37.8](https://github.com/electron/electron/releases/tag/v0.37.8)|2016-04-29||no|5.10.0|49|42915|
|[v0.37.7](https://github.com/electron/electron/releases/tag/v0.37.7)|2016-04-22||no|5.10.0|49|10841|
|[v0.37.6](https://github.com/electron/electron/releases/tag/v0.37.6)|2016-04-15||no|5.10.0|49|23682|
|[v0.37.5](https://github.com/electron/electron/releases/tag/v0.37.5)|2016-04-07||no|5.10.0|49|13264|
|[v0.37.4](https://github.com/electron/electron/releases/tag/v0.37.4)|2016-04-03||no|6.0.0-pre|49|8303|
|[v0.37.3](https://github.com/electron/electron/releases/tag/v0.37.3)|2016-03-27||no|5.1.1|49|32722|
|[v0.37.2](https://github.com/electron/electron/releases/tag/v0.37.2)|2016-03-14||no|||15965|
|[v0.37.1](https://github.com/electron/electron/releases/tag/v0.37.1)|2016-03-13||no|5.1.1|49|4478|
|[v0.37.0](https://github.com/electron/electron/releases/tag/v0.37.0)|2016-03-12||no|5.1.1|49|23152|
|[v0.36.12](https://github.com/electron/electron/releases/tag/v0.36.12)|2016-03-27||no|5.1.1|47|38400|
|[v0.36.11](https://github.com/electron/electron/releases/tag/v0.36.11)|2016-03-11||no|5.1.1|47|11832|
|[v0.36.10](https://github.com/electron/electron/releases/tag/v0.36.10)|2016-03-05||no|5.1.1|47|10939|
|[v0.36.9](https://github.com/electron/electron/releases/tag/v0.36.9)|2016-02-26||no|5.1.1|47|13677|
|[v0.36.8](https://github.com/electron/electron/releases/tag/v0.36.8)|2016-02-19||no|5.1.1|47|12280|
|[v0.36.7](https://github.com/electron/electron/releases/tag/v0.36.7)|2016-01-30||no|5.1.1|47|24155|
|[v0.36.6](https://github.com/electron/electron/releases/tag/v0.36.6)|2016-01-29||no|5.1.1|47|3883|
|[v0.36.5](https://github.com/electron/electron/releases/tag/v0.36.5)|2016-01-22||no|5.1.1|47|10968|
|[v0.36.4](https://github.com/electron/electron/releases/tag/v0.36.4)|2016-01-15||no|5.1.1|47|26745|
|[v0.36.3](https://github.com/electron/electron/releases/tag/v0.36.3)|2016-01-11||no|5.1.1|47|7228|
|[v0.36.2](https://github.com/electron/electron/releases/tag/v0.36.2)|2015-12-25||no|5.1.1|47|16251|
|[v0.36.1](https://github.com/electron/electron/releases/tag/v0.36.1)|2015-12-18||no|||8719|
|[v0.36.0](https://github.com/electron/electron/releases/tag/v0.36.0)|2015-12-11||no|5.1.1|47|19305|
|[v0.35.6](https://github.com/electron/electron/releases/tag/v0.35.6)|2016-01-11||no|||20450|
|[v0.35.5](https://github.com/electron/electron/releases/tag/v0.35.5)|2015-12-31||no|4.1.1|45|3622|
|[v0.35.4](https://github.com/electron/electron/releases/tag/v0.35.4)|2015-12-04||no|4.1.1|45|12730|
|[v0.35.3](https://github.com/electron/electron/releases/tag/v0.35.3)|2015-12-04||no|4.1.1|45|13609|
|[v0.35.2](https://github.com/electron/electron/releases/tag/v0.35.2)|2015-11-27||no|4.1.1|45|8330|
|[v0.35.1](https://github.com/electron/electron/releases/tag/v0.35.1)|2015-11-20||no|4.1.1|45|11195|
|[v0.35.0](https://github.com/electron/electron/releases/tag/v0.35.0)|2015-11-16||no|||8159|
|[v0.34.5](https://github.com/electron/electron/releases/tag/v0.34.5)|2015-11-26||no|||10219|
|[v0.34.4](https://github.com/electron/electron/releases/tag/v0.34.4)|2015-11-24||no|4.1.1|45|2698|
|[v0.34.3](https://github.com/electron/electron/releases/tag/v0.34.3)|2015-11-06||no|4.1.1|45|13330|
|[v0.34.2](https://github.com/electron/electron/releases/tag/v0.34.2)|2015-10-30||no|4.1.1|45|9659|
|[v0.34.1](https://github.com/electron/electron/releases/tag/v0.34.1)|2015-10-23||no|4.1.1|45|11381|
|[v0.34.0](https://github.com/electron/electron/releases/tag/v0.34.0)|2015-10-16||no|4.1.1|45|26586|
|[v0.33.9](https://github.com/electron/electron/releases/tag/v0.33.9)|2015-10-16||no|4.1.1|45|8899|
|[v0.33.8](https://github.com/electron/electron/releases/tag/v0.33.8)|2015-10-14||no|4.1.1|45|3771|
|[v0.33.7](https://github.com/electron/electron/releases/tag/v0.33.7)|2015-10-10||no|4.1.1|45|6359|
|[v0.33.6](https://github.com/electron/electron/releases/tag/v0.33.6)|2015-10-05||no|4.1.1|45|6064|
|[v0.33.5](https://github.com/electron/electron/releases/tag/v0.33.5)|2015-10-05||no|||2408|
|[v0.33.4](https://github.com/electron/electron/releases/tag/v0.33.4)|2015-10-02||no|4.1.1|45|3665|
|[v0.33.3](https://github.com/electron/electron/releases/tag/v0.33.3)|2015-09-26||no|4.1.1|45|6754|
|[v0.33.2](https://github.com/electron/electron/releases/tag/v0.33.2)|2015-09-25||no|4.1.1|45|2485|
|[v0.33.1](https://github.com/electron/electron/releases/tag/v0.33.1)|2015-09-22||no|4.1.1|45|3930|
|[v0.33.0](https://github.com/electron/electron/releases/tag/v0.33.0)|2015-09-17||no|5.0.0-pre|45|7180|
|[v0.32.3](https://github.com/electron/electron/releases/tag/v0.32.3)|2015-09-15||no|5.0.0-pre|45|4478|
|[v0.32.2](https://github.com/electron/electron/releases/tag/v0.32.2)|2015-09-10||no|3.3.0|45|3328|
|[v0.32.1](https://github.com/electron/electron/releases/tag/v0.32.1)|2015-09-09||no|||3908|
|[v0.32.0](https://github.com/electron/electron/releases/tag/v0.32.0)|2015-09-09||no|||420|
|[v0.31.2](https://github.com/electron/electron/releases/tag/v0.31.2)|2015-09-02||no|3.3.0|45|9458|
|[v0.31.1](https://github.com/electron/electron/releases/tag/v0.31.1)|2015-08-28||no|||2563|
|[v0.31.0](https://github.com/electron/electron/releases/tag/v0.31.0)|2015-08-26||no|3.1.0|44|2311|
|[v0.30.8](https://github.com/electron/electron/releases/tag/v0.30.8)|2015-09-26||no|||11178|
|[v0.30.7](https://github.com/electron/electron/releases/tag/v0.30.7)|2015-09-24||no|||3098|
|[v0.30.6](https://github.com/electron/electron/releases/tag/v0.30.6)|2015-08-26||no|||3298|
|[v0.30.5](https://github.com/electron/electron/releases/tag/v0.30.5)|2015-08-21||no|||1351|
|[v0.30.4](https://github.com/electron/electron/releases/tag/v0.30.4)|2015-08-10||no|3.1.0|44|5147|
|[v0.30.3](https://github.com/electron/electron/releases/tag/v0.30.3)|2015-08-07||no|||2358|
|[v0.30.2](https://github.com/electron/electron/releases/tag/v0.30.2)|2015-07-30||no|||6358|
|[v0.30.1](https://github.com/electron/electron/releases/tag/v0.30.1)|2015-07-24||no|||2869|
|[v0.30.0](https://github.com/electron/electron/releases/tag/v0.30.0)|2015-07-16||no|||8849|
|[v0.29.2](https://github.com/electron/electron/releases/tag/v0.29.2)|2015-07-07||no|2.3.1|43|12422|
|[v0.29.1](https://github.com/electron/electron/releases/tag/v0.29.1)|2015-07-03||no|2.3.1|43|1516|
|[v0.29.0](https://github.com/electron/electron/releases/tag/v0.29.0)|2015-07-03||no|||555|
|[v0.28.3](https://github.com/electron/electron/releases/tag/v0.28.3)|2015-06-23||no|2.2.1|43|7351|
|[v0.28.2](https://github.com/electron/electron/releases/tag/v0.28.2)|2015-06-18||no|2.2.1|43|2685|
|[v0.28.1](https://github.com/electron/electron/releases/tag/v0.28.1)|2015-06-12||no|2.2.1|43|2701|
|[v0.28.0](https://github.com/electron/electron/releases/tag/v0.28.0)|2015-06-11||no|2.2.1|43|343|
|[v0.27.3](https://github.com/electron/electron/releases/tag/v0.27.3)|2015-06-08||no|1.6.3|43|3162|
|[v0.27.2](https://github.com/electron/electron/releases/tag/v0.27.2)|2015-06-01||no|1.6.3|43|3149|
|[v0.27.1](https://github.com/electron/electron/releases/tag/v0.27.1)|2015-05-28||no|1.6.3|42|1163|
|[v0.27.0](https://github.com/electron/electron/releases/tag/v0.27.0)|2015-05-27||no|1.6.3|42|342|
|[v0.26.1](https://github.com/electron/electron/releases/tag/v0.26.1)|2015-05-21||no|1.6.3|42|5477|
|[v0.26.0](https://github.com/electron/electron/releases/tag/v0.26.0)|2015-05-12||no|1.6.3|42|3807|
|[v0.25.3](https://github.com/electron/electron/releases/tag/v0.25.3)|2015-05-08||no|1.6.3|42|4269|
|[v0.25.2](https://github.com/electron/electron/releases/tag/v0.25.2)|2015-05-01||no|1.6.3|42|3168|
|[v0.25.1](https://github.com/electron/electron/releases/tag/v0.25.1)|2015-04-23||no|1.6.3|42|5443|
|[v0.25.0](https://github.com/electron/electron/releases/tag/v0.25.0)|2015-04-22||no|1.6.3|42|399|
|[v0.24.0](https://github.com/electron/electron/releases/tag/v0.24.0)|2015-04-17||no|1.6.3|41|3826|
|[v0.23.0](https://github.com/electron/electron/releases/tag/v0.23.0)|2015-04-12||no|1.6.3|41|1097|
|[v0.22.3](https://github.com/electron/electron/releases/tag/v0.22.3)|2015-03-30||no|1.6.3|41|7420|
|[v0.22.2](https://github.com/electron/electron/releases/tag/v0.22.2)|2015-03-23||no|1.5.1|41|571|
|[v0.22.1](https://github.com/electron/electron/releases/tag/v0.22.1)|2015-03-18||no|1.5.1|41|1984|
|[v0.22.0](https://github.com/electron/electron/releases/tag/v0.22.0)|2015-03-18||no|||4944|
|[v0.21.3](https://github.com/electron/electron/releases/tag/v0.21.3)|2015-03-03||no|1.5.1|41|1790|
|[v0.21.2](https://github.com/electron/electron/releases/tag/v0.21.2)|2015-02-05||no|1.0.0-pre|40|2037|
|[v0.21.1](https://github.com/electron/electron/releases/tag/v0.21.1)|2015-02-03||no|1.0.0-pre|40|592|
|[v0.21.0](https://github.com/electron/electron/releases/tag/v0.21.0)|2015-01-28||no|1.0.0-pre|40|1196|
|[v0.20.8](https://github.com/electron/electron/releases/tag/v0.20.8)|2015-01-27||no|0.13.0-pre|39|64|
|[v0.20.7](https://github.com/electron/electron/releases/tag/v0.20.7)|2015-01-20||no|0.13.0-pre|39|393|
|[v0.20.6](https://github.com/electron/electron/releases/tag/v0.20.6)|2015-01-19||no|0.13.0-pre|39|549|
|[v0.20.5](https://github.com/electron/electron/releases/tag/v0.20.5)|2015-01-08||no|0.13.0-pre|39|582|
|[v0.20.4](https://github.com/electron/electron/releases/tag/v0.20.4)|2015-01-06||no|0.13.0-pre|39|367|
|[v0.20.3](https://github.com/electron/electron/releases/tag/v0.20.3)|2014-12-29||no|0.13.0-pre|39|549|
|[v0.20.2](https://github.com/electron/electron/releases/tag/v0.20.2)|2014-12-22||no|0.13.0-pre|39|842|
|[v0.20.1](https://github.com/electron/electron/releases/tag/v0.20.1)|2014-12-18||no|0.13.0-pre|39|364|
|[v0.20.0](https://github.com/electron/electron/releases/tag/v0.20.0)|2014-12-13||no|0.13.0-pre|39|275|
|[v0.19.5](https://github.com/electron/electron/releases/tag/v0.19.5)|2014-11-28||no|||3100|
|[v0.19.4](https://github.com/electron/electron/releases/tag/v0.19.4)|2014-11-21||no|||821|
|[v0.19.3](https://github.com/electron/electron/releases/tag/v0.19.3)|2014-11-20||no|||104|
|[v0.19.2](https://github.com/electron/electron/releases/tag/v0.19.2)|2014-11-15||no|||391|
|[v0.19.1](https://github.com/electron/electron/releases/tag/v0.19.1)|2014-11-04||no|||898|
|[v0.19.0](https://github.com/electron/electron/releases/tag/v0.19.0)|2014-10-30||no|||397|
|[v0.18.2](https://github.com/electron/electron/releases/tag/v0.18.2)|2014-10-21||no|||598|
|[v0.18.1](https://github.com/electron/electron/releases/tag/v0.18.1)|2014-10-17||no|||299|
|[v0.18.0](https://github.com/electron/electron/releases/tag/v0.18.0)|2014-10-14||no|||526|
|[v0.17.2](https://github.com/electron/electron/releases/tag/v0.17.2)|2014-10-06||no|||586|
|[v0.17.1](https://github.com/electron/electron/releases/tag/v0.17.1)|2014-10-01||no|||296|
|[v0.17.0](https://github.com/electron/electron/releases/tag/v0.17.0)|2014-10-01||no|||60|
|[v0.16.3](https://github.com/electron/electron/releases/tag/v0.16.3)|2014-09-20||no|||420|
|[v0.16.2](https://github.com/electron/electron/releases/tag/v0.16.2)|2014-09-09||no|||967|
|[v0.16.1](https://github.com/electron/electron/releases/tag/v0.16.1)|2014-09-08||no|||98|
|[v0.16.0](https://github.com/electron/electron/releases/tag/v0.16.0)|2014-09-06||no|||102|
|[v0.15.9](https://github.com/electron/electron/releases/tag/v0.15.9)|2014-08-20||no|||1534|
|[v0.15.8](https://github.com/electron/electron/releases/tag/v0.15.8)|2014-08-18||no|||1855|
|[v0.15.7](https://github.com/electron/electron/releases/tag/v0.15.7)|2014-08-15||no|||1856|
|[v0.15.6](https://github.com/electron/electron/releases/tag/v0.15.6)|2014-08-13||no|||1867|
|[v0.15.5](https://github.com/electron/electron/releases/tag/v0.15.5)|2014-08-11||no|||1884|
|[v0.15.4](https://github.com/electron/electron/releases/tag/v0.15.4)|2014-08-07||no|||2093|
|[v0.15.3](https://github.com/electron/electron/releases/tag/v0.15.3)|2014-08-06||no|||3780|
|[v0.15.2](https://github.com/electron/electron/releases/tag/v0.15.2)|2014-08-04||no|||1850|
|[v0.15.1](https://github.com/electron/electron/releases/tag/v0.15.1)|2014-07-31||no|||1957|
|[v0.15.0](https://github.com/electron/electron/releases/tag/v0.15.0)|2014-07-29||no|||1904|
|[v0.14.3](https://github.com/electron/electron/releases/tag/v0.14.3)|2014-07-27||no|||1808|
|[v0.14.2](https://github.com/electron/electron/releases/tag/v0.14.2)|2014-07-25||no|||1791|
|[v0.14.1](https://github.com/electron/electron/releases/tag/v0.14.1)|2014-07-24||no|||1784|
|[v0.14.0](https://github.com/electron/electron/releases/tag/v0.14.0)|2014-07-22||no|||1858|
|[v0.13.3](https://github.com/electron/electron/releases/tag/v0.13.3)|2014-06-25||no|||2224|
|[v0.13.2](https://github.com/electron/electron/releases/tag/v0.13.2)|2014-06-18||no|||356|
|[v0.13.1](https://github.com/electron/electron/releases/tag/v0.13.1)|2014-06-14||no|||367|
|[v0.13.0](https://github.com/electron/electron/releases/tag/v0.13.0)|2014-06-05||no|||719|
|[v0.12.7](https://github.com/electron/electron/releases/tag/v0.12.7)|2014-05-27||no|||402|
|[v0.12.6](https://github.com/electron/electron/releases/tag/v0.12.6)|2014-05-26||no|||226|
|[v0.12.5](https://github.com/electron/electron/releases/tag/v0.12.5)|2014-05-19||no|||16905|
|[v0.12.4](https://github.com/electron/electron/releases/tag/v0.12.4)|2014-05-12||no|||588|
|[v0.12.3](https://github.com/electron/electron/releases/tag/v0.12.3)|2014-05-07||no|||884|
|[v0.12.2](https://github.com/electron/electron/releases/tag/v0.12.2)|2014-05-05||no|||880|
|[v0.12.1](https://github.com/electron/electron/releases/tag/v0.12.1)|2014-05-05||no|||77|
|[v0.12.0](https://github.com/electron/electron/releases/tag/v0.12.0)|2014-04-29||no|||77|
|[v0.11.10](https://github.com/electron/electron/releases/tag/v0.11.10)|2014-04-14||no|||85|
|[v0.11.9](https://github.com/electron/electron/releases/tag/v0.11.9)|2014-04-11||no|||74|
|[v0.11.8](https://github.com/electron/electron/releases/tag/v0.11.8)|2014-04-10||no|||70|
|[v0.11.7](https://github.com/electron/electron/releases/tag/v0.11.7)|2014-04-08||no|||72|
|[v0.11.6](https://github.com/electron/electron/releases/tag/v0.11.6)|2014-04-07||no|||75|
|[v0.11.5](https://github.com/electron/electron/releases/tag/v0.11.5)|2014-04-02||no|||77|
|[v0.11.4](https://github.com/electron/electron/releases/tag/v0.11.4)|2014-03-28||no|||76|
|[v0.11.3](https://github.com/electron/electron/releases/tag/v0.11.3)|2014-03-25||no|||71|
|[v0.11.2](https://github.com/electron/electron/releases/tag/v0.11.2)|2014-03-24||no|||73|
|[v0.11.1](https://github.com/electron/electron/releases/tag/v0.11.1)|2014-03-18||no|||71|
|[v0.11.0](https://github.com/electron/electron/releases/tag/v0.11.0)|2014-03-16||no|||65|
|[v0.10.7](https://github.com/electron/electron/releases/tag/v0.10.7)|2014-03-11||no|||107|
|[v0.10.6](https://github.com/electron/electron/releases/tag/v0.10.6)|2014-03-07||no|||75|
|[v0.10.5](https://github.com/electron/electron/releases/tag/v0.10.5)|2014-03-05||no|||79|
|[v0.10.4](https://github.com/electron/electron/releases/tag/v0.10.4)|2014-03-02||no|||72|
|[v0.10.3](https://github.com/electron/electron/releases/tag/v0.10.3)|2014-02-28||no|||99|
|[v0.10.2](https://github.com/electron/electron/releases/tag/v0.10.2)|2014-02-27||no|||71|
|[v0.10.1](https://github.com/electron/electron/releases/tag/v0.10.1)|2014-02-25||no|||90|
|[v0.10.0](https://github.com/electron/electron/releases/tag/v0.10.0)|2014-02-24||no|||0|
|[v0.9.3](https://github.com/electron/electron/releases/tag/v0.9.3)|2014-02-17||no|||1778|
|[v0.9.2](https://github.com/electron/electron/releases/tag/v0.9.2)|2014-02-12||no|||1802|
|[v0.9.1](https://github.com/electron/electron/releases/tag/v0.9.1)|2014-02-04||no|||1789|
|[v0.9.0](https://github.com/electron/electron/releases/tag/v0.9.0)|2014-02-02||no|||1779|
|[v0.8.7](https://github.com/electron/electron/releases/tag/v0.8.7)|2014-01-27||no|||1800|
|[v0.8.6](https://github.com/electron/electron/releases/tag/v0.8.6)|2014-01-23||no|||1789|
|[v0.8.5](https://github.com/electron/electron/releases/tag/v0.8.5)|2014-01-14||no|||1806|
|[v0.8.4](https://github.com/electron/electron/releases/tag/v0.8.4)|2014-01-13||no|||1788|
|[v0.8.3](https://github.com/electron/electron/releases/tag/v0.8.3)|2014-01-08||no|||1789|
|[v0.8.2](https://github.com/electron/electron/releases/tag/v0.8.2)|2014-01-07||no|||1838|
|[v0.8.1](https://github.com/electron/electron/releases/tag/v0.8.1)|2013-12-29||no|||1800|
|[v0.8.0](https://github.com/electron/electron/releases/tag/v0.8.0)|2013-12-27||no|||1783|
|[v0.7.6](https://github.com/electron/electron/releases/tag/v0.7.6)|2013-12-09||no|||1852|
|[v0.7.5](https://github.com/electron/electron/releases/tag/v0.7.5)|2013-12-05||no|||1787|
|[v0.7.4](https://github.com/electron/electron/releases/tag/v0.7.4)|2013-12-04||no|||1872|
|[v0.7.3](https://github.com/electron/electron/releases/tag/v0.7.3)|2013-11-29||no|||1841|
|[v0.7.2](https://github.com/electron/electron/releases/tag/v0.7.2)|2013-11-28||no|||1818|
|[v0.7.1](https://github.com/electron/electron/releases/tag/v0.7.1)|2013-11-28||no|||1799|
|[v0.7.0](https://github.com/electron/electron/releases/tag/v0.7.0)|2013-11-27||no|||1797|
|[v0.6.12](https://github.com/electron/electron/releases/tag/v0.6.12)|2013-11-22||no|||899|
|[v0.6.11](https://github.com/electron/electron/releases/tag/v0.6.11)|2013-11-20||no|||901|
|[v0.6.10](https://github.com/electron/electron/releases/tag/v0.6.10)|2013-11-11||no|||906|
|[v0.6.9](https://github.com/electron/electron/releases/tag/v0.6.9)|2013-11-07||no|||906|
|[v0.6.8](https://github.com/electron/electron/releases/tag/v0.6.8)|2013-11-05||no|||891|
|[v0.6.7](https://github.com/electron/electron/releases/tag/v0.6.7)|2013-11-02||no|||897|
|[v0.6.6](https://github.com/electron/electron/releases/tag/v0.6.6)|2013-10-28||no|||906|
|[v0.6.5](https://github.com/electron/electron/releases/tag/v0.6.5)|2013-10-26||no|||870|
|[v0.6.4](https://github.com/electron/electron/releases/tag/v0.6.4)|2013-10-22||no|||889|
|[v0.6.3](https://github.com/electron/electron/releases/tag/v0.6.3)|2013-10-21||no|||873|
|[v0.6.2](https://github.com/electron/electron/releases/tag/v0.6.2)|2013-10-17||no|||875|
|[v0.6.1](https://github.com/electron/electron/releases/tag/v0.6.1)|2013-10-14||no|||876|
|[v0.6.0](https://github.com/electron/electron/releases/tag/v0.6.0)|2013-10-10||no|||876|
|[v0.5.4](https://github.com/electron/electron/releases/tag/v0.5.4)|2013-10-04||no|||900|
|[v0.5.3](https://github.com/electron/electron/releases/tag/v0.5.3)|2013-09-29||no|||863|
|[v0.5.2](https://github.com/electron/electron/releases/tag/v0.5.2)|2013-09-29||no|||862|
|[v0.5.1](https://github.com/electron/electron/releases/tag/v0.5.1)|2013-09-26||no|||884|
|[v0.5.0](https://github.com/electron/electron/releases/tag/v0.5.0)|2013-09-25||no|||868|
|[v0.4.9](https://github.com/electron/electron/releases/tag/v0.4.9)|2013-09-20||no|||863|
|[v0.4.8](https://github.com/electron/electron/releases/tag/v0.4.8)|2013-09-20||no|||862|
|[v0.4.7](https://github.com/electron/electron/releases/tag/v0.4.7)|2013-09-13||no|||863|
|[v0.4.6](https://github.com/electron/electron/releases/tag/v0.4.6)|2013-09-12||no|||864|
|[v0.4.5](https://github.com/electron/electron/releases/tag/v0.4.5)|2013-09-09||no|||865|
|[v0.4.4](https://github.com/electron/electron/releases/tag/v0.4.4)|2013-09-05||no|||865|
|[v0.4.3](https://github.com/electron/electron/releases/tag/v0.4.3)|2013-09-02||no|||864|
|[v0.4.2](https://github.com/electron/electron/releases/tag/v0.4.2)|2013-09-02||no|||865|
|[v0.4.1](https://github.com/electron/electron/releases/tag/v0.4.1)|2013-08-27||no|||0|
|[v0.4.0](https://github.com/electron/electron/releases/tag/v0.4.0)|2013-08-19||no|||0|
|[v0.3.5](https://github.com/electron/electron/releases/tag/v0.3.5)|2013-08-16||no|||0|
|[v0.3.4](https://github.com/electron/electron/releases/tag/v0.3.4)|2013-08-15||no|||0|
|[v0.3.3](https://github.com/electron/electron/releases/tag/v0.3.3)|2013-08-15||no|||0|
|[v0.3.2](https://github.com/electron/electron/releases/tag/v0.3.2)|2013-08-13||no|||0|
|[v0.3.1](https://github.com/electron/electron/releases/tag/v0.3.1)|2013-08-12||no|||0|

<!-- END RELEASES TABLE -->

## Installation

```sh
npm i electron-releases
```

## Usage

The module exports an array of release objects:

```js
const releases = require('electron-releases')

// find newest version:
releases[0].tag_name // => 'v1.8.2-beta.3'

// find `latest` on npm, which is not necessarily the most recent release:
releases.find(release => release.npm_dist_tag === 'latest')

// find `beta` on npm:
releases.find(release => release.npm_dist_tag === 'beta')
```

## Lite Version

The default export is about 10MB, as it includes a lot of metadata from the
GitHub API like release assets.

If you just need the basic info like version numbers, npm dist tags, and publish dates, there's a much smaller (<200K) dataset you can use:

```js
require('electron-releases/lite.json')
```

You can also get this at [unpkg.com/electron-releases/lite.json](https://unpkg.com/electron-releases/lite.json)

### Data

Each release contains all the data returned by the
[GitHub Releases API](https://developer.github.com/v3/repos/releases/#get-a-single-release),
plus some extra properties:

- `version` (String) - the same thing as `dist_tag`, but without the `v` for convenient [semver comparisons](https://github.com/npm/node-semver#usage).
- `npm_dist_tags` (Array<String>) - an array of [npm dist-tags](https://docs.npmjs.com/cli/dist-tag) like `"latest"` or `"beta"`. Most releases will have an empty array for this property.
- `npm_package_name` (String) - For packages published to npm, this will be `electron` or `electron-prebuilt`. For packages not published to npm, this property will not exist.
- `total_downloads` (Number) - Total downloads of all assets in the release that
  have a [detectable platform](https://github.com/zeke/platform-utils#api) in their
  filename like `.zip`, `.dmg`, `.exe`, `.rpm`, `.deb`, etc.
- `deps` (Object) - version numbers for Electron dependencies.
  - `v8` (String)
  - `chromium` (String)
  - `node` (String)
  - etc..

## Updates

This module is self-publishing. It runs in a
[Heroku Scheduler](https://devcenter.heroku.com/articles/scheduler)
process every ten minutes. A new version of this module is published if any of
the following change:

- number of Electron releases on GitHub
- number of Electron releases on npm
- npm `electron@beta` version
- npm `electron@latest` version

If none of these has changed, the build process aborts and runs again ten minutes
later. For more detail, see [script/release.sh](script/release.sh)

The Heroku app is also synced to the GitHub repo, so every push to the
`master` branch will automatically deploy a new version of this app.

### Manually update

If your change any file in the `script` folder you need to
bump module the following steps:

1. Create a [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/#creating-a-token)
1. Copy-paste `.env.example` by following command:
    ```sh
    cp .env.example .env
    ```
1. Paste your token to `.env` file
1. Build the module
    ```sh
    npm run build
    ```
1. Check if all tests passed:
    ```sh
    npm test
    ```

## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [check-for-leaks](): avoid publishing secrets to git and npm
- [dotenv-safe](https://github.com/rolodato/dotenv-safe): Load environment variables from .env and ensure they are defined
- [github](): NodeJS wrapper for the GitHub API
- [got](): Simplified HTTP requests
- [hubdown](): Convert markdown to GitHub-style HTML using a common set of remark plugins
- [lodash](): Lodash modular utilities.
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [npm](https://github.com/npm/npm): a package manager for JavaScript
- [parse-link-header](https://github.com/thlorenz/parse-link-header): Parses a link header and returns paging information for each contained link.
- [semver](): The semantic version parser used by npm.
- [standard](https://github.com/standard/standard): JavaScript Standard Style
- [standard-markdown](): Test your Markdown files for Standard JavaScript Style™


## License

MIT
