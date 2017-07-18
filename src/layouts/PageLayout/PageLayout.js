import React from 'react'
import { Link, IndexLink } from 'react-router'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import { connect } from 'react-redux'
import { toggle } from '../../store/layout'

export const PageLayout = ({ children, layout : { isOpen }, toggle }) => (
  <div>
    <div>
      <Navbar color='faded' light toggleable>
        <NavbarToggler right onClick={toggle} />
        <NavbarBrand to='/' tag={IndexLink}>Vortex React</NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink to='/counter/' activeClassName='active' tag={Link}>Counter</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/zen' activeClassName='active' tag={Link}>Zen</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/elapse' activeClassName='active' tag={Link}>Elapse</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/route/88' activeClassName='active' tag={Link}>Route</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/notFound' activeClassName='active' tag={Link}>404</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/YutHelloWorld/vortex-react'>Github</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    <Container className='text-center' style={{ marginTop: '2rem' }}>
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
