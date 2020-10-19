import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import './style.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export class SignUp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confPassword: '',
      msg: ''  
    }
  }
  
  handleInput = (event) => {
    let nam = event.target.name
    let val = event.target.value
    this.setState({[nam]: val})
  }

  handleSubmit = async (event) => {
    event.persist()
    event.preventDefault()
    const {firstName, lastName, email, password, confPassword} = this.state
    try {
      if(password !== confPassword){
        return this.setState({msg: "the password doesn't match !"})
      } 
        
      const signUpReq = await axios.post('http://localhost:3001/sign-up', {
        fname: firstName,
        lname: lastName,
        email: email,
        password: password
      })
      const res = await signUpReq
      Object.keys(this.state).forEach(elm => this.setState({[elm]: ''}))
      this.setState({msg: res.data.message})
      
      event.target.reset()

    } catch (error) {
      console.log(error)
      error.response && this.setState({msg: error.response.data.message})
    }
  }

  render() {
    return (
      <div id='signUp'>
        <Form onSubmit={this.handleSubmit} className="ml-5 w-25 text-left">
          <p style={{color: 'white'}}>{this.state.msg}</p>
          <Form.Group controlId="formBasicFirstName">
            <Form.Control type="text" name='firstName' onChange={this.handleInput} placeholder="First Name" required/>
            <Form.Label>First Name</Form.Label>
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name='lastName' onChange={this.handleInput} placeholder="Last Name" required/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" name='email' onChange={this.handleInput} placeholder="Email" required/>
          </Form.Group>

          <Form.Group controlId="formBasicPass">
            <Form.Label>Password</Form.Label>
            <Form.Control type="Password" name='password' onChange={this.handleInput} placeholder="Password" required/>
          </Form.Group>

          <Form.Group controlId="formBasicconfPass">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="Password" name='confPassword' onChange={this.handleInput} placeholder="confirm Password" required/>
          </Form.Group>

          <Button variant="primary" type="submit">Sign UP</Button>
        </Form>
        <Link to="/signin">Sign In</Link>
      </div>
    )
  }
}

export default SignUp
