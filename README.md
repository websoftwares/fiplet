# fliplet-rss


## Packages
This project contains the following packages:

- [hybrid](packages/hybrid/README.md)

## Prerequisites
- Vue
- Node v8.12 (LTS)
- Yarn 1.4.2+
- Docker
- Cordova
- Linux (recommended)

## Installation

```
yarn install
```

## Deployment:


## Testing
For all packages unit tests are defined in `packages/*/test` and integration test in `packages/*/test-integration`.

All test should have the following file suffix: `*.test.js`

## Adding dependencies
For each package we can have local dependencies, to add one issue the following command

```
cd packages/<function>/
yarn add <name of package> --save
```

## Project dependencies
- Yarn [work spaces](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/) with [nohoist](https://yarnpkg.com/blog/2018/02/15/nohoist/)

## License
See the [LICENSE](LICENSE) file for license rights and limitations (MIT).
