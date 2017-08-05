# vortex-react

[![Build Status](https://travis-ci.org/YutHelloWorld/vortex-react.svg?branch=master)](https://travis-ci.org/YutHelloWorld/vortex-react)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

基于[React](https://facebook.github.io/react/)/[Redux](http://redux.js.org/)/[React-Router v3](https://github.com/ReactTraining/react-router/tree/v3/docs)/[Webpack v2](https://webpack.js.org/)/[Reactstrap](https://reactstrap.github.io/)的前端脚手架。

![redux-devtool](./public/redux-devtool.jpg)

## 目录
#### &sect; [技术栈](#feature)
#### &sect; [快速开始](#getting-start)
- [安装](#installation)
- [启动](#start)
- [脚本](#script)
#### &sect; [项目架构](#project-structure)
- [目录结构](#file-tree)
- [数据流](#module)
- [形式](#logic)
#### &sect; [开发调试](#devlop)
- [Redux DevTools](#devtools)
- [路由](#react-router)
#### &sect; [单元测试](#test)
#### &sect; [静态部署](#deploy)
#### &sect; [更多文档](#doc)


## <a name="feature">&sect; 技术栈</a>

- React ^15.6.1
- ES6 + Babel
- Webpack v2
- Redux ^3.7.2
- React-Router v3
- Reactstrap + Bootstrap^4.0.0-alpha (UI)
- Eslint
- Express
- Karma

---

## <a name="getting-start">&sect; 快速开始</a>
> 推荐升级到 node 5.x/6.x + npm 5.x + yarn ^0.27.5环境。**强烈推荐**使用 [`cnpm`](https://github.com/cnpm/cnpm) 安装依赖   
> 或手动切换到淘宝 npm 源：`npm set registry https://registry.npm.taobao.org/`  
> (经测试，`cnpm` 对于 `node-sass` `PhantomJS`等问题多多的 Package 拥有秒杀能力)
### <a name="installation">⊙ 安装</a>

```bash
$ git clone https://github.com/yuthelloworld/vortex-react.git <my-project-name>
$ cd <my-project-name>
$ yarn  # Install project dependencies (or `cnpm install`)
```

### <a name="start">⊙ 启动</a>

```bash
$ yarn start  # Start the development server (or `npm start`)
```
### <a name="script">⊙ 脚本</a>
|`yarn <script>`    |描述|
|-------------------|-----------|
|`start`            |启动(http://localhost:3000)|
|`build`            |打包构建到目录 ./dist|
|`test`             |单元测试|
|`test:watch`       |监控模式下进行单元测试|
|`lint`             |静态检查|
|`lint:fix`         |静态检查修复|

---

## <a name="project-structure">&sect; 项目架构</a>

### <a name="file-tree">⊙ 目录结构</a>
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
### <a name="module">⊙ 数据流</a>
![Redux-flow](./public/Redux-flow.png) 
### <a name="logic">⊙ 形式</a> 
![vortex-react](./public/vortex-react.png)

---
## <a name="devlop">&sect; 开发调试</a>
>在开发环境，采用了`webpack-dev-middleware`和`webpack-hot-middleware`两个中间件，为应用提供Server和HMR。

### <a name="devtools">⊙ Redux DevTools</a> 

强烈推荐安装谷歌浏览器插件[Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd),来查看整个应用状态的时光穿梭旅程。

### <a name="react-router">⊙ 路由</a> 
推荐使用`React-router v3`的[plainRoute](https://github.com/ReactTraining/react-router/blob/v3/docs/API.md#plainroute)写法。

---
## <a name="test">&sect; 单元测试</a>
新增一个单元测试，只需在`./tests`中创建`.spec.js`文件。`Karma`会自动查找并执行。[更多测试用例官方文档](https://github.com/airbnb/enzyme)

---
## <a name="deploy">&sect; 静态部署</a>

>推荐使用`nginx` 反向代理静态web服务来启动应用。请将路由指向`~/dist/index.html`，然后让`React-Router`处理剩下的事，更多参考[这个文档](https://github.com/ReactTraining/react-router/blob/v3/docs/guides/Histories.md#configuring-your-server)。Express在脚手架中用于扩展服务和代理API。

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

---
## <a name="doc">&sect; 更多文档</a>
[React知识地图](https://github.com/YutHelloWorld/Blog/issues/1)

