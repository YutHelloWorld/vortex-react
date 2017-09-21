import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink as Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink } from 'reactstrap'

const location = {
  pathname: '/route/8080',
  state: { fromDashboard: true },
  query: {
    a: 2
  }
}

export default class CustomNavbar extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    signOutWithCb: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  }

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  signOut = (e) => {
    this.props.signOutWithCb(() => this.props.history.push('/'))
  }

  render() {
    return (
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
            {
              this.props.isAuthenticated ? <NavLink href="javascript:;" onClick={this.signOut}>Sign out</NavLink>
                : <NavLink to="/login" tag={Link}>Sign in</NavLink>
            }
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
