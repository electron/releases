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
|[v10.0.0-nightly.20200317](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200317)|2020-03-17|nightly|yes|12.16.1|83|8|
|[v10.0.0-nightly.20200316](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200316)|2020-03-16||yes|12.16.1|83|6|
|[v10.0.0-nightly.20200311](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200311)|2020-03-11||yes|12.16.1|82|7|
|[v10.0.0-nightly.20200310](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200310)|2020-03-10||yes|12.16.1|82|43|
|[v10.0.0-nightly.20200309](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200309)|2020-03-09||yes|12.16.1|82|11|
|[v10.0.0-nightly.20200306](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200306)|2020-03-06||yes|12.16.1|82|29|
|[v10.0.0-nightly.20200305](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200305)|2020-03-05||yes|12.16.1|82|10|
|[v10.0.0-nightly.20200304](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200304)|2020-03-04||yes|12.16.1|82|13|
|[v10.0.0-nightly.20200303](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200303)|2020-03-03||yes|12.16.1|82|10|
|[v10.0.0-nightly.20200226](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200226)|2020-02-26||yes|12.16.1|82|44|
|[v10.0.0-nightly.20200223](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200223)|2020-02-23||yes|12.15.0|82|12|
|[v10.0.0-nightly.20200222](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200222)|2020-02-22||yes|12.15.0|82|6|
|[v10.0.0-nightly.20200221](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200221)|2020-02-21||yes|12.15.0|82|48|
|[v10.0.0-nightly.20200218](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200218)|2020-02-18||yes|12.15.0|82|21|
|[v10.0.0-nightly.20200217](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200217)|2020-02-17||yes|12.15.0|82|7|
|[v10.0.0-nightly.20200216](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200216)|2020-02-16||yes|12.15.0|82|21|
|[v10.0.0-nightly.20200211](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200211)|2020-02-11||yes|12.15.0|82|29|
|[v10.0.0-nightly.20200210](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200210)|2020-02-10||yes|12.14.1|82|168|
|[v10.0.0-nightly.20200209](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200209)|2020-02-09||yes|12.14.1|82|14|
|[v9.0.0-nightly.20200121](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200121)|2020-01-21||yes|12.14.1|81|168|
|[v9.0.0-nightly.20200119](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200119)|2020-01-19||yes|12.14.1|81|7|
|[v9.0.0-nightly.20200117](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200117)|2020-01-17||yes|12.14.1|81|34|
|[v9.0.0-nightly.20200116](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200116)|2020-01-16||yes|12.14.1|81|16|
|[v9.0.0-nightly.20200115](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200115)|2020-01-15||yes|12.14.1|81|15|
|[v9.0.0-nightly.20200113](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200113)|2020-01-13||yes|12.14.1|81|14|
|[v9.0.0-nightly.20200111](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200111)|2020-01-11||yes|12.14.1|81|7|
|[v9.0.0-nightly.20200110](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200110)|2020-01-10||yes|12.14.1|81|23|
|[v9.0.0-nightly.20200109](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200109)|2020-01-09||yes|12.14.0|81|12|
|[v9.0.0-nightly.20200108](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200108)|2020-01-08||yes|12.14.0|81|7|
|[v9.0.0-nightly.20200106](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200106)|2020-01-06||yes|12.14.0|81|12|
|[v9.0.0-nightly.20200105](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200105)|2020-01-05||yes|12.14.0|81|6|
|[v9.0.0-nightly.20200104](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200104)|2020-01-04||yes|12.14.0|81|26|
|[v9.0.0-nightly.20200103](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200103)|2020-01-03||yes|12.14.0|81|10|
|[v9.0.0-nightly.20200101](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200101)|2020-01-01||yes|12.14.0|81|32|
|[v9.0.0-nightly.20191231](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191231)|2019-12-31||yes|12.14.0|81|9|
|[v9.0.0-nightly.20191230](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191230)|2019-12-30||yes|12.14.0|81|12|
|[v9.0.0-nightly.20191229](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191229)|2019-12-29||yes|12.14.0|81|12|
|[v9.0.0-nightly.20191228](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191228)|2019-12-28||yes|12.14.0|81|12|
|[v9.0.0-nightly.20191226](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191226)|2019-12-26||yes|12.14.0|81|10|
|[v9.0.0-nightly.20191225](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191225)|2019-12-25||yes|12.14.0|81|14|
|[v9.0.0-nightly.20191224](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191224)|2019-12-24||yes|12.14.0|81|13|
|[v9.0.0-nightly.20191223](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191223)|2019-12-23||yes|12.14.0|81|16|
|[v9.0.0-nightly.20191222](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191222)|2019-12-22||yes|12.14.0|81|12|
|[v9.0.0-nightly.20191221](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191221)|2019-12-21||yes|12.14.0|81|19|
|[v9.0.0-nightly.20191220](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191220)|2019-12-20||yes|12.14.0|81|12|
|[v9.0.0-nightly.20191210](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191210)|2019-12-10||yes|12.13.0|80|8|
|[v9.0.0-nightly.20191204](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191204)|2019-12-04||yes|12.13.0|80|71|
|[v9.0.0-nightly.20191203](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191203)|2019-12-03||yes|12.13.0|80|15|
|[v9.0.0-nightly.20191202](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191202)|2019-12-02||yes|12.13.0|80|19|
|[v9.0.0-nightly.20191201](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191201)|2019-12-01||yes|12.13.0|80|9|
|[v9.0.0-nightly.20191130](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191130)|2019-11-30||yes|12.13.0|80|13|
|[v9.0.0-nightly.20191129](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191129)|2019-11-29||yes|12.13.0|80|10|
|[v9.0.0-nightly.20191124](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191124)|2019-11-24||yes|12.13.0|80|23|
|[v9.0.0-nightly.20191123](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191123)|2019-11-23||yes|12.13.0|80|10|
|[v9.0.0-nightly.20191122](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191122)|2019-11-22||yes|12.13.0|80|10|
|[v9.0.0-nightly.20191121](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191121)|2019-11-21||yes|12.13.0|80|10|
|[v9.0.0-beta.9](https://github.com/electron/electron/releases/tag/v9.0.0-beta.9)|2020-03-16|beta, beta-9-x-y|yes|12.14.1|82|114|
|[v9.0.0-beta.7](https://github.com/electron/electron/releases/tag/v9.0.0-beta.7)|2020-03-09||yes|12.14.1|82|312|
|[v9.0.0-beta.6](https://github.com/electron/electron/releases/tag/v9.0.0-beta.6)|2020-03-06||yes|12.14.1|82|207|
|[v9.0.0-beta.5](https://github.com/electron/electron/releases/tag/v9.0.0-beta.5)|2020-03-02||yes|12.14.1|82|560|
|[v9.0.0-beta.4](https://github.com/electron/electron/releases/tag/v9.0.0-beta.4)|2020-02-28||yes|12.14.1|82|212|
|[v9.0.0-beta.3](https://github.com/electron/electron/releases/tag/v9.0.0-beta.3)|2020-02-26||yes|12.14.1|82|186|
|[v9.0.0-beta.2](https://github.com/electron/electron/releases/tag/v9.0.0-beta.2)|2020-02-16||yes|12.14.1|82|332|
|[v9.0.0-beta.1](https://github.com/electron/electron/releases/tag/v9.0.0-beta.1)|2020-02-10||yes|12.14.1|82|203|
|[v8.1.1](https://github.com/electron/electron/releases/tag/v8.1.1)|2020-03-10|latest, 8-x-y|no|12.13.0|80|9368|
|[v8.1.0](https://github.com/electron/electron/releases/tag/v8.1.0)|2020-03-06||no|12.13.0|80|5460|
|[v8.0.3](https://github.com/electron/electron/releases/tag/v8.0.3)|2020-03-03||no|12.13.0|80|6658|
|[v8.0.2](https://github.com/electron/electron/releases/tag/v8.0.2)|2020-02-26||no|12.13.0|80|9301|
|[v8.0.1](https://github.com/electron/electron/releases/tag/v8.0.1)|2020-02-14||no|12.13.0|80|18299|
|[v8.0.0](https://github.com/electron/electron/releases/tag/v8.0.0)|2020-02-03||no|12.13.0|80|29121|
|[v8.0.0-nightly.20191105](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191105)|2019-11-05||yes|12.13.0|80|56|
|[v8.0.0-nightly.20191101](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191101)|2019-11-01||yes|12.13.0|80|26|
|[v8.0.0-nightly.20191023](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191023)|2019-10-23||yes|12.13.0|79|88|
|[v8.0.0-nightly.20191021](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191021)|2019-10-21||yes|12.12.0|79|31|
|[v8.0.0-nightly.20191020](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191020)|2019-10-20||yes|12.12.0|79|23|
|[v8.0.0-nightly.20191019](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191019)|2019-10-19||yes|12.12.0|79|21|
|[v8.0.0-nightly.20191017](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191017)|2019-10-17||yes|12.10.0|79|25|
|[v8.0.0-nightly.20191012](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191012)|2019-10-12||yes|12.9.1|79|18|
|[v8.0.0-nightly.20191011](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191011)|2019-10-11||yes|12.9.1|79|12|
|[v8.0.0-nightly.20191009](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191009)|2019-10-09||yes|12.9.1|79|14|
|[v8.0.0-nightly.20191006](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191006)|2019-10-06||yes|12.9.1|79|12|
|[v8.0.0-nightly.20191005](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191005)|2019-10-05||yes|12.9.1|79|13|
|[v8.0.0-nightly.20191004](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191004)|2019-10-04||yes|12.9.1|79|8|
|[v8.0.0-nightly.20191001](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191001)|2019-10-01||yes|12.9.1|79|23|
|[v8.0.0-nightly.20190930](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190930)|2019-09-30||yes|12.9.1|79|12|
|[v8.0.0-nightly.20190929](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190929)|2019-09-29||yes|12.9.1|79|12|
|[v8.0.0-nightly.20190926](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190926)|2019-09-26||yes|12.9.1|79|17|
|[v8.0.0-nightly.20190924](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190924)|2019-09-24||yes|12.9.1|79|12|
|[v8.0.0-nightly.20190923](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190923)|2019-09-23||yes|12.9.1|79|10|
|[v8.0.0-nightly.20190920](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190920)|2019-09-20||yes|12.9.1|79|21|
|[v8.0.0-nightly.20190919](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190919)|2019-09-19||yes|12.9.1|79|14|
|[v8.0.0-nightly.20190917](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190917)|2019-09-17||yes|12.9.1|78|14|
|[v8.0.0-nightly.20190915](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190915)|2019-09-15||yes|12.9.1|78|8|
|[v8.0.0-nightly.20190914](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190914)|2019-09-14||yes|12.9.1|78|11|
|[v8.0.0-nightly.20190913](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190913)|2019-09-13||yes|12.9.1|78|9|
|[v8.0.0-nightly.20190911](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190911)|2019-09-11||yes|12.9.1|78|7|
|[v8.0.0-nightly.20190910](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190910)|2019-09-10||yes|12.9.1|78|13|
|[v8.0.0-nightly.20190909](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190909)|2019-09-09||yes|12.9.1|78|14|
|[v8.0.0-nightly.20190907](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190907)|2019-09-08||yes|12.9.1|78|9|
|[v8.0.0-nightly.20190902](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190902)|2019-09-02||yes|12.9.1|78|12|
|[v8.0.0-nightly.20190901](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190901)|2019-09-01||yes|12.9.1|78|29|
|[v8.0.0-nightly.20190830](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190830)|2019-08-30||yes|12.9.1|78|21|
|[v8.0.0-nightly.20190828](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190828)|2019-08-28||yes|12.9.1|78|10|
|[v8.0.0-nightly.20190827](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190827)|2019-08-28||yes|12.9.1|78|8|
|[v8.0.0-nightly.20190825](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190825)|2019-08-25||yes|12.9.0|78|24|
|[v8.0.0-nightly.20190824](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190824)|2019-08-24||yes|12.9.0|78|6|
|[v8.0.0-nightly.20190820](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190820)|2019-08-20||yes|12.8.1|78|10|
|[v8.0.0-nightly.20190819](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190819)|2019-08-20||yes|12.8.0|78|22|
|[v8.0.0-nightly.20190818](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190818)|2019-08-18||yes|12.8.0|78|9|
|[v8.0.0-nightly.20190817](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190817)|2019-08-17||yes|12.8.0|78|12|
|[v8.0.0-nightly.20190816](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190816)|2019-08-16||yes|12.8.0|78|11|
|[v8.0.0-nightly.20190815](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190815)|2019-08-15||yes|12.8.0|78|11|
|[v8.0.0-nightly.20190814](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190814)|2019-08-14||yes|12.8.0|78|12|
|[v8.0.0-nightly.20190813](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190813)|2019-08-13||yes|12.8.0|78|13|
|[v8.0.0-nightly.20190812](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190812)|2019-08-12||yes|12.6.0|78|11|
|[v8.0.0-nightly.20190811](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190811)|2019-08-12||yes|12.6.0|78|11|
|[v8.0.0-nightly.20190810](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190810)|2019-08-11||yes|12.6.0|78|10|
|[v8.0.0-nightly.20190809](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190809)|2019-08-09||yes|12.6.0|78|8|
|[v8.0.0-nightly.20190808](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190808)|2019-08-08||yes|12.6.0|78|13|
|[v8.0.0-nightly.20190807](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190807)|2019-08-07||yes|12.6.0|78|18|
|[v8.0.0-nightly.20190806](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190806)|2019-08-06||yes|12.6.0|78|11|
|[v8.0.0-nightly.20190803](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190803)|2019-08-04||yes|12.6.0|78|29|
|[v8.0.0-nightly.20190802](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190802)|2019-08-02||yes|12.6.0|78|11|
|[v8.0.0-nightly.20190801](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190801)|2019-08-01||yes|12.6.0|78|7|
|[v8.0.0-beta.9](https://github.com/electron/electron/releases/tag/v8.0.0-beta.9)|2020-01-30|beta-8-x-y|yes|12.13.0|80|370|
|[v8.0.0-beta.8](https://github.com/electron/electron/releases/tag/v8.0.0-beta.8)|2020-01-29||yes|12.13.0|80|122|
|[v8.0.0-beta.7](https://github.com/electron/electron/releases/tag/v8.0.0-beta.7)|2020-01-16||yes|12.13.0|80|3930|
|[v8.0.0-beta.6](https://github.com/electron/electron/releases/tag/v8.0.0-beta.6)|2020-01-14||yes|12.13.0|80|273|
|[v8.0.0-beta.5](https://github.com/electron/electron/releases/tag/v8.0.0-beta.5)|2019-12-18||yes|12.13.0|80|4691|
|[v8.0.0-beta.4](https://github.com/electron/electron/releases/tag/v8.0.0-beta.4)|2019-12-04||yes|12.13.0|80|3529|
|[v8.0.0-beta.3](https://github.com/electron/electron/releases/tag/v8.0.0-beta.3)|2019-11-20||yes|12.13.0|80|1140|
|[v8.0.0-beta.2](https://github.com/electron/electron/releases/tag/v8.0.0-beta.2)|2019-11-01||yes|12.13.0|79|1127|
|[v8.0.0-beta.1](https://github.com/electron/electron/releases/tag/v8.0.0-beta.1)|2019-10-24||yes|12.13.0|79|355|
|[v7.1.14](https://github.com/electron/electron/releases/tag/v7.1.14)|2020-02-28|7-1-x|no|12.8.1|78|6329|
|[v7.1.13](https://github.com/electron/electron/releases/tag/v7.1.13)|2020-02-20||no|12.8.1|78|6635|
|[v7.1.12](https://github.com/electron/electron/releases/tag/v7.1.12)|2020-02-10||no|12.8.1|78|7902|
|[v7.1.11](https://github.com/electron/electron/releases/tag/v7.1.11)|2020-01-30||no|12.8.1|78|53514|
|[v7.1.10](https://github.com/electron/electron/releases/tag/v7.1.10)|2020-01-22||no|12.8.1|78|18926|
|[v7.1.9](https://github.com/electron/electron/releases/tag/v7.1.9)|2020-01-13||no|12.8.1|78|24698|
|[v7.1.8](https://github.com/electron/electron/releases/tag/v7.1.8)|2020-01-08||no|12.8.1|78|15742|
|[v7.1.7](https://github.com/electron/electron/releases/tag/v7.1.7)|2019-12-19||no|12.8.1|78|53750|
|[v7.1.6](https://github.com/electron/electron/releases/tag/v7.1.6)|2019-12-18||no|12.8.1|78|9994|
|[v7.1.5](https://github.com/electron/electron/releases/tag/v7.1.5)|2019-12-13||no|12.8.1|78|13416|
|[v7.1.4](https://github.com/electron/electron/releases/tag/v7.1.4)|2019-12-10||no|12.8.1|78|21300|
|[v7.1.3](https://github.com/electron/electron/releases/tag/v7.1.3)|2019-12-03||no|12.8.1|78|25905|
|[v7.1.2](https://github.com/electron/electron/releases/tag/v7.1.2)|2019-11-20||no|12.8.1|78|37828|
|[v7.1.1](https://github.com/electron/electron/releases/tag/v7.1.1)|2019-11-07||no|12.8.1|78|30521|
|[v7.1.0](https://github.com/electron/electron/releases/tag/v7.1.0)|2019-11-05||no|12.8.1|78|11312|
|[v7.0.1](https://github.com/electron/electron/releases/tag/v7.0.1)|2019-11-01|7-0-x|no|12.8.1|78|23335|
|[v7.0.0](https://github.com/electron/electron/releases/tag/v7.0.0)|2019-10-21||no|12.8.1|78|70870|
|[v7.0.0-nightly.20190731](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190731)|2019-07-31||yes|12.6.0|78|38|
|[v7.0.0-nightly.20190730](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190730)|2019-07-30||yes|12.6.0|78|25|
|[v7.0.0-nightly.20190729](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190729)|2019-07-29||yes|12.6.0|78|17|
|[v7.0.0-nightly.20190728](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190728)|2019-07-28||yes|12.6.0|78|11|
|[v7.0.0-nightly.20190727](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190727)|2019-07-27||yes|12.6.0|78|18|
|[v7.0.0-nightly.20190726](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190726)|2019-07-26||yes|12.6.0|77|11|
|[v7.0.0-nightly.20190721](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190721)|2019-07-21||yes|12.6.0|77|75|
|[v7.0.0-nightly.20190720](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190720)|2019-07-20||yes|12.6.0|77|14|
|[v7.0.0-nightly.20190719](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190719)|2019-07-19||yes|12.6.0|77|9|
|[v7.0.0-nightly.20190705](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190705)|2019-07-05||yes|12.0.0|77|13|
|[v7.0.0-nightly.20190704](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190704)|2019-07-04||yes|12.0.0|77|48|
|[v7.0.0-nightly.20190702](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190702)|2019-07-02||yes|12.0.0|77|15|
|[v7.0.0-nightly.20190701](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190701)|2019-07-01||yes|12.0.0|77|10|
|[v7.0.0-nightly.20190630](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190630)|2019-07-01||yes|12.0.0|77|9|
|[v7.0.0-nightly.20190629](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190629)|2019-06-29||yes|12.0.0|77|10|
|[v7.0.0-nightly.20190627](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190627)|2019-06-27||yes|12.0.0|77|14|
|[v7.0.0-nightly.20190624](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190624)|2019-06-24||yes|12.0.0|77|17|
|[v7.0.0-nightly.20190623](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190623)|2019-06-23||yes|12.0.0|77|7|
|[v7.0.0-nightly.20190622](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190622)|2019-06-22||yes|12.0.0|77|14|
|[v7.0.0-nightly.20190619](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190619)|2019-06-19||yes|12.0.0|77|14|
|[v7.0.0-nightly.20190618](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190618)|2019-06-18||yes|12.0.0|77|13|
|[v7.0.0-nightly.20190616](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190616)|2019-06-16||yes|12.0.0|77|17|
|[v7.0.0-nightly.20190615](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190615)|2019-06-15||yes|12.0.0|77|12|
|[v7.0.0-nightly.20190613](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190613)|2019-06-13||yes|12.0.0|77|14|
|[v7.0.0-nightly.20190612](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190612)|2019-06-12||yes|12.0.0|77|17|
|[v7.0.0-nightly.20190611](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190611)|2019-06-11||yes|12.0.0|77|10|
|[v7.0.0-nightly.20190609](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190609)|2019-06-09||yes|12.0.0|77|6|
|[v7.0.0-nightly.20190608](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190608)|2019-06-08||yes|12.0.0|77|11|
|[v7.0.0-nightly.20190607](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190607)|2019-06-07||yes|12.0.0|77|12|
|[v7.0.0-nightly.20190606](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190606)|2019-06-06||yes|12.0.0|77|15|
|[v7.0.0-nightly.20190605](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190605)|2019-06-05||yes|12.0.0|77|8|
|[v7.0.0-nightly.20190604](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190604)|2019-06-04||yes|12.0.0|77|7|
|[v7.0.0-nightly.20190603](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190603)|2019-06-03||yes|12.0.0|76|9|
|[v7.0.0-nightly.20190602](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190602)|2019-06-02||yes|12.0.0|76|10|
|[v7.0.0-nightly.20190531](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190531)|2019-05-31||yes|12.0.0|76|13|
|[v7.0.0-nightly.20190530](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190530)|2019-05-30||yes|12.0.0|76|15|
|[v7.0.0-nightly.20190529](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190529)|2019-05-29||yes|12.0.0|76|14|
|[v7.0.0-nightly.20190521](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190521)|2019-05-21||yes|12.0.0|76|64|
|[v7.0.0-beta.7](https://github.com/electron/electron/releases/tag/v7.0.0-beta.7)|2019-10-16|beta-7-0-x|yes|12.8.1|78|423|
|[v7.0.0-beta.6](https://github.com/electron/electron/releases/tag/v7.0.0-beta.6)|2019-10-09||yes|12.8.1|78|525|
|[v7.0.0-beta.5](https://github.com/electron/electron/releases/tag/v7.0.0-beta.5)|2019-09-24||yes|12.8.1|78|847|
|[v7.0.0-beta.4](https://github.com/electron/electron/releases/tag/v7.0.0-beta.4)|2019-09-03||yes|12.8.1|78|724|
|[v7.0.0-beta.3](https://github.com/electron/electron/releases/tag/v7.0.0-beta.3)|2019-08-15||yes|12.8.0|78|864|
|[v7.0.0-beta.2](https://github.com/electron/electron/releases/tag/v7.0.0-beta.2)|2019-08-07||yes|12.6.0|78|309|
|[v7.0.0-beta.1](https://github.com/electron/electron/releases/tag/v7.0.0-beta.1)|2019-08-01||yes|12.6.0|78|329|
|[v6.1.9](https://github.com/electron/electron/releases/tag/v6.1.9)|2020-02-28|6-1-x|no|12.4.0|76|3968|
|[v6.1.8](https://github.com/electron/electron/releases/tag/v6.1.8)|2020-02-21||no|12.4.0|76|1610|
|[v6.1.7](https://github.com/electron/electron/releases/tag/v6.1.7)|2019-12-17||no|12.4.0|76|41349|
|[v6.1.6](https://github.com/electron/electron/releases/tag/v6.1.6)|2019-12-11||no|12.4.0|76|31771|
|[v6.1.5](https://github.com/electron/electron/releases/tag/v6.1.5)|2019-11-21||no|12.4.0|76|28034|
|[v6.1.4](https://github.com/electron/electron/releases/tag/v6.1.4)|2019-11-05||no|12.4.0|76|20389|
|[v6.1.3](https://github.com/electron/electron/releases/tag/v6.1.3)|2019-11-01||no|12.4.0|76|1986|
|[v6.1.2](https://github.com/electron/electron/releases/tag/v6.1.2)|2019-10-24||no|12.4.0|76|15986|
|[v6.1.1](https://github.com/electron/electron/releases/tag/v6.1.1)|2019-10-23||no|12.4.0|76|2036|
|[v6.1.0](https://github.com/electron/electron/releases/tag/v6.1.0)|2019-10-22||no|12.4.0|76|2384|
|[v6.0.12](https://github.com/electron/electron/releases/tag/v6.0.12)|2019-10-08|6-0-x|no|12.4.0|76|45748|
|[v6.0.11](https://github.com/electron/electron/releases/tag/v6.0.11)|2019-10-02||no|12.4.0|76|16889|
|[v6.0.10](https://github.com/electron/electron/releases/tag/v6.0.10)|2019-09-19||no|12.4.0|76|27485|
|[v6.0.9](https://github.com/electron/electron/releases/tag/v6.0.9)|2019-09-12||no|12.4.0|76|16325|
|[v6.0.8](https://github.com/electron/electron/releases/tag/v6.0.8)|2019-09-09||no|12.4.0|76|11045|
|[v6.0.7](https://github.com/electron/electron/releases/tag/v6.0.7)|2019-08-31||no|12.4.0|76|35989|
|[v6.0.6](https://github.com/electron/electron/releases/tag/v6.0.6)|2019-08-30||no|12.4.0|76|2684|
|[v6.0.5](https://github.com/electron/electron/releases/tag/v6.0.5)|2019-08-27||no|12.4.0|76|13073|
|[v6.0.4](https://github.com/electron/electron/releases/tag/v6.0.4)|2019-08-24||no|12.4.0|76|8161|
|[v6.0.3](https://github.com/electron/electron/releases/tag/v6.0.3)|2019-08-20||no|12.4.0|76|9838|
|[v6.0.2](https://github.com/electron/electron/releases/tag/v6.0.2)|2019-08-12||no|12.4.0|76|14322|
|[v6.0.1](https://github.com/electron/electron/releases/tag/v6.0.1)|2019-08-07||no|12.4.0|76|11123|
|[v6.0.0](https://github.com/electron/electron/releases/tag/v6.0.0)|2019-07-29||no|12.4.0|76|64534|
|[v6.0.0-nightly.20190311](https://github.com/electron/electron/releases/tag/v6.0.0-nightly.20190311)|2019-03-11||yes|12.0.0|74|276|
|[v6.0.0-nightly.20190213](https://github.com/electron/electron/releases/tag/v6.0.0-nightly.20190213)|2019-02-14||yes|12.0.0|72|238|
|[v6.0.0-nightly.20190212](https://github.com/electron/electron/releases/tag/v6.0.0-nightly.20190212)|2019-02-12||yes|12.0.0|72|11|
|[v6.0.0-beta.15](https://github.com/electron/electron/releases/tag/v6.0.0-beta.15)|2019-07-20|beta-6-0-x|yes|12.4.0|76|701|
|[v6.0.0-beta.14](https://github.com/electron/electron/releases/tag/v6.0.0-beta.14)|2019-07-17||yes|12.4.0|76|435|
|[v6.0.0-beta.13](https://github.com/electron/electron/releases/tag/v6.0.0-beta.13)|2019-07-10||yes|12.0.0|76|489|
|[v6.0.0-beta.12](https://github.com/electron/electron/releases/tag/v6.0.0-beta.12)|2019-07-04||yes|12.0.0|76|587|
|[v6.0.0-beta.11](https://github.com/electron/electron/releases/tag/v6.0.0-beta.11)|2019-06-26||yes|12.0.0|76|381|
|[v6.0.0-beta.10](https://github.com/electron/electron/releases/tag/v6.0.0-beta.10)|2019-06-22||yes|12.0.0|76|440|
|[v6.0.0-beta.9](https://github.com/electron/electron/releases/tag/v6.0.0-beta.9)|2019-06-18||yes|12.0.0|76|316|
|[v6.0.0-beta.8](https://github.com/electron/electron/releases/tag/v6.0.0-beta.8)|2019-06-14||yes|12.0.0|76|240|
|[v6.0.0-beta.7](https://github.com/electron/electron/releases/tag/v6.0.0-beta.7)|2019-06-11||yes|12.0.0|76|294|
|[v6.0.0-beta.6](https://github.com/electron/electron/releases/tag/v6.0.0-beta.6)|2019-06-05||yes|12.0.0|76|296|
|[v6.0.0-beta.5](https://github.com/electron/electron/releases/tag/v6.0.0-beta.5)|2019-05-29||yes|12.0.0|76|231|
|[v6.0.0-beta.4](https://github.com/electron/electron/releases/tag/v6.0.0-beta.4)|2019-05-21||yes|12.0.0|76|322|
|[v6.0.0-beta.3](https://github.com/electron/electron/releases/tag/v6.0.0-beta.3)|2019-05-14||yes|12.0.0|76|1544|
|[v6.0.0-beta.2](https://github.com/electron/electron/releases/tag/v6.0.0-beta.2)|2019-05-08||yes|12.0.0|76|325|
|[v6.0.0-beta.1](https://github.com/electron/electron/releases/tag/v6.0.0-beta.1)|2019-05-01||yes|12.0.0|76|312|
|[v5.0.13](https://github.com/electron/electron/releases/tag/v5.0.13)|2019-12-17|5-0-x|no|12.0.0|73|34528|
|[v5.0.12](https://github.com/electron/electron/releases/tag/v5.0.12)|2019-11-02||no|12.0.0|73|25195|
|[v5.0.11](https://github.com/electron/electron/releases/tag/v5.0.11)|2019-09-24||no|12.0.0|73|21416|
|[v5.0.10](https://github.com/electron/electron/releases/tag/v5.0.10)|2019-08-20||no|12.0.0|73|40906|
|[v5.0.9](https://github.com/electron/electron/releases/tag/v5.0.9)|2019-08-06||no|12.0.0|73|11707|
|[v5.0.8](https://github.com/electron/electron/releases/tag/v5.0.8)|2019-07-23||no|12.0.0|73|22665|
|[v5.0.7](https://github.com/electron/electron/releases/tag/v5.0.7)|2019-07-16||no|12.0.0|73|20451|
|[v5.0.6](https://github.com/electron/electron/releases/tag/v5.0.6)|2019-06-26||no|12.0.0|73|49733|
|[v5.0.5](https://github.com/electron/electron/releases/tag/v5.0.5)|2019-06-21||no|12.0.0|73|14825|
|[v5.0.4](https://github.com/electron/electron/releases/tag/v5.0.4)|2019-06-15||no|12.0.0|73|21038|
|[v5.0.3](https://github.com/electron/electron/releases/tag/v5.0.3)|2019-06-07||no|12.0.0|73|14024|
|[v5.0.2](https://github.com/electron/electron/releases/tag/v5.0.2)|2019-05-23||no|12.0.0|73|36353|
|[v5.0.1](https://github.com/electron/electron/releases/tag/v5.0.1)|2019-05-04||no|12.0.0|73|74199|
|[v5.0.0](https://github.com/electron/electron/releases/tag/v5.0.0)|2019-04-24||no|12.0.0|73|29350|
|[v5.0.0-nightly.20190122](https://github.com/electron/electron/releases/tag/v5.0.0-nightly.20190122)|2019-01-22||yes|12.0.0|71|23|
|[v5.0.0-nightly.20190121](https://github.com/electron/electron/releases/tag/v5.0.0-nightly.20190121)|2019-01-22||yes|12.0.0|71|35|
|[v5.0.0-nightly.20190107](https://github.com/electron/electron/releases/tag/v5.0.0-nightly.20190107)|2019-01-08||yes|11.0.0|70|102|
|[v5.0.0-beta.9](https://github.com/electron/electron/releases/tag/v5.0.0-beta.9)|2019-04-20|beta-5-0-x|yes|12.0.0|73|562|
|[v5.0.0-beta.8](https://github.com/electron/electron/releases/tag/v5.0.0-beta.8)|2019-04-04||yes|12.0.0|73|1402|
|[v5.0.0-beta.7](https://github.com/electron/electron/releases/tag/v5.0.0-beta.7)|2019-03-28||yes|12.0.0|73|4478|
|[v5.0.0-beta.6](https://github.com/electron/electron/releases/tag/v5.0.0-beta.6)|2019-03-20||yes|12.0.0|73|681|
|[v5.0.0-beta.5](https://github.com/electron/electron/releases/tag/v5.0.0-beta.5)|2019-03-05||yes|12.0.0|73|747|
|[v5.0.0-beta.4](https://github.com/electron/electron/releases/tag/v5.0.0-beta.4)|2019-02-27||yes|12.0.0|73|490|
|[v5.0.0-beta.3](https://github.com/electron/electron/releases/tag/v5.0.0-beta.3)|2019-02-15||yes|12.0.0|73|806|
|[v5.0.0-beta.2](https://github.com/electron/electron/releases/tag/v5.0.0-beta.2)|2019-02-04||yes|12.0.0|72|767|
|[v5.0.0-beta.1](https://github.com/electron/electron/releases/tag/v5.0.0-beta.1)|2019-01-23||yes|12.0.0|72|1789|
|[v4.2.12](https://github.com/electron/electron/releases/tag/v4.2.12)|2019-10-16|4-2-x|no|10.11.0|69|38196|
|[v4.2.11](https://github.com/electron/electron/releases/tag/v4.2.11)|2019-09-24||no|10.11.0|69|7995|
|[v4.2.10](https://github.com/electron/electron/releases/tag/v4.2.10)|2019-08-29||no|10.11.0|69|15080|
|[v4.2.9](https://github.com/electron/electron/releases/tag/v4.2.9)|2019-08-06||no|10.11.0|69|16675|
|[v4.2.8](https://github.com/electron/electron/releases/tag/v4.2.8)|2019-07-20||no|10.11.0|69|9429|
|[v4.2.7](https://github.com/electron/electron/releases/tag/v4.2.7)|2019-07-16||no|10.11.0|69|6735|
|[v4.2.6](https://github.com/electron/electron/releases/tag/v4.2.6)|2019-07-02||no|10.11.0|69|12343|
|[v4.2.5](https://github.com/electron/electron/releases/tag/v4.2.5)|2019-06-21||no|10.11.0|69|12284|
|[v4.2.4](https://github.com/electron/electron/releases/tag/v4.2.4)|2019-06-05||no|10.11.0|69|27546|
|[v4.2.3](https://github.com/electron/electron/releases/tag/v4.2.3)|2019-05-31||no|10.11.0|69|9354|
|[v4.2.2](https://github.com/electron/electron/releases/tag/v4.2.2)|2019-05-17||no|10.11.0|69|14767|
|[v4.2.1](https://github.com/electron/electron/releases/tag/v4.2.1)|2019-05-14||no|10.11.0|69|1900|
|[v4.2.0](https://github.com/electron/electron/releases/tag/v4.2.0)|2019-05-03||no|10.11.0|69|21668|
|[v4.1.5](https://github.com/electron/electron/releases/tag/v4.1.5)|2019-04-24|4-1-x|no|10.11.0|69|13522|
|[v4.1.4](https://github.com/electron/electron/releases/tag/v4.1.4)|2019-04-04||no|10.11.0|69|52661|
|[v4.1.3](https://github.com/electron/electron/releases/tag/v4.1.3)|2019-03-29||no|10.11.0|69|18337|
|[v4.1.2](https://github.com/electron/electron/releases/tag/v4.1.2)|2019-03-28||no|10.11.0|69|2805|
|[v4.1.1](https://github.com/electron/electron/releases/tag/v4.1.1)|2019-03-20||no|10.11.0|69|19149|
|[v4.1.0](https://github.com/electron/electron/releases/tag/v4.1.0)|2019-03-14||no|10.11.0|69|22008|
|[v4.0.8](https://github.com/electron/electron/releases/tag/v4.0.8)|2019-03-08|4-0-x|no|10.11.0|69|15973|
|[v4.0.7](https://github.com/electron/electron/releases/tag/v4.0.7)|2019-03-05||no|10.11.0|69|10945|
|[v4.0.6](https://github.com/electron/electron/releases/tag/v4.0.6)|2019-02-27||no|10.11.0|69|13845|
|[v4.0.5](https://github.com/electron/electron/releases/tag/v4.0.5)|2019-02-15||no|10.11.0|69|27774|
|[v4.0.4](https://github.com/electron/electron/releases/tag/v4.0.4)|2019-02-02||no|10.11.0|69|41286|
|[v4.0.3](https://github.com/electron/electron/releases/tag/v4.0.3)|2019-01-29||no|10.11.0|69|14422|
|[v4.0.2](https://github.com/electron/electron/releases/tag/v4.0.2)|2019-01-22||no|10.11.0|69|15394|
|[v4.0.1](https://github.com/electron/electron/releases/tag/v4.0.1)|2019-01-04||no|10.11.0|69|55010|
|[v4.0.0](https://github.com/electron/electron/releases/tag/v4.0.0)|2018-12-20||no|10.11.0|69|83707|
|[v4.0.0-nightly.20181010](https://github.com/electron/electron/releases/tag/v4.0.0-nightly.20181010)|2018-10-10||yes|10.11.0|69|1398|
|[v4.0.0-nightly.20181006](https://github.com/electron/electron/releases/tag/v4.0.0-nightly.20181006)|2018-10-06||yes|10.11.0|68|117|
|[v4.0.0-nightly.20180929](https://github.com/electron/electron/releases/tag/v4.0.0-nightly.20180929)|2018-09-29||yes|10.6.0|67|105|
|[v4.0.0-nightly.20180821](https://github.com/electron/electron/releases/tag/v4.0.0-nightly.20180821)|2018-08-21||yes|10.2.0|66|78|
|[v4.0.0-nightly.20180819](https://github.com/electron/electron/releases/tag/v4.0.0-nightly.20180819)|2018-08-19||yes|10.2.0|66|21|
|[v4.0.0-nightly.20180817](https://github.com/electron/electron/releases/tag/v4.0.0-nightly.20180817)|2018-08-18||yes|10.2.0|66|11|
|[v4.0.0-beta.11](https://github.com/electron/electron/releases/tag/v4.0.0-beta.11)|2018-12-19|beta-4-0-x|yes|10.11.0|69|767|
|[v4.0.0-beta.10](https://github.com/electron/electron/releases/tag/v4.0.0-beta.10)|2018-12-17||yes|10.11.0|69|1117|
|[v4.0.0-beta.9](https://github.com/electron/electron/releases/tag/v4.0.0-beta.9)|2018-12-11||yes|10.11.0|69|752|
|[v4.0.0-beta.8](https://github.com/electron/electron/releases/tag/v4.0.0-beta.8)|2018-11-30||yes|10.11.0|69|866|
|[v4.0.0-beta.7](https://github.com/electron/electron/releases/tag/v4.0.0-beta.7)|2018-11-06||yes|10.11.0|69|2421|
|[v4.0.0-beta.6](https://github.com/electron/electron/releases/tag/v4.0.0-beta.6)|2018-11-01||yes|10.11.0|69|720|
|[v4.0.0-beta.5](https://github.com/electron/electron/releases/tag/v4.0.0-beta.5)|2018-10-23||yes|10.11.0|69|1165|
|[v4.0.0-beta.4](https://github.com/electron/electron/releases/tag/v4.0.0-beta.4)|2018-10-19||yes|10.11.0|69|818|
|[v4.0.0-beta.3](https://github.com/electron/electron/releases/tag/v4.0.0-beta.3)|2018-10-12||yes|10.11.0|69|702|
|[v4.0.0-beta.2](https://github.com/electron/electron/releases/tag/v4.0.0-beta.2)|2018-10-12||yes|10.11.0|69|508|
|[v4.0.0-beta.1](https://github.com/electron/electron/releases/tag/v4.0.0-beta.1)|2018-10-11||yes|10.11.0|69|1548|
|[v3.1.13](https://github.com/electron/electron/releases/tag/v3.1.13)|2019-07-31|HEAD|no|10.2.0|66|24750|
|[v3.1.12](https://github.com/electron/electron/releases/tag/v3.1.12)|2019-07-11|3-1-x|no|10.2.0|66|4074|
|[v3.1.11](https://github.com/electron/electron/releases/tag/v3.1.11)|2019-06-06||no|10.2.0|66|6309|
|[v3.1.10](https://github.com/electron/electron/releases/tag/v3.1.10)|2019-05-29||no|10.2.0|66|3648|
|[v3.1.9](https://github.com/electron/electron/releases/tag/v3.1.9)|2019-05-01||no|10.2.0|66|8207|
|[v3.1.8](https://github.com/electron/electron/releases/tag/v3.1.8)|2019-03-28||no|10.2.0|66|27479|
|[v3.1.7](https://github.com/electron/electron/releases/tag/v3.1.7)|2019-03-21||no|10.2.0|66|15059|
|[v3.1.6](https://github.com/electron/electron/releases/tag/v3.1.6)|2019-03-08||no|10.2.0|66|29110|
|[v3.1.5](https://github.com/electron/electron/releases/tag/v3.1.5)|2019-03-04||no|10.2.0|66|1956|
|[v3.1.4](https://github.com/electron/electron/releases/tag/v3.1.4)|2019-02-15||no|10.2.0|66|6444|
|[v3.1.3](https://github.com/electron/electron/releases/tag/v3.1.3)|2019-01-31||no|10.2.0|66|27201|
|[v3.1.2](https://github.com/electron/electron/releases/tag/v3.1.2)|2019-01-24||no|10.2.0|66|6819|
|[v3.1.1](https://github.com/electron/electron/releases/tag/v3.1.1)|2019-01-14||no|10.2.0|66|10177|
|[v3.1.0](https://github.com/electron/electron/releases/tag/v3.1.0)|2019-01-07||no|10.2.0|66|5969|
|[v3.1.0-beta.5](https://github.com/electron/electron/releases/tag/v3.1.0-beta.5)|2019-01-04|beta-3-1-x|yes|10.2.0|66|628|
|[v3.1.0-beta.4](https://github.com/electron/electron/releases/tag/v3.1.0-beta.4)|2018-12-17||yes|10.2.0|66|785|
|[v3.1.0-beta.3](https://github.com/electron/electron/releases/tag/v3.1.0-beta.3)|2018-12-14||yes|10.2.0|66|355|
|[v3.1.0-beta.2](https://github.com/electron/electron/releases/tag/v3.1.0-beta.2)|2018-12-04||yes|10.2.0|66|511|
|[v3.1.0-beta.1](https://github.com/electron/electron/releases/tag/v3.1.0-beta.1)|2018-12-02||yes|10.2.0|66|278|
|[v3.0.16](https://github.com/electron/electron/releases/tag/v3.0.16)|2019-03-08|3-0-x|no|10.2.0|66|4130|
|[v3.0.15](https://github.com/electron/electron/releases/tag/v3.0.15)|2019-01-31||no|10.2.0|66|742|
|[v3.0.14](https://github.com/electron/electron/releases/tag/v3.0.14)|2019-01-04||no|10.2.0|66|11808|
|[v3.0.13](https://github.com/electron/electron/releases/tag/v3.0.13)|2018-12-17||no|10.2.0|66|41628|
|[v3.0.12](https://github.com/electron/electron/releases/tag/v3.0.12)|2018-12-14||no|10.2.0|66|6966|
|[v3.0.11](https://github.com/electron/electron/releases/tag/v3.0.11)|2018-12-11||no|10.2.0|66|14299|
|[v3.0.10](https://github.com/electron/electron/releases/tag/v3.0.10)|2018-11-19||no|10.2.0|66|66101|
|[v3.0.9](https://github.com/electron/electron/releases/tag/v3.0.9)|2018-11-13||no|10.2.0|66|14696|
|[v3.0.8](https://github.com/electron/electron/releases/tag/v3.0.8)|2018-11-05||no|10.2.0|66|20236|
|[v3.0.7](https://github.com/electron/electron/releases/tag/v3.0.7)|2018-11-01||no|10.2.0|66|15685|
|[v3.0.6](https://github.com/electron/electron/releases/tag/v3.0.6)|2018-10-24||no|10.2.0|66|16133|
|[v3.0.5](https://github.com/electron/electron/releases/tag/v3.0.5)|2018-10-19||no|10.2.0|66|12869|
|[v3.0.4](https://github.com/electron/electron/releases/tag/v3.0.4)|2018-10-11||no|10.2.0|66|22942|
|[v3.0.3](https://github.com/electron/electron/releases/tag/v3.0.3)|2018-10-07||no|10.2.0|66|16269|
|[v3.0.2](https://github.com/electron/electron/releases/tag/v3.0.2)|2018-09-27||no|10.2.0|66|20768|
|[v3.0.1](https://github.com/electron/electron/releases/tag/v3.0.1)|2018-09-27||no|10.2.0|66|3064|
|[v3.0.0](https://github.com/electron/electron/releases/tag/v3.0.0)|2018-09-18||no|10.2.0|66|215775|
|[v3.0.0-nightly.20180904](https://github.com/electron/electron/releases/tag/v3.0.0-nightly.20180904)|2018-09-05||yes|10.2.0|66|207|
|[v3.0.0-nightly.20180823](https://github.com/electron/electron/releases/tag/v3.0.0-nightly.20180823)|2018-08-24||yes|10.2.0|66|22|
|[v3.0.0-nightly.20180821](https://github.com/electron/electron/releases/tag/v3.0.0-nightly.20180821)|2018-08-21||yes|10.2.0|66|257|
|[v3.0.0-nightly.20180818](https://github.com/electron/electron/releases/tag/v3.0.0-nightly.20180818)|2018-08-18||yes|10.2.0|66|68|
|[v3.0.0-beta.13](https://github.com/electron/electron/releases/tag/v3.0.0-beta.13)|2018-09-17||yes|10.2.0|66|524|
|[v3.0.0-beta.12](https://github.com/electron/electron/releases/tag/v3.0.0-beta.12)|2018-09-12||yes|10.2.0|66|1062|
|[v3.0.0-beta.11](https://github.com/electron/electron/releases/tag/v3.0.0-beta.11)|2018-09-12||yes|10.2.0|66|428|
|[v3.0.0-beta.10](https://github.com/electron/electron/releases/tag/v3.0.0-beta.10)|2018-09-08||yes|10.2.0|66|649|
|[v3.0.0-beta.9](https://github.com/electron/electron/releases/tag/v3.0.0-beta.9)|2018-09-06||yes|10.2.0|66|555|
|[v3.0.0-beta.8](https://github.com/electron/electron/releases/tag/v3.0.0-beta.8)|2018-08-29||yes|10.2.0|66|1388|
|[v3.0.0-beta.7](https://github.com/electron/electron/releases/tag/v3.0.0-beta.7)|2018-08-22||yes|10.2.0|66|797|
|[v3.0.0-beta.6](https://github.com/electron/electron/releases/tag/v3.0.0-beta.6)|2018-08-20||yes|10.2.0|66|1032|
|[v3.0.0-beta.5](https://github.com/electron/electron/releases/tag/v3.0.0-beta.5)|2018-08-13||yes|10.2.0|66|1313|
|[v3.0.0-beta.4](https://github.com/electron/electron/releases/tag/v3.0.0-beta.4)|2018-08-01||yes|10.2.0|66|5113|
|[v3.0.0-beta.3](https://github.com/electron/electron/releases/tag/v3.0.0-beta.3)|2018-07-17||yes|10.2.0|66|1526|
|[v3.0.0-beta.2](https://github.com/electron/electron/releases/tag/v3.0.0-beta.2)|2018-07-10||yes|10.2.0|66|1002|
|[v3.0.0-beta.1](https://github.com/electron/electron/releases/tag/v3.0.0-beta.1)|2018-06-21||yes|10.2.0|66|8725|
|[v2.1.0-unsupported.20180809](https://github.com/electron/electron/releases/tag/v2.1.0-unsupported.20180809)|2018-08-09|unsupported|no|8.9.3|61|1113|
|[v2.0.18](https://github.com/electron/electron/releases/tag/v2.0.18)|2019-03-08|2-0-x|no|8.9.3|61|97953|
|[v2.0.17](https://github.com/electron/electron/releases/tag/v2.0.17)|2019-01-31||no|8.9.3|61|12196|
|[v2.0.16](https://github.com/electron/electron/releases/tag/v2.0.16)|2018-12-18||no|8.9.3|61|28948|
|[v2.0.15](https://github.com/electron/electron/releases/tag/v2.0.15)|2018-12-13||no|8.9.3|61|2558|
|[v2.0.14](https://github.com/electron/electron/releases/tag/v2.0.14)|2018-11-19||no|8.9.3|61|16918|
|[v2.0.13](https://github.com/electron/electron/releases/tag/v2.0.13)|2018-11-01||no|8.9.3|61|19251|
|[v2.0.12](https://github.com/electron/electron/releases/tag/v2.0.12)|2018-10-19||no|8.9.3|61|32376|
|[v2.0.11](https://github.com/electron/electron/releases/tag/v2.0.11)|2018-10-01||no|8.9.3|61|18468|
|[v2.0.10](https://github.com/electron/electron/releases/tag/v2.0.10)|2018-09-19||no|8.9.3|61|14992|
|[v2.0.9](https://github.com/electron/electron/releases/tag/v2.0.9)|2018-09-10||no|8.9.3|61|41834|
|[v2.0.8](https://github.com/electron/electron/releases/tag/v2.0.8)|2018-08-22||no|8.9.3|61|56121|
|[v2.0.8-nightly.20180820](https://github.com/electron/electron/releases/tag/v2.0.8-nightly.20180820)|2018-08-21||yes|8.9.3|61|20|
|[v2.0.8-nightly.20180819](https://github.com/electron/electron/releases/tag/v2.0.8-nightly.20180819)|2018-08-20||yes|8.9.3|61|11|
|[v2.0.7](https://github.com/electron/electron/releases/tag/v2.0.7)|2018-08-08||no|8.9.3|61|40280|
|[v2.0.6](https://github.com/electron/electron/releases/tag/v2.0.6)|2018-08-01||no|8.9.3|61|47204|
|[v2.0.5](https://github.com/electron/electron/releases/tag/v2.0.5)|2018-07-13||no|8.9.3|61|40415|
|[v2.0.4](https://github.com/electron/electron/releases/tag/v2.0.4)|2018-07-03||no|8.9.3|61|31214|
|[v2.0.3](https://github.com/electron/electron/releases/tag/v2.0.3)|2018-06-21||no|8.9.3|61|23418|
|[v2.0.2](https://github.com/electron/electron/releases/tag/v2.0.2)|2018-05-22||no|8.9.3|61|87888|
|[v2.0.1](https://github.com/electron/electron/releases/tag/v2.0.1)|2018-05-16||no|8.9.3|61|28718|
|[v2.0.0](https://github.com/electron/electron/releases/tag/v2.0.0)|2018-05-01||no|8.9.3|61|123866|
|[v2.0.0-beta.8](https://github.com/electron/electron/releases/tag/v2.0.0-beta.8)|2018-04-26||yes|8.9.3|61|2724|
|[v2.0.0-beta.7](https://github.com/electron/electron/releases/tag/v2.0.0-beta.7)|2018-04-03||yes|8.9.3|61|8477|
|[v2.0.0-beta.6](https://github.com/electron/electron/releases/tag/v2.0.0-beta.6)|2018-03-27||yes|8.9.3|61|2487|
|[v2.0.0-beta.5](https://github.com/electron/electron/releases/tag/v2.0.0-beta.5)|2018-03-20||yes|8.9.3|61|2328|
|[v2.0.0-beta.4](https://github.com/electron/electron/releases/tag/v2.0.0-beta.4)|2018-03-15||yes|8.9.3|61|2091|
|[v2.0.0-beta.3](https://github.com/electron/electron/releases/tag/v2.0.0-beta.3)|2018-03-09||yes|8.9.3|61|1918|
|[v2.0.0-beta.2](https://github.com/electron/electron/releases/tag/v2.0.0-beta.2)|2018-03-05||yes|8.9.3|61|5390|
|[v2.0.0-beta.1](https://github.com/electron/electron/releases/tag/v2.0.0-beta.1)|2018-02-21||yes|8.9.3|61|1447|
|[v1.8.8](https://github.com/electron/electron/releases/tag/v1.8.8)|2018-08-22|1-8-x|no|8.2.1|59|493496|
|[v1.8.7](https://github.com/electron/electron/releases/tag/v1.8.7)|2018-05-16||no|8.2.1|59|143536|
|[v1.8.6](https://github.com/electron/electron/releases/tag/v1.8.6)|2018-04-27||no|8.2.1|59|39558|
|[v1.8.5](https://github.com/electron/electron/releases/tag/v1.8.5)|2018-04-26||no|8.2.1|59|2646|
|[v1.8.4](https://github.com/electron/electron/releases/tag/v1.8.4)|2018-03-16||no|8.2.1|59|139617|
|[v1.8.3](https://github.com/electron/electron/releases/tag/v1.8.3)|2018-03-06||no|8.2.1|59|61600|
|[v1.8.2](https://github.com/electron/electron/releases/tag/v1.8.2)|2018-02-07||no|8.2.1|59|87019|
|[v1.8.2-beta.5](https://github.com/electron/electron/releases/tag/v1.8.2-beta.5)|2018-01-31||yes|8.2.1|59|7316|
|[v1.8.2-beta.4](https://github.com/electron/electron/releases/tag/v1.8.2-beta.4)|2018-01-23||yes|8.2.1|59|3777|
|[v1.8.2-beta.3](https://github.com/electron/electron/releases/tag/v1.8.2-beta.3)|2017-12-04||yes|8.2.1|59|6630|
|[v1.8.2-beta.2](https://github.com/electron/electron/releases/tag/v1.8.2-beta.2)|2017-11-06||yes|8.2.1|59|6653|
|[v1.8.2-beta.1](https://github.com/electron/electron/releases/tag/v1.8.2-beta.1)|2017-10-19||yes|8.2.1|59|3196|
|[v1.8.1](https://github.com/electron/electron/releases/tag/v1.8.1)|2017-09-29||yes|8.2.1|59|68215|
|[v1.8.0](https://github.com/electron/electron/releases/tag/v1.8.0)|2017-12-12||yes|8.2.1|59|192406|
|[v1.7.16](https://github.com/electron/electron/releases/tag/v1.7.16)|2018-08-22|1-7-x|no|7.9.0|58|26916|
|[v1.7.15](https://github.com/electron/electron/releases/tag/v1.7.15)|2018-05-16||no|7.9.0|58|7687|
|[v1.7.14](https://github.com/electron/electron/releases/tag/v1.7.14)|2018-04-27||no|7.9.0|58|2324|
|[v1.7.13](https://github.com/electron/electron/releases/tag/v1.7.13)|2018-03-15||no|7.9.0|58|5714|
|[v1.7.12](https://github.com/electron/electron/releases/tag/v1.7.12)|2018-01-31||no|7.9.0|58|46402|
|[v1.7.11](https://github.com/electron/electron/releases/tag/v1.7.11)|2018-01-23||no|7.9.0|58|55770|
|[v1.7.10](https://github.com/electron/electron/releases/tag/v1.7.10)|2017-12-18||no|7.9.0|58|246143|
|[v1.7.9](https://github.com/electron/electron/releases/tag/v1.7.9)|2017-10-11||no|7.9.0|58|205177|
|[v1.7.8](https://github.com/electron/electron/releases/tag/v1.7.8)|2017-09-24||no|7.9.0|58|55797|
|[v1.7.7](https://github.com/electron/electron/releases/tag/v1.7.7)|2017-09-05||yes|7.9.0|58|38210|
|[v1.7.6](https://github.com/electron/electron/releases/tag/v1.7.6)|2017-08-09||no|7.9.0|58|52005|
|[v1.7.5](https://github.com/electron/electron/releases/tag/v1.7.5)|2017-07-17||no|7.9.0|58|70472|
|[v1.7.4](https://github.com/electron/electron/releases/tag/v1.7.4)|2017-06-28||yes|7.9.0|58|16590|
|[v1.7.3](https://github.com/electron/electron/releases/tag/v1.7.3)|2017-06-08||yes|7.9.0|58|22357|
|[v1.7.2](https://github.com/electron/electron/releases/tag/v1.7.2)|2017-05-26||yes|7.9.0|58|12140|
|[v1.7.1](https://github.com/electron/electron/releases/tag/v1.7.1)|2017-05-16||yes|7.9.0|58|15024|
|[v1.7.0](https://github.com/electron/electron/releases/tag/v1.7.0)|2017-05-10||yes|7.9.0|58|117353|
|[v1.6.18](https://github.com/electron/electron/releases/tag/v1.6.18)|2018-05-15||no|7.4.0|56|6318|
|[v1.6.17](https://github.com/electron/electron/releases/tag/v1.6.17)|2018-01-31||no|7.4.0|56|5541|
|[v1.6.16](https://github.com/electron/electron/releases/tag/v1.6.16)|2018-01-23||no|7.4.0|56|6144|
|[v1.6.15](https://github.com/electron/electron/releases/tag/v1.6.15)|2017-10-11||no|7.4.0|56|12716|
|[v1.6.14](https://github.com/electron/electron/releases/tag/v1.6.14)|2017-09-28||no|7.4.0|56|5299|
|[v1.6.13](https://github.com/electron/electron/releases/tag/v1.6.13)|2017-09-06||yes|7.4.0|56|9688|
|[v1.6.12](https://github.com/electron/electron/releases/tag/v1.6.12)|2017-09-06||yes|7.4.0|56|10120|
|[v1.6.11](https://github.com/electron/electron/releases/tag/v1.6.11)|2017-05-25||no|7.4.0|56|116844|
|[v1.6.10](https://github.com/electron/electron/releases/tag/v1.6.10)|2017-05-16||no|7.4.0|56|36088|
|[v1.6.9](https://github.com/electron/electron/releases/tag/v1.6.9)|2017-05-10||no|7.4.0|56|3275|
|[v1.6.8](https://github.com/electron/electron/releases/tag/v1.6.8)|2017-05-01||no|7.4.0|56|27341|
|[v1.6.7](https://github.com/electron/electron/releases/tag/v1.6.7)|2017-04-18||no|7.4.0|56|20723|
|[v1.6.6](https://github.com/electron/electron/releases/tag/v1.6.6)|2017-04-07||no|7.4.0|56|69614|
|[v1.6.5](https://github.com/electron/electron/releases/tag/v1.6.5)|2017-03-31||no|7.4.0|56|18518|
|[v1.6.4](https://github.com/electron/electron/releases/tag/v1.6.4)|2017-03-22||yes|7.4.0|56|8561|
|[v1.6.3](https://github.com/electron/electron/releases/tag/v1.6.3)|2017-03-07||yes|7.4.0|56|6355|
|[v1.6.2](https://github.com/electron/electron/releases/tag/v1.6.2)|2017-03-01||no|7.4.0|56|75455|
|[v1.6.1](https://github.com/electron/electron/releases/tag/v1.6.1)|2017-02-21||no|7.4.0|56|23055|
|[v1.6.0](https://github.com/electron/electron/releases/tag/v1.6.0)|2017-02-07||yes|7.4.0|56|70291|
|[v1.5.1](https://github.com/electron/electron/releases/tag/v1.5.1)|2017-02-06||yes|7.4.0|54|3789|
|[v1.5.0](https://github.com/electron/electron/releases/tag/v1.5.0)|2017-01-24||yes|7.4.0|54|11262|
|[v1.4.16](https://github.com/electron/electron/releases/tag/v1.4.16)|2017-04-05||no|6.5.0|53|47383|
|[v1.4.15](https://github.com/electron/electron/releases/tag/v1.4.15)|2017-01-19||no|6.5.0|53|85333|
|[v1.4.14](https://github.com/electron/electron/releases/tag/v1.4.14)|2017-01-10||no|6.5.0|53|76920|
|[v1.4.13](https://github.com/electron/electron/releases/tag/v1.4.13)|2016-12-20||no|6.5.0|53|132025|
|[v1.4.12](https://github.com/electron/electron/releases/tag/v1.4.12)|2016-12-10||no|6.5.0|54|22693|
|[v1.4.11](https://github.com/electron/electron/releases/tag/v1.4.11)|2016-12-07||no|6.5.0|53|7409|
|[v1.4.10](https://github.com/electron/electron/releases/tag/v1.4.10)|2016-11-28||no|6.5.0|53|17593|
|[v1.4.8](https://github.com/electron/electron/releases/tag/v1.4.8)|2016-11-22||no|6.5.0|53|9677|
|[v1.4.7](https://github.com/electron/electron/releases/tag/v1.4.7)|2016-11-16||no|6.5.0|53|10341|
|[v1.4.6](https://github.com/electron/electron/releases/tag/v1.4.6)|2016-11-09||no|6.5.0|53|31223|
|[v1.4.5](https://github.com/electron/electron/releases/tag/v1.4.5)|2016-11-01||no|6.5.0|53|13554|
|[v1.4.4](https://github.com/electron/electron/releases/tag/v1.4.4)|2016-10-20||no|6.5.0|53|19381|
|[v1.4.3](https://github.com/electron/electron/releases/tag/v1.4.3)|2016-10-06||no|6.5.0|53|38507|
|[v1.4.2](https://github.com/electron/electron/releases/tag/v1.4.2)|2016-09-30||no|6.5.0|53|9621|
|[v1.4.1](https://github.com/electron/electron/releases/tag/v1.4.1)|2016-09-22||no|6.5.0|53|14096|
|[v1.4.0](https://github.com/electron/electron/releases/tag/v1.4.0)|2016-09-15||no|6.5.0|53|69012|
|[v1.3.15](https://github.com/electron/electron/releases/tag/v1.3.15)|2017-04-21||no|6.5.0|52|3002|
|[v1.3.14](https://github.com/electron/electron/releases/tag/v1.3.14)|2017-03-14||no|6.5.0|52|3594|
|[v1.3.13](https://github.com/electron/electron/releases/tag/v1.3.13)|2016-12-06||no|6.5.0|52|5077|
|[v1.3.12](https://github.com/electron/electron/releases/tag/v1.3.12)|2016-11-28||no|||399|
|[v1.3.10](https://github.com/electron/electron/releases/tag/v1.3.10)|2016-11-22||no|6.5.0|52|387|
|[v1.3.9](https://github.com/electron/electron/releases/tag/v1.3.9)|2016-11-16||no|6.5.0|52|7202|
|[v1.3.8](https://github.com/electron/electron/releases/tag/v1.3.8)|2016-10-20||no|||7193|
|[v1.3.7](https://github.com/electron/electron/releases/tag/v1.3.7)|2016-09-27||no|6.5.0|52|2900|
|[v1.3.6](https://github.com/electron/electron/releases/tag/v1.3.6)|2016-09-15||no|6.3.0|52|3138|
|[v1.3.5](https://github.com/electron/electron/releases/tag/v1.3.5)|2016-09-02||no|6.3.0|52|18994|
|[v1.3.4](https://github.com/electron/electron/releases/tag/v1.3.4)|2016-08-23||no|6.3.0|52|19835|
|[v1.3.3](https://github.com/electron/electron/releases/tag/v1.3.3)|2016-08-10||no|6.3.0|52|25344|
|[v1.3.2](https://github.com/electron/electron/releases/tag/v1.3.2)|2016-08-02||no|6.3.0|52|16943|
|[v1.3.1](https://github.com/electron/electron/releases/tag/v1.3.1)|2016-07-27||no|6.3.0|52|23243|
|[v1.3.0](https://github.com/electron/electron/releases/tag/v1.3.0)|2016-07-25||no|6.3.0|52|32869|
|[v1.2.8](https://github.com/electron/electron/releases/tag/v1.2.8)|2016-07-21||no|6.1.0|51|15714|
|[v1.2.7](https://github.com/electron/electron/releases/tag/v1.2.7)|2016-07-13||no|6.1.0|51|15332|
|[v1.2.6](https://github.com/electron/electron/releases/tag/v1.2.6)|2016-07-06||no|6.1.0|51|14361|
|[v1.2.5](https://github.com/electron/electron/releases/tag/v1.2.5)|2016-06-23||no|6.1.0|51|18088|
|[v1.2.4](https://github.com/electron/electron/releases/tag/v1.2.4)|2016-06-22||no|6.1.0|51|5762|
|[v1.2.3](https://github.com/electron/electron/releases/tag/v1.2.3)|2016-06-16||no|6.1.0|51|10968|
|[v1.2.2](https://github.com/electron/electron/releases/tag/v1.2.2)|2016-06-08||no|6.1.0|51|14517|
|[v1.2.1](https://github.com/electron/electron/releases/tag/v1.2.1)|2016-06-01||no|6.1.0|51|12653|
|[v1.2.0](https://github.com/electron/electron/releases/tag/v1.2.0)|2016-05-26||no|6.1.0|51|24831|
|[v1.1.3](https://github.com/electron/electron/releases/tag/v1.1.3)|2016-05-25||no|6.1.0|50|20549|
|[v1.1.2](https://github.com/electron/electron/releases/tag/v1.1.2)|2016-05-24||no|6.1.0|50|6396|
|[v1.1.1](https://github.com/electron/electron/releases/tag/v1.1.1)|2016-05-20||no|6.1.0|50|19716|
|[v1.1.0](https://github.com/electron/electron/releases/tag/v1.1.0)|2016-05-14||no|6.1.0|50|19708|
|[v1.0.2](https://github.com/electron/electron/releases/tag/v1.0.2)|2016-05-13||no|5.10.0|49|10359|
|[v1.0.1](https://github.com/electron/electron/releases/tag/v1.0.1)|2016-05-11||no|5.10.0|49|9184|
|[v1.0.0](https://github.com/electron/electron/releases/tag/v1.0.0)|2016-05-11||no|5.10.0|49|50276|
|[v0.37.8](https://github.com/electron/electron/releases/tag/v0.37.8)|2016-04-29||no|5.10.0|49|45803|
|[v0.37.7](https://github.com/electron/electron/releases/tag/v0.37.7)|2016-04-22||no|5.10.0|49|10999|
|[v0.37.6](https://github.com/electron/electron/releases/tag/v0.37.6)|2016-04-15||no|5.10.0|49|23901|
|[v0.37.5](https://github.com/electron/electron/releases/tag/v0.37.5)|2016-04-07||no|5.10.0|49|13735|
|[v0.37.4](https://github.com/electron/electron/releases/tag/v0.37.4)|2016-04-03||no|6.0.0-pre|49|8688|
|[v0.37.3](https://github.com/electron/electron/releases/tag/v0.37.3)|2016-03-27||no|5.1.1|49|45894|
|[v0.37.2](https://github.com/electron/electron/releases/tag/v0.37.2)|2016-03-14||no|||16504|
|[v0.37.1](https://github.com/electron/electron/releases/tag/v0.37.1)|2016-03-13||no|5.1.1|49|4634|
|[v0.37.0](https://github.com/electron/electron/releases/tag/v0.37.0)|2016-03-12||no|5.1.1|49|29883|
|[v0.36.12](https://github.com/electron/electron/releases/tag/v0.36.12)|2016-03-27||no|5.1.1|47|40621|
|[v0.36.11](https://github.com/electron/electron/releases/tag/v0.36.11)|2016-03-11||no|5.1.1|47|11988|
|[v0.36.10](https://github.com/electron/electron/releases/tag/v0.36.10)|2016-03-05||no|5.1.1|47|11134|
|[v0.36.9](https://github.com/electron/electron/releases/tag/v0.36.9)|2016-02-26||no|5.1.1|47|13879|
|[v0.36.8](https://github.com/electron/electron/releases/tag/v0.36.8)|2016-02-19||no|5.1.1|47|12459|
|[v0.36.7](https://github.com/electron/electron/releases/tag/v0.36.7)|2016-01-30||no|5.1.1|47|24457|
|[v0.36.6](https://github.com/electron/electron/releases/tag/v0.36.6)|2016-01-29||no|5.1.1|47|4154|
|[v0.36.5](https://github.com/electron/electron/releases/tag/v0.36.5)|2016-01-22||no|5.1.1|47|11096|
|[v0.36.4](https://github.com/electron/electron/releases/tag/v0.36.4)|2016-01-15||no|5.1.1|47|26893|
|[v0.36.3](https://github.com/electron/electron/releases/tag/v0.36.3)|2016-01-11||no|5.1.1|47|7345|
|[v0.36.2](https://github.com/electron/electron/releases/tag/v0.36.2)|2015-12-25||no|5.1.1|47|16436|
|[v0.36.1](https://github.com/electron/electron/releases/tag/v0.36.1)|2015-12-18||no|||9354|
|[v0.36.0](https://github.com/electron/electron/releases/tag/v0.36.0)|2015-12-11||no|5.1.1|47|19827|
|[v0.35.6](https://github.com/electron/electron/releases/tag/v0.35.6)|2016-01-11||no|||22368|
|[v0.35.5](https://github.com/electron/electron/releases/tag/v0.35.5)|2015-12-31||no|4.1.1|45|3734|
|[v0.35.4](https://github.com/electron/electron/releases/tag/v0.35.4)|2015-12-04||no|4.1.1|45|13002|
|[v0.35.3](https://github.com/electron/electron/releases/tag/v0.35.3)|2015-12-04||no|4.1.1|45|13720|
|[v0.35.2](https://github.com/electron/electron/releases/tag/v0.35.2)|2015-11-27||no|4.1.1|45|8457|
|[v0.35.1](https://github.com/electron/electron/releases/tag/v0.35.1)|2015-11-20||no|4.1.1|45|11321|
|[v0.35.0](https://github.com/electron/electron/releases/tag/v0.35.0)|2015-11-16||no|||8313|
|[v0.34.5](https://github.com/electron/electron/releases/tag/v0.34.5)|2015-11-26||no|||10588|
|[v0.34.4](https://github.com/electron/electron/releases/tag/v0.34.4)|2015-11-24||no|4.1.1|45|2771|
|[v0.34.3](https://github.com/electron/electron/releases/tag/v0.34.3)|2015-11-06||no|4.1.1|45|13410|
|[v0.34.2](https://github.com/electron/electron/releases/tag/v0.34.2)|2015-10-30||no|4.1.1|45|9787|
|[v0.34.1](https://github.com/electron/electron/releases/tag/v0.34.1)|2015-10-23||no|4.1.1|45|11503|
|[v0.34.0](https://github.com/electron/electron/releases/tag/v0.34.0)|2015-10-16||no|4.1.1|45|26784|
|[v0.33.9](https://github.com/electron/electron/releases/tag/v0.33.9)|2015-10-16||no|4.1.1|45|9361|
|[v0.33.8](https://github.com/electron/electron/releases/tag/v0.33.8)|2015-10-14||no|4.1.1|45|3844|
|[v0.33.7](https://github.com/electron/electron/releases/tag/v0.33.7)|2015-10-10||no|4.1.1|45|6432|
|[v0.33.6](https://github.com/electron/electron/releases/tag/v0.33.6)|2015-10-05||no|4.1.1|45|6137|
|[v0.33.5](https://github.com/electron/electron/releases/tag/v0.33.5)|2015-10-05||no|||2485|
|[v0.33.4](https://github.com/electron/electron/releases/tag/v0.33.4)|2015-10-02||no|4.1.1|45|3737|
|[v0.33.3](https://github.com/electron/electron/releases/tag/v0.33.3)|2015-09-26||no|4.1.1|45|6838|
|[v0.33.2](https://github.com/electron/electron/releases/tag/v0.33.2)|2015-09-25||no|4.1.1|45|2558|
|[v0.33.1](https://github.com/electron/electron/releases/tag/v0.33.1)|2015-09-22||no|4.1.1|45|4005|
|[v0.33.0](https://github.com/electron/electron/releases/tag/v0.33.0)|2015-09-17||no|5.0.0-pre|45|7330|
|[v0.32.3](https://github.com/electron/electron/releases/tag/v0.32.3)|2015-09-15||no|5.0.0-pre|45|4791|
|[v0.32.2](https://github.com/electron/electron/releases/tag/v0.32.2)|2015-09-10||no|3.3.0|45|3402|
|[v0.32.1](https://github.com/electron/electron/releases/tag/v0.32.1)|2015-09-09||no|||3981|
|[v0.32.0](https://github.com/electron/electron/releases/tag/v0.32.0)|2015-09-09||no|||437|
|[v0.31.2](https://github.com/electron/electron/releases/tag/v0.31.2)|2015-09-02||no|3.3.0|45|9552|
|[v0.31.1](https://github.com/electron/electron/releases/tag/v0.31.1)|2015-08-28||no|||2608|
|[v0.31.0](https://github.com/electron/electron/releases/tag/v0.31.0)|2015-08-26||no|3.1.0|44|2340|
|[v0.30.8](https://github.com/electron/electron/releases/tag/v0.30.8)|2015-09-26||no|||12516|
|[v0.30.7](https://github.com/electron/electron/releases/tag/v0.30.7)|2015-09-24||no|||3169|
|[v0.30.6](https://github.com/electron/electron/releases/tag/v0.30.6)|2015-08-26||no|||3312|
|[v0.30.5](https://github.com/electron/electron/releases/tag/v0.30.5)|2015-08-21||no|||1358|
|[v0.30.4](https://github.com/electron/electron/releases/tag/v0.30.4)|2015-08-10||no|3.1.0|44|5176|
|[v0.30.3](https://github.com/electron/electron/releases/tag/v0.30.3)|2015-08-07||no|||2387|
|[v0.30.2](https://github.com/electron/electron/releases/tag/v0.30.2)|2015-07-30||no|||6484|
|[v0.30.1](https://github.com/electron/electron/releases/tag/v0.30.1)|2015-07-24||no|||2940|
|[v0.30.0](https://github.com/electron/electron/releases/tag/v0.30.0)|2015-07-16||no|||8973|
|[v0.29.2](https://github.com/electron/electron/releases/tag/v0.29.2)|2015-07-07||no|2.3.1|43|18115|
|[v0.29.1](https://github.com/electron/electron/releases/tag/v0.29.1)|2015-07-03||no|2.3.1|43|1533|
|[v0.29.0](https://github.com/electron/electron/releases/tag/v0.29.0)|2015-07-03||no|||576|
|[v0.28.3](https://github.com/electron/electron/releases/tag/v0.28.3)|2015-06-23||no|2.2.1|43|7691|
|[v0.28.2](https://github.com/electron/electron/releases/tag/v0.28.2)|2015-06-18||no|2.2.1|43|2695|
|[v0.28.1](https://github.com/electron/electron/releases/tag/v0.28.1)|2015-06-12||no|2.2.1|43|2734|
|[v0.28.0](https://github.com/electron/electron/releases/tag/v0.28.0)|2015-06-11||no|2.2.1|43|366|
|[v0.27.3](https://github.com/electron/electron/releases/tag/v0.27.3)|2015-06-08||no|1.6.3|43|3254|
|[v0.27.2](https://github.com/electron/electron/releases/tag/v0.27.2)|2015-06-01||no|1.6.3|43|3171|
|[v0.27.1](https://github.com/electron/electron/releases/tag/v0.27.1)|2015-05-28||no|1.6.3|42|1170|
|[v0.27.0](https://github.com/electron/electron/releases/tag/v0.27.0)|2015-05-27||no|1.6.3|42|363|
|[v0.26.1](https://github.com/electron/electron/releases/tag/v0.26.1)|2015-05-21||no|1.6.3|42|5581|
|[v0.26.0](https://github.com/electron/electron/releases/tag/v0.26.0)|2015-05-12||no|1.6.3|42|3839|
|[v0.25.3](https://github.com/electron/electron/releases/tag/v0.25.3)|2015-05-08||no|1.6.3|42|4381|
|[v0.25.2](https://github.com/electron/electron/releases/tag/v0.25.2)|2015-05-01||no|1.6.3|42|3181|
|[v0.25.1](https://github.com/electron/electron/releases/tag/v0.25.1)|2015-04-23||no|1.6.3|42|5454|
|[v0.25.0](https://github.com/electron/electron/releases/tag/v0.25.0)|2015-04-22||no|1.6.3|42|416|
|[v0.24.0](https://github.com/electron/electron/releases/tag/v0.24.0)|2015-04-17||no|1.6.3|41|3884|
|[v0.23.0](https://github.com/electron/electron/releases/tag/v0.23.0)|2015-04-12||no|1.6.3|41|1108|
|[v0.22.3](https://github.com/electron/electron/releases/tag/v0.22.3)|2015-03-30||no|1.6.3|41|7442|
|[v0.22.2](https://github.com/electron/electron/releases/tag/v0.22.2)|2015-03-23||no|1.5.1|41|582|
|[v0.22.1](https://github.com/electron/electron/releases/tag/v0.22.1)|2015-03-18||no|1.5.1|41|1994|
|[v0.22.0](https://github.com/electron/electron/releases/tag/v0.22.0)|2015-03-18||no|||4954|
|[v0.21.3](https://github.com/electron/electron/releases/tag/v0.21.3)|2015-03-03||no|1.5.1|41|1801|
|[v0.21.2](https://github.com/electron/electron/releases/tag/v0.21.2)|2015-02-05||no|1.0.0-pre|40|2045|
|[v0.21.1](https://github.com/electron/electron/releases/tag/v0.21.1)|2015-02-03||no|1.0.0-pre|40|598|
|[v0.21.0](https://github.com/electron/electron/releases/tag/v0.21.0)|2015-01-28||no|1.0.0-pre|40|1207|
|[v0.20.8](https://github.com/electron/electron/releases/tag/v0.20.8)|2015-01-27||no|0.13.0-pre|39|72|
|[v0.20.7](https://github.com/electron/electron/releases/tag/v0.20.7)|2015-01-20||no|0.13.0-pre|39|400|
|[v0.20.6](https://github.com/electron/electron/releases/tag/v0.20.6)|2015-01-19||no|0.13.0-pre|39|558|
|[v0.20.5](https://github.com/electron/electron/releases/tag/v0.20.5)|2015-01-08||no|0.13.0-pre|39|588|
|[v0.20.4](https://github.com/electron/electron/releases/tag/v0.20.4)|2015-01-06||no|0.13.0-pre|39|375|
|[v0.20.3](https://github.com/electron/electron/releases/tag/v0.20.3)|2014-12-29||no|0.13.0-pre|39|555|
|[v0.20.2](https://github.com/electron/electron/releases/tag/v0.20.2)|2014-12-22||no|0.13.0-pre|39|848|
|[v0.20.1](https://github.com/electron/electron/releases/tag/v0.20.1)|2014-12-18||no|0.13.0-pre|39|371|
|[v0.20.0](https://github.com/electron/electron/releases/tag/v0.20.0)|2014-12-13||no|0.13.0-pre|39|288|
|[v0.19.5](https://github.com/electron/electron/releases/tag/v0.19.5)|2014-11-28||no|||3217|
|[v0.19.4](https://github.com/electron/electron/releases/tag/v0.19.4)|2014-11-21||no|||832|
|[v0.19.3](https://github.com/electron/electron/releases/tag/v0.19.3)|2014-11-20||no|||110|
|[v0.19.2](https://github.com/electron/electron/releases/tag/v0.19.2)|2014-11-15||no|||416|
|[v0.19.1](https://github.com/electron/electron/releases/tag/v0.19.1)|2014-11-04||no|||905|
|[v0.19.0](https://github.com/electron/electron/releases/tag/v0.19.0)|2014-10-30||no|||408|
|[v0.18.2](https://github.com/electron/electron/releases/tag/v0.18.2)|2014-10-21||no|||604|
|[v0.18.1](https://github.com/electron/electron/releases/tag/v0.18.1)|2014-10-17||no|||309|
|[v0.18.0](https://github.com/electron/electron/releases/tag/v0.18.0)|2014-10-14||no|||536|
|[v0.17.2](https://github.com/electron/electron/releases/tag/v0.17.2)|2014-10-06||no|||596|
|[v0.17.1](https://github.com/electron/electron/releases/tag/v0.17.1)|2014-10-01||no|||303|
|[v0.17.0](https://github.com/electron/electron/releases/tag/v0.17.0)|2014-10-01||no|||71|
|[v0.16.3](https://github.com/electron/electron/releases/tag/v0.16.3)|2014-09-20||no|||428|
|[v0.16.2](https://github.com/electron/electron/releases/tag/v0.16.2)|2014-09-09||no|||975|
|[v0.16.1](https://github.com/electron/electron/releases/tag/v0.16.1)|2014-09-08||no|||106|
|[v0.16.0](https://github.com/electron/electron/releases/tag/v0.16.0)|2014-09-06||no|||112|
|[v0.15.9](https://github.com/electron/electron/releases/tag/v0.15.9)|2014-08-20||no|||1540|
|[v0.15.8](https://github.com/electron/electron/releases/tag/v0.15.8)|2014-08-18||no|||1928|
|[v0.15.7](https://github.com/electron/electron/releases/tag/v0.15.7)|2014-08-15||no|||1928|
|[v0.15.6](https://github.com/electron/electron/releases/tag/v0.15.6)|2014-08-13||no|||1938|
|[v0.15.5](https://github.com/electron/electron/releases/tag/v0.15.5)|2014-08-11||no|||1958|
|[v0.15.4](https://github.com/electron/electron/releases/tag/v0.15.4)|2014-08-07||no|||2163|
|[v0.15.3](https://github.com/electron/electron/releases/tag/v0.15.3)|2014-08-06||no|||3850|
|[v0.15.2](https://github.com/electron/electron/releases/tag/v0.15.2)|2014-08-04||no|||1924|
|[v0.15.1](https://github.com/electron/electron/releases/tag/v0.15.1)|2014-07-31||no|||2048|
|[v0.15.0](https://github.com/electron/electron/releases/tag/v0.15.0)|2014-07-29||no|||1973|
|[v0.14.3](https://github.com/electron/electron/releases/tag/v0.14.3)|2014-07-27||no|||1879|
|[v0.14.2](https://github.com/electron/electron/releases/tag/v0.14.2)|2014-07-25||no|||1866|
|[v0.14.1](https://github.com/electron/electron/releases/tag/v0.14.1)|2014-07-24||no|||1855|
|[v0.14.0](https://github.com/electron/electron/releases/tag/v0.14.0)|2014-07-22||no|||1930|
|[v0.13.3](https://github.com/electron/electron/releases/tag/v0.13.3)|2014-06-25||no|||2250|
|[v0.13.2](https://github.com/electron/electron/releases/tag/v0.13.2)|2014-06-18||no|||365|
|[v0.13.1](https://github.com/electron/electron/releases/tag/v0.13.1)|2014-06-14||no|||373|
|[v0.13.0](https://github.com/electron/electron/releases/tag/v0.13.0)|2014-06-05||no|||725|
|[v0.12.7](https://github.com/electron/electron/releases/tag/v0.12.7)|2014-05-27||no|||408|
|[v0.12.6](https://github.com/electron/electron/releases/tag/v0.12.6)|2014-05-26||no|||232|
|[v0.12.5](https://github.com/electron/electron/releases/tag/v0.12.5)|2014-05-19||no|||16911|
|[v0.12.4](https://github.com/electron/electron/releases/tag/v0.12.4)|2014-05-12||no|||594|
|[v0.12.3](https://github.com/electron/electron/releases/tag/v0.12.3)|2014-05-07||no|||937|
|[v0.12.2](https://github.com/electron/electron/releases/tag/v0.12.2)|2014-05-05||no|||884|
|[v0.12.1](https://github.com/electron/electron/releases/tag/v0.12.1)|2014-05-05||no|||85|
|[v0.12.0](https://github.com/electron/electron/releases/tag/v0.12.0)|2014-04-29||no|||81|
|[v0.11.10](https://github.com/electron/electron/releases/tag/v0.11.10)|2014-04-14||no|||92|
|[v0.11.9](https://github.com/electron/electron/releases/tag/v0.11.9)|2014-04-11||no|||78|
|[v0.11.8](https://github.com/electron/electron/releases/tag/v0.11.8)|2014-04-10||no|||78|
|[v0.11.7](https://github.com/electron/electron/releases/tag/v0.11.7)|2014-04-08||no|||78|
|[v0.11.6](https://github.com/electron/electron/releases/tag/v0.11.6)|2014-04-07||no|||80|
|[v0.11.5](https://github.com/electron/electron/releases/tag/v0.11.5)|2014-04-02||no|||81|
|[v0.11.4](https://github.com/electron/electron/releases/tag/v0.11.4)|2014-03-28||no|||81|
|[v0.11.3](https://github.com/electron/electron/releases/tag/v0.11.3)|2014-03-25||no|||75|
|[v0.11.2](https://github.com/electron/electron/releases/tag/v0.11.2)|2014-03-24||no|||80|
|[v0.11.1](https://github.com/electron/electron/releases/tag/v0.11.1)|2014-03-18||no|||76|
|[v0.11.0](https://github.com/electron/electron/releases/tag/v0.11.0)|2014-03-16||no|||69|
|[v0.10.7](https://github.com/electron/electron/releases/tag/v0.10.7)|2014-03-11||no|||111|
|[v0.10.6](https://github.com/electron/electron/releases/tag/v0.10.6)|2014-03-07||no|||79|
|[v0.10.5](https://github.com/electron/electron/releases/tag/v0.10.5)|2014-03-05||no|||84|
|[v0.10.4](https://github.com/electron/electron/releases/tag/v0.10.4)|2014-03-02||no|||78|
|[v0.10.3](https://github.com/electron/electron/releases/tag/v0.10.3)|2014-02-28||no|||103|
|[v0.10.2](https://github.com/electron/electron/releases/tag/v0.10.2)|2014-02-27||no|||75|
|[v0.10.1](https://github.com/electron/electron/releases/tag/v0.10.1)|2014-02-25||no|||94|
|[v0.10.0](https://github.com/electron/electron/releases/tag/v0.10.0)|2014-02-24||no|||0|
|[v0.9.3](https://github.com/electron/electron/releases/tag/v0.9.3)|2014-02-17||no|||1848|
|[v0.9.2](https://github.com/electron/electron/releases/tag/v0.9.2)|2014-02-12||no|||1870|
|[v0.9.1](https://github.com/electron/electron/releases/tag/v0.9.1)|2014-02-04||no|||1858|
|[v0.9.0](https://github.com/electron/electron/releases/tag/v0.9.0)|2014-02-02||no|||1847|
|[v0.8.7](https://github.com/electron/electron/releases/tag/v0.8.7)|2014-01-27||no|||1871|
|[v0.8.6](https://github.com/electron/electron/releases/tag/v0.8.6)|2014-01-23||no|||1857|
|[v0.8.5](https://github.com/electron/electron/releases/tag/v0.8.5)|2014-01-14||no|||1874|
|[v0.8.4](https://github.com/electron/electron/releases/tag/v0.8.4)|2014-01-13||no|||1856|
|[v0.8.3](https://github.com/electron/electron/releases/tag/v0.8.3)|2014-01-08||no|||1857|
|[v0.8.2](https://github.com/electron/electron/releases/tag/v0.8.2)|2014-01-07||no|||1906|
|[v0.8.1](https://github.com/electron/electron/releases/tag/v0.8.1)|2013-12-29||no|||1870|
|[v0.8.0](https://github.com/electron/electron/releases/tag/v0.8.0)|2013-12-27||no|||1852|
|[v0.7.6](https://github.com/electron/electron/releases/tag/v0.7.6)|2013-12-09||no|||1920|
|[v0.7.5](https://github.com/electron/electron/releases/tag/v0.7.5)|2013-12-05||no|||1856|
|[v0.7.4](https://github.com/electron/electron/releases/tag/v0.7.4)|2013-12-04||no|||1940|
|[v0.7.3](https://github.com/electron/electron/releases/tag/v0.7.3)|2013-11-29||no|||1911|
|[v0.7.2](https://github.com/electron/electron/releases/tag/v0.7.2)|2013-11-28||no|||1886|
|[v0.7.1](https://github.com/electron/electron/releases/tag/v0.7.1)|2013-11-28||no|||1867|
|[v0.7.0](https://github.com/electron/electron/releases/tag/v0.7.0)|2013-11-27||no|||1865|
|[v0.6.12](https://github.com/electron/electron/releases/tag/v0.6.12)|2013-11-22||no|||933|
|[v0.6.11](https://github.com/electron/electron/releases/tag/v0.6.11)|2013-11-20||no|||935|
|[v0.6.10](https://github.com/electron/electron/releases/tag/v0.6.10)|2013-11-11||no|||940|
|[v0.6.9](https://github.com/electron/electron/releases/tag/v0.6.9)|2013-11-07||no|||940|
|[v0.6.8](https://github.com/electron/electron/releases/tag/v0.6.8)|2013-11-05||no|||925|
|[v0.6.7](https://github.com/electron/electron/releases/tag/v0.6.7)|2013-11-02||no|||931|
|[v0.6.6](https://github.com/electron/electron/releases/tag/v0.6.6)|2013-10-28||no|||941|
|[v0.6.5](https://github.com/electron/electron/releases/tag/v0.6.5)|2013-10-26||no|||904|
|[v0.6.4](https://github.com/electron/electron/releases/tag/v0.6.4)|2013-10-22||no|||923|
|[v0.6.3](https://github.com/electron/electron/releases/tag/v0.6.3)|2013-10-21||no|||907|
|[v0.6.2](https://github.com/electron/electron/releases/tag/v0.6.2)|2013-10-17||no|||909|
|[v0.6.1](https://github.com/electron/electron/releases/tag/v0.6.1)|2013-10-14||no|||910|
|[v0.6.0](https://github.com/electron/electron/releases/tag/v0.6.0)|2013-10-10||no|||911|
|[v0.5.4](https://github.com/electron/electron/releases/tag/v0.5.4)|2013-10-04||no|||935|
|[v0.5.3](https://github.com/electron/electron/releases/tag/v0.5.3)|2013-09-29||no|||897|
|[v0.5.2](https://github.com/electron/electron/releases/tag/v0.5.2)|2013-09-29||no|||899|
|[v0.5.1](https://github.com/electron/electron/releases/tag/v0.5.1)|2013-09-26||no|||918|
|[v0.5.0](https://github.com/electron/electron/releases/tag/v0.5.0)|2013-09-25||no|||905|
|[v0.4.9](https://github.com/electron/electron/releases/tag/v0.4.9)|2013-09-20||no|||897|
|[v0.4.8](https://github.com/electron/electron/releases/tag/v0.4.8)|2013-09-20||no|||896|
|[v0.4.7](https://github.com/electron/electron/releases/tag/v0.4.7)|2013-09-13||no|||897|
|[v0.4.6](https://github.com/electron/electron/releases/tag/v0.4.6)|2013-09-12||no|||900|
|[v0.4.5](https://github.com/electron/electron/releases/tag/v0.4.5)|2013-09-09||no|||899|
|[v0.4.4](https://github.com/electron/electron/releases/tag/v0.4.4)|2013-09-05||no|||899|
|[v0.4.3](https://github.com/electron/electron/releases/tag/v0.4.3)|2013-09-02||no|||899|
|[v0.4.2](https://github.com/electron/electron/releases/tag/v0.4.2)|2013-09-02||no|||901|
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
