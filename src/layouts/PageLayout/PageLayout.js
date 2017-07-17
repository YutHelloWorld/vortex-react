import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import { connect } from 'react-redux'
import { toggle } from '../../store/layout'

export const PageLayout = ({ children, layout : { isOpen }, toggle }) => (
  <div>
    <div>
      <Navbar color='faded' light toggleable>
        <NavbarToggler right onClick={toggle} />
        <NavbarBrand href='/'>Vortex React</NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='/components/'>Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>Github</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
  layout  : PropTypes.object.isRequired,
  toggle  : PropTypes.func.isRequired
}

const mapDispatchToProps = {
  toggle
}

const mapStateToProps = (state) => ({
  layout : state.layout
})

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout)
