import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

class App extends React.Component {
  // ES试验特性写法
  static propTypes = {
    store  : PropTypes.object.isRequired,
    routes : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { store, routes } = this.props

    return (
      <Provider store={store}>
        <div style={{ height : '100%' }}>
          <Router history={browserHistory} children={routes} />
        </div>
      </Provider>
    )
  }
}

export default App
