import { combineReducers } from 'redux'
import authReducer  from './reducers/authReducer'
import errorReducer from './reducers/errorReducer'
import products  from './reducers/productsReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  products: products,
})

export default rootReducer