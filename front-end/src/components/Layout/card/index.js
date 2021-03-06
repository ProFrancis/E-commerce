import React from 'react'
import { Link } from 'react-router-dom'
// REDUX 
import { connect } from 'react-redux'
import { getProducts } from '../../../redux/actions/productsActions'

import './style.css'

class Cards extends React.Component{

  async componentDidMount(){
    this.props.getProducts()
  }

   pageHome = (products) => {
    if(products){ 
      return products.map(product => {
        if(product.is_active !== 0){
          return (
            <div key={product.id} id="card">
              <Link className="linkCard"
                to={{
                  pathname: `/product/Details/${product.id}`,
                  state :{
                    product: product
                  }
                }}
              >
                <img src={product.path} alt={product.product_name} whidth="250px"/>
                <p>{product.product_name}</p>
                <p>{product.price} $</p>
                <button>Buy Now</button>
              </Link>
            </div>
          )
        }
      })
    }else{
      return(
        <p>Loading...</p>
      )
    }
  }

  pageFemme = (products) => {
    if(products){
      return products.map(product => {
        if (product.category === "f" && product.is_active !== 0){
          return (
            <div key={product.id} id="card">
              <Link className="linkCard"
                to={{
                  pathname: `/product/Details/${product.id}`,
                  state :{
                    product: product
                  }
                }}
              >
                <img src={product.path} alt={product.product_name} whidth="250px"/>
                <p>{product.product_name}</p>
                <p>{product.price} $</p>
                <button>Buy Now</button>
              </Link>
            </div>
          )
        }
      })
    }else {
      return (
        <p>Loading...</p>
      )
    }
  }

  pageHomme = (products) => {
    if(products){ 
      return products.map(product => {
        if (product.category === "h" && product.is_active !== 0){
          return (
            <div key={product.id} id="card">
              <Link className="linkCard"
                to={{
                  pathname: `/product/Details/${product.id}`,
                  state :{
                    product: product
                  }
                }}
              > 
                <img src={product.path} alt={product.product_name} whidth="250px"/>
                <p>{product.product_name}</p>
                <p>{product.price} $</p>
                <button>Buy Now</button>
              </Link>
            </div>
          )
        }}
      )
    }else{
      return(
        <p>Loading...</p>
      )
    }
  }

  renderSwitch = (url, products) => {
    switch(url){
      case 'http://localhost:3000/homme':
        return this.pageHomme(products)
      case 'http://localhost:3000/femme': 
        return this.pageFemme(products)
      default:
        return this.pageHome(products)
    }
  }

  render(){
    const { products } = this.props.products
    const url = window.location.href
    return(
      <div id="container_cards">
        {this.renderSwitch(url, products)}
      </div>
    )
  }
} 

const mapStateToProps = state => ({products: state.products})
export default connect(mapStateToProps, {getProducts})(Cards)