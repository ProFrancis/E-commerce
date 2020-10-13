import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import './style.css'
import axios from 'axios'

export class SignIn extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email: '',
      password: '',
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
    const {email, password} = this.state
    try {
      const signInReq = await axios.post('http://localhost:3001/sign-in', {
        email: email,
        password: password
      })
      const res = await signInReq
      console.log(res)
      Object.keys(this.state).forEach(elm => this.setState({[elm]: ''}))
      this.setState({msg: res})
      // redirect
    } catch (error) {
      console.log(error)
      error.response && this.setState({msg: error.response.data.msg})
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.msg}</p>
        <Form method="POST" onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' onChange={this.handleInput}  placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' onChange={this.handleInput}  placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    </div>
    )
  }
}

export default SignIn
