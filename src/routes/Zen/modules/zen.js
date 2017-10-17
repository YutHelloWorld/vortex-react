import axios from 'axios';
import update, { updateChain } from 'immutability-helper-x';

/**
|--------------------------------------------------
| Constants
|--------------------------------------------------
*/
const RECEIVE_ZEN = 'RECEIVE_ZEN';
const REQUEST_ZEN = 'REQUEST_ZEN';
const CLEAR_ZEN = 'CLEAR_ZEN';

/**
|--------------------------------------------------
| Actions
|--------------------------------------------------
*/

export const requestZen = () => ({
  type: REQUEST_ZEN
});

let availableId = 0;
export const receiveZen = value => ({
  type: RECEIVE_ZEN,
  payload: {
    text: value,
    id: availableId++
  }
});

export const clearZen = () => ({
  type: CLEAR_ZEN
});

export function fetchZen() {
  return async (dispatch, getState) => {
    if (getState().zen.fetching) return;

    dispatch(requestZen());
    const { data } = await axios.get('https://api.github.com/zen');
    dispatch(receiveZen(data));
  };
}

export const actions = {
  requestZen,
  receiveZen,
  clearZen,
  fetchZen
};

/**
|--------------------------------------------------
| Action Handlers
|--------------------------------------------------
*/
const ACTION_HANDLERS = {
  [REQUEST_ZEN]: state => {
    // return ({ ...state, fetching: true })
    return update.$set(state, 'fetching', true);
  },
  [RECEIVE_ZEN]: (state, action) => {
    // return ({ ...state, fetching: false, text: state.text.concat(action.payload) })
    return updateChain(state)
      .$set('fetching', false)
      .$push('text', [action.payload])
      .value();
  },
  [CLEAR_ZEN]: state => {
    // return ({ ...state, text: [] })
    return update.$set(state, 'text', []);
  }
};

/**
|--------------------------------------------------
| Reducer
|--------------------------------------------------
*/
const initialState = {
  fetching: false,
  text: []
};

export default function(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
