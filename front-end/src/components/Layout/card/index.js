import React from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../../redux/actions/productsActions'

import './style.css'

class Cards extends React.Component{

  async componentDidMount(){
    this.props.getProducts()
  }

   pageHome = (products) => {
    if(!products.length){ 
      return(
        <p>Loading...</p>
      )
    }else{
      return products.map(product => {
        return (
          <div key={product.id} id="card">
            <img src={product.path} alt={product.product_name} whidth="250px"/>
            <p>{product.product_name}</p>
            <p>{product.price} $</p>
            <button>Buy Now</button>
          </div>
        )
      })
    }
  }

  pageFemme = (products) => {
    if(products.length){
      return products.map(product => {
        if (product.category === "f"){
          return (
            <div key={product.id} id="card">
              <img src={product.path} alt={product.product_name} whidth="250px"/>
              <p>{product.product_name}</p>
              <p>{product.price} $</p>
              <button>Buy Now</button>
            </div>
          )
        }else{
          return (
            <div>
              <p>Aucun article femme disponnible...</p>
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
    if(products.length){ 
      return products.map(product => {
        if (product.category === "h"){
          return (
            <div key={product.id} id="card">
              <img src={product.path} alt={product.product_name} whidth="250px"/>
              <p>{product.product_name}</p>
              <p>{product.price} $</p>
              <button>Buy Now</button>
            </div>
          )
        }else{
          return (
            <div>
              <p>Aucun article homme disponnible...</p>
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
    console.log(url)
    return(
      <div id="container_cards">
        {this.renderSwitch(url, products)}
      </div>
    )
  }
} 

const mapStateToProps = state => ({products: state.products})
export default connect(mapStateToProps, {getProducts})(Cards)