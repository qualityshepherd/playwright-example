[![E2E Tests](https://github.com/qualityshepherd/playwright-example/actions/workflows/e2e.yaml/badge.svg)](https://github.com/qualityshepherd/playwright-example/actions/workflows/e2e.yaml)

## Playwright Example
Example e2e tests (some of which are slightly silly) written with [Playwright](https://playwright.dev/), that:
- use a page object pattern
- are es6y
- run in parallel
- run on multiple browsers
- run headlessly
- run on CI

## Setup
1. clone `clone git@github.com:qualityshepherd/playwright-example.git`
2. install `npm i`

## Run
* run `npm test` to run 4 browsers headlessly
* `npm run headed` to watch tests run in the browser(s)
* `npm run` to see all the options

## Results

![Test Run Gif](https://qualityshepherd.com/screencasts/pw.gif)