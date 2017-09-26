import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'reactstrap'

import AsyncLoad from '../../components/AsyncLoad'
import Navbar from '../containers/NavbarContainer'

// `import()` 异步加载模块，魔法注释写chunkName
export const AsyncCounter = AsyncLoad({
  loader: () => import(/* webpackChunkName: "counter" */'routes/Counter'),
})

const AsyncZen = AsyncLoad({
  loader: () => import(/* webpackChunkName: "zen" */'routes/Zen'),
})

const AsyncElapse = AsyncLoad({
  loader: () => import(/* webpackChunkName: "elapse" */'routes/Elapse'),
})

const AsyncRoute = AsyncLoad({
  loader: () => import(/* webpackChunkName: "route" */'routes/Route'),
})

const AsyncPageNotFound = AsyncLoad({
  loader: () => import(/* webpackChunkName: "pageNotFound" */'routes/PageNotFound'),
})

export const AsyncHome = AsyncLoad({
  loader: () => import(/* webpackChunkName: "home" */'routes/Home'),
})

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
