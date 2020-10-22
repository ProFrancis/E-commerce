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
        {products.length && products.length !== 0 ?
          products.map(product => {
            return (
              <div key={product.id} id="card">
                <img src={product.path} alt={product.product_name} whidth="250px"/>
                <p>{product.product_name}</p>
                <p>{product.price} $</p>
                <button>Buy Now</button>
              </div>
            )}
          )
        :
          <p>Loading...</p>
        }
      </div>
    )
  }
} 

const mapStateToProps = state => ({products: state.products})
export default connect(mapStateToProps, {getProducts})(Cards)