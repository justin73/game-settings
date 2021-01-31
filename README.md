# Game Setting Configuration Tool

- [Table of content](#table-of-content)
  - [🚀 Getting Started](#%f0%9f%9a%80-getting-started)
  - [📚 Dependencies and ecosystem](#%f0%9f%93%9a-dependencies-and-ecosystem)
  - [Implementation](implementation)

## 🚀 Getting Started

First, clone the repo to your local machine.

Then, install dependencies

```sh
npm install
```

In this demo, I used json-server as a mock server which supports some basic CRUD operations, so in order to get mock data, there is a prerequisit condition, you need to install the json-server

```sh
npm install -g json-server
```

Then you can simply run `npm run server` then `npm start` to run the project in your local environment

## 📚 Dependencies and ecosystem

This project was started with [Create React App](https://github.com/facebook/create-react-app) and uses a standard tech stack:

- [React](https://reactjs.org)
- [Redux](https://redux.js.org)
- [React-Router](https://github.com/ReactTraining/react-router)
- [styled-components](https://www.styled-components.com)
- [Storybook](https://storybook.js.org/)

Some small but powerful third party libs used in the project:

- [selector library for redux](https://github.com/reduxjs/reselect#readme)
- [loadable](https://loadable-components.com/) for code split
- [json server](https://github.com/typicode/json-server) to get a full fake REST API

I also used some utilities to standardize the code format and formalize the commit messages

[prettier](https://prettier.io) and [commitlint](https://commitlint.js.org/#/) respectively for code and commit message formatting, along with [husky](https://github.com/typicode/husky) for automation based on git hooks.

## Implementation

Data Structure
