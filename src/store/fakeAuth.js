const AUTHENTICATE = 'AUTHENTICATE'
const SIGN_OUT = 'SIGN_OUT'

function authenticate() {
  return {
    type: AUTHENTICATE
  }
}

export function authenticateWithCb(cb) {
  return (dispatch) => {
    dispatch(authenticate())
    setTimeout(cb, 100)
  }
}

export function signOut() {
  return {
    type: SIGN_OUT
  }
}

const ACTION_HANDLERS = {
  [AUTHENTICATE]: state => true,
  [SIGN_OUT]: state => false,
}

const initialState = !(localStorage.getItem('LoginState') == null ||
  localStorage.getItem('LoginState') === 'false')

export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
