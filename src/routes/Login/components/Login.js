import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { Button, Container } from 'reactstrap'

export default class Login extends Component {
  static propTypes = {
    authenticateWithCb: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  }

  login = () => {
    this.props.authenticateWithCb(() => {
      localStorage.setItem('LoginState', 'true')
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { isAuthenticated } = this.props

    if (isAuthenticated) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <Container className="text-center page-layout__viewport">
        <p>You must log in to view the page at {from.pathname}</p>
        <Button color="primary" onClick={this.login}>Log in</Button>
      </Container>
    )
  }
}
