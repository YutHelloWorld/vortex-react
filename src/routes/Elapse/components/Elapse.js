import React from 'react'
import PropTypes from 'prop-types'

export default class Elapse extends React.Component {
  componentDidMount () {
    this.interval = setInterval(this.props.plus, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    const { elapse } = this.props
    return (
      <h3>
        Seconds Elapsed: {elapse}
      </h3>
    )
  }
}

Elapse.propTypes = {
  elapse: PropTypes.number.isRequired,
  plus: PropTypes.func.isRequired
}
