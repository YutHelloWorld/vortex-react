/**
 * Created by Sven on 2017/7/17.
 */
const TOGGLE = 'TOGGLE'
export const toggle = () => ({
  type : TOGGLE
})
const initialState = {
  isOpen : false
}
export default function locationReducer (state = initialState, action) {
  return action.type === TOGGLE
    ? { ...state, isOpen : !state.isOpen }
    : state
}
