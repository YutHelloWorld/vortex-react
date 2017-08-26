import React from 'react'
import { number, func } from 'prop-types'

export default class Elapse extends React.Component {
  static propTypes = {
    elapse: number.isRequired,
    plus: func.isRequired
  }

  componentDidMount () {
    this.interval = setInterval(this.props.plus, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    const { elapse } = this.props
    return <h3>Seconds Elapsed: {elapse}</h3>
  }
}
