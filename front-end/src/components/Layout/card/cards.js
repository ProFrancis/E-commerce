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
      const response = await axios.get('http://localhost:3001/createProducts')
      const products = await response.data
      if(response.status !== 200) throw Error(response.statusText)
      this.setState({ products })
    }catch(err){
      console.error(err)
    }
  }

  render(){
    let products = this.state.products.map((product,i) => {
      return (
      <div key={i} id="card" >
        <img src={require(`../../../../public/products/${product.path}`)} alt={product.product_name} whidth="250px"/>
        <p>{product.product_name}</p>
        <p>{product.price} $</p>
        <button>Buy Now</button>
      </div>
      );
    })

    return(
      <div id="container_cards">
        { products }
      </div>
    )
  }
} 
export default Cards;