import React from 'react';
import ReactDOM from 'react-dom';
import AsyncLoad from '../components/AsyncLoad';

it('(HoC) AsyncLoad', () => {
  const div = document.createElement('div');
  function Component() {
    return <div>hello</div>;
  }

  const AsyncHome = AsyncLoad({
    loader: () =>
      import(/* webpackChunkName: "zen" */ '../components/HomeView.js')
  });

  ReactDOM.render(<AsyncHome />, div);
});
