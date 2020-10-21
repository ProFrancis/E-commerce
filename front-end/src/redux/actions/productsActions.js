import { LIST_PRODUCT, LIST_PRODUCT_ERROR } from '../types/productsTypes'
import axios from 'axios'

// const axios =  require('axios')

// ACTION CREATORS
export const getProducts = () => async dispatch => {
  try{
    const res = await axios.get(`http://localhost:3001/products`)
    dispatch({
      type: LIST_PRODUCT,
      products: res.data
    })
  }
  catch(e){
    dispatch({
      type: LIST_PRODUCT_ERROR,
      products: console.log(e)
    })
  }
}