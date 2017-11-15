import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { HashRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

it('(Layout) Navbar', () => {
  const component = renderer.create(
    <HashRouter>
      <Navbar signOut={() => {}} />
    </HashRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.children[2].children[0].children[0].props.onMouseOver();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.children[1].props.onClick();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
