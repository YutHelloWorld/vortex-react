# vortex-react

[![Build Status](https://travis-ci.org/YutHelloWorld/vortex-react.svg?branch=master)](https://travis-ci.org/YutHelloWorld/vortex-react)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/YutHelloWorld/vortex-react/blob/master/LICENSE)

基于[React](https://facebook.github.io/react/)/[Redux](http://redux.js.org/)/[React-Router v4](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)/[Webpack v2](https://webpack.js.org/)/[Reactstrap](https://reactstrap.github.io/)的前端脚手架。

## 目录

### &sect; [技术栈](#feature)

### &sect; [快速开始](#getting-start)

- [安装](#installation)
- [启动](#start)
- [脚本](#script)

### &sect; [项目架构](#project-structure)

- [目录结构](#file-tree)
- [数据流](#module)
- [模块逻辑](#logic)

### &sect; [开发调试](#devlop)

- [Redux DevTools](#devtools)
- [路由](#react-router)

### &sect; [静态部署](#deploy)

### &sect; [规范](#style)

### &sect; [更多文档](#doc)

## <a name="feature">&sect; 技术栈</a>

- React
- ES6/7/8 + Babel
- Webpack v2
- Redux
- React-Router v4
- Reactstrap + Bootstrap\^4.0.0-alpha.6 (UI)
- Sass
- Eslint
- Express

---

## <a name="getting-start">&sect; 快速开始</a>

在开始之前，希望你已通读以下文档

- [React](https://facebook.github.io/react/)
- [Redux](https://github.com/reactjs/redux)
- [React-Router-Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [ES6](http://babeljs.io/learn-es2015/)

看完一脸还是懵逼请移步参看 [React知识地图系列](https://github.com/YutHelloWorld/Blog/issues/1)

你可以在[Babel REPL](http://babeljs.io/repl/)验证ES6转ES5、JSX语法。

> 推荐升级到 node 6.x + npm 5.x + yarn ^0.27.5环境。**强烈推荐**使用 [`cnpm`](https://github.com/cnpm/cnpm) 安装依赖
> 或手动切换到淘宝 npm 源：`npm set registry https://registry.npm.taobao.org/`
> (经测试，`cnpm` 对于 `node-sass` `PhantomJS`等问题多多的 Package 拥有秒杀能力)

### <a name="installation">⊙ 安装</a>

```bash
git clone https://github.com/yuthelloworld/vortex-react.git <my-project-name>
cd <my-project-name>
yarn  # Install project dependencies (or `cnpm install`)
```

### <a name="start">⊙ 启动</a>

```bash
yarn start  # Start the development server (or `npm start`)
```

### <a name="script">⊙ 脚本</a>

|`yarn <script>`    |描述|
|-------------------|-----------|
|`start`            |启动<http://localhost:3000>|
|`build`            |打包构建到目录 ./dist|
|`lint`             |静态检查|
|`lint:fix`         |静态检查修复|

---

## <a name="project-structure">&sect; 项目架构</a>

### <a name="file-tree">⊙ 目录结构</a>

```bash
.
├── build                    # 打包配置
├── public                   # 公共静态资源
├── server                   # express服务
│   └── main.js              # 服务入口js
├── src                      # 应用源文件
│   ├── index.html           # html模板
│   ├── main.js              # 程序启动和渲染
│   ├── normalize.js         # 浏览器的兼容和垫片
│   ├── components           # 全局可复用组件
│   ├── layouts              # 主页布局
│   │   └── PageLayout       # 导航
│   ├── routes               # 动态路由
│   │   ├── index.js         # 主路由
│   │   ├── Home             # 子路由Home
│   │   │   ├── index.js     # 路由定义和异步加载
│   │   │   ├── assets       # 组件的静态文件
│   │   │   ├── components   # 展示组件
│   │   │   └── routes **    # 子路由
│   │   └── Counter          # 子路由Counter
│   │       ├── index.js     # 路由定义
│   │       ├── container    # 容器组件
│   │       ├── modules      # module(reducers/constants/actions)
│   │       └── routes **    # 子路由
│   ├── store                # Redux相关模块
│   │   ├── createStore.js   # 创建和使用redux store
│   │   └── reducers.js      # Reducer的注册和注入
│   └── styles               # 样式表
└── tests                    # 单元测试(自行添加)
```

### <a name="module">⊙ 数据流</a>

![redux](https://user-images.githubusercontent.com/20860159/29354186-429b4446-829f-11e7-9a2f-a15c97dafaa3.png)

### <a name="logic">⊙ 模块逻辑</a>
![vortex-react](https://user-images.githubusercontent.com/20860159/29354203-56f1c672-829f-11e7-9465-2c2b37484823.png)

---

## <a name="devlop">&sect; 开发调试</a>

在开发环境，采用了`webpack-dev-middleware`和`webpack-hot-middleware`两个中间件，为应用提供Server和HMR。

### <a name="devtools">⊙ Redux DevTools</a>

强烈推荐安装谷歌浏览器插件[Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd),来查看整个应用状态的时光穿梭旅程。

### <a name="react-router">⊙ 路由</a>

`react-router-dom`（也就是`react-router` v4）。最小的逻辑单元为路由，路由内部子组件数据由路由父组件传递。

---

## <a name="deploy">&sect; 静态部署</a>

>推荐使用`nginx` 反向代理静态web服务来启动应用。请将路由指向`~/dist/index.html`，然后让`React-Router`处理剩下的事，更多参考[这个文档](https://github.com/ReactTraining/react-router/blob/v3/docs/guides/Histories.md#configuring-your-server)。Express在脚手架中用于扩展服务和代理API。

这里以ubuntu为例演示如何用nginx设置反向代理。

- 安装nginx：

```bash
sudo apt-get install nginx
```

- 修改配置文件：

```bash
sudo vi /etc/nginx/sites-available/default
```

- 将以下内容粘贴到文件中：

```bash
server{
  listen 8001;
  server_name 127.0.0.1;  //这里可以改成服务器地址
  location / {
    proxy_pass http://127.0.0.1:3000;
  }
}
```

- 重启nginx服务，并启动应用，打开浏览器访问 <http://localhost:8081>。

```bash
sudo service nginx restart

// 切换到工程目录
yarn start
```

---

## <a name="style">&sect; 规范</a>

结合[airbnb/javascript](https://github.com/airbnb/javascript)、[Javascript Standard Style](https://standardjs.com/rules-zhcn.html#javascript-standard-style)以及[standard-react](https://github.com/standard/eslint-config-standard-react)，配置`.eslintrc`

## <a name="doc">&sect; 更多文档</a>

[React知识地图系列](https://github.com/YutHelloWorld/Blog/issues/1)
