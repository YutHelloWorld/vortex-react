import React, { Component } from 'react'
import { object } from 'prop-types'
import { Button } from 'reactstrap'
import { inject, observer } from 'mobx-react'

// 这里是一个展示组件，只负责UI
// Stateless Functional Component, 按照react规范使用普通函数写法（非箭头函数）
// React规范：https://github.com/airbnb/javascript/tree/master/react
@inject('counterStore')
@observer
export default class Counter extends Component {
  static propTypes = {
    counterStore: object
  }

  handlerIncrement = () => {
    this.props.counterStore.increment()
  }

  handlerDoubleAsync = () => {
    this.props.counterStore.doubleAsync()
  }

  render() {
    const { counterStore } = this.props
    return (
      <div style={{ margin: '0 auto' }}>
        <h3>Counter: {counterStore.counter}</h3>
        <Button color="primary" onClick={this.handlerIncrement}>
          Increment
        </Button>
        {' '}
        <Button color="secondary" onClick={this.handlerDoubleAsync}>
          Double (Async)
        </Button>
      </div>
    )
  }
}
