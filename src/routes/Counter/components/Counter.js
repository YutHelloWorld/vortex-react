import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

// 这里是一个展示组件，只负责UI
// Stateless Functional Component, 按照react规范使用普通函数写法（非箭头函数）
// React规范：https://github.com/airbnb/javascript/tree/master/react
function Counter ({ counter, increment, doubleAsync }) {
  return (
    <div style={{ margin: '0 auto' }}>
      <h3>Counter: {counter}</h3>
      <Button color="primary" onClick={increment}>
        Increment
      </Button>
      {' '}
      <Button color="secondary" onClick={doubleAsync}>
        Double (Async)
      </Button>
    </div>
  )
}
Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Counter
