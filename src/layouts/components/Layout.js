import React from 'react'
import { Container } from 'reactstrap'
import { Switch, Route, Redirect } from 'react-router-dom'

import Navbar from '../containers/NavbarContainer'
import './Layout.scss'
import asyncComponent from 'components/AsyncComponent'
import PrivateRoute from 'components/PrivateRoute'
import Login from 'routes/Login'
import Home from 'routes/Home'

// `import()` 异步加载模块，魔法注释写chunkName
const AsyncCounter = asyncComponent(() => import(
  /* webpackChunkName: "counter" */
  'routes/Counter'))
const AsyncZen = asyncComponent(() => import(
  /* webpackChunkName: "zen" */
  'routes/Zen'))
const AsyncElapse = asyncComponent(() => import(
  /* webpackChunkName: "elapse" */
  'routes/Elapse'))
const AsyncRoute = asyncComponent(() => import(
  /* webpackChunkName: "route" */
  'routes/Route'))
const AsyncPageNotFound = asyncComponent(() => import(
  /* webpackChunkName: "pageNotFound" */
  'routes/PageNotFound'))

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Container className="text-center page-layout__viewport">
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/counter" component={AsyncCounter} />
          <PrivateRoute path="/zenPage" component={AsyncZen} />
          <PrivateRoute path="/elapse" component={AsyncElapse} />
          <PrivateRoute path="/route/:id" component={AsyncRoute} />
          <PrivateRoute path="/404" component={AsyncPageNotFound} />
          <Route path="/login" component={Login} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Container>
    </div>
  )
}
