import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router'

class Route extends React.Component {
  static propTypes = {
    location : PropTypes.object.isRequired,
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
    const { location } = this.props

    return (
      <div>
        <h1>
          Path: <Link to='/form'>{location.pathname}</Link>
        </h1>
        <div>
          <button onClick={this.redirect}>Go</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Route)
