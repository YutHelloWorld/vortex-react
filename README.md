# vortex-react

基于[React](https://facebook.github.io/react/),[Redux](http://redux.js.org/),[React-Router@3.x](https://github.com/ReactTraining/react-router/tree/v3/docs)的前端脚手架。

## 环境
* node `^5.0.0`
* yarn `^0.23.0` or npm `^3.0.0`

## 安装

克隆仓库到本地

```bash
$ git clone https://github.com/yuthelloworld/vortex-react.git <my-project-name>
$ cd <my-project-name>
```

安装依赖，可以使用[Yarn](https://yarnpkg.com/)，或者[npm](https://github.com/npm/npm)安装。国内推荐使用淘宝镜像[cnpm](https://npm.taobao.org/)安装。

```bash
$ yarn  # Install project dependencies (or `npm install` or `cnpm install`)
```

## 启动

所有依赖安装完毕，可以通过`yarn start`或者`npm start`来启动该应用。

```bash
$ yarn start  # Start the development server (or `npm start`)
```
其他的处理命令:

|`yarn <script>`    |描述|
|-------------------|-----------|
|`start`            |服务启动在 `localhost:3000`，并且热更新|
|`build`            |构建应用到 ./dist|
|`test`             |通过Karma执行单元测试. See [testing](#testing)|
|`test:watch`       |代码改变时通过监控模式重新执行单元测试|
|`lint`             |[Lints](http://stackoverflow.com/questions/8503559/what-is-linting)使用eslint进行代码review|
|`lint:fix`         |代码review并[修复](http://eslint.org/docs/user-guide/command-line-interface.html#fix)|

## 目录结构


```
.
├── build                    # 构建相关配置代码
├── public                   # 公共静态文件
├── server                   # express服务
│   └── main.js              # 服务入口
├── src                      # 前端代码目录
│   ├── index.html           # 应用的html容器
│   ├── main.js              # 应用JS入口
│   ├── normalize.js         # 浏览器的适配
│   ├── components           # 全局复用展示组件
│   ├── containers           # 全局复用容器组件
│   ├── layouts              # 主页结构的组件
│   │   └── PageLayout       # 路由公共导航
│   ├── routes               # 路由和异步加载
│   │   ├── index.js         # 工程主路由
│   │   ├── Home             # 子路由
│   │   │   ├── index.js     # 路由定义和异步代码分割
│   │   │   ├── assets       # 组件的静态文件
│   │   │   ├── components   # 展示组件
│   │   │   └── routes **    # 子路由
│   │   └── Counter          # 子路由
│   │       ├── index.js     # 路由定义
│   │       ├── container    # 容器组件
│   │       ├── modules      # module层（reducers/constants/actions）
│   │       └── routes **    # 不规则路由
│   ├── store                # Redux相关模块
│   │   ├── createStore.js   # 创建和使用redux store
│   │   └── reducers.js      # Reducer的注册和注入
│   └── styles               # 样式
└── tests                    # 单元测试
```

