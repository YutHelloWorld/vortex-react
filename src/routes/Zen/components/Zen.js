import React from 'react'
import PropTypes from 'prop-types'
import './Zen.scss'
import Spinner from 'react-spinkit'

export const Zen = ({ fetchZen, clearZen, zen : { fetching, text } }) => (
  <div>
    <div className='loading'>
      { fetching
        ? <Spinner name='double-bounce' /> : ''
      }
    </div>
    <div>
      <button className='btn btn-default' onClick={fetchZen}>
        {fetching ? 'Fetching...' : 'Fetch'}
      </button>
      &nbsp;&nbsp;
      <button className='btn btn-default' onClick={clearZen}>Clear</button>
    </div>
    <div>
      {text.map(item => (
        <h1 key={item.id}>{item.text}</h1>
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
