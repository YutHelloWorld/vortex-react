import React from 'react'
import PropTypes from 'prop-types'
import './Zen.scss'
import Spinner from 'react-spinkit'
import { Button } from 'reactstrap'

export const Zen = ({ fetchZen, clearZen, zen : { fetching, text } }) => (
  <div>
    <div className='loading'>
      {fetching ? <Spinner name='cube-grid' color='purple' /> : ''
      }
    </div>
    <div>
      <Button color='success' onClick={fetchZen}>
        {fetching ? 'Fetching...' : 'Fetch'}
      </Button>
      {' '}
      <Button color='danger' onClick={clearZen}>Clear</Button>
    </div>
    <hr />
    <div>
      {text.map(item => (
        <p key={item.id}>{item.text}</p>
      ))}
    </div>
  </div>
)

Zen.propTypes = {
  fetchZen : PropTypes.func.isRequired,
  clearZen : PropTypes.func.isRequired,
  zen      : PropTypes.object.isRequired
}

export default Zen
