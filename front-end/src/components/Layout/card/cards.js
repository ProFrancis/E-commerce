import React from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../../redux/actions/productsActions'

import './style.css'

class Cards extends React.Component{

  async componentDidMount(){
    this.props.getProducts()
  }

  render(){
    const { products } = this.props.products
    return(
      <div id="container_cards">
        {products.map((product,i) => {
          return (
            <div key={i} id="card">
              <img src={require(`../../../../public/products/${product.path}`)} alt={product.product_name} whidth="250px"/>
              <p>{product.product_name}</p>
              <p>{product.price} $</p>
              <button>Buy Now</button>
            </div>
          )}
        )}
      </div>
    )
  }
} 

const mapStateToProps = state => ({products: state.products})
export default connect(mapStateToProps, {getProducts})(Cards)