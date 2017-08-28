import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

@inject('elapseStore')
@observer
export default class Elapse extends React.Component {
  static propTypes = {
    elapseStore: PropTypes.shape({
      elapse: PropTypes.number.isRequired,
      plus: PropTypes.func.isRequired,
    }).isRequired,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.elapseStore.plus()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { elapse } = this.props.elapseStore
    return <h3>Seconds Elapsed: {elapse}</h3>
  }
}
