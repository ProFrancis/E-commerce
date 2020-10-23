import React from 'react'
import Cards from '../Layout/dashboardCards'

// COMPONENTS
import Nav from '../Layout/nav'
import DashboardNav from "../Layout/dashboardNav"

// CSS
import './style.css'
import { Container } from 'react-bootstrap'

class Dashboard extends React.Component{
  render(){
    return(
      <div id="bodyDash">
        <div>
          <Nav/>
          <div id="block_Dash">
            <DashboardNav/>
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