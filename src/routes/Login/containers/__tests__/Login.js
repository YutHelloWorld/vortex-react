import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from '../Login';
import { HashRouter } from 'react-router-dom';

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
