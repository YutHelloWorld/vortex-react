import React from 'react'
import { Link, IndexLink } from 'react-router'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, Container } from 'reactstrap'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import { connect } from 'react-redux'
import { toggle } from '../../store/layout'

export const PageLayout = ({ children, layout : { isOpen }, toggle }) => (
  <div>
    <Navbar color='faded' light toggleable>
      <NavbarToggler right onClick={toggle} />
      <NavbarBrand to='/' tag={IndexLink}>Vortex React</NavbarBrand>
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ml-auto' navbar>
          <NavLink to='/counter/' activeClassName='active' tag={Link}>Counter</NavLink>
          <NavLink to='/zen' activeClassName='active' tag={Link}>Zen</NavLink>
          <NavLink to='/elapse' activeClassName='active' tag={Link}>Elapse</NavLink>
          <NavLink to='/route/88' activeClassName='active' tag={Link}>Route</NavLink>
          <NavLink to='/notFound' activeClassName='active' tag={Link}>404</NavLink>
          <NavLink href='https://github.com/YutHelloWorld/vortex-react'>Github</NavLink>
        </Nav>
      </Collapse>
    </Navbar>
    <Container className='text-center page-layout__viewport'>
      {children}
    </Container>
  </div>
)
PageLayout.propTypes = {
  children : PropTypes.node,
  layout   : PropTypes.object.isRequired,
  toggle   : PropTypes.func.isRequired
}

const mapDispatchToProps = {
  toggle
}

const mapStateToProps = (state) => ({
  layout : state.layout
})

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout)
