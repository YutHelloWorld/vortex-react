import React from 'react';
import ReactDOM from 'react-dom';
import { CustomHome } from '../CustomHome';
import { HashRouter } from 'react-router-dom';

it('(Layout) CustomHome', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <HashRouter>
      <CustomHome signOut={() => {}} />
    </HashRouter>,
    div
  );
});
