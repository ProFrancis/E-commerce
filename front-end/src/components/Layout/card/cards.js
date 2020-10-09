import React from 'react'
import './style.css'
import img from '../../../asset/img/jean.jpeg'

class Cards extends React.Component{
  render(){
    return(
      <div id="card">
        <img src={img} alt="article" whidth="250px" />
        <p>Jean Skinny bleu</p>
        <p>49,99 $</p>
        <button>Buy Now</button>
      </div>
    )
  }
} 
export default Cards;