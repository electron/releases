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

## Releases

<!-- START RELEASES TABLE -->
|Tag|Published|npm|Prerelease|Node|Chrome|Downloads|
|----|----|----|----|----|----|----|
|[v3.0.0-beta.2](https://github.com/electron/electron/releases/tag/v3.0.0-beta.2)|2018-07-10|beta|yes|10.2.0|66|17|
|[v3.0.0-beta.1](https://github.com/electron/electron/releases/tag/v3.0.0-beta.1)|2018-06-21||yes|10.2.0|66|1337|
|[v2.0.4](https://github.com/electron/electron/releases/tag/v2.0.4)|2018-07-03|latest|no|8.9.3|61|7512|
|[v2.0.3](https://github.com/electron/electron/releases/tag/v2.0.3)|2018-06-21||no|8.9.3|61|15174|
|[v2.0.2](https://github.com/electron/electron/releases/tag/v2.0.2)|2018-05-22||no|8.9.3|61|52759|
|[v2.0.1](https://github.com/electron/electron/releases/tag/v2.0.1)|2018-05-16||no|8.9.3|61|15214|
|[v2.0.0](https://github.com/electron/electron/releases/tag/v2.0.0)|2018-05-01||no|8.9.3|61|33492|
|[v2.0.0-beta.8](https://github.com/electron/electron/releases/tag/v2.0.0-beta.8)|2018-04-26||yes|8.9.3|61|2528|
|[v2.0.0-beta.7](https://github.com/electron/electron/releases/tag/v2.0.0-beta.7)|2018-04-03||yes|8.9.3|61|7101|
|[v2.0.0-beta.6](https://github.com/electron/electron/releases/tag/v2.0.0-beta.6)|2018-03-27||yes|8.9.3|61|2403|
|[v2.0.0-beta.5](https://github.com/electron/electron/releases/tag/v2.0.0-beta.5)|2018-03-20||yes|8.9.3|61|2221|
|[v2.0.0-beta.4](https://github.com/electron/electron/releases/tag/v2.0.0-beta.4)|2018-03-15||yes|8.9.3|61|2002|
|[v2.0.0-beta.3](https://github.com/electron/electron/releases/tag/v2.0.0-beta.3)|2018-03-09||yes|8.9.3|61|1844|
|[v2.0.0-beta.2](https://github.com/electron/electron/releases/tag/v2.0.0-beta.2)|2018-03-05||yes|8.9.3|61|5293|
|[v2.0.0-beta.1](https://github.com/electron/electron/releases/tag/v2.0.0-beta.1)|2018-02-21||yes|8.9.3|61|1305|
|[v1.8.7](https://github.com/electron/electron/releases/tag/v1.8.7)|2018-05-16||no|8.2.1|59|54177|
|[v1.8.6](https://github.com/electron/electron/releases/tag/v1.8.6)|2018-04-27||no|8.2.1|59|31650|
|[v1.8.5](https://github.com/electron/electron/releases/tag/v1.8.5)|2018-04-26||no|8.2.1|59|2485|
|[v1.8.4](https://github.com/electron/electron/releases/tag/v1.8.4)|2018-03-16||no|8.2.1|59|100380|
|[v1.8.3](https://github.com/electron/electron/releases/tag/v1.8.3)|2018-03-06||no|8.2.1|59|49557|
|[v1.8.2](https://github.com/electron/electron/releases/tag/v1.8.2)|2018-02-07||no|8.2.1|59|71649|
|[v1.8.2-beta.5](https://github.com/electron/electron/releases/tag/v1.8.2-beta.5)|2018-01-31||yes|8.2.1|59|5906|
|[v1.8.2-beta.4](https://github.com/electron/electron/releases/tag/v1.8.2-beta.4)|2018-01-23||yes|8.2.1|59|3562|
|[v1.8.2-beta.3](https://github.com/electron/electron/releases/tag/v1.8.2-beta.3)|2017-12-04||yes|8.2.1|59|6366|
|[v1.8.2-beta.2](https://github.com/electron/electron/releases/tag/v1.8.2-beta.2)|2017-11-06||yes|8.2.1|59|6377|
|[v1.8.2-beta.1](https://github.com/electron/electron/releases/tag/v1.8.2-beta.1)|2017-10-19||yes|8.2.1|59|3120|
|[v1.8.1](https://github.com/electron/electron/releases/tag/v1.8.1)|2017-09-29||yes|8.2.1|59|59473|
|[v1.8.0](https://github.com/electron/electron/releases/tag/v1.8.0)|2017-12-12||yes|8.2.1|59|53746|
|[v1.7.15](https://github.com/electron/electron/releases/tag/v1.7.15)|2018-05-16||no|7.9.0|58|2542|
|[v1.7.14](https://github.com/electron/electron/releases/tag/v1.7.14)|2018-04-27||no|7.9.0|58|2092|
|[v1.7.13](https://github.com/electron/electron/releases/tag/v1.7.13)|2018-03-15||no|7.9.0|58|4771|
|[v1.7.12](https://github.com/electron/electron/releases/tag/v1.7.12)|2018-01-31||no|7.9.0|58|38412|
|[v1.7.11](https://github.com/electron/electron/releases/tag/v1.7.11)|2018-01-23||no|7.9.0|58|38171|
|[v1.7.10](https://github.com/electron/electron/releases/tag/v1.7.10)|2017-12-18||no|7.9.0|58|227241|
|[v1.7.9](https://github.com/electron/electron/releases/tag/v1.7.9)|2017-10-11||no|7.9.0|58|192234|
|[v1.7.8](https://github.com/electron/electron/releases/tag/v1.7.8)|2017-09-24||no|7.9.0|58|53454|
|[v1.7.7](https://github.com/electron/electron/releases/tag/v1.7.7)|2017-09-05||yes|7.9.0|58|30455|
|[v1.7.6](https://github.com/electron/electron/releases/tag/v1.7.6)|2017-08-09||no|7.9.0|58|48344|
|[v1.7.5](https://github.com/electron/electron/releases/tag/v1.7.5)|2017-07-17||no|7.9.0|58|64941|
|[v1.7.4](https://github.com/electron/electron/releases/tag/v1.7.4)|2017-06-28||yes|7.9.0|58|15004|
|[v1.7.3](https://github.com/electron/electron/releases/tag/v1.7.3)|2017-06-08||yes|7.9.0|58|21359|
|[v1.7.2](https://github.com/electron/electron/releases/tag/v1.7.2)|2017-05-26||yes|7.9.0|58|11794|
|[v1.7.1](https://github.com/electron/electron/releases/tag/v1.7.1)|2017-05-16||yes|7.9.0|58|12219|
|[v1.7.0](https://github.com/electron/electron/releases/tag/v1.7.0)|2017-05-10||yes|7.9.0|58|101560|
|[v1.6.18](https://github.com/electron/electron/releases/tag/v1.6.18)|2018-05-15||no|7.4.0|56|2012|
|[v1.6.17](https://github.com/electron/electron/releases/tag/v1.6.17)|2018-01-31||no|7.4.0|56|4720|
|[v1.6.16](https://github.com/electron/electron/releases/tag/v1.6.16)|2018-01-23||no|7.4.0|56|5241|
|[v1.6.15](https://github.com/electron/electron/releases/tag/v1.6.15)|2017-10-11||no|7.4.0|56|11889|
|[v1.6.14](https://github.com/electron/electron/releases/tag/v1.6.14)|2017-09-28||no|7.4.0|56|5139|
|[v1.6.13](https://github.com/electron/electron/releases/tag/v1.6.13)|2017-09-06||yes|7.4.0|56|9491|
|[v1.6.12](https://github.com/electron/electron/releases/tag/v1.6.12)|2017-09-06||yes|7.4.0|56|9858|
|[v1.6.11](https://github.com/electron/electron/releases/tag/v1.6.11)|2017-05-25||no|7.4.0|56|112477|
|[v1.6.10](https://github.com/electron/electron/releases/tag/v1.6.10)|2017-05-16||no|7.4.0|56|34720|
|[v1.6.9](https://github.com/electron/electron/releases/tag/v1.6.9)|2017-05-10||no|7.4.0|56|3139|
|[v1.6.8](https://github.com/electron/electron/releases/tag/v1.6.8)|2017-05-01||no|7.4.0|56|26765|
|[v1.6.7](https://github.com/electron/electron/releases/tag/v1.6.7)|2017-04-18||no|7.4.0|56|20141|
|[v1.6.6](https://github.com/electron/electron/releases/tag/v1.6.6)|2017-04-07||no|7.4.0|56|68067|
|[v1.6.5](https://github.com/electron/electron/releases/tag/v1.6.5)|2017-03-31||no|7.4.0|56|18008|
|[v1.6.4](https://github.com/electron/electron/releases/tag/v1.6.4)|2017-03-22||yes|7.4.0|56|8160|
|[v1.6.3](https://github.com/electron/electron/releases/tag/v1.6.3)|2017-03-07||yes|7.4.0|56|6061|
|[v1.6.2](https://github.com/electron/electron/releases/tag/v1.6.2)|2017-03-01||no|7.4.0|56|71799|
|[v1.6.1](https://github.com/electron/electron/releases/tag/v1.6.1)|2017-02-21||no|7.4.0|56|22427|
|[v1.6.0](https://github.com/electron/electron/releases/tag/v1.6.0)|2017-02-07||yes|7.4.0|56|62600|
|[v1.5.1](https://github.com/electron/electron/releases/tag/v1.5.1)|2017-02-06||yes|7.4.0|54|3646|
|[v1.5.0](https://github.com/electron/electron/releases/tag/v1.5.0)|2017-01-24||yes|7.4.0|54|10711|
|[v1.4.16](https://github.com/electron/electron/releases/tag/v1.4.16)|2017-04-05||no|6.5.0|53|33257|
|[v1.4.15](https://github.com/electron/electron/releases/tag/v1.4.15)|2017-01-19||no|6.5.0|53|77178|
|[v1.4.14](https://github.com/electron/electron/releases/tag/v1.4.14)|2017-01-10||no|6.5.0|53|76184|
|[v1.4.13](https://github.com/electron/electron/releases/tag/v1.4.13)|2016-12-20||no|6.5.0|53|98768|
|[v1.4.12](https://github.com/electron/electron/releases/tag/v1.4.12)|2016-12-10||no|6.5.0|54|21977|
|[v1.4.11](https://github.com/electron/electron/releases/tag/v1.4.11)|2016-12-07||no|6.5.0|53|7276|
|[v1.4.10](https://github.com/electron/electron/releases/tag/v1.4.10)|2016-11-28||no|6.5.0|53|17270|
|[v1.4.8](https://github.com/electron/electron/releases/tag/v1.4.8)|2016-11-22||no|6.5.0|53|9466|
|[v1.4.7](https://github.com/electron/electron/releases/tag/v1.4.7)|2016-11-16||no|6.5.0|53|10117|
|[v1.4.6](https://github.com/electron/electron/releases/tag/v1.4.6)|2016-11-09||no|6.5.0|53|30890|
|[v1.4.5](https://github.com/electron/electron/releases/tag/v1.4.5)|2016-11-01||no|6.5.0|53|13195|
|[v1.4.4](https://github.com/electron/electron/releases/tag/v1.4.4)|2016-10-20||no|6.5.0|53|18904|
|[v1.4.3](https://github.com/electron/electron/releases/tag/v1.4.3)|2016-10-06||no|6.5.0|53|38037|
|[v1.4.2](https://github.com/electron/electron/releases/tag/v1.4.2)|2016-09-30||no|6.5.0|53|9436|
|[v1.4.1](https://github.com/electron/electron/releases/tag/v1.4.1)|2016-09-22||no|6.5.0|53|13874|
|[v1.4.0](https://github.com/electron/electron/releases/tag/v1.4.0)|2016-09-15||no|6.5.0|53|67006|
|[v1.3.15](https://github.com/electron/electron/releases/tag/v1.3.15)|2017-04-21||no|6.5.0|52|2810|
|[v1.3.14](https://github.com/electron/electron/releases/tag/v1.3.14)|2017-03-14||no|6.5.0|52|3145|
|[v1.3.13](https://github.com/electron/electron/releases/tag/v1.3.13)|2016-12-06||no|6.5.0|52|3960|
|[v1.3.12](https://github.com/electron/electron/releases/tag/v1.3.12)|2016-11-28||no|||324|
|[v1.3.10](https://github.com/electron/electron/releases/tag/v1.3.10)|2016-11-22||no|6.5.0|52|319|
|[v1.3.9](https://github.com/electron/electron/releases/tag/v1.3.9)|2016-11-16||no|6.5.0|52|4753|
|[v1.3.8](https://github.com/electron/electron/releases/tag/v1.3.8)|2016-10-20||no|||7085|
|[v1.3.7](https://github.com/electron/electron/releases/tag/v1.3.7)|2016-09-27||no|6.5.0|52|2778|
|[v1.3.6](https://github.com/electron/electron/releases/tag/v1.3.6)|2016-09-15||no|6.3.0|52|2980|
|[v1.3.5](https://github.com/electron/electron/releases/tag/v1.3.5)|2016-09-02||no|6.3.0|52|17388|
|[v1.3.4](https://github.com/electron/electron/releases/tag/v1.3.4)|2016-08-23||no|6.3.0|52|17900|
|[v1.3.3](https://github.com/electron/electron/releases/tag/v1.3.3)|2016-08-10||no|6.3.0|52|23646|
|[v1.3.2](https://github.com/electron/electron/releases/tag/v1.3.2)|2016-08-02||no|6.3.0|52|15271|
|[v1.3.1](https://github.com/electron/electron/releases/tag/v1.3.1)|2016-07-27||no|6.3.0|52|20360|
|[v1.3.0](https://github.com/electron/electron/releases/tag/v1.3.0)|2016-07-25||no|6.3.0|52|30032|
|[v1.2.8](https://github.com/electron/electron/releases/tag/v1.2.8)|2016-07-21||no|6.1.0|51|13692|
|[v1.2.7](https://github.com/electron/electron/releases/tag/v1.2.7)|2016-07-13||no|6.1.0|51|13551|
|[v1.2.6](https://github.com/electron/electron/releases/tag/v1.2.6)|2016-07-06||no|6.1.0|51|12567|
|[v1.2.5](https://github.com/electron/electron/releases/tag/v1.2.5)|2016-06-23||no|6.1.0|51|16413|
|[v1.2.4](https://github.com/electron/electron/releases/tag/v1.2.4)|2016-06-22||no|6.1.0|51|4207|
|[v1.2.3](https://github.com/electron/electron/releases/tag/v1.2.3)|2016-06-16||no|6.1.0|51|9355|
|[v1.2.2](https://github.com/electron/electron/releases/tag/v1.2.2)|2016-06-08||no|6.1.0|51|12925|
|[v1.2.1](https://github.com/electron/electron/releases/tag/v1.2.1)|2016-06-01||no|6.1.0|51|10976|
|[v1.2.0](https://github.com/electron/electron/releases/tag/v1.2.0)|2016-05-26||no|6.1.0|51|21667|
|[v1.1.3](https://github.com/electron/electron/releases/tag/v1.1.3)|2016-05-25||no|6.1.0|50|18666|
|[v1.1.2](https://github.com/electron/electron/releases/tag/v1.1.2)|2016-05-24||no|6.1.0|50|4766|
|[v1.1.1](https://github.com/electron/electron/releases/tag/v1.1.1)|2016-05-20||no|6.1.0|50|17502|
|[v1.1.0](https://github.com/electron/electron/releases/tag/v1.1.0)|2016-05-14||no|6.1.0|50|17298|
|[v1.0.2](https://github.com/electron/electron/releases/tag/v1.0.2)|2016-05-13||no|5.10.0|49|8063|
|[v1.0.1](https://github.com/electron/electron/releases/tag/v1.0.1)|2016-05-11||no|5.10.0|49|7509|
|[v1.0.0](https://github.com/electron/electron/releases/tag/v1.0.0)|2016-05-11||no|5.10.0|49|35390|
|[v0.37.8](https://github.com/electron/electron/releases/tag/v0.37.8)|2016-04-29||no|5.10.0|49|40249|
|[v0.37.7](https://github.com/electron/electron/releases/tag/v0.37.7)|2016-04-22||no|5.10.0|49|9470|
|[v0.37.6](https://github.com/electron/electron/releases/tag/v0.37.6)|2016-04-15||no|5.10.0|49|22185|
|[v0.37.5](https://github.com/electron/electron/releases/tag/v0.37.5)|2016-04-07||no|5.10.0|49|11745|
|[v0.37.4](https://github.com/electron/electron/releases/tag/v0.37.4)|2016-04-03||no|6.0.0-pre|49|6877|
|[v0.37.3](https://github.com/electron/electron/releases/tag/v0.37.3)|2016-03-27||no|5.1.1|49|28174|
|[v0.37.2](https://github.com/electron/electron/releases/tag/v0.37.2)|2016-03-14||no|||14300|
|[v0.37.1](https://github.com/electron/electron/releases/tag/v0.37.1)|2016-03-13||no|5.1.1|49|3111|
|[v0.37.0](https://github.com/electron/electron/releases/tag/v0.37.0)|2016-03-12||no|5.1.1|49|18976|
|[v0.36.12](https://github.com/electron/electron/releases/tag/v0.36.12)|2016-03-27||no|5.1.1|47|35962|
|[v0.36.11](https://github.com/electron/electron/releases/tag/v0.36.11)|2016-03-11||no|5.1.1|47|10453|
|[v0.36.10](https://github.com/electron/electron/releases/tag/v0.36.10)|2016-03-05||no|5.1.1|47|9542|
|[v0.36.9](https://github.com/electron/electron/releases/tag/v0.36.9)|2016-02-26||no|5.1.1|47|12291|
|[v0.36.8](https://github.com/electron/electron/releases/tag/v0.36.8)|2016-02-19||no|5.1.1|47|10900|
|[v0.36.7](https://github.com/electron/electron/releases/tag/v0.36.7)|2016-01-30||no|5.1.1|47|23043|
|[v0.36.6](https://github.com/electron/electron/releases/tag/v0.36.6)|2016-01-29||no|5.1.1|47|2839|
|[v0.36.5](https://github.com/electron/electron/releases/tag/v0.36.5)|2016-01-22||no|5.1.1|47|9924|
|[v0.36.4](https://github.com/electron/electron/releases/tag/v0.36.4)|2016-01-15||no|5.1.1|47|25681|
|[v0.36.3](https://github.com/electron/electron/releases/tag/v0.36.3)|2016-01-11||no|5.1.1|47|6178|
|[v0.36.2](https://github.com/electron/electron/releases/tag/v0.36.2)|2015-12-25||no|5.1.1|47|15146|
|[v0.36.1](https://github.com/electron/electron/releases/tag/v0.36.1)|2015-12-18||no|||7545|
|[v0.36.0](https://github.com/electron/electron/releases/tag/v0.36.0)|2015-12-11||no|5.1.1|47|17416|
|[v0.35.6](https://github.com/electron/electron/releases/tag/v0.35.6)|2016-01-11||no|||18814|
|[v0.35.5](https://github.com/electron/electron/releases/tag/v0.35.5)|2015-12-31||no|4.1.1|45|2584|
|[v0.35.4](https://github.com/electron/electron/releases/tag/v0.35.4)|2015-12-04||no|4.1.1|45|11618|
|[v0.35.3](https://github.com/electron/electron/releases/tag/v0.35.3)|2015-12-04||no|4.1.1|45|12564|
|[v0.35.2](https://github.com/electron/electron/releases/tag/v0.35.2)|2015-11-27||no|4.1.1|45|7290|
|[v0.35.1](https://github.com/electron/electron/releases/tag/v0.35.1)|2015-11-20||no|4.1.1|45|10143|
|[v0.35.0](https://github.com/electron/electron/releases/tag/v0.35.0)|2015-11-16||no|||6780|
|[v0.34.5](https://github.com/electron/electron/releases/tag/v0.34.5)|2015-11-26||no|||9400|
|[v0.34.4](https://github.com/electron/electron/releases/tag/v0.34.4)|2015-11-24||no|4.1.1|45|1982|
|[v0.34.3](https://github.com/electron/electron/releases/tag/v0.34.3)|2015-11-06||no|4.1.1|45|12621|
|[v0.34.2](https://github.com/electron/electron/releases/tag/v0.34.2)|2015-10-30||no|4.1.1|45|8933|
|[v0.34.1](https://github.com/electron/electron/releases/tag/v0.34.1)|2015-10-23||no|4.1.1|45|10645|
|[v0.34.0](https://github.com/electron/electron/releases/tag/v0.34.0)|2015-10-16||no|4.1.1|45|25153|
|[v0.33.9](https://github.com/electron/electron/releases/tag/v0.33.9)|2015-10-16||no|4.1.1|45|7970|
|[v0.33.8](https://github.com/electron/electron/releases/tag/v0.33.8)|2015-10-14||no|4.1.1|45|3062|
|[v0.33.7](https://github.com/electron/electron/releases/tag/v0.33.7)|2015-10-10||no|4.1.1|45|5644|
|[v0.33.6](https://github.com/electron/electron/releases/tag/v0.33.6)|2015-10-05||no|4.1.1|45|5352|
|[v0.33.5](https://github.com/electron/electron/releases/tag/v0.33.5)|2015-10-05||no|||1653|
|[v0.33.4](https://github.com/electron/electron/releases/tag/v0.33.4)|2015-10-02||no|4.1.1|45|2947|
|[v0.33.3](https://github.com/electron/electron/releases/tag/v0.33.3)|2015-09-26||no|4.1.1|45|6042|
|[v0.33.2](https://github.com/electron/electron/releases/tag/v0.33.2)|2015-09-25||no|4.1.1|45|1775|
|[v0.33.1](https://github.com/electron/electron/releases/tag/v0.33.1)|2015-09-22||no|4.1.1|45|3218|
|[v0.33.0](https://github.com/electron/electron/releases/tag/v0.33.0)|2015-09-17||no|5.0.0-pre|45|5811|
|[v0.32.3](https://github.com/electron/electron/releases/tag/v0.32.3)|2015-09-15||no|5.0.0-pre|45|3671|
|[v0.32.2](https://github.com/electron/electron/releases/tag/v0.32.2)|2015-09-10||no|3.3.0|45|2616|
|[v0.32.1](https://github.com/electron/electron/releases/tag/v0.32.1)|2015-09-09||no|||3202|
|[v0.32.0](https://github.com/electron/electron/releases/tag/v0.32.0)|2015-09-09||no|||359|
|[v0.31.2](https://github.com/electron/electron/releases/tag/v0.31.2)|2015-09-02||no|3.3.0|45|9359|
|[v0.31.1](https://github.com/electron/electron/releases/tag/v0.31.1)|2015-08-28||no|||2492|
|[v0.31.0](https://github.com/electron/electron/releases/tag/v0.31.0)|2015-08-26||no|3.1.0|44|2255|
|[v0.30.8](https://github.com/electron/electron/releases/tag/v0.30.8)|2015-09-26||no|||9982|
|[v0.30.7](https://github.com/electron/electron/releases/tag/v0.30.7)|2015-09-24||no|||2389|
|[v0.30.6](https://github.com/electron/electron/releases/tag/v0.30.6)|2015-08-26||no|||3247|
|[v0.30.5](https://github.com/electron/electron/releases/tag/v0.30.5)|2015-08-21||no|||1295|
|[v0.30.4](https://github.com/electron/electron/releases/tag/v0.30.4)|2015-08-10||no|3.1.0|44|5085|
|[v0.30.3](https://github.com/electron/electron/releases/tag/v0.30.3)|2015-08-07||no|||2286|
|[v0.30.2](https://github.com/electron/electron/releases/tag/v0.30.2)|2015-07-30||no|||6256|
|[v0.30.1](https://github.com/electron/electron/releases/tag/v0.30.1)|2015-07-24||no|||2786|
|[v0.30.0](https://github.com/electron/electron/releases/tag/v0.30.0)|2015-07-16||no|||8697|
|[v0.29.2](https://github.com/electron/electron/releases/tag/v0.29.2)|2015-07-07||no|2.3.1|43|11330|
|[v0.29.1](https://github.com/electron/electron/releases/tag/v0.29.1)|2015-07-03||no|2.3.1|43|1457|
|[v0.29.0](https://github.com/electron/electron/releases/tag/v0.29.0)|2015-07-03||no|||497|
|[v0.28.3](https://github.com/electron/electron/releases/tag/v0.28.3)|2015-06-23||no|2.2.1|43|7103|
|[v0.28.2](https://github.com/electron/electron/releases/tag/v0.28.2)|2015-06-18||no|2.2.1|43|2625|
|[v0.28.1](https://github.com/electron/electron/releases/tag/v0.28.1)|2015-06-12||no|2.2.1|43|2640|
|[v0.28.0](https://github.com/electron/electron/releases/tag/v0.28.0)|2015-06-11||no|2.2.1|43|285|
|[v0.27.3](https://github.com/electron/electron/releases/tag/v0.27.3)|2015-06-08||no|1.6.3|43|3064|
|[v0.27.2](https://github.com/electron/electron/releases/tag/v0.27.2)|2015-06-01||no|1.6.3|43|3087|
|[v0.27.1](https://github.com/electron/electron/releases/tag/v0.27.1)|2015-05-28||no|1.6.3|42|1104|
|[v0.27.0](https://github.com/electron/electron/releases/tag/v0.27.0)|2015-05-27||no|1.6.3|42|284|
|[v0.26.1](https://github.com/electron/electron/releases/tag/v0.26.1)|2015-05-21||no|1.6.3|42|5323|
|[v0.26.0](https://github.com/electron/electron/releases/tag/v0.26.0)|2015-05-12||no|1.6.3|42|3735|
|[v0.25.3](https://github.com/electron/electron/releases/tag/v0.25.3)|2015-05-08||no|1.6.3|42|4180|
|[v0.25.2](https://github.com/electron/electron/releases/tag/v0.25.2)|2015-05-01||no|1.6.3|42|3103|
|[v0.25.1](https://github.com/electron/electron/releases/tag/v0.25.1)|2015-04-23||no|1.6.3|42|5380|
|[v0.25.0](https://github.com/electron/electron/releases/tag/v0.25.0)|2015-04-22||no|1.6.3|42|333|
|[v0.24.0](https://github.com/electron/electron/releases/tag/v0.24.0)|2015-04-17||no|1.6.3|41|3718|
|[v0.23.0](https://github.com/electron/electron/releases/tag/v0.23.0)|2015-04-12||no|1.6.3|41|1089|
|[v0.22.3](https://github.com/electron/electron/releases/tag/v0.22.3)|2015-03-30||no|1.6.3|41|7376|
|[v0.22.2](https://github.com/electron/electron/releases/tag/v0.22.2)|2015-03-23||no|1.5.1|41|568|
|[v0.22.1](https://github.com/electron/electron/releases/tag/v0.22.1)|2015-03-18||no|1.5.1|41|1979|
|[v0.22.0](https://github.com/electron/electron/releases/tag/v0.22.0)|2015-03-18||no|||4939|
|[v0.21.3](https://github.com/electron/electron/releases/tag/v0.21.3)|2015-03-03||no|1.5.1|41|1786|
|[v0.21.2](https://github.com/electron/electron/releases/tag/v0.21.2)|2015-02-05||no|1.0.0-pre|40|2031|
|[v0.21.1](https://github.com/electron/electron/releases/tag/v0.21.1)|2015-02-03||no|1.0.0-pre|40|589|
|[v0.21.0](https://github.com/electron/electron/releases/tag/v0.21.0)|2015-01-28||no|1.0.0-pre|40|1190|
|[v0.20.8](https://github.com/electron/electron/releases/tag/v0.20.8)|2015-01-27||no|0.13.0-pre|39|61|
|[v0.20.7](https://github.com/electron/electron/releases/tag/v0.20.7)|2015-01-20||no|0.13.0-pre|39|390|
|[v0.20.6](https://github.com/electron/electron/releases/tag/v0.20.6)|2015-01-19||no|0.13.0-pre|39|546|
|[v0.20.5](https://github.com/electron/electron/releases/tag/v0.20.5)|2015-01-08||no|0.13.0-pre|39|579|
|[v0.20.4](https://github.com/electron/electron/releases/tag/v0.20.4)|2015-01-06||no|0.13.0-pre|39|364|
|[v0.20.3](https://github.com/electron/electron/releases/tag/v0.20.3)|2014-12-29||no|0.13.0-pre|39|546|
|[v0.20.2](https://github.com/electron/electron/releases/tag/v0.20.2)|2014-12-22||no|0.13.0-pre|39|839|
|[v0.20.1](https://github.com/electron/electron/releases/tag/v0.20.1)|2014-12-18||no|0.13.0-pre|39|360|
|[v0.20.0](https://github.com/electron/electron/releases/tag/v0.20.0)|2014-12-13||no|0.13.0-pre|39|270|
|[v0.19.5](https://github.com/electron/electron/releases/tag/v0.19.5)|2014-11-28||no|||3053|
|[v0.19.4](https://github.com/electron/electron/releases/tag/v0.19.4)|2014-11-21||no|||817|
|[v0.19.3](https://github.com/electron/electron/releases/tag/v0.19.3)|2014-11-20||no|||101|
|[v0.19.2](https://github.com/electron/electron/releases/tag/v0.19.2)|2014-11-15||no|||387|
|[v0.19.1](https://github.com/electron/electron/releases/tag/v0.19.1)|2014-11-04||no|||895|
|[v0.19.0](https://github.com/electron/electron/releases/tag/v0.19.0)|2014-10-30||no|||393|
|[v0.18.2](https://github.com/electron/electron/releases/tag/v0.18.2)|2014-10-21||no|||595|
|[v0.18.1](https://github.com/electron/electron/releases/tag/v0.18.1)|2014-10-17||no|||296|
|[v0.18.0](https://github.com/electron/electron/releases/tag/v0.18.0)|2014-10-14||no|||521|
|[v0.17.2](https://github.com/electron/electron/releases/tag/v0.17.2)|2014-10-06||no|||583|
|[v0.17.1](https://github.com/electron/electron/releases/tag/v0.17.1)|2014-10-01||no|||292|
|[v0.17.0](https://github.com/electron/electron/releases/tag/v0.17.0)|2014-10-01||no|||56|
|[v0.16.3](https://github.com/electron/electron/releases/tag/v0.16.3)|2014-09-20||no|||417|
|[v0.16.2](https://github.com/electron/electron/releases/tag/v0.16.2)|2014-09-09||no|||964|
|[v0.16.1](https://github.com/electron/electron/releases/tag/v0.16.1)|2014-09-08||no|||95|
|[v0.16.0](https://github.com/electron/electron/releases/tag/v0.16.0)|2014-09-06||no|||98|
|[v0.15.9](https://github.com/electron/electron/releases/tag/v0.15.9)|2014-08-20||no|||1530|
|[v0.15.8](https://github.com/electron/electron/releases/tag/v0.15.8)|2014-08-18||no|||1194|
|[v0.15.7](https://github.com/electron/electron/releases/tag/v0.15.7)|2014-08-15||no|||1193|
|[v0.15.6](https://github.com/electron/electron/releases/tag/v0.15.6)|2014-08-13||no|||1208|
|[v0.15.5](https://github.com/electron/electron/releases/tag/v0.15.5)|2014-08-11||no|||1225|
|[v0.15.4](https://github.com/electron/electron/releases/tag/v0.15.4)|2014-08-07||no|||1431|
|[v0.15.3](https://github.com/electron/electron/releases/tag/v0.15.3)|2014-08-06||no|||3116|
|[v0.15.2](https://github.com/electron/electron/releases/tag/v0.15.2)|2014-08-04||no|||1190|
|[v0.15.1](https://github.com/electron/electron/releases/tag/v0.15.1)|2014-07-31||no|||1297|
|[v0.15.0](https://github.com/electron/electron/releases/tag/v0.15.0)|2014-07-29||no|||1239|
|[v0.14.3](https://github.com/electron/electron/releases/tag/v0.14.3)|2014-07-27||no|||1146|
|[v0.14.2](https://github.com/electron/electron/releases/tag/v0.14.2)|2014-07-25||no|||1130|
|[v0.14.1](https://github.com/electron/electron/releases/tag/v0.14.1)|2014-07-24||no|||1120|
|[v0.14.0](https://github.com/electron/electron/releases/tag/v0.14.0)|2014-07-22||no|||1195|
|[v0.13.3](https://github.com/electron/electron/releases/tag/v0.13.3)|2014-06-25||no|||2217|
|[v0.13.2](https://github.com/electron/electron/releases/tag/v0.13.2)|2014-06-18||no|||353|
|[v0.13.1](https://github.com/electron/electron/releases/tag/v0.13.1)|2014-06-14||no|||363|
|[v0.13.0](https://github.com/electron/electron/releases/tag/v0.13.0)|2014-06-05||no|||713|
|[v0.12.7](https://github.com/electron/electron/releases/tag/v0.12.7)|2014-05-27||no|||398|
|[v0.12.6](https://github.com/electron/electron/releases/tag/v0.12.6)|2014-05-26||no|||223|
|[v0.12.5](https://github.com/electron/electron/releases/tag/v0.12.5)|2014-05-19||no|||16902|
|[v0.12.4](https://github.com/electron/electron/releases/tag/v0.12.4)|2014-05-12||no|||585|
|[v0.12.3](https://github.com/electron/electron/releases/tag/v0.12.3)|2014-05-07||no|||865|
|[v0.12.2](https://github.com/electron/electron/releases/tag/v0.12.2)|2014-05-05||no|||877|
|[v0.12.1](https://github.com/electron/electron/releases/tag/v0.12.1)|2014-05-05||no|||71|
|[v0.12.0](https://github.com/electron/electron/releases/tag/v0.12.0)|2014-04-29||no|||73|
|[v0.11.10](https://github.com/electron/electron/releases/tag/v0.11.10)|2014-04-14||no|||81|
|[v0.11.9](https://github.com/electron/electron/releases/tag/v0.11.9)|2014-04-11||no|||70|
|[v0.11.8](https://github.com/electron/electron/releases/tag/v0.11.8)|2014-04-10||no|||67|
|[v0.11.7](https://github.com/electron/electron/releases/tag/v0.11.7)|2014-04-08||no|||69|
|[v0.11.6](https://github.com/electron/electron/releases/tag/v0.11.6)|2014-04-07||no|||72|
|[v0.11.5](https://github.com/electron/electron/releases/tag/v0.11.5)|2014-04-02||no|||74|
|[v0.11.4](https://github.com/electron/electron/releases/tag/v0.11.4)|2014-03-28||no|||73|
|[v0.11.3](https://github.com/electron/electron/releases/tag/v0.11.3)|2014-03-25||no|||68|
|[v0.11.2](https://github.com/electron/electron/releases/tag/v0.11.2)|2014-03-24||no|||70|
|[v0.11.1](https://github.com/electron/electron/releases/tag/v0.11.1)|2014-03-18||no|||68|
|[v0.11.0](https://github.com/electron/electron/releases/tag/v0.11.0)|2014-03-16||no|||62|
|[v0.10.7](https://github.com/electron/electron/releases/tag/v0.10.7)|2014-03-11||no|||103|
|[v0.10.6](https://github.com/electron/electron/releases/tag/v0.10.6)|2014-03-07||no|||72|
|[v0.10.5](https://github.com/electron/electron/releases/tag/v0.10.5)|2014-03-05||no|||76|
|[v0.10.4](https://github.com/electron/electron/releases/tag/v0.10.4)|2014-03-02||no|||69|
|[v0.10.3](https://github.com/electron/electron/releases/tag/v0.10.3)|2014-02-28||no|||96|
|[v0.10.2](https://github.com/electron/electron/releases/tag/v0.10.2)|2014-02-27||no|||68|
|[v0.10.1](https://github.com/electron/electron/releases/tag/v0.10.1)|2014-02-25||no|||87|
|[v0.10.0](https://github.com/electron/electron/releases/tag/v0.10.0)|2014-02-24||no|||0|
|[v0.9.3](https://github.com/electron/electron/releases/tag/v0.9.3)|2014-02-17||no|||1114|
|[v0.9.2](https://github.com/electron/electron/releases/tag/v0.9.2)|2014-02-12||no|||1139|
|[v0.9.1](https://github.com/electron/electron/releases/tag/v0.9.1)|2014-02-04||no|||1128|
|[v0.9.0](https://github.com/electron/electron/releases/tag/v0.9.0)|2014-02-02||no|||1116|
|[v0.8.7](https://github.com/electron/electron/releases/tag/v0.8.7)|2014-01-27||no|||1137|
|[v0.8.6](https://github.com/electron/electron/releases/tag/v0.8.6)|2014-01-23||no|||1126|
|[v0.8.5](https://github.com/electron/electron/releases/tag/v0.8.5)|2014-01-14||no|||1135|
|[v0.8.4](https://github.com/electron/electron/releases/tag/v0.8.4)|2014-01-13||no|||1122|
|[v0.8.3](https://github.com/electron/electron/releases/tag/v0.8.3)|2014-01-08||no|||1120|
|[v0.8.2](https://github.com/electron/electron/releases/tag/v0.8.2)|2014-01-07||no|||1167|
|[v0.8.1](https://github.com/electron/electron/releases/tag/v0.8.1)|2013-12-29||no|||1131|
|[v0.8.0](https://github.com/electron/electron/releases/tag/v0.8.0)|2013-12-27||no|||1116|
|[v0.7.6](https://github.com/electron/electron/releases/tag/v0.7.6)|2013-12-09||no|||1187|
|[v0.7.5](https://github.com/electron/electron/releases/tag/v0.7.5)|2013-12-05||no|||1124|
|[v0.7.4](https://github.com/electron/electron/releases/tag/v0.7.4)|2013-12-04||no|||1213|
|[v0.7.3](https://github.com/electron/electron/releases/tag/v0.7.3)|2013-11-29||no|||1179|
|[v0.7.2](https://github.com/electron/electron/releases/tag/v0.7.2)|2013-11-28||no|||1157|
|[v0.7.1](https://github.com/electron/electron/releases/tag/v0.7.1)|2013-11-28||no|||1133|
|[v0.7.0](https://github.com/electron/electron/releases/tag/v0.7.0)|2013-11-27||no|||1135|
|[v0.6.12](https://github.com/electron/electron/releases/tag/v0.6.12)|2013-11-22||no|||567|
|[v0.6.11](https://github.com/electron/electron/releases/tag/v0.6.11)|2013-11-20||no|||570|
|[v0.6.10](https://github.com/electron/electron/releases/tag/v0.6.10)|2013-11-11||no|||575|
|[v0.6.9](https://github.com/electron/electron/releases/tag/v0.6.9)|2013-11-07||no|||576|
|[v0.6.8](https://github.com/electron/electron/releases/tag/v0.6.8)|2013-11-05||no|||562|
|[v0.6.7](https://github.com/electron/electron/releases/tag/v0.6.7)|2013-11-02||no|||567|
|[v0.6.6](https://github.com/electron/electron/releases/tag/v0.6.6)|2013-10-28||no|||576|
|[v0.6.5](https://github.com/electron/electron/releases/tag/v0.6.5)|2013-10-26||no|||540|
|[v0.6.4](https://github.com/electron/electron/releases/tag/v0.6.4)|2013-10-22||no|||559|
|[v0.6.3](https://github.com/electron/electron/releases/tag/v0.6.3)|2013-10-21||no|||542|
|[v0.6.2](https://github.com/electron/electron/releases/tag/v0.6.2)|2013-10-17||no|||546|
|[v0.6.1](https://github.com/electron/electron/releases/tag/v0.6.1)|2013-10-14||no|||547|
|[v0.6.0](https://github.com/electron/electron/releases/tag/v0.6.0)|2013-10-10||no|||547|
|[v0.5.4](https://github.com/electron/electron/releases/tag/v0.5.4)|2013-10-04||no|||571|
|[v0.5.3](https://github.com/electron/electron/releases/tag/v0.5.3)|2013-09-29||no|||534|
|[v0.5.2](https://github.com/electron/electron/releases/tag/v0.5.2)|2013-09-29||no|||531|
|[v0.5.1](https://github.com/electron/electron/releases/tag/v0.5.1)|2013-09-26||no|||553|
|[v0.5.0](https://github.com/electron/electron/releases/tag/v0.5.0)|2013-09-25||no|||536|
|[v0.4.9](https://github.com/electron/electron/releases/tag/v0.4.9)|2013-09-20||no|||531|
|[v0.4.8](https://github.com/electron/electron/releases/tag/v0.4.8)|2013-09-20||no|||530|
|[v0.4.7](https://github.com/electron/electron/releases/tag/v0.4.7)|2013-09-13||no|||532|
|[v0.4.6](https://github.com/electron/electron/releases/tag/v0.4.6)|2013-09-12||no|||532|
|[v0.4.5](https://github.com/electron/electron/releases/tag/v0.4.5)|2013-09-09||no|||534|
|[v0.4.4](https://github.com/electron/electron/releases/tag/v0.4.4)|2013-09-05||no|||533|
|[v0.4.3](https://github.com/electron/electron/releases/tag/v0.4.3)|2013-09-02||no|||534|
|[v0.4.2](https://github.com/electron/electron/releases/tag/v0.4.2)|2013-09-02||no|||536|
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
- `npm_dist_tag` (String) - an [npm dist-tag](https://docs.npmjs.com/cli/dist-tag) like `latest` or `beta`. Most releases will not have this property.
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
