import axios from 'axios'
import jwt from 'jsonwebtoken'

import { 
  SIGNIN_SUCCESS, 
  SIGNIN_FAIL, 
  SIGNUP_SUCCESS, 
  SIGNUP_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  SIGN_OUT 
} from '../types/userTypes'
import { returnErrors } from './errorActions'

export const loadUser = (token) => (dispatch) => {
  if(token){
    jwt.verify(token, 'itssecretso', function(err, decoded) {
      if(err) return dispatch({ type: AUTH_ERROR })
      dispatch({
        type: USER_LOADED,
        payload: decoded
      })   
    })
  } else {
    dispatch({ type: AUTH_ERROR })
  }
}

export const signIn = ({ email, password }) => dispatch => {
  const config = {headers: {'Content-Type': 'application/json'}}
  const body = {email, password}

  axios.post('http://localhost:3001/sign-in', body, config)
  .then(res => 
    dispatch({
      type: SIGNIN_SUCCESS,
      payload: res.data
    })    
  )
  .catch(err => {
    const { data, status } = err.response
    dispatch(returnErrors(data.msg, status, 'SIGNIN_FAIL'))
    dispatch({ type: SIGNIN_FAIL })
  })
}

export const signUp = (body) => dispatch => {
  const config = {headers: {'Content-Type': 'application/json'}}
  
  axios.post('http://localhost:3001/sign-up', body, config)
  .then(res => 
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data
    })    
  )
  .catch(err => {
    const { data, status } = err.response
    dispatch(returnErrors(data.err_msg, status, 'SIGNUP_FAIL'))
    dispatch({ type: SIGNUP_FAIL })
  })
}

export const signOut = () =>{
  return {
    type: SIGN_OUT
  }
}