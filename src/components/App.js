import React from 'react'
import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { object } from 'prop-types'
import CoreLayout from '../layouts/PageLayout/PageLayout'
import { history } from '../store/location'

class App extends React.Component {
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
        <div style={{ height: '100%' }}>
          <Router history={history}>
            <Route path="/" component={CoreLayout} />
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
