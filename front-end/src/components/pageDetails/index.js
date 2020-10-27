import React from 'react'

import Nav from '../Layout/nav'

import {Container} from 'react-bootstrap'

class Details extends React.Component{
  render(){
    const { product } = this.props.location.state || false
    return(
      <div>
        <Nav/>
        <Container>
          {product === undefined ?
            <div id="detailsDashErr">
              <div>
                <p>Product not found ! 🤯</p>
              </div>
            </div>
          :
            <div id="detailsDash">
              <img src={product.path}/>
              <div>
                {product.is_active === 1 ? 
                  <p>{product.product_name} <span id="stock">En Stock</span></p>
                : 
                  <p>{product.product_name} <span id="rupture">En Rupture</span></p> 
                }
                <p>{product.price} EUR</p>
                <div id="infos">
                  {product.category === "f" ? 
                    <p className="s">Model Femme</p>
                  : 
                    <p className="s">Model Homme</p>
                  }
                  <p>{product.content}</p>
                </div>
              </div>
            </div>
          }
        </Container>
      </div>
    )
  }
}
export default Details;