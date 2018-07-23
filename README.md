#Tamboon React 

Sample web application using [react](https://github.com/facebook/react), [redux](https://github.com/reduxjs/redux), [redux-thunk](https://github.com/reduxjs/redux-thunk) and test covered with [jest](https://github.com/facebook/jest) test runner.

## Overview
![Screenshot](./resources/tamboon-react-screenshot.gif)

## How to run (Development)
1. `git clone` this project
2. `yarn install`
3. `cp template.env development.env`
4. `yarn server`
5. `yarn client`

## How to run (Production)
1. `git clone` this project
2. `yarn install`
3. `cp template.env production.env`, input the right server endpoint.
5. `yarn client:production`

## How to run test
1. `jest`
2. `jest --coverage` for seeing test coverage

This will build bundle javascript file with minified version.
And also run express server as well.