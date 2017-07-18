import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router'
import { Button } from 'reactstrap'

class Route extends React.Component {
  static propTypes = {
    location : PropTypes.object.isRequired,
    params   : PropTypes.object.isRequired,
    router   : PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.redirect = this.redirect.bind(this)
  }

  redirect () {
    this.props.router.push('/form')
  }

  render () {
    const { params, location } = this.props

    return (
      <div>
        <div>
          <Link to='/test'>id: {params.id}</Link>
          <p>Path: {location.pathname} </p>
        </div>
        <div>
          <Button color='link' style={{ cursor : 'pointer' }} onClick={this.redirect}>Go</Button>
        </div>
      </div>
    )
  }
}

export default withRouter(Route)
