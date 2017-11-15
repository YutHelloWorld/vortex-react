import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';

describe('(Component) PrivateRoute', () => {
  it('isAuthenticated', () => {
    const div = document.createElement('div');
    function Component() {
      return <div>hello</div>;
    }
    ReactDOM.render(
      <BrowserRouter>
        <PrivateRoute isAuthenticated component={Component} />
      </BrowserRouter>,
      div
    );
  });
});
