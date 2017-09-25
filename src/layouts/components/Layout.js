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

function CustomHome() {
  return (
    <div>
      <Navbar />
      <Container className="text-center page-layout__viewport">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={AsyncCounter} />
          <Route path="/zenPage" component={AsyncZen} />
          <Route path="/elapse" component={AsyncElapse} />
          <Route path="/route/:id" component={AsyncRoute} />
          <Route path="/404" component={AsyncPageNotFound} />
          <Redirect to="/404" />
        </Switch>
      </Container>
    </div>
  )
}

export default function Layout() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute path="/" component={CustomHome} />
    </Switch>
  )
}
