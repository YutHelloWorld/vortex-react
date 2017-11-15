import React from 'react';
import ReactDOM from 'react-dom';
import Loading from '../components/Loading';

describe('(Component) Loading', () => {
  it('renders loading without timed out or pasted delay', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loading isLoading />, div);
  });

  it('renders timed out', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loading isLoading timedOut />, div);
  });

  it('renders a loading screen', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loading isLoading pastDelay />, div);
  });

  it('renders a failed to load error', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loading error />, div);
  });

  it('renders without any props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loading />, div);
  });
});
