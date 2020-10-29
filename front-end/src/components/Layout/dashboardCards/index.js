import React from 'react'
import axios from 'axios'

// REDUX 
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import { getProducts , putStatusProduct } from '../../../redux/actions/productsActions'

import './style.css'
import { Link } from 'react-router-dom'

class Cards extends React.Component{

  componentDidMount(){
    this.props.getProducts()
  }

  render(){
    const { products } = this.props.products
    return(
      <div id="container_cards">
        {products ?
          products.map((product,i) => {
            return (
              <div>
                <ul className="ulCardDash">
                  {product.is_active === 1 ?
                    <li><button id="ligne" onClick={(e) => this.props.putStatusProduct(product.id)}>ligne</button></li>
                    :
                    <li><button id="disabled" onClick={(e) => this.props.putStatusProduct(product.id)}>disabled</button></li>
                  }
                  <li><Link id="show" to={{
                    pathname: `/Dashboard/detail/${product.id}`,
                    state: {
                      product: product,
                    }
                  }}>show</Link></li>
                  <li><button id="delete">delete</button></li>
                </ul>
                <div key={i} id="card" >
                  <Link className="linkCard"
                    to={{
                      pathname: `/Dashboard/detail/${product.id}`,
                      state: {
                        product: product,
                      }
                    }}
                  >
                    <img src={product.path} alt={product.product_name} whidth="250px"/>
                    <p>{product.product_name}</p>
                    <p>{product.price} $</p>
                    <button>Buy Now</button>
                  </Link>
                </div>
              </div>
            );
          })
        : 
          <p>Loading...</p>
        }
      </div>
    )
  }
} 
function mapStateToProps(state){
  const { auth, error, products } = state
  return { auth, error, products }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ getProducts, putStatusProduct}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Cards);