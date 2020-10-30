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
|[v12.0.0-nightly.20201030](https://github.com/electron/electron/releases/tag/v12.0.0-nightly.20201030)|2020-10-30||yes|14.15.0|88|12|
|[v12.0.0-nightly.20201026](https://github.com/electron/electron/releases/tag/v12.0.0-nightly.20201026)|2020-10-26|nightly|yes|14.14.0|88|37|
|[v12.0.0-nightly.20201023](https://github.com/electron/electron/releases/tag/v12.0.0-nightly.20201023)|2020-10-23||yes|14.14.0|88|23|
|[v12.0.0-nightly.20201015](https://github.com/electron/electron/releases/tag/v12.0.0-nightly.20201015)|2020-10-15||yes|14.13.1|87|49|
|[v12.0.0-nightly.20201014](https://github.com/electron/electron/releases/tag/v12.0.0-nightly.20201014)|2020-10-14||yes|14.13.1|87|22|
|[v12.0.0-nightly.20201013](https://github.com/electron/electron/releases/tag/v12.0.0-nightly.20201013)|2020-10-13||yes|14.13.1|87|30|
|[v12.0.0-nightly.20200914](https://github.com/electron/electron/releases/tag/v12.0.0-nightly.20200914)|2020-09-14||yes|12.18.3|86|152|
|[v12.0.0-nightly.20200911](https://github.com/electron/electron/releases/tag/v12.0.0-nightly.20200911)|2020-09-11||yes|12.18.3|86|16|
|[v12.0.0-nightly.20200910](https://github.com/electron/electron/releases/tag/v12.0.0-nightly.20200910)|2020-09-10||yes|12.18.3|86|33|
|[v12.0.0-nightly.20200907](https://github.com/electron/electron/releases/tag/v12.0.0-nightly.20200907)|2020-09-07||yes|12.18.3|86|20|
|[v12.0.0-nightly.20200903](https://github.com/electron/electron/releases/tag/v12.0.0-nightly.20200903)|2020-09-03||yes|12.18.3|86|49|
|[v12.0.0-nightly.20200902](https://github.com/electron/electron/releases/tag/v12.0.0-nightly.20200902)|2020-09-02||yes|12.18.3|86|21|
|[v12.0.0-nightly.20200831](https://github.com/electron/electron/releases/tag/v12.0.0-nightly.20200831)|2020-08-31||yes|12.18.3|86|23|
|[v12.0.0-nightly.20200827](https://github.com/electron/electron/releases/tag/v12.0.0-nightly.20200827)|2020-08-27||yes|12.18.3|86|27|
|[v11.0.0-nightly.20200826](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200826)|2020-08-26||yes|12.18.3|86|36|
|[v11.0.0-nightly.20200825](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200825)|2020-08-25||yes|12.18.3|86|42|
|[v11.0.0-nightly.20200824](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200824)|2020-08-24||yes|12.18.3|86|25|
|[v11.0.0-nightly.20200822](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200822)|2020-08-23||yes|12.18.3|86|27|
|[v11.0.0-nightly.20200812](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200812)|2020-08-12||yes|12.18.3|86|1409|
|[v11.0.0-nightly.20200811](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200811)|2020-08-11||yes|12.18.3|86|28|
|[v11.0.0-nightly.20200805](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200805)|2020-08-05||yes|12.18.3|86|69|
|[v11.0.0-nightly.20200804](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200804)|2020-08-04||yes|12.18.3|86|18|
|[v11.0.0-nightly.20200803](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200803)|2020-08-03||yes|12.18.3|86|46|
|[v11.0.0-nightly.20200731](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200731)|2020-07-31||yes|12.18.3|86|42|
|[v11.0.0-nightly.20200730](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200730)|2020-07-30||yes|12.18.3|86|25|
|[v11.0.0-nightly.20200729](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200729)|2020-07-29||yes|12.18.3|86|28|
|[v11.0.0-nightly.20200724](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200724)|2020-07-24||yes|12.18.2|86|43|
|[v11.0.0-nightly.20200723](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200723)|2020-07-23||yes|12.18.2|86|24|
|[v11.0.0-nightly.20200721](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200721)|2020-07-22||yes|12.18.2|86|106|
|[v11.0.0-nightly.20200720](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200720)|2020-07-20||yes|12.18.2|86|21|
|[v11.0.0-nightly.20200717](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200717)|2020-07-17||yes|12.18.2|86|31|
|[v11.0.0-nightly.20200716](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200716)|2020-07-16||yes|12.18.2|86|13|
|[v11.0.0-nightly.20200709](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200709)|2020-07-09||yes|12.18.2|85|14|
|[v11.0.0-nightly.20200708](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200708)|2020-07-08||yes|12.18.2|85|50|
|[v11.0.0-nightly.20200707](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200707)|2020-07-07||yes|12.18.2|85|13|
|[v11.0.0-nightly.20200706](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200706)|2020-07-06||yes|12.18.2|85|15|
|[v11.0.0-nightly.20200703](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200703)|2020-07-03||yes|12.18.2|85|26|
|[v11.0.0-nightly.20200702](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200702)|2020-07-02||yes|12.18.2|85|16|
|[v11.0.0-nightly.20200701](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200701)|2020-07-01||yes|12.18.1|85|20|
|[v11.0.0-nightly.20200619](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200619)|2020-06-19||yes|12.18.1|85|67|
|[v11.0.0-nightly.20200618](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200618)|2020-06-18||yes|12.18.0|85|16|
|[v11.0.0-nightly.20200617](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200617)|2020-06-17||yes|12.16.3|85|17|
|[v11.0.0-nightly.20200616](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200616)|2020-06-16||yes|12.16.3|85|14|
|[v11.0.0-nightly.20200615](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200615)|2020-06-15||yes|12.16.3|85|15|
|[v11.0.0-nightly.20200611](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200611)|2020-06-11||yes|12.16.3|85|40|
|[v11.0.0-nightly.20200610](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200610)|2020-06-10||yes|12.16.3|85|19|
|[v11.0.0-nightly.20200609](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200609)|2020-06-09||yes|12.16.3|85|14|
|[v11.0.0-nightly.20200604](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200604)|2020-06-04||yes|12.16.3|85|17|
|[v11.0.0-nightly.20200603](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200603)|2020-06-03||yes|12.16.3|85|54|
|[v11.0.0-nightly.20200602](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200602)|2020-06-02||yes|12.16.3|85|14|
|[v11.0.0-nightly.20200529](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200529)|2020-05-29||yes|12.16.3|85|40|
|[v11.0.0-nightly.20200526](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200526)|2020-05-26||yes|12.16.3|84|43|
|[v11.0.0-nightly.20200525](https://github.com/electron/electron/releases/tag/v11.0.0-nightly.20200525)|2020-05-25||yes|12.16.3|84|23|
|[v11.0.0-beta.18](https://github.com/electron/electron/releases/tag/v11.0.0-beta.18)|2020-10-29|beta, beta-11-x-y|yes|12.18.3|87|160|
|[v11.0.0-beta.17](https://github.com/electron/electron/releases/tag/v11.0.0-beta.17)|2020-10-26||yes|12.18.3|87|333|
|[v11.0.0-beta.16](https://github.com/electron/electron/releases/tag/v11.0.0-beta.16)|2020-10-24||yes|12.18.3|87|490|
|[v11.0.0-beta.13](https://github.com/electron/electron/releases/tag/v11.0.0-beta.13)|2020-10-15||yes|12.18.3|87|408|
|[v11.0.0-beta.12](https://github.com/electron/electron/releases/tag/v11.0.0-beta.12)|2020-10-14||yes|12.18.3|87|990|
|[v11.0.0-beta.11](https://github.com/electron/electron/releases/tag/v11.0.0-beta.11)|2020-10-05||yes|12.18.3|87|380|
|[v11.0.0-beta.9](https://github.com/electron/electron/releases/tag/v11.0.0-beta.9)|2020-09-28||yes|12.18.3|87|958|
|[v11.0.0-beta.8](https://github.com/electron/electron/releases/tag/v11.0.0-beta.8)|2020-09-25||yes|12.18.3|87|322|
|[v11.0.0-beta.7](https://github.com/electron/electron/releases/tag/v11.0.0-beta.7)|2020-09-14||yes|12.18.3|86|356|
|[v11.0.0-beta.6](https://github.com/electron/electron/releases/tag/v11.0.0-beta.6)|2020-09-10||yes|12.18.3|86|447|
|[v11.0.0-beta.5](https://github.com/electron/electron/releases/tag/v11.0.0-beta.5)|2020-09-07||yes|12.18.3|86|292|
|[v11.0.0-beta.4](https://github.com/electron/electron/releases/tag/v11.0.0-beta.4)|2020-09-03||yes|12.18.3|86|1267|
|[v11.0.0-beta.3](https://github.com/electron/electron/releases/tag/v11.0.0-beta.3)|2020-08-31||yes|12.18.3|86|316|
|[v11.0.0-beta.1](https://github.com/electron/electron/releases/tag/v11.0.0-beta.1)|2020-08-26||yes|12.18.3|86|440|
|[v10.1.5](https://github.com/electron/electron/releases/tag/v10.1.5)|2020-10-23|latest, 10-x-y|no|12.16.3|85|6668|
|[v10.1.4](https://github.com/electron/electron/releases/tag/v10.1.4)|2020-10-20||no|12.16.3|85|6370|
|[v10.1.3](https://github.com/electron/electron/releases/tag/v10.1.3)|2020-09-29||no|12.16.3|85|23970|
|[v10.1.2](https://github.com/electron/electron/releases/tag/v10.1.2)|2020-09-14||no|12.16.3|85|17859|
|[v10.1.1](https://github.com/electron/electron/releases/tag/v10.1.1)|2020-09-01||no|12.16.3|85|29409|
|[v10.1.0](https://github.com/electron/electron/releases/tag/v10.1.0)|2020-08-28||no|12.16.3|85|9479|
|[v10.0.1](https://github.com/electron/electron/releases/tag/v10.0.1)|2020-08-27||no|12.16.3|85|537|
|[v10.0.0](https://github.com/electron/electron/releases/tag/v10.0.0)|2020-08-24||no|12.16.3|85|9297|
|[v10.0.0-nightly.20200521](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200521)|2020-05-21||yes|12.16.3|84|65|
|[v10.0.0-nightly.20200520](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200520)|2020-05-20||yes|12.16.3|84|23|
|[v10.0.0-nightly.20200519](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200519)|2020-05-19||yes|12.16.3|84|21|
|[v10.0.0-nightly.20200518](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200518)|2020-05-18||yes|12.16.3|84|19|
|[v10.0.0-nightly.20200515](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200515)|2020-05-15||yes|12.16.3|84|13|
|[v10.0.0-nightly.20200514](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200514)|2020-05-14||yes|12.16.3|84|40|
|[v10.0.0-nightly.20200513](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200513)|2020-05-13||yes|12.16.3|84|15|
|[v10.0.0-nightly.20200512](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200512)|2020-05-12||yes|12.16.3|84|22|
|[v10.0.0-nightly.20200511](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200511)|2020-05-11||yes|12.16.3|84|24|
|[v10.0.0-nightly.20200508](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200508)|2020-05-08||yes|12.16.3|84|59|
|[v10.0.0-nightly.20200507](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200507)|2020-05-07||yes|12.16.3|84|61|
|[v10.0.0-nightly.20200506](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200506)|2020-05-06||yes|12.16.3|84|15|
|[v10.0.0-nightly.20200505](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200505)|2020-05-05||yes|12.16.3|84|21|
|[v10.0.0-nightly.20200504](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200504)|2020-05-04||yes|12.16.3|84|7|
|[v10.0.0-nightly.20200501](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200501)|2020-05-01||yes|12.16.3|84|31|
|[v10.0.0-nightly.20200430](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200430)|2020-04-30||yes|12.16.3|84|16|
|[v10.0.0-nightly.20200429](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200429)|2020-04-29||yes|12.16.2|84|14|
|[v10.0.0-nightly.20200428](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200428)|2020-04-28||yes|12.16.2|84|19|
|[v10.0.0-nightly.20200427](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200427)|2020-04-27||yes|12.16.2|84|15|
|[v10.0.0-nightly.20200423](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200423)|2020-04-24||yes|12.16.2|84|16|
|[v10.0.0-nightly.20200422](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200422)|2020-04-22||yes|12.16.2|84|40|
|[v10.0.0-nightly.20200417](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200417)|2020-04-17||yes|12.16.2|84|42|
|[v10.0.0-nightly.20200416](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200416)|2020-04-16||yes|12.16.2|84|24|
|[v10.0.0-nightly.20200415](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200415)|2020-04-15||yes|12.16.2|84|26|
|[v10.0.0-nightly.20200414](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200414)|2020-04-14||yes|12.16.1|84|14|
|[v10.0.0-nightly.20200413](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200413)|2020-04-13||yes|12.16.1|83|12|
|[v10.0.0-nightly.20200410](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200410)|2020-04-10||yes|12.16.1|83|12|
|[v10.0.0-nightly.20200408](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200408)|2020-04-08||yes|12.16.1|83|33|
|[v10.0.0-nightly.20200406](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200406)|2020-04-06||yes|12.16.1|83|22|
|[v10.0.0-nightly.20200403](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200403)|2020-04-03||yes|12.16.1|83|7|
|[v10.0.0-nightly.20200402](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200402)|2020-04-02||yes|12.16.1|83|24|
|[v10.0.0-nightly.20200401](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200401)|2020-04-01||yes|12.16.1|83|13|
|[v10.0.0-nightly.20200331](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200331)|2020-03-31||yes|12.16.1|83|23|
|[v10.0.0-nightly.20200330](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200330)|2020-03-30||yes|12.16.1|83|11|
|[v10.0.0-nightly.20200327](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200327)|2020-03-27||yes|12.16.1|83|20|
|[v10.0.0-nightly.20200326](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200326)|2020-03-26||yes|12.16.1|83|11|
|[v10.0.0-nightly.20200325](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200325)|2020-03-25||yes|12.16.1|83|10|
|[v10.0.0-nightly.20200324](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200324)|2020-03-24||yes|12.16.1|83|16|
|[v10.0.0-nightly.20200323](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200323)|2020-03-23||yes|12.16.1|83|17|
|[v10.0.0-nightly.20200320](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200320)|2020-03-20||yes|12.16.1|83|26|
|[v10.0.0-nightly.20200318](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200318)|2020-03-18||yes|12.16.1|83|16|
|[v10.0.0-nightly.20200317](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200317)|2020-03-17||yes|12.16.1|83|35|
|[v10.0.0-nightly.20200316](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200316)|2020-03-16||yes|12.16.1|83|8|
|[v10.0.0-nightly.20200311](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200311)|2020-03-11||yes|12.16.1|82|7|
|[v10.0.0-nightly.20200310](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200310)|2020-03-10||yes|12.16.1|82|44|
|[v10.0.0-nightly.20200309](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200309)|2020-03-09||yes|12.16.1|82|12|
|[v10.0.0-nightly.20200306](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200306)|2020-03-06||yes|12.16.1|82|30|
|[v10.0.0-nightly.20200305](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200305)|2020-03-05||yes|12.16.1|82|10|
|[v10.0.0-nightly.20200304](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200304)|2020-03-04||yes|12.16.1|82|14|
|[v10.0.0-nightly.20200303](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200303)|2020-03-03||yes|12.16.1|82|10|
|[v10.0.0-nightly.20200226](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200226)|2020-02-26||yes|12.16.1|82|50|
|[v10.0.0-nightly.20200223](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200223)|2020-02-23||yes|12.15.0|82|18|
|[v10.0.0-nightly.20200222](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200222)|2020-02-22||yes|12.15.0|82|12|
|[v10.0.0-nightly.20200221](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200221)|2020-02-21||yes|12.15.0|82|63|
|[v10.0.0-nightly.20200218](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200218)|2020-02-18||yes|12.15.0|82|27|
|[v10.0.0-nightly.20200217](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200217)|2020-02-17||yes|12.15.0|82|13|
|[v10.0.0-nightly.20200216](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200216)|2020-02-16||yes|12.15.0|82|27|
|[v10.0.0-nightly.20200211](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200211)|2020-02-11||yes|12.15.0|82|35|
|[v10.0.0-nightly.20200210](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200210)|2020-02-10||yes|12.14.1|82|174|
|[v10.0.0-nightly.20200209](https://github.com/electron/electron/releases/tag/v10.0.0-nightly.20200209)|2020-02-09||yes|12.14.1|82|21|
|[v10.0.0-beta.25](https://github.com/electron/electron/releases/tag/v10.0.0-beta.25)|2020-08-22|beta-10-x-y|yes|12.16.3|85|3364|
|[v10.0.0-beta.24](https://github.com/electron/electron/releases/tag/v10.0.0-beta.24)|2020-08-20||yes|12.16.3|85|206|
|[v10.0.0-beta.23](https://github.com/electron/electron/releases/tag/v10.0.0-beta.23)|2020-08-17||yes|12.16.3|85|342|
|[v10.0.0-beta.21](https://github.com/electron/electron/releases/tag/v10.0.0-beta.21)|2020-08-11||yes|12.16.3|85|1224|
|[v10.0.0-beta.20](https://github.com/electron/electron/releases/tag/v10.0.0-beta.20)|2020-08-10||yes|12.16.3|85|190|
|[v10.0.0-beta.19](https://github.com/electron/electron/releases/tag/v10.0.0-beta.19)|2020-08-06||yes|12.16.3|85|257|
|[v10.0.0-beta.17](https://github.com/electron/electron/releases/tag/v10.0.0-beta.17)|2020-08-03||yes|12.16.3|85|255|
|[v10.0.0-beta.15](https://github.com/electron/electron/releases/tag/v10.0.0-beta.15)|2020-07-29||yes|12.16.3|85|362|
|[v10.0.0-beta.14](https://github.com/electron/electron/releases/tag/v10.0.0-beta.14)|2020-07-27||yes|12.16.3|85|203|
|[v10.0.0-beta.13](https://github.com/electron/electron/releases/tag/v10.0.0-beta.13)|2020-07-23||yes|12.16.3|85|179|
|[v10.0.0-beta.12](https://github.com/electron/electron/releases/tag/v10.0.0-beta.12)|2020-07-16||yes|12.16.3|85|548|
|[v10.0.0-beta.11](https://github.com/electron/electron/releases/tag/v10.0.0-beta.11)|2020-07-13||yes|12.16.3|85|276|
|[v10.0.0-beta.10](https://github.com/electron/electron/releases/tag/v10.0.0-beta.10)|2020-07-09||yes|12.16.3|85|315|
|[v10.0.0-beta.9](https://github.com/electron/electron/releases/tag/v10.0.0-beta.9)|2020-07-06||yes|12.16.3|85|332|
|[v10.0.0-beta.8](https://github.com/electron/electron/releases/tag/v10.0.0-beta.8)|2020-07-02||yes|12.16.3|85|261|
|[v10.0.0-beta.4](https://github.com/electron/electron/releases/tag/v10.0.0-beta.4)|2020-06-18||yes|12.16.3|85|409|
|[v10.0.0-beta.3](https://github.com/electron/electron/releases/tag/v10.0.0-beta.3)|2020-06-15||yes|12.16.3|85|209|
|[v10.0.0-beta.2](https://github.com/electron/electron/releases/tag/v10.0.0-beta.2)|2020-06-01||yes|12.16.3|84|389|
|[v10.0.0-beta.1](https://github.com/electron/electron/releases/tag/v10.0.0-beta.1)|2020-05-22||yes|12.16.3|84|1118|
|[v9.3.3](https://github.com/electron/electron/releases/tag/v9.3.3)|2020-10-26|9-x-y|no|12.14.1|83|3111|
|[v9.3.2](https://github.com/electron/electron/releases/tag/v9.3.2)|2020-10-05||no|12.14.1|83|23909|
|[v9.3.1](https://github.com/electron/electron/releases/tag/v9.3.1)|2020-09-15||no|12.14.1|83|22350|
|[v9.3.0](https://github.com/electron/electron/releases/tag/v9.3.0)|2020-09-03||no|12.14.1|83|28160|
|[v9.2.1](https://github.com/electron/electron/releases/tag/v9.2.1)|2020-08-18||no|12.14.1|83|42918|
|[v9.2.0](https://github.com/electron/electron/releases/tag/v9.2.0)|2020-08-07||no|12.14.1|83|33409|
|[v9.1.2](https://github.com/electron/electron/releases/tag/v9.1.2)|2020-07-28||no|12.14.1|83|32968|
|[v9.1.1](https://github.com/electron/electron/releases/tag/v9.1.1)|2020-07-20||no|12.14.1|83|24027|
|[v9.1.0](https://github.com/electron/electron/releases/tag/v9.1.0)|2020-07-06||no|12.14.1|83|51635|
|[v9.0.5](https://github.com/electron/electron/releases/tag/v9.0.5)|2020-06-22||no|12.14.1|83|31114|
|[v9.0.4](https://github.com/electron/electron/releases/tag/v9.0.4)|2020-06-12||no|12.14.1|83|32036|
|[v9.0.3](https://github.com/electron/electron/releases/tag/v9.0.3)|2020-06-08||no|12.14.1|83|13903|
|[v9.0.2](https://github.com/electron/electron/releases/tag/v9.0.2)|2020-06-02||no|12.14.1|83|17046|
|[v9.0.1](https://github.com/electron/electron/releases/tag/v9.0.1)|2020-06-01||no|12.14.1|83|3998|
|[v9.0.0](https://github.com/electron/electron/releases/tag/v9.0.0)|2020-05-19||no|12.14.1|83|77587|
|[v9.0.0-nightly.20200121](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200121)|2020-01-21||yes|12.14.1|81|186|
|[v9.0.0-nightly.20200119](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200119)|2020-01-19||yes|12.14.1|81|14|
|[v9.0.0-nightly.20200117](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200117)|2020-01-17||yes|12.14.1|81|42|
|[v9.0.0-nightly.20200116](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200116)|2020-01-16||yes|12.14.1|81|23|
|[v9.0.0-nightly.20200115](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200115)|2020-01-15||yes|12.14.1|81|22|
|[v9.0.0-nightly.20200113](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200113)|2020-01-13||yes|12.14.1|81|20|
|[v9.0.0-nightly.20200111](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200111)|2020-01-11||yes|12.14.1|81|13|
|[v9.0.0-nightly.20200110](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200110)|2020-01-10||yes|12.14.1|81|31|
|[v9.0.0-nightly.20200109](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200109)|2020-01-09||yes|12.14.0|81|20|
|[v9.0.0-nightly.20200108](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200108)|2020-01-08||yes|12.14.0|81|14|
|[v9.0.0-nightly.20200106](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200106)|2020-01-06||yes|12.14.0|81|19|
|[v9.0.0-nightly.20200105](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200105)|2020-01-05||yes|12.14.0|81|13|
|[v9.0.0-nightly.20200104](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200104)|2020-01-04||yes|12.14.0|81|34|
|[v9.0.0-nightly.20200103](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200103)|2020-01-03||yes|12.14.0|81|16|
|[v9.0.0-nightly.20200101](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20200101)|2020-01-01||yes|12.14.0|81|47|
|[v9.0.0-nightly.20191231](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191231)|2019-12-31||yes|12.14.0|81|15|
|[v9.0.0-nightly.20191230](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191230)|2019-12-30||yes|12.14.0|81|20|
|[v9.0.0-nightly.20191229](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191229)|2019-12-29||yes|12.14.0|81|23|
|[v9.0.0-nightly.20191228](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191228)|2019-12-28||yes|12.14.0|81|19|
|[v9.0.0-nightly.20191226](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191226)|2019-12-26||yes|12.14.0|81|17|
|[v9.0.0-nightly.20191225](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191225)|2019-12-25||yes|12.14.0|81|74|
|[v9.0.0-nightly.20191224](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191224)|2019-12-24||yes|12.14.0|81|21|
|[v9.0.0-nightly.20191223](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191223)|2019-12-23||yes|12.14.0|81|25|
|[v9.0.0-nightly.20191222](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191222)|2019-12-22||yes|12.14.0|81|18|
|[v9.0.0-nightly.20191221](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191221)|2019-12-21||yes|12.14.0|81|27|
|[v9.0.0-nightly.20191220](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191220)|2019-12-20||yes|12.14.0|81|18|
|[v9.0.0-nightly.20191210](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191210)|2019-12-10||yes|12.13.0|80|16|
|[v9.0.0-nightly.20191204](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191204)|2019-12-04||yes|12.13.0|80|78|
|[v9.0.0-nightly.20191203](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191203)|2019-12-03||yes|12.13.0|80|25|
|[v9.0.0-nightly.20191202](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191202)|2019-12-02||yes|12.13.0|80|25|
|[v9.0.0-nightly.20191201](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191201)|2019-12-01||yes|12.13.0|80|17|
|[v9.0.0-nightly.20191130](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191130)|2019-11-30||yes|12.13.0|80|20|
|[v9.0.0-nightly.20191129](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191129)|2019-11-29||yes|12.13.0|80|16|
|[v9.0.0-nightly.20191124](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191124)|2019-11-24||yes|12.13.0|80|30|
|[v9.0.0-nightly.20191123](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191123)|2019-11-23||yes|12.13.0|80|16|
|[v9.0.0-nightly.20191122](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191122)|2019-11-22||yes|12.13.0|80|16|
|[v9.0.0-nightly.20191121](https://github.com/electron/electron/releases/tag/v9.0.0-nightly.20191121)|2019-11-21||yes|12.13.0|80|19|
|[v9.0.0-beta.24](https://github.com/electron/electron/releases/tag/v9.0.0-beta.24)|2020-05-11|beta-9-x-y|yes|12.14.1|83|3332|
|[v9.0.0-beta.23](https://github.com/electron/electron/releases/tag/v9.0.0-beta.23)|2020-05-07||yes|12.14.1|83|156|
|[v9.0.0-beta.22](https://github.com/electron/electron/releases/tag/v9.0.0-beta.22)|2020-04-30||yes|12.14.1|83|1814|
|[v9.0.0-beta.21](https://github.com/electron/electron/releases/tag/v9.0.0-beta.21)|2020-04-28||yes|12.14.1|83|220|
|[v9.0.0-beta.20](https://github.com/electron/electron/releases/tag/v9.0.0-beta.20)|2020-04-27||yes|12.14.1|83|127|
|[v9.0.0-beta.19](https://github.com/electron/electron/releases/tag/v9.0.0-beta.19)|2020-04-24||yes|12.14.1|83|329|
|[v9.0.0-beta.18](https://github.com/electron/electron/releases/tag/v9.0.0-beta.18)|2020-04-20||yes|12.14.1|83|356|
|[v9.0.0-beta.17](https://github.com/electron/electron/releases/tag/v9.0.0-beta.17)|2020-04-17||yes|12.14.1|83|242|
|[v9.0.0-beta.16](https://github.com/electron/electron/releases/tag/v9.0.0-beta.16)|2020-04-13||yes|12.14.1|83|433|
|[v9.0.0-beta.15](https://github.com/electron/electron/releases/tag/v9.0.0-beta.15)|2020-04-09||yes|12.14.1|83|486|
|[v9.0.0-beta.14](https://github.com/electron/electron/releases/tag/v9.0.0-beta.14)|2020-04-06||yes|12.14.1|82|244|
|[v9.0.0-beta.13](https://github.com/electron/electron/releases/tag/v9.0.0-beta.13)|2020-04-02||yes|12.14.1|82|1051|
|[v9.0.0-beta.12](https://github.com/electron/electron/releases/tag/v9.0.0-beta.12)|2020-03-30||yes|12.14.1|82|334|
|[v9.0.0-beta.10](https://github.com/electron/electron/releases/tag/v9.0.0-beta.10)|2020-03-23||yes|12.14.1|82|491|
|[v9.0.0-beta.9](https://github.com/electron/electron/releases/tag/v9.0.0-beta.9)|2020-03-16||yes|12.14.1|82|371|
|[v9.0.0-beta.7](https://github.com/electron/electron/releases/tag/v9.0.0-beta.7)|2020-03-09||yes|12.14.1|82|431|
|[v9.0.0-beta.6](https://github.com/electron/electron/releases/tag/v9.0.0-beta.6)|2020-03-06||yes|12.14.1|82|532|
|[v9.0.0-beta.5](https://github.com/electron/electron/releases/tag/v9.0.0-beta.5)|2020-03-02||yes|12.14.1|82|993|
|[v9.0.0-beta.4](https://github.com/electron/electron/releases/tag/v9.0.0-beta.4)|2020-02-28||yes|12.14.1|82|263|
|[v9.0.0-beta.3](https://github.com/electron/electron/releases/tag/v9.0.0-beta.3)|2020-02-26||yes|12.14.1|82|236|
|[v9.0.0-beta.2](https://github.com/electron/electron/releases/tag/v9.0.0-beta.2)|2020-02-16||yes|12.14.1|82|385|
|[v9.0.0-beta.1](https://github.com/electron/electron/releases/tag/v9.0.0-beta.1)|2020-02-10||yes|12.14.1|82|256|
|[v8.5.3](https://github.com/electron/electron/releases/tag/v8.5.3)|2020-10-30|8-x-y|no|12.13.0|80|311|
|[v8.5.2](https://github.com/electron/electron/releases/tag/v8.5.2)|2020-09-22||no|12.13.0|80|9024|
|[v8.5.1](https://github.com/electron/electron/releases/tag/v8.5.1)|2020-09-03||no|12.13.0|80|6379|
|[v8.5.0](https://github.com/electron/electron/releases/tag/v8.5.0)|2020-08-07||no|12.13.0|80|13600|
|[v8.4.1](https://github.com/electron/electron/releases/tag/v8.4.1)|2020-07-23||no|12.13.0|80|17089|
|[v8.4.0](https://github.com/electron/electron/releases/tag/v8.4.0)|2020-07-07||no|12.13.0|80|9739|
|[v8.3.4](https://github.com/electron/electron/releases/tag/v8.3.4)|2020-06-25||no|12.13.0|80|11165|
|[v8.3.3](https://github.com/electron/electron/releases/tag/v8.3.3)|2020-06-18||no|12.13.0|80|7475|
|[v8.3.2](https://github.com/electron/electron/releases/tag/v8.3.2)|2020-06-15||no|12.13.0|80|2465|
|[v8.3.1](https://github.com/electron/electron/releases/tag/v8.3.1)|2020-06-01||no|12.13.0|80|11326|
|[v8.3.0](https://github.com/electron/electron/releases/tag/v8.3.0)|2020-05-15||no|12.13.0|80|35466|
|[v8.2.5](https://github.com/electron/electron/releases/tag/v8.2.5)|2020-04-30||no|12.13.0|80|49984|
|[v8.2.4](https://github.com/electron/electron/releases/tag/v8.2.4)|2020-04-28||no|12.13.0|80|14268|
|[v8.2.3](https://github.com/electron/electron/releases/tag/v8.2.3)|2020-04-16||no|12.13.0|80|34475|
|[v8.2.2](https://github.com/electron/electron/releases/tag/v8.2.2)|2020-04-13||no|12.13.0|80|17917|
|[v8.2.1](https://github.com/electron/electron/releases/tag/v8.2.1)|2020-04-06||no|12.13.0|80|17682|
|[v8.2.0](https://github.com/electron/electron/releases/tag/v8.2.0)|2020-03-24||no|12.13.0|80|46146|
|[v8.1.1](https://github.com/electron/electron/releases/tag/v8.1.1)|2020-03-10||no|12.13.0|80|47609|
|[v8.1.0](https://github.com/electron/electron/releases/tag/v8.1.0)|2020-03-06||no|12.13.0|80|8558|
|[v8.0.3](https://github.com/electron/electron/releases/tag/v8.0.3)|2020-03-03||no|12.13.0|80|12673|
|[v8.0.2](https://github.com/electron/electron/releases/tag/v8.0.2)|2020-02-26||no|12.13.0|80|14189|
|[v8.0.1](https://github.com/electron/electron/releases/tag/v8.0.1)|2020-02-14||no|12.13.0|80|33913|
|[v8.0.0](https://github.com/electron/electron/releases/tag/v8.0.0)|2020-02-03||no|12.13.0|80|87426|
|[v8.0.0-nightly.20191105](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191105)|2019-11-05||yes|12.13.0|80|67|
|[v8.0.0-nightly.20191101](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191101)|2019-11-01||yes|12.13.0|80|34|
|[v8.0.0-nightly.20191023](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191023)|2019-10-23||yes|12.13.0|79|94|
|[v8.0.0-nightly.20191021](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191021)|2019-10-21||yes|12.12.0|79|37|
|[v8.0.0-nightly.20191020](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191020)|2019-10-20||yes|12.12.0|79|34|
|[v8.0.0-nightly.20191019](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191019)|2019-10-19||yes|12.12.0|79|29|
|[v8.0.0-nightly.20191017](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191017)|2019-10-17||yes|12.10.0|79|35|
|[v8.0.0-nightly.20191012](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191012)|2019-10-12||yes|12.9.1|79|24|
|[v8.0.0-nightly.20191011](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191011)|2019-10-11||yes|12.9.1|79|19|
|[v8.0.0-nightly.20191009](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191009)|2019-10-09||yes|12.9.1|79|21|
|[v8.0.0-nightly.20191006](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191006)|2019-10-06||yes|12.9.1|79|19|
|[v8.0.0-nightly.20191005](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191005)|2019-10-05||yes|12.9.1|79|21|
|[v8.0.0-nightly.20191004](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191004)|2019-10-04||yes|12.9.1|79|15|
|[v8.0.0-nightly.20191001](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20191001)|2019-10-01||yes|12.9.1|79|30|
|[v8.0.0-nightly.20190930](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190930)|2019-09-30||yes|12.9.1|79|21|
|[v8.0.0-nightly.20190929](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190929)|2019-09-29||yes|12.9.1|79|18|
|[v8.0.0-nightly.20190926](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190926)|2019-09-26||yes|12.9.1|79|25|
|[v8.0.0-nightly.20190924](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190924)|2019-09-24||yes|12.9.1|79|19|
|[v8.0.0-nightly.20190923](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190923)|2019-09-23||yes|12.9.1|79|17|
|[v8.0.0-nightly.20190920](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190920)|2019-09-20||yes|12.9.1|79|31|
|[v8.0.0-nightly.20190919](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190919)|2019-09-19||yes|12.9.1|79|20|
|[v8.0.0-nightly.20190917](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190917)|2019-09-17||yes|12.9.1|78|21|
|[v8.0.0-nightly.20190915](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190915)|2019-09-15||yes|12.9.1|78|17|
|[v8.0.0-nightly.20190914](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190914)|2019-09-14||yes|12.9.1|78|20|
|[v8.0.0-nightly.20190913](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190913)|2019-09-13||yes|12.9.1|78|17|
|[v8.0.0-nightly.20190911](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190911)|2019-09-11||yes|12.9.1|78|17|
|[v8.0.0-nightly.20190910](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190910)|2019-09-10||yes|12.9.1|78|20|
|[v8.0.0-nightly.20190909](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190909)|2019-09-09||yes|12.9.1|78|22|
|[v8.0.0-nightly.20190907](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190907)|2019-09-08||yes|12.9.1|78|16|
|[v8.0.0-nightly.20190902](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190902)|2019-09-02||yes|12.9.1|78|18|
|[v8.0.0-nightly.20190901](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190901)|2019-09-01||yes|12.9.1|78|35|
|[v8.0.0-nightly.20190830](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190830)|2019-08-30||yes|12.9.1|78|29|
|[v8.0.0-nightly.20190828](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190828)|2019-08-28||yes|12.9.1|78|10|
|[v8.0.0-nightly.20190827](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190827)|2019-08-28||yes|12.9.1|78|8|
|[v8.0.0-nightly.20190825](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190825)|2019-08-25||yes|12.9.0|78|32|
|[v8.0.0-nightly.20190824](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190824)|2019-08-24||yes|12.9.0|78|15|
|[v8.0.0-nightly.20190820](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190820)|2019-08-20||yes|12.8.1|78|16|
|[v8.0.0-nightly.20190819](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190819)|2019-08-20||yes|12.8.0|78|31|
|[v8.0.0-nightly.20190818](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190818)|2019-08-18||yes|12.8.0|78|18|
|[v8.0.0-nightly.20190817](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190817)|2019-08-17||yes|12.8.0|78|19|
|[v8.0.0-nightly.20190816](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190816)|2019-08-16||yes|12.8.0|78|18|
|[v8.0.0-nightly.20190815](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190815)|2019-08-15||yes|12.8.0|78|21|
|[v8.0.0-nightly.20190814](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190814)|2019-08-14||yes|12.8.0|78|18|
|[v8.0.0-nightly.20190813](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190813)|2019-08-13||yes|12.8.0|78|19|
|[v8.0.0-nightly.20190812](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190812)|2019-08-12||yes|12.6.0|78|20|
|[v8.0.0-nightly.20190811](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190811)|2019-08-12||yes|12.6.0|78|18|
|[v8.0.0-nightly.20190810](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190810)|2019-08-11||yes|12.6.0|78|19|
|[v8.0.0-nightly.20190809](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190809)|2019-08-09||yes|12.6.0|78|15|
|[v8.0.0-nightly.20190808](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190808)|2019-08-08||yes|12.6.0|78|20|
|[v8.0.0-nightly.20190807](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190807)|2019-08-07||yes|12.6.0|78|24|
|[v8.0.0-nightly.20190806](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190806)|2019-08-06||yes|12.6.0|78|18|
|[v8.0.0-nightly.20190803](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190803)|2019-08-04||yes|12.6.0|78|36|
|[v8.0.0-nightly.20190802](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190802)|2019-08-02||yes|12.6.0|78|22|
|[v8.0.0-nightly.20190801](https://github.com/electron/electron/releases/tag/v8.0.0-nightly.20190801)|2019-08-01||yes|12.6.0|78|16|
|[v8.0.0-beta.9](https://github.com/electron/electron/releases/tag/v8.0.0-beta.9)|2020-01-30|beta-8-x-y|yes|12.13.0|80|412|
|[v8.0.0-beta.8](https://github.com/electron/electron/releases/tag/v8.0.0-beta.8)|2020-01-29||yes|12.13.0|80|155|
|[v8.0.0-beta.7](https://github.com/electron/electron/releases/tag/v8.0.0-beta.7)|2020-01-16||yes|12.13.0|80|12953|
|[v8.0.0-beta.6](https://github.com/electron/electron/releases/tag/v8.0.0-beta.6)|2020-01-14||yes|12.13.0|80|308|
|[v8.0.0-beta.5](https://github.com/electron/electron/releases/tag/v8.0.0-beta.5)|2019-12-18||yes|12.13.0|80|4730|
|[v8.0.0-beta.4](https://github.com/electron/electron/releases/tag/v8.0.0-beta.4)|2019-12-04||yes|12.13.0|80|3555|
|[v8.0.0-beta.3](https://github.com/electron/electron/releases/tag/v8.0.0-beta.3)|2019-11-20||yes|12.13.0|80|1168|
|[v8.0.0-beta.2](https://github.com/electron/electron/releases/tag/v8.0.0-beta.2)|2019-11-01||yes|12.13.0|79|1290|
|[v8.0.0-beta.1](https://github.com/electron/electron/releases/tag/v8.0.0-beta.1)|2019-10-24||yes|12.13.0|79|382|
|[v7.3.3](https://github.com/electron/electron/releases/tag/v7.3.3)|2020-08-25|7-3-x|no|12.8.1|78|12670|
|[v7.3.2](https://github.com/electron/electron/releases/tag/v7.3.2)|2020-06-24||no|12.8.1|78|28877|
|[v7.3.1](https://github.com/electron/electron/releases/tag/v7.3.1)|2020-06-01||no|12.8.1|78|17318|
|[v7.3.0](https://github.com/electron/electron/releases/tag/v7.3.0)|2020-05-15||no|12.8.1|78|8723|
|[v7.2.4](https://github.com/electron/electron/releases/tag/v7.2.4)|2020-04-29|7-2-x|no|12.8.1|78|26476|
|[v7.2.3](https://github.com/electron/electron/releases/tag/v7.2.3)|2020-04-17||no|12.8.1|78|5065|
|[v7.2.2](https://github.com/electron/electron/releases/tag/v7.2.2)|2020-04-14||no|12.8.1|78|4777|
|[v7.2.1](https://github.com/electron/electron/releases/tag/v7.2.1)|2020-03-24||no|12.8.1|78|13101|
|[v7.2.0](https://github.com/electron/electron/releases/tag/v7.2.0)|2020-03-23||no|12.8.1|78|825|
|[v7.1.14](https://github.com/electron/electron/releases/tag/v7.1.14)|2020-02-28|7-1-x|no|12.8.1|78|17805|
|[v7.1.13](https://github.com/electron/electron/releases/tag/v7.1.13)|2020-02-20||no|12.8.1|78|26736|
|[v7.1.12](https://github.com/electron/electron/releases/tag/v7.1.12)|2020-02-10||no|12.8.1|78|12048|
|[v7.1.11](https://github.com/electron/electron/releases/tag/v7.1.11)|2020-01-30||no|12.8.1|78|94290|
|[v7.1.10](https://github.com/electron/electron/releases/tag/v7.1.10)|2020-01-22||no|12.8.1|78|32102|
|[v7.1.9](https://github.com/electron/electron/releases/tag/v7.1.9)|2020-01-13||no|12.8.1|78|35705|
|[v7.1.8](https://github.com/electron/electron/releases/tag/v7.1.8)|2020-01-08||no|12.8.1|78|20570|
|[v7.1.7](https://github.com/electron/electron/releases/tag/v7.1.7)|2019-12-19||no|12.8.1|78|58489|
|[v7.1.6](https://github.com/electron/electron/releases/tag/v7.1.6)|2019-12-18||no|12.8.1|78|10368|
|[v7.1.5](https://github.com/electron/electron/releases/tag/v7.1.5)|2019-12-13||no|12.8.1|78|14025|
|[v7.1.4](https://github.com/electron/electron/releases/tag/v7.1.4)|2019-12-10||no|12.8.1|78|23056|
|[v7.1.3](https://github.com/electron/electron/releases/tag/v7.1.3)|2019-12-03||no|12.8.1|78|27576|
|[v7.1.2](https://github.com/electron/electron/releases/tag/v7.1.2)|2019-11-20||no|12.8.1|78|45484|
|[v7.1.1](https://github.com/electron/electron/releases/tag/v7.1.1)|2019-11-07||no|12.8.1|78|33091|
|[v7.1.0](https://github.com/electron/electron/releases/tag/v7.1.0)|2019-11-05||no|12.8.1|78|16929|
|[v7.0.1](https://github.com/electron/electron/releases/tag/v7.0.1)|2019-11-01|7-0-x|no|12.8.1|78|29054|
|[v7.0.0](https://github.com/electron/electron/releases/tag/v7.0.0)|2019-10-21||no|12.8.1|78|114339|
|[v7.0.0-nightly.20190731](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190731)|2019-07-31||yes|12.6.0|78|47|
|[v7.0.0-nightly.20190730](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190730)|2019-07-30||yes|12.6.0|78|31|
|[v7.0.0-nightly.20190729](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190729)|2019-07-29||yes|12.6.0|78|25|
|[v7.0.0-nightly.20190728](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190728)|2019-07-28||yes|12.6.0|78|18|
|[v7.0.0-nightly.20190727](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190727)|2019-07-27||yes|12.6.0|78|27|
|[v7.0.0-nightly.20190726](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190726)|2019-07-26||yes|12.6.0|77|18|
|[v7.0.0-nightly.20190721](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190721)|2019-07-21||yes|12.6.0|77|82|
|[v7.0.0-nightly.20190720](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190720)|2019-07-20||yes|12.6.0|77|24|
|[v7.0.0-nightly.20190719](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190719)|2019-07-19||yes|12.6.0|77|15|
|[v7.0.0-nightly.20190705](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190705)|2019-07-05||yes|12.0.0|77|20|
|[v7.0.0-nightly.20190704](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190704)|2019-07-04||yes|12.0.0|77|56|
|[v7.0.0-nightly.20190702](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190702)|2019-07-02||yes|12.0.0|77|21|
|[v7.0.0-nightly.20190701](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190701)|2019-07-01||yes|12.0.0|77|17|
|[v7.0.0-nightly.20190630](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190630)|2019-07-01||yes|12.0.0|77|16|
|[v7.0.0-nightly.20190629](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190629)|2019-06-29||yes|12.0.0|77|18|
|[v7.0.0-nightly.20190627](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190627)|2019-06-27||yes|12.0.0|77|22|
|[v7.0.0-nightly.20190624](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190624)|2019-06-24||yes|12.0.0|77|25|
|[v7.0.0-nightly.20190623](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190623)|2019-06-23||yes|12.0.0|77|13|
|[v7.0.0-nightly.20190622](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190622)|2019-06-22||yes|12.0.0|77|21|
|[v7.0.0-nightly.20190619](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190619)|2019-06-19||yes|12.0.0|77|21|
|[v7.0.0-nightly.20190618](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190618)|2019-06-18||yes|12.0.0|77|19|
|[v7.0.0-nightly.20190616](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190616)|2019-06-16||yes|12.0.0|77|25|
|[v7.0.0-nightly.20190615](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190615)|2019-06-15||yes|12.0.0|77|19|
|[v7.0.0-nightly.20190613](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190613)|2019-06-13||yes|12.0.0|77|22|
|[v7.0.0-nightly.20190612](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190612)|2019-06-12||yes|12.0.0|77|23|
|[v7.0.0-nightly.20190611](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190611)|2019-06-11||yes|12.0.0|77|18|
|[v7.0.0-nightly.20190609](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190609)|2019-06-09||yes|12.0.0|77|14|
|[v7.0.0-nightly.20190608](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190608)|2019-06-08||yes|12.0.0|77|21|
|[v7.0.0-nightly.20190607](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190607)|2019-06-07||yes|12.0.0|77|20|
|[v7.0.0-nightly.20190606](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190606)|2019-06-06||yes|12.0.0|77|24|
|[v7.0.0-nightly.20190605](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190605)|2019-06-05||yes|12.0.0|77|16|
|[v7.0.0-nightly.20190604](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190604)|2019-06-04||yes|12.0.0|77|14|
|[v7.0.0-nightly.20190603](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190603)|2019-06-03||yes|12.0.0|76|19|
|[v7.0.0-nightly.20190602](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190602)|2019-06-02||yes|12.0.0|76|17|
|[v7.0.0-nightly.20190531](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190531)|2019-05-31||yes|12.0.0|76|20|
|[v7.0.0-nightly.20190530](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190530)|2019-05-30||yes|12.0.0|76|21|
|[v7.0.0-nightly.20190529](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190529)|2019-05-29||yes|12.0.0|76|21|
|[v7.0.0-nightly.20190521](https://github.com/electron/electron/releases/tag/v7.0.0-nightly.20190521)|2019-05-21||yes|12.0.0|76|71|
|[v7.0.0-beta.7](https://github.com/electron/electron/releases/tag/v7.0.0-beta.7)|2019-10-16|beta-7-0-x|yes|12.8.1|78|447|
|[v7.0.0-beta.6](https://github.com/electron/electron/releases/tag/v7.0.0-beta.6)|2019-10-09||yes|12.8.1|78|597|
|[v7.0.0-beta.5](https://github.com/electron/electron/releases/tag/v7.0.0-beta.5)|2019-09-24||yes|12.8.1|78|869|
|[v7.0.0-beta.4](https://github.com/electron/electron/releases/tag/v7.0.0-beta.4)|2019-09-03||yes|12.8.1|78|745|
|[v7.0.0-beta.3](https://github.com/electron/electron/releases/tag/v7.0.0-beta.3)|2019-08-15||yes|12.8.0|78|967|
|[v7.0.0-beta.2](https://github.com/electron/electron/releases/tag/v7.0.0-beta.2)|2019-08-07||yes|12.6.0|78|327|
|[v7.0.0-beta.1](https://github.com/electron/electron/releases/tag/v7.0.0-beta.1)|2019-08-01||yes|12.6.0|78|351|
|[v6.1.12](https://github.com/electron/electron/releases/tag/v6.1.12)|2020-05-18|6-1-x|no|12.4.0|76|30598|
|[v6.1.11](https://github.com/electron/electron/releases/tag/v6.1.11)|2020-05-05||no|12.4.0|76|13975|
|[v6.1.10](https://github.com/electron/electron/releases/tag/v6.1.10)|2020-04-14||no|12.4.0|76|12290|
|[v6.1.9](https://github.com/electron/electron/releases/tag/v6.1.9)|2020-02-28||no|12.4.0|76|16480|
|[v6.1.8](https://github.com/electron/electron/releases/tag/v6.1.8)|2020-02-21||no|12.4.0|76|1810|
|[v6.1.7](https://github.com/electron/electron/releases/tag/v6.1.7)|2019-12-17||no|12.4.0|76|70432|
|[v6.1.6](https://github.com/electron/electron/releases/tag/v6.1.6)|2019-12-11||no|12.4.0|76|32690|
|[v6.1.5](https://github.com/electron/electron/releases/tag/v6.1.5)|2019-11-21||no|12.4.0|76|30023|
|[v6.1.4](https://github.com/electron/electron/releases/tag/v6.1.4)|2019-11-05||no|12.4.0|76|23337|
|[v6.1.3](https://github.com/electron/electron/releases/tag/v6.1.3)|2019-11-01||no|12.4.0|76|2081|
|[v6.1.2](https://github.com/electron/electron/releases/tag/v6.1.2)|2019-10-24||no|12.4.0|76|16934|
|[v6.1.1](https://github.com/electron/electron/releases/tag/v6.1.1)|2019-10-23||no|12.4.0|76|2450|
|[v6.1.0](https://github.com/electron/electron/releases/tag/v6.1.0)|2019-10-22||no|12.4.0|76|2633|
|[v6.0.12](https://github.com/electron/electron/releases/tag/v6.0.12)|2019-10-08|6-0-x|no|12.4.0|76|50846|
|[v6.0.11](https://github.com/electron/electron/releases/tag/v6.0.11)|2019-10-02||no|12.4.0|76|18219|
|[v6.0.10](https://github.com/electron/electron/releases/tag/v6.0.10)|2019-09-19||no|12.4.0|76|33738|
|[v6.0.9](https://github.com/electron/electron/releases/tag/v6.0.9)|2019-09-12||no|12.4.0|76|17642|
|[v6.0.8](https://github.com/electron/electron/releases/tag/v6.0.8)|2019-09-09||no|12.4.0|76|14318|
|[v6.0.7](https://github.com/electron/electron/releases/tag/v6.0.7)|2019-08-31||no|12.4.0|76|40678|
|[v6.0.6](https://github.com/electron/electron/releases/tag/v6.0.6)|2019-08-30||no|12.4.0|76|2744|
|[v6.0.5](https://github.com/electron/electron/releases/tag/v6.0.5)|2019-08-27||no|12.4.0|76|13792|
|[v6.0.4](https://github.com/electron/electron/releases/tag/v6.0.4)|2019-08-24||no|12.4.0|76|9528|
|[v6.0.3](https://github.com/electron/electron/releases/tag/v6.0.3)|2019-08-20||no|12.4.0|76|10761|
|[v6.0.2](https://github.com/electron/electron/releases/tag/v6.0.2)|2019-08-12||no|12.4.0|76|15077|
|[v6.0.1](https://github.com/electron/electron/releases/tag/v6.0.1)|2019-08-07||no|12.4.0|76|11776|
|[v6.0.0](https://github.com/electron/electron/releases/tag/v6.0.0)|2019-07-29||no|12.4.0|76|111767|
|[v6.0.0-nightly.20190311](https://github.com/electron/electron/releases/tag/v6.0.0-nightly.20190311)|2019-03-11||yes|12.0.0|74|289|
|[v6.0.0-nightly.20190213](https://github.com/electron/electron/releases/tag/v6.0.0-nightly.20190213)|2019-02-14||yes|12.0.0|72|254|
|[v6.0.0-nightly.20190212](https://github.com/electron/electron/releases/tag/v6.0.0-nightly.20190212)|2019-02-12||yes|12.0.0|72|17|
|[v6.0.0-beta.15](https://github.com/electron/electron/releases/tag/v6.0.0-beta.15)|2019-07-20|beta-6-0-x|yes|12.4.0|76|736|
|[v6.0.0-beta.14](https://github.com/electron/electron/releases/tag/v6.0.0-beta.14)|2019-07-17||yes|12.4.0|76|456|
|[v6.0.0-beta.13](https://github.com/electron/electron/releases/tag/v6.0.0-beta.13)|2019-07-10||yes|12.0.0|76|512|
|[v6.0.0-beta.12](https://github.com/electron/electron/releases/tag/v6.0.0-beta.12)|2019-07-04||yes|12.0.0|76|619|
|[v6.0.0-beta.11](https://github.com/electron/electron/releases/tag/v6.0.0-beta.11)|2019-06-26||yes|12.0.0|76|400|
|[v6.0.0-beta.10](https://github.com/electron/electron/releases/tag/v6.0.0-beta.10)|2019-06-22||yes|12.0.0|76|499|
|[v6.0.0-beta.9](https://github.com/electron/electron/releases/tag/v6.0.0-beta.9)|2019-06-18||yes|12.0.0|76|336|
|[v6.0.0-beta.8](https://github.com/electron/electron/releases/tag/v6.0.0-beta.8)|2019-06-14||yes|12.0.0|76|252|
|[v6.0.0-beta.7](https://github.com/electron/electron/releases/tag/v6.0.0-beta.7)|2019-06-11||yes|12.0.0|76|315|
|[v6.0.0-beta.6](https://github.com/electron/electron/releases/tag/v6.0.0-beta.6)|2019-06-05||yes|12.0.0|76|315|
|[v6.0.0-beta.5](https://github.com/electron/electron/releases/tag/v6.0.0-beta.5)|2019-05-29||yes|12.0.0|76|256|
|[v6.0.0-beta.4](https://github.com/electron/electron/releases/tag/v6.0.0-beta.4)|2019-05-21||yes|12.0.0|76|340|
|[v6.0.0-beta.3](https://github.com/electron/electron/releases/tag/v6.0.0-beta.3)|2019-05-14||yes|12.0.0|76|1784|
|[v6.0.0-beta.2](https://github.com/electron/electron/releases/tag/v6.0.0-beta.2)|2019-05-08||yes|12.0.0|76|345|
|[v6.0.0-beta.1](https://github.com/electron/electron/releases/tag/v6.0.0-beta.1)|2019-05-01||yes|12.0.0|76|331|
|[v5.0.13](https://github.com/electron/electron/releases/tag/v5.0.13)|2019-12-17|5-0-x|no|12.0.0|73|136763|
|[v5.0.12](https://github.com/electron/electron/releases/tag/v5.0.12)|2019-11-02||no|12.0.0|73|31019|
|[v5.0.11](https://github.com/electron/electron/releases/tag/v5.0.11)|2019-09-24||no|12.0.0|73|23789|
|[v5.0.10](https://github.com/electron/electron/releases/tag/v5.0.10)|2019-08-20||no|12.0.0|73|44450|
|[v5.0.9](https://github.com/electron/electron/releases/tag/v5.0.9)|2019-08-06||no|12.0.0|73|14370|
|[v5.0.8](https://github.com/electron/electron/releases/tag/v5.0.8)|2019-07-23||no|12.0.0|73|25570|
|[v5.0.7](https://github.com/electron/electron/releases/tag/v5.0.7)|2019-07-16||no|12.0.0|73|21901|
|[v5.0.6](https://github.com/electron/electron/releases/tag/v5.0.6)|2019-06-26||no|12.0.0|73|53972|
|[v5.0.5](https://github.com/electron/electron/releases/tag/v5.0.5)|2019-06-21||no|12.0.0|73|15289|
|[v5.0.4](https://github.com/electron/electron/releases/tag/v5.0.4)|2019-06-15||no|12.0.0|73|22310|
|[v5.0.3](https://github.com/electron/electron/releases/tag/v5.0.3)|2019-06-07||no|12.0.0|73|14336|
|[v5.0.2](https://github.com/electron/electron/releases/tag/v5.0.2)|2019-05-23||no|12.0.0|73|37738|
|[v5.0.1](https://github.com/electron/electron/releases/tag/v5.0.1)|2019-05-04||no|12.0.0|73|101080|
|[v5.0.0](https://github.com/electron/electron/releases/tag/v5.0.0)|2019-04-24||no|12.0.0|73|34111|
|[v5.0.0-nightly.20190122](https://github.com/electron/electron/releases/tag/v5.0.0-nightly.20190122)|2019-01-22||yes|12.0.0|71|23|
|[v5.0.0-nightly.20190121](https://github.com/electron/electron/releases/tag/v5.0.0-nightly.20190121)|2019-01-22||yes|12.0.0|71|44|
|[v5.0.0-nightly.20190107](https://github.com/electron/electron/releases/tag/v5.0.0-nightly.20190107)|2019-01-08||yes|11.0.0|70|110|
|[v5.0.0-beta.9](https://github.com/electron/electron/releases/tag/v5.0.0-beta.9)|2019-04-20|beta-5-0-x|yes|12.0.0|73|589|
|[v5.0.0-beta.8](https://github.com/electron/electron/releases/tag/v5.0.0-beta.8)|2019-04-04||yes|12.0.0|73|1429|
|[v5.0.0-beta.7](https://github.com/electron/electron/releases/tag/v5.0.0-beta.7)|2019-03-28||yes|12.0.0|73|4577|
|[v5.0.0-beta.6](https://github.com/electron/electron/releases/tag/v5.0.0-beta.6)|2019-03-20||yes|12.0.0|73|711|
|[v5.0.0-beta.5](https://github.com/electron/electron/releases/tag/v5.0.0-beta.5)|2019-03-05||yes|12.0.0|73|778|
|[v5.0.0-beta.4](https://github.com/electron/electron/releases/tag/v5.0.0-beta.4)|2019-02-27||yes|12.0.0|73|510|
|[v5.0.0-beta.3](https://github.com/electron/electron/releases/tag/v5.0.0-beta.3)|2019-02-15||yes|12.0.0|73|831|
|[v5.0.0-beta.2](https://github.com/electron/electron/releases/tag/v5.0.0-beta.2)|2019-02-04||yes|12.0.0|72|791|
|[v5.0.0-beta.1](https://github.com/electron/electron/releases/tag/v5.0.0-beta.1)|2019-01-23||yes|12.0.0|72|1820|
|[v4.2.12](https://github.com/electron/electron/releases/tag/v4.2.12)|2019-10-16|4-2-x|no|10.11.0|69|74046|
|[v4.2.11](https://github.com/electron/electron/releases/tag/v4.2.11)|2019-09-24||no|10.11.0|69|8361|
|[v4.2.10](https://github.com/electron/electron/releases/tag/v4.2.10)|2019-08-29||no|10.11.0|69|15886|
|[v4.2.9](https://github.com/electron/electron/releases/tag/v4.2.9)|2019-08-06||no|10.11.0|69|18855|
|[v4.2.8](https://github.com/electron/electron/releases/tag/v4.2.8)|2019-07-20||no|10.11.0|69|10084|
|[v4.2.7](https://github.com/electron/electron/releases/tag/v4.2.7)|2019-07-16||no|10.11.0|69|7002|
|[v4.2.6](https://github.com/electron/electron/releases/tag/v4.2.6)|2019-07-02||no|10.11.0|69|13550|
|[v4.2.5](https://github.com/electron/electron/releases/tag/v4.2.5)|2019-06-21||no|10.11.0|69|12784|
|[v4.2.4](https://github.com/electron/electron/releases/tag/v4.2.4)|2019-06-05||no|10.11.0|69|28243|
|[v4.2.3](https://github.com/electron/electron/releases/tag/v4.2.3)|2019-05-31||no|10.11.0|69|9660|
|[v4.2.2](https://github.com/electron/electron/releases/tag/v4.2.2)|2019-05-17||no|10.11.0|69|19205|
|[v4.2.1](https://github.com/electron/electron/releases/tag/v4.2.1)|2019-05-14||no|10.11.0|69|1966|
|[v4.2.0](https://github.com/electron/electron/releases/tag/v4.2.0)|2019-05-03||no|10.11.0|69|41626|
|[v4.1.5](https://github.com/electron/electron/releases/tag/v4.1.5)|2019-04-24|4-1-x|no|10.11.0|69|14369|
|[v4.1.4](https://github.com/electron/electron/releases/tag/v4.1.4)|2019-04-04||no|10.11.0|69|54166|
|[v4.1.3](https://github.com/electron/electron/releases/tag/v4.1.3)|2019-03-29||no|10.11.0|69|19747|
|[v4.1.2](https://github.com/electron/electron/releases/tag/v4.1.2)|2019-03-28||no|10.11.0|69|2946|
|[v4.1.1](https://github.com/electron/electron/releases/tag/v4.1.1)|2019-03-20||no|10.11.0|69|20456|
|[v4.1.0](https://github.com/electron/electron/releases/tag/v4.1.0)|2019-03-14||no|10.11.0|69|25611|
|[v4.0.8](https://github.com/electron/electron/releases/tag/v4.0.8)|2019-03-08|4-0-x|no|10.11.0|69|17664|
|[v4.0.7](https://github.com/electron/electron/releases/tag/v4.0.7)|2019-03-05||no|10.11.0|69|11156|
|[v4.0.6](https://github.com/electron/electron/releases/tag/v4.0.6)|2019-02-27||no|10.11.0|69|14310|
|[v4.0.5](https://github.com/electron/electron/releases/tag/v4.0.5)|2019-02-15||no|10.11.0|69|29492|
|[v4.0.4](https://github.com/electron/electron/releases/tag/v4.0.4)|2019-02-02||no|10.11.0|69|50431|
|[v4.0.3](https://github.com/electron/electron/releases/tag/v4.0.3)|2019-01-29||no|10.11.0|69|15571|
|[v4.0.2](https://github.com/electron/electron/releases/tag/v4.0.2)|2019-01-22||no|10.11.0|69|15625|
|[v4.0.1](https://github.com/electron/electron/releases/tag/v4.0.1)|2019-01-04||no|10.11.0|69|59212|
|[v4.0.0](https://github.com/electron/electron/releases/tag/v4.0.0)|2018-12-20||no|10.11.0|69|95854|
|[v4.0.0-nightly.20181010](https://github.com/electron/electron/releases/tag/v4.0.0-nightly.20181010)|2018-10-10||yes|10.11.0|69|1513|
|[v4.0.0-nightly.20181006](https://github.com/electron/electron/releases/tag/v4.0.0-nightly.20181006)|2018-10-06||yes|10.11.0|68|117|
|[v4.0.0-nightly.20180929](https://github.com/electron/electron/releases/tag/v4.0.0-nightly.20180929)|2018-09-29||yes|10.6.0|67|111|
|[v4.0.0-nightly.20180821](https://github.com/electron/electron/releases/tag/v4.0.0-nightly.20180821)|2018-08-21||yes|10.2.0|66|86|
|[v4.0.0-nightly.20180819](https://github.com/electron/electron/releases/tag/v4.0.0-nightly.20180819)|2018-08-19||yes|10.2.0|66|28|
|[v4.0.0-nightly.20180817](https://github.com/electron/electron/releases/tag/v4.0.0-nightly.20180817)|2018-08-18||yes|10.2.0|66|19|
|[v4.0.0-beta.11](https://github.com/electron/electron/releases/tag/v4.0.0-beta.11)|2018-12-19|beta-4-0-x|yes|10.11.0|69|807|
|[v4.0.0-beta.10](https://github.com/electron/electron/releases/tag/v4.0.0-beta.10)|2018-12-17||yes|10.11.0|69|1151|
|[v4.0.0-beta.9](https://github.com/electron/electron/releases/tag/v4.0.0-beta.9)|2018-12-11||yes|10.11.0|69|777|
|[v4.0.0-beta.8](https://github.com/electron/electron/releases/tag/v4.0.0-beta.8)|2018-11-30||yes|10.11.0|69|878|
|[v4.0.0-beta.7](https://github.com/electron/electron/releases/tag/v4.0.0-beta.7)|2018-11-06||yes|10.11.0|69|2438|
|[v4.0.0-beta.6](https://github.com/electron/electron/releases/tag/v4.0.0-beta.6)|2018-11-01||yes|10.11.0|69|795|
|[v4.0.0-beta.5](https://github.com/electron/electron/releases/tag/v4.0.0-beta.5)|2018-10-23||yes|10.11.0|69|1186|
|[v4.0.0-beta.4](https://github.com/electron/electron/releases/tag/v4.0.0-beta.4)|2018-10-19||yes|10.11.0|69|837|
|[v4.0.0-beta.3](https://github.com/electron/electron/releases/tag/v4.0.0-beta.3)|2018-10-12||yes|10.11.0|69|729|
|[v4.0.0-beta.2](https://github.com/electron/electron/releases/tag/v4.0.0-beta.2)|2018-10-12||yes|10.11.0|69|526|
|[v4.0.0-beta.1](https://github.com/electron/electron/releases/tag/v4.0.0-beta.1)|2018-10-11||yes|10.11.0|69|1595|
|[v3.1.13](https://github.com/electron/electron/releases/tag/v3.1.13)|2019-07-31||no|10.2.0|66|42775|
|[v3.1.12](https://github.com/electron/electron/releases/tag/v3.1.12)|2019-07-11|3-1-x|no|10.2.0|66|4451|
|[v3.1.11](https://github.com/electron/electron/releases/tag/v3.1.11)|2019-06-06||no|10.2.0|66|6957|
|[v3.1.10](https://github.com/electron/electron/releases/tag/v3.1.10)|2019-05-29||no|10.2.0|66|3777|
|[v3.1.9](https://github.com/electron/electron/releases/tag/v3.1.9)|2019-05-01||no|10.2.0|66|8616|
|[v3.1.8](https://github.com/electron/electron/releases/tag/v3.1.8)|2019-03-28||no|10.2.0|66|27893|
|[v3.1.7](https://github.com/electron/electron/releases/tag/v3.1.7)|2019-03-21||no|10.2.0|66|15310|
|[v3.1.6](https://github.com/electron/electron/releases/tag/v3.1.6)|2019-03-08||no|10.2.0|66|33711|
|[v3.1.5](https://github.com/electron/electron/releases/tag/v3.1.5)|2019-03-04||no|10.2.0|66|2142|
|[v3.1.4](https://github.com/electron/electron/releases/tag/v3.1.4)|2019-02-15||no|10.2.0|66|6580|
|[v3.1.3](https://github.com/electron/electron/releases/tag/v3.1.3)|2019-01-31||no|10.2.0|66|31569|
|[v3.1.2](https://github.com/electron/electron/releases/tag/v3.1.2)|2019-01-24||no|10.2.0|66|6930|
|[v3.1.1](https://github.com/electron/electron/releases/tag/v3.1.1)|2019-01-14||no|10.2.0|66|10929|
|[v3.1.0](https://github.com/electron/electron/releases/tag/v3.1.0)|2019-01-07||no|10.2.0|66|6158|
|[v3.1.0-beta.5](https://github.com/electron/electron/releases/tag/v3.1.0-beta.5)|2019-01-04|beta-3-1-x|yes|10.2.0|66|663|
|[v3.1.0-beta.4](https://github.com/electron/electron/releases/tag/v3.1.0-beta.4)|2018-12-17||yes|10.2.0|66|805|
|[v3.1.0-beta.3](https://github.com/electron/electron/releases/tag/v3.1.0-beta.3)|2018-12-14||yes|10.2.0|66|375|
|[v3.1.0-beta.2](https://github.com/electron/electron/releases/tag/v3.1.0-beta.2)|2018-12-04||yes|10.2.0|66|526|
|[v3.1.0-beta.1](https://github.com/electron/electron/releases/tag/v3.1.0-beta.1)|2018-12-02||yes|10.2.0|66|297|
|[v3.0.16](https://github.com/electron/electron/releases/tag/v3.0.16)|2019-03-08|3-0-x|no|10.2.0|66|5560|
|[v3.0.15](https://github.com/electron/electron/releases/tag/v3.0.15)|2019-01-31||no|10.2.0|66|863|
|[v3.0.14](https://github.com/electron/electron/releases/tag/v3.0.14)|2019-01-04||no|10.2.0|66|11943|
|[v3.0.13](https://github.com/electron/electron/releases/tag/v3.0.13)|2018-12-17||no|10.2.0|66|42723|
|[v3.0.12](https://github.com/electron/electron/releases/tag/v3.0.12)|2018-12-14||no|10.2.0|66|7280|
|[v3.0.11](https://github.com/electron/electron/releases/tag/v3.0.11)|2018-12-11||no|10.2.0|66|14475|
|[v3.0.10](https://github.com/electron/electron/releases/tag/v3.0.10)|2018-11-19||no|10.2.0|66|70319|
|[v3.0.9](https://github.com/electron/electron/releases/tag/v3.0.9)|2018-11-13||no|10.2.0|66|17726|
|[v3.0.8](https://github.com/electron/electron/releases/tag/v3.0.8)|2018-11-05||no|10.2.0|66|20501|
|[v3.0.7](https://github.com/electron/electron/releases/tag/v3.0.7)|2018-11-01||no|10.2.0|66|15834|
|[v3.0.6](https://github.com/electron/electron/releases/tag/v3.0.6)|2018-10-24||no|10.2.0|66|16626|
|[v3.0.5](https://github.com/electron/electron/releases/tag/v3.0.5)|2018-10-19||no|10.2.0|66|13151|
|[v3.0.4](https://github.com/electron/electron/releases/tag/v3.0.4)|2018-10-11||no|10.2.0|66|23755|
|[v3.0.3](https://github.com/electron/electron/releases/tag/v3.0.3)|2018-10-07||no|10.2.0|66|16596|
|[v3.0.2](https://github.com/electron/electron/releases/tag/v3.0.2)|2018-09-27||no|10.2.0|66|21764|
|[v3.0.1](https://github.com/electron/electron/releases/tag/v3.0.1)|2018-09-27||no|10.2.0|66|3104|
|[v3.0.0](https://github.com/electron/electron/releases/tag/v3.0.0)|2018-09-18||no|10.2.0|66|247098|
|[v3.0.0-nightly.20180904](https://github.com/electron/electron/releases/tag/v3.0.0-nightly.20180904)|2018-09-05||yes|10.2.0|66|215|
|[v3.0.0-nightly.20180823](https://github.com/electron/electron/releases/tag/v3.0.0-nightly.20180823)|2018-08-24||yes|10.2.0|66|29|
|[v3.0.0-nightly.20180821](https://github.com/electron/electron/releases/tag/v3.0.0-nightly.20180821)|2018-08-21||yes|10.2.0|66|267|
|[v3.0.0-nightly.20180818](https://github.com/electron/electron/releases/tag/v3.0.0-nightly.20180818)|2018-08-18||yes|10.2.0|66|74|
|[v3.0.0-beta.13](https://github.com/electron/electron/releases/tag/v3.0.0-beta.13)|2018-09-17||yes|10.2.0|66|546|
|[v3.0.0-beta.12](https://github.com/electron/electron/releases/tag/v3.0.0-beta.12)|2018-09-12||yes|10.2.0|66|1076|
|[v3.0.0-beta.11](https://github.com/electron/electron/releases/tag/v3.0.0-beta.11)|2018-09-12||yes|10.2.0|66|449|
|[v3.0.0-beta.10](https://github.com/electron/electron/releases/tag/v3.0.0-beta.10)|2018-09-08||yes|10.2.0|66|663|
|[v3.0.0-beta.9](https://github.com/electron/electron/releases/tag/v3.0.0-beta.9)|2018-09-06||yes|10.2.0|66|574|
|[v3.0.0-beta.8](https://github.com/electron/electron/releases/tag/v3.0.0-beta.8)|2018-08-29||yes|10.2.0|66|1409|
|[v3.0.0-beta.7](https://github.com/electron/electron/releases/tag/v3.0.0-beta.7)|2018-08-22||yes|10.2.0|66|834|
|[v3.0.0-beta.6](https://github.com/electron/electron/releases/tag/v3.0.0-beta.6)|2018-08-20||yes|10.2.0|66|1049|
|[v3.0.0-beta.5](https://github.com/electron/electron/releases/tag/v3.0.0-beta.5)|2018-08-13||yes|10.2.0|66|1341|
|[v3.0.0-beta.4](https://github.com/electron/electron/releases/tag/v3.0.0-beta.4)|2018-08-01||yes|10.2.0|66|5136|
|[v3.0.0-beta.3](https://github.com/electron/electron/releases/tag/v3.0.0-beta.3)|2018-07-17||yes|10.2.0|66|1570|
|[v3.0.0-beta.2](https://github.com/electron/electron/releases/tag/v3.0.0-beta.2)|2018-07-10||yes|10.2.0|66|1025|
|[v3.0.0-beta.1](https://github.com/electron/electron/releases/tag/v3.0.0-beta.1)|2018-06-21||yes|10.2.0|66|8773|
|[v2.1.0-unsupported.20180809](https://github.com/electron/electron/releases/tag/v2.1.0-unsupported.20180809)|2018-08-09|unsupported|no|8.9.3|61|1127|
|[v2.0.18](https://github.com/electron/electron/releases/tag/v2.0.18)|2019-03-08|2-0-x|no|8.9.3|61|132466|
|[v2.0.17](https://github.com/electron/electron/releases/tag/v2.0.17)|2019-01-31||no|8.9.3|61|12542|
|[v2.0.16](https://github.com/electron/electron/releases/tag/v2.0.16)|2018-12-18||no|8.9.3|61|30131|
|[v2.0.15](https://github.com/electron/electron/releases/tag/v2.0.15)|2018-12-13||no|8.9.3|61|2805|
|[v2.0.14](https://github.com/electron/electron/releases/tag/v2.0.14)|2018-11-19||no|8.9.3|61|17141|
|[v2.0.13](https://github.com/electron/electron/releases/tag/v2.0.13)|2018-11-01||no|8.9.3|61|19892|
|[v2.0.12](https://github.com/electron/electron/releases/tag/v2.0.12)|2018-10-19||no|8.9.3|61|33002|
|[v2.0.11](https://github.com/electron/electron/releases/tag/v2.0.11)|2018-10-01||no|8.9.3|61|18659|
|[v2.0.10](https://github.com/electron/electron/releases/tag/v2.0.10)|2018-09-19||no|8.9.3|61|15346|
|[v2.0.9](https://github.com/electron/electron/releases/tag/v2.0.9)|2018-09-10||no|8.9.3|61|42040|
|[v2.0.8](https://github.com/electron/electron/releases/tag/v2.0.8)|2018-08-22||no|8.9.3|61|57804|
|[v2.0.8-nightly.20180820](https://github.com/electron/electron/releases/tag/v2.0.8-nightly.20180820)|2018-08-21||yes|8.9.3|61|28|
|[v2.0.8-nightly.20180819](https://github.com/electron/electron/releases/tag/v2.0.8-nightly.20180819)|2018-08-20||yes|8.9.3|61|19|
|[v2.0.7](https://github.com/electron/electron/releases/tag/v2.0.7)|2018-08-08||no|8.9.3|61|42262|
|[v2.0.6](https://github.com/electron/electron/releases/tag/v2.0.6)|2018-08-01||no|8.9.3|61|47959|
|[v2.0.5](https://github.com/electron/electron/releases/tag/v2.0.5)|2018-07-13||no|8.9.3|61|40740|
|[v2.0.4](https://github.com/electron/electron/releases/tag/v2.0.4)|2018-07-03||no|8.9.3|61|31603|
|[v2.0.3](https://github.com/electron/electron/releases/tag/v2.0.3)|2018-06-21||no|8.9.3|61|23650|
|[v2.0.2](https://github.com/electron/electron/releases/tag/v2.0.2)|2018-05-22||no|8.9.3|61|89022|
|[v2.0.1](https://github.com/electron/electron/releases/tag/v2.0.1)|2018-05-16||no|8.9.3|61|28863|
|[v2.0.0](https://github.com/electron/electron/releases/tag/v2.0.0)|2018-05-01||no|8.9.3|61|127919|
|[v2.0.0-beta.8](https://github.com/electron/electron/releases/tag/v2.0.0-beta.8)|2018-04-26||yes|8.9.3|61|2754|
|[v2.0.0-beta.7](https://github.com/electron/electron/releases/tag/v2.0.0-beta.7)|2018-04-03||yes|8.9.3|61|8685|
|[v2.0.0-beta.6](https://github.com/electron/electron/releases/tag/v2.0.0-beta.6)|2018-03-27||yes|8.9.3|61|2504|
|[v2.0.0-beta.5](https://github.com/electron/electron/releases/tag/v2.0.0-beta.5)|2018-03-20||yes|8.9.3|61|2349|
|[v2.0.0-beta.4](https://github.com/electron/electron/releases/tag/v2.0.0-beta.4)|2018-03-15||yes|8.9.3|61|2107|
|[v2.0.0-beta.3](https://github.com/electron/electron/releases/tag/v2.0.0-beta.3)|2018-03-09||yes|8.9.3|61|1930|
|[v2.0.0-beta.2](https://github.com/electron/electron/releases/tag/v2.0.0-beta.2)|2018-03-05||yes|8.9.3|61|5406|
|[v2.0.0-beta.1](https://github.com/electron/electron/releases/tag/v2.0.0-beta.1)|2018-02-21||yes|8.9.3|61|1482|
|[v1.8.8](https://github.com/electron/electron/releases/tag/v1.8.8)|2018-08-22|1-8-x|no|8.2.1|59|626196|
|[v1.8.7](https://github.com/electron/electron/releases/tag/v1.8.7)|2018-05-16||no|8.2.1|59|149316|
|[v1.8.6](https://github.com/electron/electron/releases/tag/v1.8.6)|2018-04-27||no|8.2.1|59|40100|
|[v1.8.5](https://github.com/electron/electron/releases/tag/v1.8.5)|2018-04-26||no|8.2.1|59|2672|
|[v1.8.4](https://github.com/electron/electron/releases/tag/v1.8.4)|2018-03-16||no|8.2.1|59|141749|
|[v1.8.3](https://github.com/electron/electron/releases/tag/v1.8.3)|2018-03-06||no|8.2.1|59|61867|
|[v1.8.2](https://github.com/electron/electron/releases/tag/v1.8.2)|2018-02-07||no|8.2.1|59|88744|
|[v1.8.2-beta.5](https://github.com/electron/electron/releases/tag/v1.8.2-beta.5)|2018-01-31||yes|8.2.1|59|7544|
|[v1.8.2-beta.4](https://github.com/electron/electron/releases/tag/v1.8.2-beta.4)|2018-01-23||yes|8.2.1|59|3799|
|[v1.8.2-beta.3](https://github.com/electron/electron/releases/tag/v1.8.2-beta.3)|2017-12-04||yes|8.2.1|59|6708|
|[v1.8.2-beta.2](https://github.com/electron/electron/releases/tag/v1.8.2-beta.2)|2017-11-06||yes|8.2.1|59|6675|
|[v1.8.2-beta.1](https://github.com/electron/electron/releases/tag/v1.8.2-beta.1)|2017-10-19||yes|8.2.1|59|3212|
|[v1.8.1](https://github.com/electron/electron/releases/tag/v1.8.1)|2017-09-29||yes|8.2.1|59|69428|
|[v1.8.0](https://github.com/electron/electron/releases/tag/v1.8.0)|2017-12-12||yes|8.2.1|59|224126|
|[v1.7.16](https://github.com/electron/electron/releases/tag/v1.7.16)|2018-08-22|1-7-x|no|7.9.0|58|28055|
|[v1.7.15](https://github.com/electron/electron/releases/tag/v1.7.15)|2018-05-16||no|7.9.0|58|7720|
|[v1.7.14](https://github.com/electron/electron/releases/tag/v1.7.14)|2018-04-27||no|7.9.0|58|2350|
|[v1.7.13](https://github.com/electron/electron/releases/tag/v1.7.13)|2018-03-15||no|7.9.0|58|5779|
|[v1.7.12](https://github.com/electron/electron/releases/tag/v1.7.12)|2018-01-31||no|7.9.0|58|46987|
|[v1.7.11](https://github.com/electron/electron/releases/tag/v1.7.11)|2018-01-23||no|7.9.0|58|56525|
|[v1.7.10](https://github.com/electron/electron/releases/tag/v1.7.10)|2017-12-18||no|7.9.0|58|247834|
|[v1.7.9](https://github.com/electron/electron/releases/tag/v1.7.9)|2017-10-11||no|7.9.0|58|206228|
|[v1.7.8](https://github.com/electron/electron/releases/tag/v1.7.8)|2017-09-24||no|7.9.0|58|56044|
|[v1.7.7](https://github.com/electron/electron/releases/tag/v1.7.7)|2017-09-05||yes|7.9.0|58|38234|
|[v1.7.6](https://github.com/electron/electron/releases/tag/v1.7.6)|2017-08-09||no|7.9.0|58|52646|
|[v1.7.5](https://github.com/electron/electron/releases/tag/v1.7.5)|2017-07-17||no|7.9.0|58|71423|
|[v1.7.4](https://github.com/electron/electron/releases/tag/v1.7.4)|2017-06-28||yes|7.9.0|58|17043|
|[v1.7.3](https://github.com/electron/electron/releases/tag/v1.7.3)|2017-06-08||yes|7.9.0|58|22493|
|[v1.7.2](https://github.com/electron/electron/releases/tag/v1.7.2)|2017-05-26||yes|7.9.0|58|12194|
|[v1.7.1](https://github.com/electron/electron/releases/tag/v1.7.1)|2017-05-16||yes|7.9.0|58|15087|
|[v1.7.0](https://github.com/electron/electron/releases/tag/v1.7.0)|2017-05-10||yes|7.9.0|58|118448|
|[v1.6.18](https://github.com/electron/electron/releases/tag/v1.6.18)|2018-05-15||no|7.4.0|56|7552|
|[v1.6.17](https://github.com/electron/electron/releases/tag/v1.6.17)|2018-01-31||no|7.4.0|56|5572|
|[v1.6.16](https://github.com/electron/electron/releases/tag/v1.6.16)|2018-01-23||no|7.4.0|56|6179|
|[v1.6.15](https://github.com/electron/electron/releases/tag/v1.6.15)|2017-10-11||no|7.4.0|56|12926|
|[v1.6.14](https://github.com/electron/electron/releases/tag/v1.6.14)|2017-09-28||no|7.4.0|56|5337|
|[v1.6.13](https://github.com/electron/electron/releases/tag/v1.6.13)|2017-09-06||yes|7.4.0|56|9713|
|[v1.6.12](https://github.com/electron/electron/releases/tag/v1.6.12)|2017-09-06||yes|7.4.0|56|10162|
|[v1.6.11](https://github.com/electron/electron/releases/tag/v1.6.11)|2017-05-25||no|7.4.0|56|117551|
|[v1.6.10](https://github.com/electron/electron/releases/tag/v1.6.10)|2017-05-16||no|7.4.0|56|36222|
|[v1.6.9](https://github.com/electron/electron/releases/tag/v1.6.9)|2017-05-10||no|7.4.0|56|3289|
|[v1.6.8](https://github.com/electron/electron/releases/tag/v1.6.8)|2017-05-01||no|7.4.0|56|27433|
|[v1.6.7](https://github.com/electron/electron/releases/tag/v1.6.7)|2017-04-18||no|7.4.0|56|20850|
|[v1.6.6](https://github.com/electron/electron/releases/tag/v1.6.6)|2017-04-07||no|7.4.0|56|69873|
|[v1.6.5](https://github.com/electron/electron/releases/tag/v1.6.5)|2017-03-31||no|7.4.0|56|18641|
|[v1.6.4](https://github.com/electron/electron/releases/tag/v1.6.4)|2017-03-22||yes|7.4.0|56|8702|
|[v1.6.3](https://github.com/electron/electron/releases/tag/v1.6.3)|2017-03-07||yes|7.4.0|56|6461|
|[v1.6.2](https://github.com/electron/electron/releases/tag/v1.6.2)|2017-03-01||no|7.4.0|56|77388|
|[v1.6.1](https://github.com/electron/electron/releases/tag/v1.6.1)|2017-02-21||no|7.4.0|56|23219|
|[v1.6.0](https://github.com/electron/electron/releases/tag/v1.6.0)|2017-02-07||yes|7.4.0|56|72231|
|[v1.5.1](https://github.com/electron/electron/releases/tag/v1.5.1)|2017-02-06||yes|7.4.0|54|3806|
|[v1.5.0](https://github.com/electron/electron/releases/tag/v1.5.0)|2017-01-24||yes|7.4.0|54|11292|
|[v1.4.16](https://github.com/electron/electron/releases/tag/v1.4.16)|2017-04-05||no|6.5.0|53|51515|
|[v1.4.15](https://github.com/electron/electron/releases/tag/v1.4.15)|2017-01-19||no|6.5.0|53|86310|
|[v1.4.14](https://github.com/electron/electron/releases/tag/v1.4.14)|2017-01-10||no|6.5.0|53|77051|
|[v1.4.13](https://github.com/electron/electron/releases/tag/v1.4.13)|2016-12-20||no|6.5.0|53|138643|
|[v1.4.12](https://github.com/electron/electron/releases/tag/v1.4.12)|2016-12-10||no|6.5.0|54|22903|
|[v1.4.11](https://github.com/electron/electron/releases/tag/v1.4.11)|2016-12-07||no|6.5.0|53|7485|
|[v1.4.10](https://github.com/electron/electron/releases/tag/v1.4.10)|2016-11-28||no|6.5.0|53|17681|
|[v1.4.8](https://github.com/electron/electron/releases/tag/v1.4.8)|2016-11-22||no|6.5.0|53|9777|
|[v1.4.7](https://github.com/electron/electron/releases/tag/v1.4.7)|2016-11-16||no|6.5.0|53|10427|
|[v1.4.6](https://github.com/electron/electron/releases/tag/v1.4.6)|2016-11-09||no|6.5.0|53|31340|
|[v1.4.5](https://github.com/electron/electron/releases/tag/v1.4.5)|2016-11-01||no|6.5.0|53|13902|
|[v1.4.4](https://github.com/electron/electron/releases/tag/v1.4.4)|2016-10-20||no|6.5.0|53|19485|
|[v1.4.3](https://github.com/electron/electron/releases/tag/v1.4.3)|2016-10-06||no|6.5.0|53|38669|
|[v1.4.2](https://github.com/electron/electron/releases/tag/v1.4.2)|2016-09-30||no|6.5.0|53|9730|
|[v1.4.1](https://github.com/electron/electron/releases/tag/v1.4.1)|2016-09-22||no|6.5.0|53|14210|
|[v1.4.0](https://github.com/electron/electron/releases/tag/v1.4.0)|2016-09-15||no|6.5.0|53|69161|
|[v1.3.15](https://github.com/electron/electron/releases/tag/v1.3.15)|2017-04-21||no|6.5.0|52|3077|
|[v1.3.14](https://github.com/electron/electron/releases/tag/v1.3.14)|2017-03-14||no|6.5.0|52|3681|
|[v1.3.13](https://github.com/electron/electron/releases/tag/v1.3.13)|2016-12-06||no|6.5.0|52|5302|
|[v1.3.12](https://github.com/electron/electron/releases/tag/v1.3.12)|2016-11-28||no|||408|
|[v1.3.10](https://github.com/electron/electron/releases/tag/v1.3.10)|2016-11-22||no|6.5.0|52|396|
|[v1.3.9](https://github.com/electron/electron/releases/tag/v1.3.9)|2016-11-16||no|6.5.0|52|7383|
|[v1.3.8](https://github.com/electron/electron/releases/tag/v1.3.8)|2016-10-20||no|||7206|
|[v1.3.7](https://github.com/electron/electron/releases/tag/v1.3.7)|2016-09-27||no|6.5.0|52|2966|
|[v1.3.6](https://github.com/electron/electron/releases/tag/v1.3.6)|2016-09-15||no|6.3.0|52|3213|
|[v1.3.5](https://github.com/electron/electron/releases/tag/v1.3.5)|2016-09-02||no|6.3.0|52|19013|
|[v1.3.4](https://github.com/electron/electron/releases/tag/v1.3.4)|2016-08-23||no|6.3.0|52|19980|
|[v1.3.3](https://github.com/electron/electron/releases/tag/v1.3.3)|2016-08-10||no|6.3.0|52|25405|
|[v1.3.2](https://github.com/electron/electron/releases/tag/v1.3.2)|2016-08-02||no|6.3.0|52|17034|
|[v1.3.1](https://github.com/electron/electron/releases/tag/v1.3.1)|2016-07-27||no|6.3.0|52|23690|
|[v1.3.0](https://github.com/electron/electron/releases/tag/v1.3.0)|2016-07-25||no|6.3.0|52|32912|
|[v1.2.8](https://github.com/electron/electron/releases/tag/v1.2.8)|2016-07-21||no|6.1.0|51|15802|
|[v1.2.7](https://github.com/electron/electron/releases/tag/v1.2.7)|2016-07-13||no|6.1.0|51|15394|
|[v1.2.6](https://github.com/electron/electron/releases/tag/v1.2.6)|2016-07-06||no|6.1.0|51|14414|
|[v1.2.5](https://github.com/electron/electron/releases/tag/v1.2.5)|2016-06-23||no|6.1.0|51|18166|
|[v1.2.4](https://github.com/electron/electron/releases/tag/v1.2.4)|2016-06-22||no|6.1.0|51|5812|
|[v1.2.3](https://github.com/electron/electron/releases/tag/v1.2.3)|2016-06-16||no|6.1.0|51|11020|
|[v1.2.2](https://github.com/electron/electron/releases/tag/v1.2.2)|2016-06-08||no|6.1.0|51|14568|
|[v1.2.1](https://github.com/electron/electron/releases/tag/v1.2.1)|2016-06-01||no|6.1.0|51|12711|
|[v1.2.0](https://github.com/electron/electron/releases/tag/v1.2.0)|2016-05-26||no|6.1.0|51|24970|
|[v1.1.3](https://github.com/electron/electron/releases/tag/v1.1.3)|2016-05-25||no|6.1.0|50|20599|
|[v1.1.2](https://github.com/electron/electron/releases/tag/v1.1.2)|2016-05-24||no|6.1.0|50|6459|
|[v1.1.1](https://github.com/electron/electron/releases/tag/v1.1.1)|2016-05-20||no|6.1.0|50|19728|
|[v1.1.0](https://github.com/electron/electron/releases/tag/v1.1.0)|2016-05-14||no|6.1.0|50|19766|
|[v1.0.2](https://github.com/electron/electron/releases/tag/v1.0.2)|2016-05-13||no|5.10.0|49|10522|
|[v1.0.1](https://github.com/electron/electron/releases/tag/v1.0.1)|2016-05-11||no|5.10.0|49|9284|
|[v1.0.0](https://github.com/electron/electron/releases/tag/v1.0.0)|2016-05-11||no|5.10.0|49|50628|
|[v0.37.8](https://github.com/electron/electron/releases/tag/v0.37.8)|2016-04-29||no|5.10.0|49|46713|
|[v0.37.7](https://github.com/electron/electron/releases/tag/v0.37.7)|2016-04-22||no|5.10.0|49|11015|
|[v0.37.6](https://github.com/electron/electron/releases/tag/v0.37.6)|2016-04-15||no|5.10.0|49|23927|
|[v0.37.5](https://github.com/electron/electron/releases/tag/v0.37.5)|2016-04-07||no|5.10.0|49|13803|
|[v0.37.4](https://github.com/electron/electron/releases/tag/v0.37.4)|2016-04-03||no|6.0.0-pre|49|8715|
|[v0.37.3](https://github.com/electron/electron/releases/tag/v0.37.3)|2016-03-27||no|5.1.1|49|52240|
|[v0.37.2](https://github.com/electron/electron/releases/tag/v0.37.2)|2016-03-14||no|||16553|
|[v0.37.1](https://github.com/electron/electron/releases/tag/v0.37.1)|2016-03-13||no|5.1.1|49|4645|
|[v0.37.0](https://github.com/electron/electron/releases/tag/v0.37.0)|2016-03-12||no|5.1.1|49|32997|
|[v0.36.12](https://github.com/electron/electron/releases/tag/v0.36.12)|2016-03-27||no|5.1.1|47|41308|
|[v0.36.11](https://github.com/electron/electron/releases/tag/v0.36.11)|2016-03-11||no|5.1.1|47|12002|
|[v0.36.10](https://github.com/electron/electron/releases/tag/v0.36.10)|2016-03-05||no|5.1.1|47|11163|
|[v0.36.9](https://github.com/electron/electron/releases/tag/v0.36.9)|2016-02-26||no|5.1.1|47|13900|
|[v0.36.8](https://github.com/electron/electron/releases/tag/v0.36.8)|2016-02-19||no|5.1.1|47|12474|
|[v0.36.7](https://github.com/electron/electron/releases/tag/v0.36.7)|2016-01-30||no|5.1.1|47|24540|
|[v0.36.6](https://github.com/electron/electron/releases/tag/v0.36.6)|2016-01-29||no|5.1.1|47|4161|
|[v0.36.5](https://github.com/electron/electron/releases/tag/v0.36.5)|2016-01-22||no|5.1.1|47|11106|
|[v0.36.4](https://github.com/electron/electron/releases/tag/v0.36.4)|2016-01-15||no|5.1.1|47|26909|
|[v0.36.3](https://github.com/electron/electron/releases/tag/v0.36.3)|2016-01-11||no|5.1.1|47|7356|
|[v0.36.2](https://github.com/electron/electron/releases/tag/v0.36.2)|2015-12-25||no|5.1.1|47|16474|
|[v0.36.1](https://github.com/electron/electron/releases/tag/v0.36.1)|2015-12-18||no|||9507|
|[v0.36.0](https://github.com/electron/electron/releases/tag/v0.36.0)|2015-12-11||no|5.1.1|47|19955|
|[v0.35.6](https://github.com/electron/electron/releases/tag/v0.35.6)|2016-01-11||no|||22589|
|[v0.35.5](https://github.com/electron/electron/releases/tag/v0.35.5)|2015-12-31||no|4.1.1|45|3747|
|[v0.35.4](https://github.com/electron/electron/releases/tag/v0.35.4)|2015-12-04||no|4.1.1|45|13072|
|[v0.35.3](https://github.com/electron/electron/releases/tag/v0.35.3)|2015-12-04||no|4.1.1|45|13732|
|[v0.35.2](https://github.com/electron/electron/releases/tag/v0.35.2)|2015-11-27||no|4.1.1|45|8469|
|[v0.35.1](https://github.com/electron/electron/releases/tag/v0.35.1)|2015-11-20||no|4.1.1|45|11330|
|[v0.35.0](https://github.com/electron/electron/releases/tag/v0.35.0)|2015-11-16||no|||8329|
|[v0.34.5](https://github.com/electron/electron/releases/tag/v0.34.5)|2015-11-26||no|||10677|
|[v0.34.4](https://github.com/electron/electron/releases/tag/v0.34.4)|2015-11-24||no|4.1.1|45|2779|
|[v0.34.3](https://github.com/electron/electron/releases/tag/v0.34.3)|2015-11-06||no|4.1.1|45|13416|
|[v0.34.2](https://github.com/electron/electron/releases/tag/v0.34.2)|2015-10-30||no|4.1.1|45|9804|
|[v0.34.1](https://github.com/electron/electron/releases/tag/v0.34.1)|2015-10-23||no|4.1.1|45|11522|
|[v0.34.0](https://github.com/electron/electron/releases/tag/v0.34.0)|2015-10-16||no|4.1.1|45|26818|
|[v0.33.9](https://github.com/electron/electron/releases/tag/v0.33.9)|2015-10-16||no|4.1.1|45|9494|
|[v0.33.8](https://github.com/electron/electron/releases/tag/v0.33.8)|2015-10-14||no|4.1.1|45|3850|
|[v0.33.7](https://github.com/electron/electron/releases/tag/v0.33.7)|2015-10-10||no|4.1.1|45|6439|
|[v0.33.6](https://github.com/electron/electron/releases/tag/v0.33.6)|2015-10-05||no|4.1.1|45|6143|
|[v0.33.5](https://github.com/electron/electron/releases/tag/v0.33.5)|2015-10-05||no|||2492|
|[v0.33.4](https://github.com/electron/electron/releases/tag/v0.33.4)|2015-10-02||no|4.1.1|45|3747|
|[v0.33.3](https://github.com/electron/electron/releases/tag/v0.33.3)|2015-09-26||no|4.1.1|45|6849|
|[v0.33.2](https://github.com/electron/electron/releases/tag/v0.33.2)|2015-09-25||no|4.1.1|45|2564|
|[v0.33.1](https://github.com/electron/electron/releases/tag/v0.33.1)|2015-09-22||no|4.1.1|45|4011|
|[v0.33.0](https://github.com/electron/electron/releases/tag/v0.33.0)|2015-09-17||no|5.0.0-pre|45|7346|
|[v0.32.3](https://github.com/electron/electron/releases/tag/v0.32.3)|2015-09-15||no|5.0.0-pre|45|4923|
|[v0.32.2](https://github.com/electron/electron/releases/tag/v0.32.2)|2015-09-10||no|3.3.0|45|3411|
|[v0.32.1](https://github.com/electron/electron/releases/tag/v0.32.1)|2015-09-09||no|||3989|
|[v0.32.0](https://github.com/electron/electron/releases/tag/v0.32.0)|2015-09-09||no|||450|
|[v0.31.2](https://github.com/electron/electron/releases/tag/v0.31.2)|2015-09-02||no|3.3.0|45|9576|
|[v0.31.1](https://github.com/electron/electron/releases/tag/v0.31.1)|2015-08-28||no|||2625|
|[v0.31.0](https://github.com/electron/electron/releases/tag/v0.31.0)|2015-08-26||no|3.1.0|44|2352|
|[v0.30.8](https://github.com/electron/electron/releases/tag/v0.30.8)|2015-09-26||no|||12986|
|[v0.30.7](https://github.com/electron/electron/releases/tag/v0.30.7)|2015-09-24||no|||3177|
|[v0.30.6](https://github.com/electron/electron/releases/tag/v0.30.6)|2015-08-26||no|||3320|
|[v0.30.5](https://github.com/electron/electron/releases/tag/v0.30.5)|2015-08-21||no|||1369|
|[v0.30.4](https://github.com/electron/electron/releases/tag/v0.30.4)|2015-08-10||no|3.1.0|44|5190|
|[v0.30.3](https://github.com/electron/electron/releases/tag/v0.30.3)|2015-08-07||no|||2398|
|[v0.30.2](https://github.com/electron/electron/releases/tag/v0.30.2)|2015-07-30||no|||6504|
|[v0.30.1](https://github.com/electron/electron/releases/tag/v0.30.1)|2015-07-24||no|||2971|
|[v0.30.0](https://github.com/electron/electron/releases/tag/v0.30.0)|2015-07-16||no|||9029|
|[v0.29.2](https://github.com/electron/electron/releases/tag/v0.29.2)|2015-07-07||no|2.3.1|43|18156|
|[v0.29.1](https://github.com/electron/electron/releases/tag/v0.29.1)|2015-07-03||no|2.3.1|43|1539|
|[v0.29.0](https://github.com/electron/electron/releases/tag/v0.29.0)|2015-07-03||no|||592|
|[v0.28.3](https://github.com/electron/electron/releases/tag/v0.28.3)|2015-06-23||no|2.2.1|43|7842|
|[v0.28.2](https://github.com/electron/electron/releases/tag/v0.28.2)|2015-06-18||no|2.2.1|43|2703|
|[v0.28.1](https://github.com/electron/electron/releases/tag/v0.28.1)|2015-06-12||no|2.2.1|43|2805|
|[v0.28.0](https://github.com/electron/electron/releases/tag/v0.28.0)|2015-06-11||no|2.2.1|43|383|
|[v0.27.3](https://github.com/electron/electron/releases/tag/v0.27.3)|2015-06-08||no|1.6.3|43|3293|
|[v0.27.2](https://github.com/electron/electron/releases/tag/v0.27.2)|2015-06-01||no|1.6.3|43|3178|
|[v0.27.1](https://github.com/electron/electron/releases/tag/v0.27.1)|2015-05-28||no|1.6.3|42|1176|
|[v0.27.0](https://github.com/electron/electron/releases/tag/v0.27.0)|2015-05-27||no|1.6.3|42|375|
|[v0.26.1](https://github.com/electron/electron/releases/tag/v0.26.1)|2015-05-21||no|1.6.3|42|5607|
|[v0.26.0](https://github.com/electron/electron/releases/tag/v0.26.0)|2015-05-12||no|1.6.3|42|3854|
|[v0.25.3](https://github.com/electron/electron/releases/tag/v0.25.3)|2015-05-08||no|1.6.3|42|4416|
|[v0.25.2](https://github.com/electron/electron/releases/tag/v0.25.2)|2015-05-01||no|1.6.3|42|3188|
|[v0.25.1](https://github.com/electron/electron/releases/tag/v0.25.1)|2015-04-23||no|1.6.3|42|5460|
|[v0.25.0](https://github.com/electron/electron/releases/tag/v0.25.0)|2015-04-22||no|1.6.3|42|428|
|[v0.24.0](https://github.com/electron/electron/releases/tag/v0.24.0)|2015-04-17||no|1.6.3|41|3927|
|[v0.23.0](https://github.com/electron/electron/releases/tag/v0.23.0)|2015-04-12||no|1.6.3|41|1119|
|[v0.22.3](https://github.com/electron/electron/releases/tag/v0.22.3)|2015-03-30||no|1.6.3|41|7452|
|[v0.22.2](https://github.com/electron/electron/releases/tag/v0.22.2)|2015-03-23||no|1.5.1|41|589|
|[v0.22.1](https://github.com/electron/electron/releases/tag/v0.22.1)|2015-03-18||no|1.5.1|41|2001|
|[v0.22.0](https://github.com/electron/electron/releases/tag/v0.22.0)|2015-03-18||no|||4964|
|[v0.21.3](https://github.com/electron/electron/releases/tag/v0.21.3)|2015-03-03||no|1.5.1|41|1810|
|[v0.21.2](https://github.com/electron/electron/releases/tag/v0.21.2)|2015-02-05||no|1.0.0-pre|40|2052|
|[v0.21.1](https://github.com/electron/electron/releases/tag/v0.21.1)|2015-02-03||no|1.0.0-pre|40|606|
|[v0.21.0](https://github.com/electron/electron/releases/tag/v0.21.0)|2015-01-28||no|1.0.0-pre|40|1217|
|[v0.20.8](https://github.com/electron/electron/releases/tag/v0.20.8)|2015-01-27||no|0.13.0-pre|39|78|
|[v0.20.7](https://github.com/electron/electron/releases/tag/v0.20.7)|2015-01-20||no|0.13.0-pre|39|407|
|[v0.20.6](https://github.com/electron/electron/releases/tag/v0.20.6)|2015-01-19||no|0.13.0-pre|39|564|
|[v0.20.5](https://github.com/electron/electron/releases/tag/v0.20.5)|2015-01-08||no|0.13.0-pre|39|595|
|[v0.20.4](https://github.com/electron/electron/releases/tag/v0.20.4)|2015-01-06||no|0.13.0-pre|39|383|
|[v0.20.3](https://github.com/electron/electron/releases/tag/v0.20.3)|2014-12-29||no|0.13.0-pre|39|561|
|[v0.20.2](https://github.com/electron/electron/releases/tag/v0.20.2)|2014-12-22||no|0.13.0-pre|39|854|
|[v0.20.1](https://github.com/electron/electron/releases/tag/v0.20.1)|2014-12-18||no|0.13.0-pre|39|378|
|[v0.20.0](https://github.com/electron/electron/releases/tag/v0.20.0)|2014-12-13||no|0.13.0-pre|39|298|
|[v0.19.5](https://github.com/electron/electron/releases/tag/v0.19.5)|2014-11-28||no|||3258|
|[v0.19.4](https://github.com/electron/electron/releases/tag/v0.19.4)|2014-11-21||no|||838|
|[v0.19.3](https://github.com/electron/electron/releases/tag/v0.19.3)|2014-11-20||no|||117|
|[v0.19.2](https://github.com/electron/electron/releases/tag/v0.19.2)|2014-11-15||no|||437|
|[v0.19.1](https://github.com/electron/electron/releases/tag/v0.19.1)|2014-11-04||no|||912|
|[v0.19.0](https://github.com/electron/electron/releases/tag/v0.19.0)|2014-10-30||no|||419|
|[v0.18.2](https://github.com/electron/electron/releases/tag/v0.18.2)|2014-10-21||no|||610|
|[v0.18.1](https://github.com/electron/electron/releases/tag/v0.18.1)|2014-10-17||no|||316|
|[v0.18.0](https://github.com/electron/electron/releases/tag/v0.18.0)|2014-10-14||no|||545|
|[v0.17.2](https://github.com/electron/electron/releases/tag/v0.17.2)|2014-10-06||no|||602|
|[v0.17.1](https://github.com/electron/electron/releases/tag/v0.17.1)|2014-10-01||no|||309|
|[v0.17.0](https://github.com/electron/electron/releases/tag/v0.17.0)|2014-10-01||no|||84|
|[v0.16.3](https://github.com/electron/electron/releases/tag/v0.16.3)|2014-09-20||no|||435|
|[v0.16.2](https://github.com/electron/electron/releases/tag/v0.16.2)|2014-09-09||no|||982|
|[v0.16.1](https://github.com/electron/electron/releases/tag/v0.16.1)|2014-09-08||no|||113|
|[v0.16.0](https://github.com/electron/electron/releases/tag/v0.16.0)|2014-09-06||no|||120|
|[v0.15.9](https://github.com/electron/electron/releases/tag/v0.15.9)|2014-08-20||no|||1546|
|[v0.15.8](https://github.com/electron/electron/releases/tag/v0.15.8)|2014-08-18||no|||1935|
|[v0.15.7](https://github.com/electron/electron/releases/tag/v0.15.7)|2014-08-15||no|||1934|
|[v0.15.6](https://github.com/electron/electron/releases/tag/v0.15.6)|2014-08-13||no|||1945|
|[v0.15.5](https://github.com/electron/electron/releases/tag/v0.15.5)|2014-08-11||no|||1965|
|[v0.15.4](https://github.com/electron/electron/releases/tag/v0.15.4)|2014-08-07||no|||2169|
|[v0.15.3](https://github.com/electron/electron/releases/tag/v0.15.3)|2014-08-06||no|||3859|
|[v0.15.2](https://github.com/electron/electron/releases/tag/v0.15.2)|2014-08-04||no|||1934|
|[v0.15.1](https://github.com/electron/electron/releases/tag/v0.15.1)|2014-07-31||no|||2059|
|[v0.15.0](https://github.com/electron/electron/releases/tag/v0.15.0)|2014-07-29||no|||1977|
|[v0.14.3](https://github.com/electron/electron/releases/tag/v0.14.3)|2014-07-27||no|||1886|
|[v0.14.2](https://github.com/electron/electron/releases/tag/v0.14.2)|2014-07-25||no|||1872|
|[v0.14.1](https://github.com/electron/electron/releases/tag/v0.14.1)|2014-07-24||no|||1864|
|[v0.14.0](https://github.com/electron/electron/releases/tag/v0.14.0)|2014-07-22||no|||1936|
|[v0.13.3](https://github.com/electron/electron/releases/tag/v0.13.3)|2014-06-25||no|||2263|
|[v0.13.2](https://github.com/electron/electron/releases/tag/v0.13.2)|2014-06-18||no|||371|
|[v0.13.1](https://github.com/electron/electron/releases/tag/v0.13.1)|2014-06-14||no|||381|
|[v0.13.0](https://github.com/electron/electron/releases/tag/v0.13.0)|2014-06-05||no|||729|
|[v0.12.7](https://github.com/electron/electron/releases/tag/v0.12.7)|2014-05-27||no|||414|
|[v0.12.6](https://github.com/electron/electron/releases/tag/v0.12.6)|2014-05-26||no|||238|
|[v0.12.5](https://github.com/electron/electron/releases/tag/v0.12.5)|2014-05-19||no|||16917|
|[v0.12.4](https://github.com/electron/electron/releases/tag/v0.12.4)|2014-05-12||no|||600|
|[v0.12.3](https://github.com/electron/electron/releases/tag/v0.12.3)|2014-05-07||no|||952|
|[v0.12.2](https://github.com/electron/electron/releases/tag/v0.12.2)|2014-05-05||no|||888|
|[v0.12.1](https://github.com/electron/electron/releases/tag/v0.12.1)|2014-05-05||no|||90|
|[v0.12.0](https://github.com/electron/electron/releases/tag/v0.12.0)|2014-04-29||no|||85|
|[v0.11.10](https://github.com/electron/electron/releases/tag/v0.11.10)|2014-04-14||no|||97|
|[v0.11.9](https://github.com/electron/electron/releases/tag/v0.11.9)|2014-04-11||no|||82|
|[v0.11.8](https://github.com/electron/electron/releases/tag/v0.11.8)|2014-04-10||no|||83|
|[v0.11.7](https://github.com/electron/electron/releases/tag/v0.11.7)|2014-04-08||no|||82|
|[v0.11.6](https://github.com/electron/electron/releases/tag/v0.11.6)|2014-04-07||no|||84|
|[v0.11.5](https://github.com/electron/electron/releases/tag/v0.11.5)|2014-04-02||no|||86|
|[v0.11.4](https://github.com/electron/electron/releases/tag/v0.11.4)|2014-03-28||no|||85|
|[v0.11.3](https://github.com/electron/electron/releases/tag/v0.11.3)|2014-03-25||no|||80|
|[v0.11.2](https://github.com/electron/electron/releases/tag/v0.11.2)|2014-03-24||no|||86|
|[v0.11.1](https://github.com/electron/electron/releases/tag/v0.11.1)|2014-03-18||no|||80|
|[v0.11.0](https://github.com/electron/electron/releases/tag/v0.11.0)|2014-03-16||no|||73|
|[v0.10.7](https://github.com/electron/electron/releases/tag/v0.10.7)|2014-03-11||no|||115|
|[v0.10.6](https://github.com/electron/electron/releases/tag/v0.10.6)|2014-03-07||no|||83|
|[v0.10.5](https://github.com/electron/electron/releases/tag/v0.10.5)|2014-03-05||no|||88|
|[v0.10.4](https://github.com/electron/electron/releases/tag/v0.10.4)|2014-03-02||no|||82|
|[v0.10.3](https://github.com/electron/electron/releases/tag/v0.10.3)|2014-02-28||no|||107|
|[v0.10.2](https://github.com/electron/electron/releases/tag/v0.10.2)|2014-02-27||no|||79|
|[v0.10.1](https://github.com/electron/electron/releases/tag/v0.10.1)|2014-02-25||no|||98|
|[v0.10.0](https://github.com/electron/electron/releases/tag/v0.10.0)|2014-02-24||no|||0|
|[v0.9.3](https://github.com/electron/electron/releases/tag/v0.9.3)|2014-02-17||no|||1850|
|[v0.9.2](https://github.com/electron/electron/releases/tag/v0.9.2)|2014-02-12||no|||1872|
|[v0.9.1](https://github.com/electron/electron/releases/tag/v0.9.1)|2014-02-04||no|||1860|
|[v0.9.0](https://github.com/electron/electron/releases/tag/v0.9.0)|2014-02-02||no|||1849|
|[v0.8.7](https://github.com/electron/electron/releases/tag/v0.8.7)|2014-01-27||no|||1873|
|[v0.8.6](https://github.com/electron/electron/releases/tag/v0.8.6)|2014-01-23||no|||1859|
|[v0.8.5](https://github.com/electron/electron/releases/tag/v0.8.5)|2014-01-14||no|||1876|
|[v0.8.4](https://github.com/electron/electron/releases/tag/v0.8.4)|2014-01-13||no|||1858|
|[v0.8.3](https://github.com/electron/electron/releases/tag/v0.8.3)|2014-01-08||no|||1859|
|[v0.8.2](https://github.com/electron/electron/releases/tag/v0.8.2)|2014-01-07||no|||1908|
|[v0.8.1](https://github.com/electron/electron/releases/tag/v0.8.1)|2013-12-29||no|||1872|
|[v0.8.0](https://github.com/electron/electron/releases/tag/v0.8.0)|2013-12-27||no|||1855|
|[v0.7.6](https://github.com/electron/electron/releases/tag/v0.7.6)|2013-12-09||no|||1922|
|[v0.7.5](https://github.com/electron/electron/releases/tag/v0.7.5)|2013-12-05||no|||1858|
|[v0.7.4](https://github.com/electron/electron/releases/tag/v0.7.4)|2013-12-04||no|||1942|
|[v0.7.3](https://github.com/electron/electron/releases/tag/v0.7.3)|2013-11-29||no|||1915|
|[v0.7.2](https://github.com/electron/electron/releases/tag/v0.7.2)|2013-11-28||no|||1888|
|[v0.7.1](https://github.com/electron/electron/releases/tag/v0.7.1)|2013-11-28||no|||1870|
|[v0.7.0](https://github.com/electron/electron/releases/tag/v0.7.0)|2013-11-27||no|||1867|
|[v0.6.12](https://github.com/electron/electron/releases/tag/v0.6.12)|2013-11-22||no|||934|
|[v0.6.11](https://github.com/electron/electron/releases/tag/v0.6.11)|2013-11-20||no|||937|
|[v0.6.10](https://github.com/electron/electron/releases/tag/v0.6.10)|2013-11-11||no|||941|
|[v0.6.9](https://github.com/electron/electron/releases/tag/v0.6.9)|2013-11-07||no|||941|
|[v0.6.8](https://github.com/electron/electron/releases/tag/v0.6.8)|2013-11-05||no|||926|
|[v0.6.7](https://github.com/electron/electron/releases/tag/v0.6.7)|2013-11-02||no|||933|
|[v0.6.6](https://github.com/electron/electron/releases/tag/v0.6.6)|2013-10-28||no|||943|
|[v0.6.5](https://github.com/electron/electron/releases/tag/v0.6.5)|2013-10-26||no|||905|
|[v0.6.4](https://github.com/electron/electron/releases/tag/v0.6.4)|2013-10-22||no|||928|
|[v0.6.3](https://github.com/electron/electron/releases/tag/v0.6.3)|2013-10-21||no|||908|
|[v0.6.2](https://github.com/electron/electron/releases/tag/v0.6.2)|2013-10-17||no|||910|
|[v0.6.1](https://github.com/electron/electron/releases/tag/v0.6.1)|2013-10-14||no|||912|
|[v0.6.0](https://github.com/electron/electron/releases/tag/v0.6.0)|2013-10-10||no|||913|
|[v0.5.4](https://github.com/electron/electron/releases/tag/v0.5.4)|2013-10-04||no|||938|
|[v0.5.3](https://github.com/electron/electron/releases/tag/v0.5.3)|2013-09-29||no|||898|
|[v0.5.2](https://github.com/electron/electron/releases/tag/v0.5.2)|2013-09-29||no|||900|
|[v0.5.1](https://github.com/electron/electron/releases/tag/v0.5.1)|2013-09-26||no|||919|
|[v0.5.0](https://github.com/electron/electron/releases/tag/v0.5.0)|2013-09-25||no|||907|
|[v0.4.9](https://github.com/electron/electron/releases/tag/v0.4.9)|2013-09-20||no|||898|
|[v0.4.8](https://github.com/electron/electron/releases/tag/v0.4.8)|2013-09-20||no|||897|
|[v0.4.7](https://github.com/electron/electron/releases/tag/v0.4.7)|2013-09-13||no|||898|
|[v0.4.6](https://github.com/electron/electron/releases/tag/v0.4.6)|2013-09-12||no|||901|
|[v0.4.5](https://github.com/electron/electron/releases/tag/v0.4.5)|2013-09-09||no|||901|
|[v0.4.4](https://github.com/electron/electron/releases/tag/v0.4.4)|2013-09-05||no|||901|
|[v0.4.3](https://github.com/electron/electron/releases/tag/v0.4.3)|2013-09-02||no|||901|
|[v0.4.2](https://github.com/electron/electron/releases/tag/v0.4.2)|2013-09-02||no|||904|
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
