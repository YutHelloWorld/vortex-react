import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

it('(HoC) AsyncLoad', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Navbar signOut={() => {}} />
    </BrowserRouter>,
    div
  );
});
