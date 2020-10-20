import {  LIST_PRODUCT } from '../types/productsTypes'

const initialState = {
  products: [],
  loading: true
}

export default function(state= initialState, action){
  switch (action.type){
    case LIST_PRODUCT:
      return {
        ...state,
        products:action.payload,
        loading:false
      }
      default: return state
  }
}