# Contact Book

Frontend + Backend application that allows you to read, create, update and delete a list of contacts. All the fields are mandatory and there can’t be two contacts with the same email.

## Quick Start Guide

> **NOTICE:** You need to have installed [Node JS](https://nodejs.org/) (node version > 12)

### How to start:

If you have decided to clone this repo,:
1. **Open a terminal** in the root folder of your repository.
1. **Install the local dependencies** by executing the following command in the terminal:

```bash
npm install
```

### To start the project:

Once we have installed the dependencies, we are going to start the project. To do this, run the following command in the terminal:

```bash
npm run serve
```

This command runs the app in the development mode.
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The project will reload if you make edits.

### To compile for production

In this [guide](https://www.neoguias.com/como-publicar-aplicacion-vue-github-pages/) you can find the steps to deploy the app.

```
npm run build
```

### To run tests

* unit tests
```
npm run test:unit
```
* end-to-end tests
```
npm run test:e2e
```

## Resources and organization

A [Notion page](https://thoracic-find-18a.notion.site/Factorial-Challenge-be704c10016e455fb2d861bc7af586d8) with a list of **resources** searched and used to carry out this project, and a kanban board to **organize** the work.

Despite being made on a Notion page, it's not necessary to have an account to view it.

## Project decision making

The project has been made in a single app page, with:

* A **table** with a list of contacts. Each contact have: First name, Last name, Email, and Phone number. The users will be able to sort the list by First name and Last name
* A **history of edits** of each contact, accessible by expanding each line of the table

The whole project has been made in [Vue.js](https://vuejs.org/), using [Firebase](https://firebase.google.com/docs/firestore/quickstart?authuser=0) to build a no-sql database to storage and manage the contacts.

For the **styles**, I have opted for two ways:

* The use of [Vuetify](https://vuetifyjs.com/en/), as it offers ready-made and responsive Vue components.

* The use of [Sass](https://sass-lang.com/) as a CSS preprocessor, to achieve a more orderly code (since it allows nesting styles).

The **tests** are made with:

* [Jest-dom](https://jestjs.io/docs/getting-started) and [Vue-test-utils](https://v1.test-utils.vuejs.org/) for unit tests.

* [Cypress](https://www.cypress.io/) for end-to-end tests. 
