import React from 'react'
import Nav from '../Layout/nav'
import './style.css'
import {Container, Row, Col } from 'react-bootstrap'

class CreateProducts extends React.Component{
  render(){
    return(
      <div id="bodyCreateProducts">
        <Nav/>
        <Container>
          <Row className="justify-content-md-center justify-content-xs-center">
            <form class="col-xs-12 col-md-8 col-sm-12" >
              <Col md={12} xs={12}>
              <div class="divForm">
                <input class="sieze" type="text" placeholder="Product Name" />
                <input class="sieze" type="text" placeholder="Prix" />
              </div>
              </Col>
              <Col md={12} xs={12}>
                <div class="divForm">
                  <select>
                    <option>Category</option>
                  </select>
                  <select>
                    <option>Sexe</option>
                  </select>
                </div>
              </Col>
              <Col>
                <input type="file" name="file" id="file" class="inputfile" />
                <label for="file">Choose a file</label>
              </Col>
              <Col>
                <textarea row="100" cols="100"/>
              </Col>
              <Col>
                <button>Valider</button>
              </Col>
            </form>
          </Row>
        </Container>
      </div>
    )
  }
}
export default CreateProducts;