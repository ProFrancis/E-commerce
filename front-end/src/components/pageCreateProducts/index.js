import React from 'react'
import Nav from '../Layout/nav'
import { connect } from 'react-redux'

// REDUX
import { addProduct } from '../../redux/actions/productsActions'

// CSS
import './style.css'
import {Container, Row, Col } from 'react-bootstrap'

class CreateProducts extends React.Component{
  state = {
    userId: 3,
    productName: '',
    prix: null,
    category: '',
    picture: '',
    content: '',
    active: 1
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit =  async event => {
    event.preventDefault()
    const product = {
      userId: this.state.userId,
      picture: this.state.picture,
      productName: this.state.productName,
      price: parseFloat(this.state.prix, 10),
      content: this.state.content,
      category: this.state.category,
      active: this.state.active
    }
    console.log(" Component => ",product)
    this.props.addProduct(product)
  }

  render(){
    return(
      <div id="bodyCreateProducts">
        <Nav/>
        <Container>
          <Row className="justify-content-md-center justify-content-xs-center">
            <form className="col-xs-12 col-md-8 col-sm-12"
              onSubmit={this.handleSubmit}
            >
              <Col md={12} xs={12}>
              <div className="divForm">
                <input 
                  type="text" 
                  className="sieze" 
                  name="productName" 
                  placeholder="Product Name" 
                  onChange={this.handleChange} 
                />
                <input 
                  name="prix" 
                  type="text" 
                  className="sieze" 
                  placeholder="Prix" 
                  onChange={this.handleChange}
                />
              </div>
              </Col>
              <Col md={12} xs={12}>
                <div className="divForm">
                  <select name="category" onChange={this.handleChange}>
                    <option defaultValue>Category</option>
                    <option value="h">Homme</option>
                    <option value="f">Femme</option>
                  </select>
                  <input 
                    name="picture" 
                    type="text" 
                    className="sieze" 
                    placeholder="Choose a file" 
                    onChange={this.handleChange}
                  />
                </div>
              </Col>
              <Col>
                <textarea 
                  name="content" 
                  row="100" 
                  cols="100"
                  onChange={this.handleChange}
                />
              </Col>
              <Col>
                <button type="submit">Valider</button>
              </Col>
            </form>
          </Row>
        </Container>
      </div>
    )
  }
}
export default connect(null, {addProduct})(CreateProducts);