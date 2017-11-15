import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { CustomHome } from '../routes/CustomHome';

it('(Layout) CustomHome', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <HashRouter>
      <CustomHome signOut={() => {}} />
    </HashRouter>,
    div
  );
});
