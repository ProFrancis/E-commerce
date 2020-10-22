import {  ADD_PRODUCT, LIST_PRODUCT } from '../types/productsTypes'

const initialState = {
  products: [],
  loading: false
}

export default function(state= initialState, action){
  switch (action.type){
    case LIST_PRODUCT:
      return {
        ...state,
        products: action.products,
        loading: !state.loading
      }
    case ADD_PRODUCT:
      return{
        ...state,
        products: action.products,
        loading: !state.loading
      }
    default: return state
  }
}