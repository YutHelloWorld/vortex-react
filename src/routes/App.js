import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './Layout';
import store from '../store/createStore';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Route component={Layout} />
      </HashRouter>
    </Provider>
  );
}

export default App;
