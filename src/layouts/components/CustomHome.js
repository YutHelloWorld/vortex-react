import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'reactstrap'

import asyncComponent from 'components/AsyncComponent'
import Navbar from '../containers/NavbarContainer'

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
const AsyncHome = asyncComponent(() => import(
  /* webpackChunkName: "pageNotFound" */
  'routes/home'))

export default function CustomHome() {
  return (
    <div>
      <Navbar />
      <Container className="text-center page-layout__viewport">
        <Switch>
          <Route exact path="/" component={AsyncHome} />
          <Route path="/counter" component={AsyncCounter} />
          <Route path="/zenPage" component={AsyncZen} />
          <Route path="/elapse" component={AsyncElapse} />
          <Route path="/route/:id" component={AsyncRoute} />
          <Route component={AsyncPageNotFound} />
        </Switch>
      </Container>
    </div>
  )
}
