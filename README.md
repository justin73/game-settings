# Game Setting Configuration Tool

- [Table of content](#table-of-content)
  - [🚀 Getting Started](#%f0%9f%9a%80-getting-started)
  - [📚 Dependencies and ecosystem](#%f0%9f%93%9a-dependencies-and-ecosystem)
  - [📔 Implementation](implementation)

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

## 📔 Implementation

### **1. Project Description/Potential Development**

### 1.1. feature breakdown

This service is currently focusing on creating templates for a given parameter(configuration) in a game.

As a complete version of this service, this application will evolve into 2 main features

1. **parameter template creator** (the currnet feature implemented of the project)

   this feature will allow in house designers/admins to config different parameter of the game by creating different sets of templates

2. **parameter template consumer**

   this feature will allow operators to directly apply a predefined template to the game.

Break the service down into two parts will allow us to comply with future requirements such as

1. **permission**

   e.g. a live ops operator could only use existing template but cannot arbitrirarily create any random tempaltes, all the template creation has to be validated by an admin.

2. **A/B test**

   can define different groups with different segmentation then apply different parameter template (config with different values)

Here is a simple design mock I also created to illustrate the future extension of this service
[Figma Link](https://www.figma.com/proto/rDuICs8YwqfDdjcEsBRWx9/game-settings?node-id=2%3A13&viewport=492%2C364%2C0.07758382707834244&scaling=min-zoom)

### 1.2 Trade-Offs

1. _Currently form limitations: formik + yup_

   Using formik + yup is an simple and easy way for a fixed form validation. However, when it comes to the dynamic range of potential game settings, that means we then need to create/predefine different kinds of yup schema. That means the service right now is not yet flexible enough to generate and validation automatically.

   The change I would do is to enrich the json schema with all the conditions then use/create a JSON schema form could do both dynamic rendering as well as validation at once. e.g. [react-jsonschema-form](https://rjsf-team.github.io/react-jsonschema-form/)

   Right now, I worte a set of utils functions to iterate through the parameter schema and render the form according, but YUP is validation is still hardcoded.

2. _formik vs react-hook-form_

   formik is good and have a big community base, but in terms of performance, react-hook-form may be a better option, [comparison](https://blog.logrocket.com/react-hook-form-vs-formik-a-technical-and-performance-comparison/), [react-hook-form](https://react-hook-form.com/)

3. _limited implementation_
   Since this is a quick assignment, due to time constraint, I didn't start the project based on the vision, more on the actual requirements. so there are some UI elments that are currently not implemented, such as the sidenav, the editor,etc.

### **2. Structure**

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

### **3. Form**

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
