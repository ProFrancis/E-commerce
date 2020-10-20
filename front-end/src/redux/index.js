import { Form } from 'react-bootstrap'
import { combineReducers } from 'redux'
import { signUpReducer } from './reducers/userReducers'
import products  from './reducers/productsReducers'

const rootReducer = combineReducers({
  signUpReducer,
  products: products,
})

export default rootReducer