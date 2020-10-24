import React from 'react'
import axios from 'axios'

import './style.css'

class Cards extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }

  async componentDidMount(){
    try{
      const response = await axios.get('http://localhost:3001/products')
      const products = await response.data
      if(response.status !== 200) throw Error(response.statusText)
      this.setState({ products })
    }catch(err){
      console.error(err)
    }
  }

  render(){
    console.log("BEFORE TO CREATE PRODUCT ==> ", this.state.products.length )
    return(
      <div id="container_cards">
        {this.state.products && this.state.products.length !== 0 ?
          this.state.products.map((product,i) => {
            return (
              <div key={i} id="card" >
                <img src={product.path} alt={product.product_name} whidth="250px"/>
                <p>{product.product_name}</p>
                <p>{product.price} $</p>
                <button>Buy Now</button>
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
export default Cards;