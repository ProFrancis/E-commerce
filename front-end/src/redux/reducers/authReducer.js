  
import {
  USER_LOADED,
  USER_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  AUTH_ERROR,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGN_OUT
} from '../types/userTypes'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      }
    case SIGNIN_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case AUTH_ERROR:
    case SIGNIN_FAIL:
    case SIGNUP_FAIL: 
    case SIGN_OUT:  
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };
    default:
      return state;
  }
}