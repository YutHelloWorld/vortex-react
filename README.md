# vortex-react

[![Build Status](https://travis-ci.org/YutHelloWorld/vortex-react.svg?branch=master)](https://travis-ci.org/YutHelloWorld/vortex-react)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/YutHelloWorld/vortex-react/blob/master/LICENSE)

Get start with [React](https://facebook.github.io/react/)/[Redux](http://redux.js.org/)/[React-Router v4](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)/[Webpack v3](https://webpack.js.org/)/[Reactstrap](https://reactstrap.github.io/)

>2017/8/29
checkout branch mobx to see the version mobx instead of redux!

[中文](https://github.com/YutHelloWorld/vortex-react/blob/master/README-zh.md)

## Table of Contents

- [Feature](#feature)

- [Get Start](#get-start)

  - [Install](#install)
  - [Run](#run)
  - [Scripts](#scripts)

- [Project Structure](#project-structure)

  - [File Tree](#file-tree)
  - [Data Flow](#data-flow)
  - [Logic](#logic)

- [Live Development](#live-development)

- [Deploy](#deploy)

- [Code Style](#code-style)

- [More](#more)

## Feature

- React
- ES6/7/8 + Babel
- Webpack 3
- Redux
- React-Router v4
- Reactstrap + Bootstrap\^4.0.0-alpha.6 (UI)
- Sass
- Eslint
- Express

---

## Get Start

Before the start, we recommend you read these documentation.

- [React](https://facebook.github.io/react/)
- [Redux](https://github.com/reactjs/redux)
- [React-Router-Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [ES6](http://babeljs.io/learn-es2015/)

You can tru ES6 and JSX in [Babel REPL](http://babeljs.io/repl/).

> We recommend node 6.x + npm 5.x + yarn ^0.27.5。

### Install

```bash
git clone https://github.com/yuthelloworld/vortex-react.git <my-project-name>
cd <my-project-name>
yarn  # Install project dependencies (or `cnpm install`)
```

### Run

```bash
yarn start  # Start the development server (or `npm start`)
```

### Scripts

| `yarn <script>` | Description                                        |
| --------------- | -------------------------------------------------- |
| `start`         | Serves your app at <http://localhost:3000>         |
| `build`         | Builds the application to ./dist                   |
| `lint`          | Lints the project for potential errors             |
| `lint:fix`      | Lints the project and fixes all correctable errors |

---

## Project Structure

### File Tree

```bash
.
├── build                    # All build-related code
├── public                   # Static public assets (not imported anywhere in source code)
├── server                   # Express application that provides webpack middleware
│   └── main.js              # Server application entry point
├── src                      # Application source code
│   ├── index.html           # Main HTML page container for app
│   ├── main.js              # Application rendering
│   ├── normalize.js         # Browser normalization and polyfills
│   ├── components           # Global Reusable Components
│   ├── layouts              # Components that dictate major page structure
│   │   └── PageLayout       # Components that dictate major page structure
│   ├── routes               # Components that dictate major page structure
│   │   ├── index.js         # Main application routes with store
│   │   ├── Home             # Fractal route
│   │   │   ├── index.js     # Route definitions and async split points
│   │   │   ├── assets       # Assets required to render components
│   │   │   ├── components   # Presentational React Components
│   │   │   └── routes **
│   │   └── Counter
│   │       ├── index.js
│   │       ├── container    # Container component
│   │       ├── modules      # redux module(reducers/constants/actions)
│   │       └── routes **
│   ├── store                # Redux store
│   │   ├── createStore.js   # Create store
│   │   └── reducers.js      # Reducers
│   └── styles               # Style sheet
└── tests                    # Unit tests
```

### Data Flow

![redux](https://user-images.githubusercontent.com/20860159/29354186-429b4446-829f-11e7-9a2f-a15c97dafaa3.png)

### Logic

![vortex-react](https://user-images.githubusercontent.com/20860159/29354203-56f1c672-829f-11e7-9465-2c2b37484823.png)

---

## Live Development

We use `webpack-dev-middleware`abd`webpack-hot-middleware` for server and HMR 。

We recommend using [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).

---

## Deploy

>Use `nginx` to proxy static web to start this app。Point at `~/dist/index.html`.[See more](https://github.com/ReactTraining/react-router/blob/v3/docs/guides/Histories.md#configuring-your-server)。

This is an exmaple in ubuntu:

- Install nginx：

```bash
sudo apt-get install nginx
```

- Config：

```bash
sudo vi /etc/nginx/sites-available/default
```

- Copy the flowing to config：

```bash
server{
  listen 8001;
  server_name 127.0.0.1;  //server Ip
  location / {
    proxy_pass http://127.0.0.1:3000;
  }
}
```

- restart nginx，start app，browser <http://localhost:8081>。

```bash
sudo service nginx restart

// `cd your app`
yarn start
```

---

## Code Style

Refrence [airbnb/javascript](https://github.com/airbnb/javascript)、[Javascript Standard Style](https://standardjs.com/rules-zhcn.html#javascript-standard-style) and [standard-react](https://github.com/standard/eslint-config-standard-react)，we set up [.eslintrc](https://github.com/YutHelloWorld/vortex-react/blob/master/.eslintrc)

## More

Welcom PR and issues!
