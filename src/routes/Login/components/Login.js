import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { Button, Container } from 'reactstrap'

Login.propTypes = {
  authenticateWithCb: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
}

export default function Login({ location, isAuthenticated, authenticateWithCb }) {
  const { from } = location.state || { from: { pathname: '/' } }
  return isAuthenticated ? <Redirect to={from} />
    : (
      <Container className="text-center page-layout__viewport">
        <p>You must log in to view the page at {from.pathname}</p>
        <Button color="primary" onClick={authenticateWithCb}>Log in</Button>
      </Container>
    )
}
