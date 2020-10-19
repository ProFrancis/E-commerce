import React from 'react'

import './style.css'
import {Container, Row, Col } from 'react-bootstrap'

import Cards from '../Layout/card/cards'
import Nav from '../Layout/nav'

class Home extends React.Component{
  render(){
    return(
      <div>
        <Nav/>
        <Container>
          <Cards/>
        </Container>
      </div>
    )
  }
} 
export default Home;
