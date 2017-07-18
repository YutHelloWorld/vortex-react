import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

export const Counter = ({ counter, increment, doubleAsync }) => (
  <div style={{ margin: '0 auto' }} >
    <h3>Counter: {counter}</h3>
    <Button color='primary' onClick={increment}>
      Increment
    </Button>
    {' '}
    <Button color='secondary' onClick={doubleAsync}>
      Double (Async)
    </Button>
  </div>
)
Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Counter
