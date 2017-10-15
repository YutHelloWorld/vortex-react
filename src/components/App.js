import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { object } from 'prop-types'
import Layout from '../layouts'
import { history } from '../store/location'

class App extends Component {
  static propTypes = {
    store: object.isRequired
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    const { store } = this.props

    return (
      <Provider store={store}>
        <Router history={history}>
          <Route component={Layout} />
        </Router>
      </Provider>
    )
  }
}

export default App
