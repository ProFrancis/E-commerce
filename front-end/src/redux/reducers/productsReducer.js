import {  ADD_PRODUCT, LIST_PRODUCT, UPDATE_STATUS_PRODUCT, REMOVE_PRODUCT } from '../types/productsTypes'

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
    case UPDATE_STATUS_PRODUCT: { 
      return Object.assign({}, state,{
        products: state.products.map(product => {
          if(product.id == action.id){
            if(product.is_active === 1 ) {
              product.is_active = 0 
              return {...product}
            }else if(product.is_active === 0){
              product.is_active = 1
              return {...product}
            }
          }else{ 
            return {...product}
          }
        })
      })
        }
    case REMOVE_PRODUCT: {
      return Object.assign({}, state, {
        products: state.products.filter(product => product.id !== action.id)
      })
    }
    default: 
      return state
  }
}