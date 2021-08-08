Lyrical-GraphQL (Deux)
===

An updated starter project for Stephen Grider's [GraphQL + React Udemy course](https://www.udemy.com/course/graphql-with-react-course/)

This updated close uses the latest Apollo Client and React
versions (all packages, included in the original project, have been updated to
their latest possible versions).

**note**: the project was developed using the latest LTS version of node
(`fermium`)

## Getting Started

* `npm install`

That's it!  The rest of the setup follows the video course.

## Changelog

The main changes (where the original repo & this differ) are as follows:
* Updated libraries:
  - `react-apollo` is no longer used.  Related binds have been migrated directly into `@apollo/client`
  - `react`, `react-dom` now on the latest version
  - Development dependencies (ie. `babel`, `webpack` .. etc) are now updated to latest possible versions.
* Babel configuration has been been moved to the `webpack.config.js` file (see `babel-loader` settings)
* Fix deprecated APIs
  - `express-graphql`'s exports
  - `body-parser` json parsing is deprecated (functionality moved to `express`)

## Docker

:warning: Please do not use the `Dockerfile` to install & run the
project--this is a WIP and requires some architectural changes
