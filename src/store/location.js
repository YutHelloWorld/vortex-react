import createHistory from 'history/createBrowserHistory'

// ------------------------------------
// Constants
// ------------------------------------
export const LOCATION_CHANGE = 'LOCATION_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function locationChange (location = {}) {
  return {
    type: LOCATION_CHANGE,
    payload: location
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }) => {
  return (location, action) => dispatch(locationChange({ ...location, action }))
}

// ------------------------------------
// Reducer
// ------------------------------------
export const history = createHistory()

// Get the current location and action
const { location, action } = history
const initialState = { ...location, action }
export default function locationReducer (state = initialState, action) {
  return action.type === LOCATION_CHANGE
    ? action.payload
    : state
}
