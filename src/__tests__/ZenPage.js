import React from 'react';
import ReactDOM from 'react-dom';
import Zen from '../components/Zen';

describe('(Component) Zen', () => {
  it('fetching', () => {
    const props = {
      fetchZen() {},
      clearZen() {},
      zen: {
        fetching: true,
        text: []
      }
    };
    const div = document.createElement('div');
    ReactDOM.render(<Zen {...props} />, div);
  });

  it('fetched', () => {
    const props = {
      fetchZen() {},
      clearZen() {},
      zen: {
        fetching: false,
        text: [{ id: 0, text: 'hello' }]
      }
    };
    const div = document.createElement('div');
    ReactDOM.render(<Zen {...props} />, div);
  });
});
