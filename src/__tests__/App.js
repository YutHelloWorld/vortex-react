import React from 'react';
import ReactDOM from 'react-dom';
import App from '../routes/App';

it('App', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
