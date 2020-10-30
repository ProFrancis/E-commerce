import React from 'react'
import { connect } from 'react-redux'
import { loadUser } from '../../../redux/actions/authActions'
import axios from 'axios'
// COMPONENTS
import Nav from '../../Layout/nav'
import DashboardNav from '../../Layout/dashboardNav'
// CSS
import '../style.css'
import { Link } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'

class Profil extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
      id: '',
      fname: '',
      lname: '',
      email: '',
      picture: '',
      pass: '',
      confpass: '',
      err_msg: ''
    }
  }

  componentDidMount() {
    if(this.props.user){
      const {userId, fname, lname, email} = this.props.user
      this.setState({id: userId, fname: fname, lname: lname, email: email})
    }
  }
  
  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    const {id, fname, lname, email, picture, pass, confPass} = this.state
    const sd = {first_name: fname, last_name: lname, picture, email, password: pass}, body = {}
    const config = {headers: {'Content-Type': 'application/json', 'auth': this.props.token}}

    Object.keys(sd).forEach(elm => sd[elm] && (body[elm] = sd[elm]))

    if(pass && pass !== confPass) return this.setState({err_msg: "the password doesn't match !"})
    
    axios.put(`http://localhost:3001/user/${id}`, body, config)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err.response)
    })
    Object.keys(this.state).forEach(elm => this.setState({[elm]: ''}))
  }
  
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
                    value={this.state.fname}
                    className="sieze" 
                    name="fname" 
                    placeholder="Update First Name" 
                    onChange={this.handleInput} 
                  />
                </div>
                </Col>
                <Col md={12} xs={12}>
                <div className="divForm">
                  <input 
                    type="text" 
                    value={this.state.lname}
                    className="sieze" 
                    name="lname" 
                    placeholder="Update Last Name" 
                    onChange={this.handleInput} 
                  />
                </div>
                </Col>
                <Col md={12} xs={12}>
                <div className="divForm">
                  <input 
                    name="email" 
                    value={this.state.email}                   
                    type="email" 
                    className="sieze" 
                    placeholder="Update Email" 
                    onChange={this.handleInput} 
                  />
                </div>
                </Col>
                <Col md={12} xs={12}>
                  <div className="divForm">
                    <input 
                      name="picture" 
                      value={this.state.picture}
                      type="text" 
                      className="sieze" 
                      placeholder="Update picture" 
                      onChange={this.handleInput}
                    />
                  </div>
                </Col>
                <Col md={12} xs={12}>
                  <div className="divForm">
                    <input 
                      name="pass"
                      value={this.state.pass} 
                      type="password" 
                      className="sieze" 
                      placeholder="Update pass" 
                      onChange={this.handleInput}
                    />
                  </div>
                </Col>
                <Col md={12} xs={12}>
                  <div className="divForm">
                    <input 
                      name="confpass"
                      value={this.state.confpass} 
                      type="password" 
                      className="sieze" 
                      placeholder="confirm password" 
                      onChange={this.handleInput}
                    />
                  </div>
                </Col>
                <Col>
                  <button type="submit">Update</button>
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

const mapStateToProps = (state) => ({
  token: state.auth.token,
  user: state.auth.user
})

export default connect(mapStateToProps, {loadUser}) (Profil)