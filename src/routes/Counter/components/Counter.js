import React from 'react'
import { number, func } from 'prop-types'
import { Button } from 'reactstrap'

// Stateless Functional Component
// React style：https://github.com/airbnb/javascript/tree/master/react
Counter.propTypes = {
  counter: number.isRequired,
  increment: func.isRequired,
  doubleAsync: func.isRequired
}

function Counter({ counter, increment, doubleAsync }) {
  return (<div style={{ margin: '0 auto' }}>
    <h3>Counter: {counter}</h3>
    <Button color="primary" onClick={increment}>
      Increment
    </Button>
    {' '}
    <Button color="secondary" onClick={doubleAsync}>
      Double (Async)
    </Button>
  </div>)
}

export default Counter
