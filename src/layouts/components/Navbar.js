import React, { Component } from 'react'
import { func } from 'prop-types'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink } from 'reactstrap'
import { NavLink as Link } from 'react-router-dom'

import { AsyncZen } from '../../routes'

class CustomNavbar extends Component {
  static propTypes = {
    signOut: func.isRequired,
  }

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  onMouseOver = () => {
    AsyncZen.preload()
  }

  render() {
    return (
      <Navbar color="faded" light toggleable>
        <NavbarToggler right onClick={this.toggle} />
        <NavbarBrand exact to="/" tag={Link}>Vortex React</NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavLink to="/zenPage" onMouseOver={this.onMouseOver} tag={Link}>Zen</NavLink>
            <NavLink href="javascript:;" onClick={this.props.signOut}>Sign out</NavLink>
            <NavLink href="https://github.com/YutHelloWorld/vortex-react">Github</NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default CustomNavbar
