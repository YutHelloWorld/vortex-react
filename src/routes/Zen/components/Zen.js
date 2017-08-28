import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import Spinner from 'react-spinkit'
import { Button } from 'reactstrap'

import './Zen.scss'

@inject('zenStore')
@observer
export default class Zen extends Component {
  static propTypes = {
    zenStore: PropTypes.object.isRequired,
  }

  handlerFetch = () => {
    this.props.zenStore.fetchZen()
  }

  handlerClear = () => {
    this.props.zenStore.clearZen()
  }

  render() {
    const { fetching, content } = this.props.zenStore
    return (<div>
      <div className="loading">
        {fetching
          ? <Spinner name="cube-grid" color="purple" /> : ''
        }
      </div>
      <div>
        <Button color="success" onClick={this.handlerFetch}>
          {fetching ? 'Fetching...' : 'Fetch'}
        </Button>
        {' '}
        <Button color="danger" onClick={this.handlerClear}>Clear</Button>
      </div>
      <hr />
      <div>
        {content.map(item => (
          <p key={item.id}>{item.text}</p>
        ))}
      </div>
    </div>)
  }
}
