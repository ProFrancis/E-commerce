import React from 'react'
import Nav from '../Layout/nav'
import axios from 'axios';

import './style.css'
import {Container, Row, Col } from 'react-bootstrap'


class CreateProducts extends React.Component{
  state = {
    userId: 1,
    productName: '',
    prix: null,
    category: '',
    picture: '',
    content: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }
  handleChangeFile = event => {
    this.setState({ picture: event.target.files[0]})
  }

  handleSubmit =  async event => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('image', this.state.picture, this.state.picture.name ) 
    // formData.append('userId', this.state.userId)
    formData.append('productName', this.state.productName)
    formData.append('price', this.state.prix)
    formData.append('category', this.state.category)
    formData.append('content', this.state.content)
    console.log("Form data => ", formData)
    try{
      await axios.post('http://localhost:3001/createProducts', formData) 
    } catch(err){
      if(err.response.status === 500) console.log('there was a problem with server')
      else console.log(err.response.data.msg)
    }
  }

  render(){
    return(
      <div id="bodyCreateProducts">
        <Nav/>
        <Container>
          <Row className="justify-content-md-center justify-content-xs-center">
            <form class="col-xs-12 col-md-8 col-sm-12"
              onSubmit={this.handleSubmit}
            >
              <Col md={12} xs={12}>
              <div class="divForm">
                <input 
                  type="text" 
                  class="sieze" 
                  name="productName" 
                  placeholder="Product Name" 
                  onChange={this.handleChange} 
                />
                <input 
                  name="prix" 
                  type="text" 
                  class="sieze" 
                  placeholder="Prix" 
                  onChange={this.handleChange}
                />
              </div>
              </Col>
              <Col md={12} xs={12}>
                <div class="divForm">
                  <select name="category" onChange={this.handleChange}>
                    <option defaultValue>Category</option>
                    <option value="h">Homme</option>
                    <option value="f">Femme</option>
                  </select>
                  <input 
                    id="file" 
                    type="file" 
                    name="picture" 
                    class="inputfile" 
                    onChange={this.handleChangeFile}
                  />
                  <label for="file">Choose a file</label>
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
export default CreateProducts;