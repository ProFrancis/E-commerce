import React, { Component } from 'react'
import {Form, Button, Alert} from 'react-bootstrap'
import './style.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../redux/actions/authActions'

export class SignUp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confPassword: '',
      err_msg: ''
    }
  }
  
  handleInput = (event) => {
    this.setState({[ event.target.name]: event.target.value})
  }

  handleSubmit = async (event) => {
    event.persist()
    event.preventDefault()
    const {firstName, lastName, email, password, confPassword} = this.state
    const userdata = {fname: firstName, lname: lastName, email: email, password: password}

    if(password !== confPassword){
      return this.setState({err_msg: "the password doesn't match !"})
    } 

    this.props.signUp(userdata)    
    Object.keys(this.state).forEach(elm => this.setState({[elm]: ''}))
      
    event.target.reset()
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props

    if(error !== prevProps.error){
      error.id === 'SIGNUP_FAIL' ?
      this.setState({err_msg: error.msg}) :
      this.setState({err_msg: null})
    } 
  }

  render() {
    return (
      <div id='signUp'>
        <Form onSubmit={this.handleSubmit} className="ml-5 w-50 text-left">
          {this.state.err_msg && <Alert  variant='danger'>{this.state.err_msg}</Alert >}
          {this.props.success && <Alert  variant='success'>{this.props.success}</Alert >}
          
          <Form.Group controlId="formBasicFirstName">
            <Form.Control 
              type="text" 
              name='firstName' 
              onChange={this.handleInput} 
              placeholder="First Name" 
              required/>
            <Form.Label>First Name</Form.Label>
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              type="text" 
              name='lastName' 
              onChange={this.handleInput} 
              placeholder="Last Name" 
              required/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
              type="email" 
              name='email' 
              onChange={this.handleInput} 
              placeholder="Email" 
              required/>
          </Form.Group>

          <Form.Group controlId="formBasicPass">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="Password"
              name='password' 
              onChange={this.handleInput} 
              placeholder="Password" 
              required/>
          </Form.Group>

          <Form.Group controlId="formBasicconfPass">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
              type="Password" 
              name='confPassword' 
              onChange={this.handleInput} 
              placeholder="confirm Password" 
              required/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign UP
          </Button>
        </Form>
        <Link to="/signin">Sign In</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  success: state.auth.succ_msg
})

export default connect(mapStateToProps, {signUp}) (SignUp)