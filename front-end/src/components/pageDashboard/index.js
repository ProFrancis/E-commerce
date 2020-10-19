import React from 'react'
import Cards from './cardsDahs'

// COMPONENTS
import Nav from '../Layout/nav'

// CSS
import './style.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Dashboard extends React.Component{
  render(){
    return(
      <div id="bodyDash">
        <div>
          <Nav/>
          <div id="block_Dash">
            <nav>
              <ul id="navDash">
                <li>Profil</li>
                <li>My buy</li>
                <li>My Product</li>
                <li><Link to="/CreateProducts">Add Product</Link></li>
                <li>Poduct Sell</li>
                <li>Prpduct in wait</li>
              </ul>
            </nav>
            <Container>
              <Cards/>
            </Container>
          </div>
        </div>
      </div>
    )
  }
}
export default Dashboard;