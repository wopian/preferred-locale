# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.5](https://github.com/wopian/preferred-locale/compare/v1.0.4...v1.0.5) (2020-07-18)


### Bug Fixes

* **isLanguageAvailable:** correct typo in assigned variable name ([950c72e](https://github.com/wopian/preferred-locale/commit/950c72e))


### Chores

* **release:** update documentation ([705ab27](https://github.com/wopian/preferred-locale/commit/705ab27))


### Tests

* **deduplicate:** full line coverage ([c0a0bd8](https://github.com/wopian/preferred-locale/commit/c0a0bd8))
* **userLocales:** full line coverage ([2d50bf1](https://github.com/wopian/preferred-locale/commit/2d50bf1))
* **userLocales:** remove test case ([8be71cf](https://github.com/wopian/preferred-locale/commit/8be71cf))





## [1.0.4](https://github.com/wopian/preferred-locale/compare/v1.0.3...v1.0.4) (2020-07-14)


### Bug Fixes

* **isLanguageAvailable:** do not return regionless-locales in older browsers with languageOnly set to false ([fa46526](https://github.com/wopian/preferred-locale/commit/fa46526))


### Chores

* **release:** update documentation ([f496898](https://github.com/wopian/preferred-locale/commit/f496898))





## [1.0.3](https://github.com/wopian/preferred-locale/compare/v1.0.2...v1.0.3) (2020-07-14)


### Bug Fixes

* **userLocales:** guard against window on node enviroments ([96d590c](https://github.com/wopian/preferred-locale/commit/96d590c))


### Chores

* **release:** update documentation ([ac80716](https://github.com/wopian/preferred-locale/commit/ac80716))





## [1.0.2](https://github.com/wopian/preferred-locale/compare/v1.0.1...v1.0.2) (2020-07-14)


### Bug Fixes

* **userLocales:** check Intl is implemented before checking if DateTimeFormat is implemented ([192012e](https://github.com/wopian/preferred-locale/commit/192012e))


### Build System / Dependencies

* add package keywords ([f07bd15](https://github.com/wopian/preferred-locale/commit/f07bd15))
* do not publish types for internal functions ([ab45273](https://github.com/wopian/preferred-locale/commit/ab45273))


### Chores

* **release:** update documentation ([3d415b1](https://github.com/wopian/preferred-locale/commit/3d415b1))
* **release:** update documentation ([847858a](https://github.com/wopian/preferred-locale/commit/847858a))


### Documentation Changes

* update package description ([78b4a33](https://github.com/wopian/preferred-locale/commit/78b4a33))





## [1.0.1](https://github.com/wopian/preferred-locale/compare/v1.0.0...v1.0.1) (2020-07-14)


### Build System / Dependencies

* revert publish script change to make initial release ([ef81f1d](https://github.com/wopian/preferred-locale/commit/ef81f1d))


### Chores

* **release:** update documentation ([8ead7cd](https://github.com/wopian/preferred-locale/commit/8ead7cd))


### Documentation Changes

* update package size ([24e97bf](https://github.com/wopian/preferred-locale/commit/24e97bf))





# [1.0.0](https://github.com/wopian/preferred-locale/compare/v0.1.0...v1.0.0) (2020-07-13)


### Chores

* **release:** update documentation ([34f813b](https://github.com/wopian/preferred-locale/commit/34f813b))
* **release:** update documentation ([89760fb](https://github.com/wopian/preferred-locale/commit/89760fb))


### Continuous Integration

* update workflow configs ([b8cef20](https://github.com/wopian/preferred-locale/commit/b8cef20))
* **eslint:** fix tag version number ([db5c5ec](https://github.com/wopian/preferred-locale/commit/db5c5ec))


### Tests

* add Intl.Locale fallback tests ([9e1fa33](https://github.com/wopian/preferred-locale/commit/9e1fa33))





# [0.1.0](https://github.com/wopian/preferred-locale/compare/v0.0.1-prerelease...v0.1.0) (2020-07-13)


### Build System / Dependencies

* add typescript types ([967be5a](https://github.com/wopian/preferred-locale/commit/967be5a))


### Chores

* **release:** update documentation ([7c13428](https://github.com/wopian/preferred-locale/commit/7c13428))
* **release:** update documentation ([a5bf738](https://github.com/wopian/preferred-locale/commit/a5bf738))
* add configuration ([5993518](https://github.com/wopian/preferred-locale/commit/5993518))
* add fallback for older browsers ([200d1eb](https://github.com/wopian/preferred-locale/commit/200d1eb))


### Continuous Integration

* **build:** cache specifically for lerna monorepos ([52cc81e](https://github.com/wopian/preferred-locale/commit/52cc81e))
* **build:** use yarn cache ([f6254f6](https://github.com/wopian/preferred-locale/commit/f6254f6))
* **eslint:** add github action ([1c1b7e3](https://github.com/wopian/preferred-locale/commit/1c1b7e3))
* **size-limit:** fix wrong version pinning ([b79f8ab](https://github.com/wopian/preferred-locale/commit/b79f8ab))
* **size-limit:** remove brotli config ([4a161ce](https://github.com/wopian/preferred-locale/commit/4a161ce))
* add github action for package size limits ([32113cf](https://github.com/wopian/preferred-locale/commit/32113cf))
* update action names ([ae8be7f](https://github.com/wopian/preferred-locale/commit/ae8be7f))
* **size-limit:** migrate version to node-version ([8d63dda](https://github.com/wopian/preferred-locale/commit/8d63dda))
* **typo:** add config and exclude words ([c919a70](https://github.com/wopian/preferred-locale/commit/c919a70))


### Documentation Changes

* add dependencies badge to root README ([c8af2bb](https://github.com/wopian/preferred-locale/commit/c8af2bb))
* add rationale for package ([b4a90e8](https://github.com/wopian/preferred-locale/commit/b4a90e8))
* add READMEs ([89ab29c](https://github.com/wopian/preferred-locale/commit/89ab29c))


### New Features

* implement modern implementation using Intl.Locale ([78002b1](https://github.com/wopian/preferred-locale/commit/78002b1))
* initialise repo ([bde02d4](https://github.com/wopian/preferred-locale/commit/bde02d4))


### Tests

* mark internal methods as private ([2b08539](https://github.com/wopian/preferred-locale/commit/2b08539))
