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

### **1. Structure**

### `/api`

the api modules could ease the work when adding a new endpoint with minimum duplicated code

### `/pages`

it defines different routes. Currently only has the main feature which is the parameter. More could be added to support consuming the parameter templates, such as in a game config editor

### `/sagas`

it contains all the redux/sagas where it handles all the async logic, ask all the CRUD operations

### `/reducers`

it uses the redux/toolkit and the duck pattern, reduced a lot of boilerplate from the old way

### `/selectors`

it is used to compute derived data

### `/components`

it contains all the components used in this app

#### **Component Structure**

**styled**: containers all the related styled component for a given component

**test**: test cases for a given component

**About container and presentational components**, in general, the rule of thumb is that i use `index.js` file to serve as the container for a given component, and all the remaining files under the same folder are presentational components

### **2. Form**

The parameter form is rendered based on the parameter schema. Currently due to the time constraint, only support basic schema (one level object based) with limited fields.

Supported Schema format:

```
{
      "id": "XXX",
      "title": "XXX",
      "description": "XXX",
      "type": "object",
      "properties": {
        "XXX": {
          "type": "string",
          "enum": [
            "easy",
            "hard"
          ]
        },
        "XX": {
          "type": "number"
        }
      }
    }
```

Supported form fields:

- `Text`,`Number` input
- `Enum` dropdown
