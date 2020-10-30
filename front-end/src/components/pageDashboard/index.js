import React from 'react'
import Cards from '../Layout/dashboardCards'
import { connect } from 'react-redux'
import { loadUser } from '../../redux/actions/authActions'


// COMPONENTS
import Nav from '../Layout/nav'
import DashboardNav from "../Layout/dashboardNav"

// CSS
import './style.css'
import { Container } from 'react-bootstrap'

class Dashboard extends React.Component{

  componentDidMount() {
    this.props.loadUser(this.props.token)
  }

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

const mapStateToProps = (state) => ({
  token: state.auth.token,
  user: state.auth.user
})

export default connect(mapStateToProps, {loadUser}) (Dashboard)
