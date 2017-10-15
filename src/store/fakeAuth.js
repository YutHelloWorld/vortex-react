const SIGN_IN = 'SIGN_IN'
const SIGN_OUT = 'SIGN_OUT'

function signIn() {
  return {
    type: SIGN_IN
  }
}

export function signInWithCb() {
  return (dispatch) => {
    dispatch(signIn())
    localStorage.setItem('logged', 'true')
  }
}

function signOut() {
  return {
    type: SIGN_OUT
  }
}

export function signOutWithCb() {
  return (dispatch) => {
    dispatch(signOut())
    localStorage.setItem('logged', 'false')
  }
}

const ACTION_HANDLERS = {
  [SIGN_IN]: state => true,
  [SIGN_OUT]: state => false,
}

const initialState = !(localStorage.getItem('logged') == null ||
  localStorage.getItem('logged') === 'false')

export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
