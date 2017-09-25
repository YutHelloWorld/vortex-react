import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, NavLink as Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, Container } from 'reactstrap'

import asyncComponent from 'components/AsyncComponent'

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

const location = {
  pathname: '/route/8080',
  state: { fromDashboard: true },
  query: {
    a: 2
  }
}

export default class CustomHome extends Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired,
  }

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand exact to="/" tag={Link}>Vortex React</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavLink to="/counter" activeClassName="active" tag={Link}>Counter</NavLink>
              <NavLink to="/zenPage" activeClassName="active" tag={Link}>Zen</NavLink>
              <NavLink to="/elapse" activeClassName="active" tag={Link}>Elapse</NavLink>
              <NavLink to={location} activeClassName="active" tag={Link}>Route</NavLink>
              <NavLink to="/pageNotFound" activeClassName="active" tag={Link}>404</NavLink>
              <NavLink href="https://github.com/YutHelloWorld/vortex-react">Github</NavLink>
              <NavLink href="javascript:;" onClick={this.props.signOut}>Sign out</NavLink>
            </Nav>
          </Collapse>
        </Navbar>
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
}
