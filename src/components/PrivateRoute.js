import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
}

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route {...rest} render={props => (
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}
        />
      )
    )}
    />

  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated
})

export default withRouter(connect(mapStateToProps)(PrivateRoute))
