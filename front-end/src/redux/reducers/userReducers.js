import { SIGN_UP } from '../actions/user'

const initialState = {
  user: null,
  token: null
}

const signUpReducer = (state = initialState, action) => {
  switch(action.type) {
    case SIGN_UP: return {
      ...state,
      token: action.payload.token
    }
    default: return state
  }
}
export { signUpReducer }