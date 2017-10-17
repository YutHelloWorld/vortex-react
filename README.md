# vortex-react

[![Build Status](https://travis-ci.org/YutHelloWorld/vortex-react.svg?branch=master)](https://travis-ci.org/YutHelloWorld/vortex-react)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![codecov](https://codecov.io/gh/YutHelloWorld/vortex-react/branch/master/graph/badge.svg)](https://codecov.io/gh/YutHelloWorld/vortex-react)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Get start with [React](https://facebook.github.io/react/), [Redux](http://redux.js.org/), [RR4](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) 🚀

> Release 2.0.0 was build with create-react-app

👉 [Online](https://yuthelloworld.github.io/vortex-react)  

[中文](https://github.com/YutHelloWorld/vortex-react/blob/master/README-zh.md)

<details>
<summary><strong>Table of Contents</strong></summary>

* [Feature](#feature)
* [Get Start](#get-start)
  + [Installation](#installation)
  + [Running](#running)
  + [Scripts](#scripts)
* [Project Structure](#project-structure)
  + [Files Structure](#files-structure)
  + [Data Flow](#data-flow)
  + [Logic](#logic)
* [Contribution](#contribution)

</details>

---

## Feature

- React
- ES6
- Redux
- React-Router-Dom
- Reactstrap + Bootstrap\^4.0.0-alpha.6 (UI)
- Sass

---

## Get Start

Before the start, we recommend you read these documentation.

- [React](https://facebook.github.io/react/)
- [Redux](https://github.com/reactjs/redux)
- [React-Router-Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [ES6](http://babeljs.io/learn-es2015/)

You can try ES6 and JSX in [Babel REPL](http://babeljs.io/repl/).

> We recommend node 6.x + npm 5.x + yarn ^0.27.5。

### Installation

```bash
git clone https://github.com/yuthelloworld/vortex-react.git <my-project-name>
cd <my-project-name>
yarn  # Install project dependencies (or `npm install`)
```

### Running

```bash
yarn start  # Start the development server (or `npm start`)
```

### Scripts

| `yarn <script>` | Description                                        |
| --------------- | -------------------------------------------------- |
| `start`         | Serves your app at <http://localhost:3000>         |
| `build`         | Builds the application to ./build                   |
| `test`          | Runs unit tests             |
| `coverage`      | Gets coverage |
| `analyze`      | Analyze the bundle size |

---

## Project Structure

### Files Structure

```bash
.
├── build                    # All build-related code
├── public                   # Static public assets (not imported anywhere in source code)
└── src                      # Application source code
    ├── index.js              # Application rendering
    ├── components           # Global Reusable Components
    ├── layouts              # Components that dictate major page structure
    ├── routes               # Components that dictate major page structure
    │   ├── index.js         # Main application routes with store
    │   ├── Home             # Fractal route
    │   │   ├── index.js     # Route definitions and async split points
    │   │   ├── assets       # Assets required to render components
    │   │   ├── components   # Dumb Components
    │   │   └── routes **
    │   └── Zen
    │       ├── index.js
    │       ├── container    # Smart component
    │       ├── modules      # redux module(reducers/constants/actions)
    │       └── routes **
    ├── store                # Redux store
    │   ├── createStore.js   # Create store
    │   └── reducers.js      # Reducers
    └── styles               # Style sheet
```

### Data Flow

![redux](https://user-images.githubusercontent.com/20860159/29354186-429b4446-829f-11e7-9a2f-a15c97dafaa3.png)

### Logic

![vortex-react](https://user-images.githubusercontent.com/20860159/29354203-56f1c672-829f-11e7-9465-2c2b37484823.png)

---

## Contribution

Thank you to all the people who already contributed to vortex-react!

- [Mrsususu](https://github.com/Mrsususu/)
- [liadbiz](https://github.com/liadbiz)

