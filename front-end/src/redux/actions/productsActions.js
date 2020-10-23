import axios from 'axios'

import { LIST_PRODUCT, LIST_PRODUCT_ERROR, ADD_PRODUCT,ADD_PRODUCT_ERROR,} from '../types/productsTypes'
const URL = 'http://localhost:3001/products'
var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/

// ACTION CREATORS
export const getProducts = () => async dispatch => {
  try{
    const res = await axios.get(`${URL}`)
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

export const addProduct = data => async dispatch => {
  try{
    if(Number.isInteger(data.price)) console.log("A Price is ok! ==> ",Number.isInteger(data.price))
      if(regexp.test(data.picture)) console.log("B picture is ok! ==> ",regexp.test((data.picture)))
        await axios.post(`${URL}`, data)
        dispatch({
          type: ADD_PRODUCT,
          product: data
        })
  }
  catch(e){
    dispatch({
      type: ADD_PRODUCT_ERROR,
      product: console.log(e),
      price: console.log(Number.isInteger(data.price)),
      picture: console.log(regexp.test((data.picture)))
    })
  }
}