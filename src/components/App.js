import React from 'react'
import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import CoreLayout from '../layouts/PageLayout/PageLayout'
import { history } from '../store/location'

class App extends React.Component {
  static propTypes = {
    store : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    /* ES6 解构赋值 */
    const { store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height : '100%' }}>
          <Router history={history}>
            <div>
              <Route path='/' component={CoreLayout} />
            </div>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
