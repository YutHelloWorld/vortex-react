import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'reactstrap'

import AsyncLoad from '../../components/AsyncLoad'
import Navbar from '../containers/NavbarContainer'

// `import()` 异步加载模块，魔法注释写chunkName
export const AsyncZen = AsyncLoad({
  loader: () => import(/* webpackChunkName: "zen" */'routes/Zen'),
})

const AsyncHome = AsyncLoad({
  loader: () => import(/* webpackChunkName: "home" */'routes/Home'),
})

export default function CustomHome() {
  return (
    <div>
      <Route component={Navbar} />
      <Container className="text-center page-layout__viewport">
        <Switch>
          <Route exact path="/" component={AsyncHome} />
          <Route path="/zenPage" component={AsyncZen} />
        </Switch>
      </Container>
    </div>
  )
}
