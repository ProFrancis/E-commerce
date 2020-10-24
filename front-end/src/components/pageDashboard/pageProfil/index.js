import React from 'react'

// COMPONENTS
import Nav from '../../Layout/nav'
import DashboardNav from '../../Layout/dashboardNav'
// CSS
import '../style.css'
import { Link } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'

class Profil extends React.Component{
  render(){
    return(
      <div id="bodyDash">
        <div>
          <Nav/>
          <div className="profil" profil id="block_Dash">
            <DashboardNav/>
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
                    name="name" 
                    placeholder="Update Name" 
                    onChange={this.handleChange} 
                  />
                </div>
                </Col>
                <Col md={12} xs={12}>
                  <div className="divForm">
                    <input 
                      name="picture" 
                      type="text" 
                      className="sieze" 
                      placeholder="Update picture" 
                      onChange={this.handleChange}
                    />
                  </div>
                </Col>
              </form>
            </Row>
            </Container>
          </div>
        </div>
      </div>
    )
  }
}
export default Profil