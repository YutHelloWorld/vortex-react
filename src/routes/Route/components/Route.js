import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Button } from 'reactstrap'

class Route extends React.Component {
  static propTypes = {
    match   : PropTypes.object.isRequired,
    history : PropTypes.object.isRequired
  }

  redirect = () => {
    this.props.history.push('/form')
  }

  render () {
    return (
      <div>
        <div>
          <h3>id: {this.props.match.params.id}</h3>
          <p>Path: {this.props.match.url} </p>
        </div>
        <div>
          <Button color='link' style={{ cursor : 'pointer' }} onClick={this.redirect}>Go</Button>
        </div>
      </div>
    )
  }
}

export default withRouter(Route)
