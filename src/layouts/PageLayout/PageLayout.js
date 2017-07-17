import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center' style={{ marginTop: '50px' }}>
    <h1>Vortex React</h1>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
    {' · '}
    <Link to='/zen' activeClassName='page-layout__nav-item--active'>
      Zen
    </Link>
    {' · '}
    <Link to='/elapse' activeClassName='page-layout__nav-item--active'>
      Elapse
    </Link>
    {' · '}
    <Link to='/route/88' activeClassName='page-layout__nav-item--active'>
      Route
    </Link>
    {' · '}
    <Link to='/notFound' activeClassName='page-layout__nav-item--active'>
      404
    </Link>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
