import React from 'react'
import { NavLink as Link, Switch, Route, Redirect } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, Container } from 'reactstrap'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import Home, { AsyncCounter, AsyncZen, AsyncElapse, AsyncRoute, AsyncPageNotFound } from '../../routes'

const location = {
  pathname : '/route/8080',
  state    : { fromDashboard : true },
  query    : {
    a : 2
  }
}
export default class PageLayout extends React.Component {
  /* 类的静态属性，不会被实例继承。ES试验特性写法:propTypes写入class */
  static propTypes = {
    store    : PropTypes.object
  }

  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle () {
    this.setState({
      isOpen : !this.state.isOpen
    })
  }

  render () {
    return (
      <div>
        <Navbar color='faded' light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand to='/' tag={Link}>Vortex React</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavLink to='/counter' activeClassName='active' tag={Link}>Counter</NavLink>
              <NavLink to='/zen' activeClassName='active' tag={Link}>Zen</NavLink>
              <NavLink to='/elapse' activeClassName='active' tag={Link}>Elapse</NavLink>
              <NavLink to={location} activeClassName='active' tag={Link}>Route</NavLink>
              <NavLink to='/pageNotFound' activeClassName='active' tag={Link}>404</NavLink>
              <NavLink href='https://github.com/YutHelloWorld/vortex-react'>Github</NavLink>
            </Nav>
          </Collapse>
        </Navbar>
        <Container className='text-center page-layout__viewport'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={AsyncCounter} />
            <Route path='/zen' component={AsyncZen} />
            <Route path='/elapse' component={AsyncElapse} />
            <Route path='/route/:id' component={AsyncRoute} />
            <Route path='/404' component={AsyncPageNotFound} />
            <Redirect from='*' to='/404' />
          </Switch>
        </Container>
      </div>
    )
  }
}
