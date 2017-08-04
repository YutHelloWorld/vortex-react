# vortex-react

[![Build Status](https://travis-ci.org/YutHelloWorld/vortex-react.svg?branch=master)](https://travis-ci.org/YutHelloWorld/vortex-react)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

基于[React](https://facebook.github.io/react/)、[Redux](http://redux.js.org/)、[React-Router v3](https://github.com/ReactTraining/react-router/tree/v3/docs)、[Webpack v2](https://webpack.js.org/)和[R eactstrap](https://reactstrap.github.io/)的前端脚手架。

## 目录

- [前言](#前言)
- [特性](#特性)
- [环境](#环境)
- [开始](#开始)
- [工程结构](#工程结构)
- [开发调试](#开发调试)
- [单元测试](#单元测试)
- [静态部署](#静态部署)
- [相关文档](#相关文档)
- [致谢](#致谢)

## 前言

如果你是一个React初学者，这个项目可以是个很好的教程。如果你正在计划使用React技术栈搭建一个大型SPA，那么这个脚手架正好适合你。

## 特性

- [React](https://facebook.github.io/react/)
- [ES2015](https://babeljs.io/learn-es2015/)
- [Webpack](https://webpack.js.org/)
- [Redux](http://redux.js.org/)
- [React-router](https://github.com/ReactTraining/react-router/tree/v3/docs)
- [Reactstrap](https://reactstrap.github.io/)
- [Eslint](http://eslint.cn/)
- [Express](http://expressjs.com/)
- [Babel](https://babeljs.io/)
- [Karma](https://karma-runner.github.io/1.0/index.html)

### 数据流
![Redux-flow](./public/Redux-flow.png)

## 环境

- node `^6.11.2`
- yarn `^0.27.5` or npm `^5.0.3`

## 开始

在确认你的开发环境是以上[环境配置](#环境)，就开始可以基于这个脚手架创建你的应用了:

首先，克隆这个工程。

```bash
$ git clone https://github.com/yuthelloworld/vortex-react.git <my-project-name>
$ cd <my-project-name>
```

然后，安装工程依赖。推荐使用[cnpm](https://npm.taobao.org/)或[Yarn](https://yarnpkg.com/)，这样可以减少安装时间，避免出现一些莫名奇妙的错误。

```bash
$ yarn  # Install project dependencies (or `npm install` or `cnpm install`)
```

最后，使用命令`yarn start`或者`npm start`来启动该应用。

```bash
$ yarn start  # Start the development server (or `npm start`)
```
![get-start](./public/start.jpg)

除此之外还有一些其他的命令脚本:

|`yarn <script>`    |描述|
|-------------------|-----------|
|`start`            |本地3000端口启动(http://localhost:3000)|
|`build`            |打包构建到目录 ./dist|
|`test`             |使用Karma执行单元测试|
|`test:watch`       |监控模式下进行单元测试|
|`lint`             |静态检查|
|`lint:fix`         |静态检查修复|

## 工程结构
![vortex-react](./public/vortex-react.png)

```
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
└── tests                    # 单元测试
```
## 开发调试

在开发环境，采用了`webpack-dev-middleware`和`webpack-hot-middleware`两个中间件。代码实现热更新。

### Redux DevTools

强烈推荐安装谷歌浏览器插件[Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd),来查看整个应用状态的时光穿梭旅程。
![redux-devtool](./public/redux-devtool.jpg)

### 路由
这里使用`React-router v3`的[plainRoute](https://github.com/ReactTraining/react-router/blob/v3/docs/API.md#plainroute)写法来组织逻辑单元。[查看更多](#工程结构)ar

## 单元测试
新增一个单元测试，你只需在`./tests`中创建`.spec.js`文件。`Karma`会自动查找并执行。[更多测试用例官方文档](https://github.com/airbnb/enzyme)

## 静态部署

如果你通过`nginx` 反向代理静态web服务来启动应用，请将路由指向`~/dist/index.html`，然后让`React-Router`处理剩下的事，更多参考[这个文档](https://github.com/ReactTraining/react-router/blob/v3/docs/guides/Histories.md#configuring-your-server)。Express在脚手架中用于扩展服务和代理API。

*Tips:*
这里以ubuntu为例演示如何用nginx设置反向代理。
1. 安装nginx：

```bash
sudo apt-get install nginx
```
2. 修改配置文件：

```bash
sudo vi /etc/nginx/sites-available/default
```

3. 将以下内容粘贴到文件中：
```
server{
	listen 8001;
	server_name 127.0.0.1;  //这里可以改成服务器地址
	location / {
		proxy_pass http://127.0.0.1:3000;
	}
}
```

4. 重启nginx服务，并启动应用，打开浏览器访问http://localhost:8081。

```bash
sudo service nginx restart

// 切换到工程目录
yarn start
```

## 相关文档
[React知识地图](https://github.com/YutHelloWorld/Blog/issues/1)

## 致谢
感谢各位奉献的每一个[PR](https://github.com/YutHelloWorld/vortex-react/pulls)和[issues](https://github.com/YutHelloWorld/vortex-react/issues)！
