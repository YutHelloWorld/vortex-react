import React from 'react';
import ReactDOM from 'react-dom';
import AsyncLoad from '../AsyncLoad';

it('(HoC) AsyncLoad', () => {
  const div = document.createElement('div');
  function Component() {
    return <div>hello</div>;
  }

  const AsyncHome = AsyncLoad({
    loader: () => import(/* webpackChunkName: "zen" */ '../../routes/Home')
  });

  ReactDOM.render(<AsyncHome />, div);
});
