import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import CoreLayout from '../layouts/PageLayout/PageLayout'
import stores from '../store/stores'

class App extends React.Component {
  //  始终不更新App组件
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <Provider {...stores}>
        <div style={{ height: '100%' }}>
          <BrowserRouter>
            <Route path="/" component={CoreLayout} />
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App
