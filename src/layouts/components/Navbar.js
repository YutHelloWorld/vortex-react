import React, { Component } from 'react'
import { func } from 'prop-types'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink } from 'reactstrap'
import { NavLink as Link } from 'react-router-dom'
import { AsyncCounter } from './CustomHome'

export default class CustomNavbar extends Component {
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

  signOut = () => {
    this.props.signOut()
    localStorage.setItem('LoginState', 'false')
  }

  onMouseOver = () => {
    AsyncCounter.preload()
  }

  render() {
    return (
      <Navbar color="faded" light toggleable>
        <NavbarToggler right onClick={this.toggle} />
        <NavbarBrand exact to="/" tag={Link}>Vortex React</NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavLink to="/counter" tag={Link} onMouseOver={this.onMouseOver}>Counter</NavLink>
            <NavLink to="/zenPage" tag={Link}>Zen</NavLink>
            <NavLink to="/elapse" tag={Link}>Elapse</NavLink>
            <NavLink to="/route/8080" tag={Link}>Route</NavLink>
            <NavLink to="/pageNotFound" tag={Link}>404</NavLink>
            <NavLink href="javascript:;" onClick={this.signOut}>Sign out</NavLink>
            <NavLink href="https://github.com/YutHelloWorld/vortex-react">Github</NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
