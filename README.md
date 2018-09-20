# fliplet-rss


## Packages
This project contains the following packages:

- [hybrid](packages/hybrid/README.md)

## Prerequisites
- Vue
- Node v8.12 (LTS)
- Yarn 1.4.2+
- Docker
- Docker compose
- Cordova
- Linux (recommended)

## Installation

```
yarn install
```

## Routes
The frontend application has the following routes

- /rss2feed - contains issue #2
- /display-feed contains issue #3, #4
- /display-feed-express #5

## Available commands
As this is a mono repository we can execute the following commands from the root of the project

- rss:start - Starts the express server on port 3000
- hybrid:dev - Starts the hybrid Vue/Cordova project for development
- hybrid:build - Builds the hybrid Vue/Cordova project for development
- hybrid:browser - Starts the hybrid Vue/Cordova project for browser platform

## Docker
In `packages/rss` a docker-compose file is available and can be executed with `docker-compose up -d`

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
