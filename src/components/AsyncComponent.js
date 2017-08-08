import React from 'react'
import Spinner from 'react-spinkit'
import './async.scss'

export default function asyncComponent (importComponent) {
  class AsyncComponent extends React.Component {
    state = { component : null }

    async componentDidMount () {
      const { default : component } = await importComponent()

      this.setState({
        component: component
      })
    }

    render () {
      const C = this.state.component
      const loader = <div className='loading'>
        <Spinner name='ball-clip-rotate-pulse' color='orange' />
      </div>

      return C
        ? <C {...this.props} />
        : loader
    }
  }

  return AsyncComponent
}
