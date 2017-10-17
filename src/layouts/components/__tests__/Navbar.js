import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Navbar from '../Navbar';

it('(HoC) AsyncLoad', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <HashRouter>
      <Navbar signOut={() => {}} />
    </HashRouter>,
    div
  );
});
