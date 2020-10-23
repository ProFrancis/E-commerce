import React from 'react'

import Cards from '../Layout/card'
import Nav from '../Layout/nav'

import {Container} from 'react-bootstrap'

class Femme extends React.Component{
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
export default Femme;