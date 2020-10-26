import React from 'react'

// COMPONENTS
import Nav from '../../Layout/nav'
import DashboardNav from '../../Layout/dashboardNav'
// CSS
import '../style.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Buy extends React.Component{
  render(){
    return(
      <div id="bodyDash">
        <div>
          <Nav/>
          <div id="block_Dash">
            <DashboardNav/>
            <Container>

            </Container>
          </div>
        </div>
      </div>
    )
  }
}
export default Buy