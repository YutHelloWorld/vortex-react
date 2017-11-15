import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import { Button } from 'reactstrap';

const propTypes = {
  fetchZen: PropTypes.func.isRequired,
  clearZen: PropTypes.func.isRequired,
  zen: PropTypes.shape({
    fetching: PropTypes.bool.isRequired,
    text: PropTypes.array
  }).isRequired
};

function Zen({ fetchZen, clearZen, zen: { fetching, text } }) {
  return (
    <div>
      {fetching && (
        <Spinner name="cube-grid" color="purple" style={{ margin: 'auto' }} />
      )}
      <div style={{ marginTop: '20px' }}>
        <Button color="success" onClick={fetchZen}>
          {fetching ? 'Fetching...' : 'Fetch'}
        </Button>{' '}
        <Button color="danger" onClick={clearZen}>
          Clear
        </Button>
      </div>
      <hr />
      <div>{text.map(item => <p key={item.id}>{item.text}</p>)}</div>
    </div>
  );
}

Zen.propTypes = propTypes;

export default Zen;
