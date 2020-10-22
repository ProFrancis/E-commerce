import axios from 'axios'
import { SIGNIN_SUCCESS, SIGNIN_FAIL } from '../types/userTypes'
import { returnErrors } from './errorActions'


export const signIn = ({ email, password }) => dispatch => {
  // const config = { headers: { 'Content-Type': 'application:json' } }
  const body = {email, password}

  axios.post('http://localhost:3001/sign-in', body)
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