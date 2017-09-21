import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'

import asyncComponent from 'components/AsyncComponent'
import Home from './Home'
import PrivateRoute from 'components/PrivateRoute'

// `import()` 异步加载模块，魔法注释写chunkName
const AsyncCounter = asyncComponent(() => import(
  /* webpackChunkName: "counter" */
  './Counter'))
const AsyncZen = asyncComponent(() => import(
  /* webpackChunkName: "zen" */
  './Zen'))
const AsyncElapse = asyncComponent(() => import(
  /* webpackChunkName: "elapse" */
  './Elapse'))
const AsyncRoute = asyncComponent(() => import(
  /* webpackChunkName: "route" */
  './Route'))
const AsyncPageNotFound = asyncComponent(() => import(
  /* webpackChunkName: "pageNotFound" */
  './PageNotFound'))

const AsyncLogin = asyncComponent(() => import(
  /* webpackChunkName: "login" */
  './Login'))

// 所有路由
const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <PrivateRoute path="/counter" component={AsyncCounter} />
    <PrivateRoute path="/zenPage" component={AsyncZen} />
    <PrivateRoute path="/elapse" component={AsyncElapse} />
    <PrivateRoute path="/route/:id" component={AsyncRoute} />
    <Route path="/404" component={AsyncPageNotFound} />
    <Route path="/login" component={AsyncLogin} />
    <Redirect from="*" to="/404" />
  </Switch>
)

export default Routes
