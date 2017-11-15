import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Login } from '../containers/Login';

it('(Component) Login', () => {
  const props = {
    signInWithCb() {},
    location: {},
    logged: false
  };
  const div = document.createElement('div');
  ReactDOM.render(
    <HashRouter>
      <Login {...props} />
    </HashRouter>,
    div
  );
});
