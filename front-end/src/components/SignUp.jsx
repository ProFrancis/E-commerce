import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'

export class SignUp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      form:{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confPassword: ''
      }
      
    }
  }
  
  formHandler = (event) => {
    let nam = event.target.name
    let val = event.target.value
    this.setState({[nam]: val})
  }

  submitHandler = async (event) => {
    const signUp = await axios.post('http://localhost:3000/sign-up', {
      fname: this.form.firstName,
      lname: this.form.lastName,
      email: this.form.email,
      password: this.form.password
    })

    const res = await signUp
  }

  render() {
    
    return (
      <div>
        <Form className="mx-auto w-25 text-left">
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="text" name='firstName' onChange={this.formHandler} placeholder="Enter First Name" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="text" name='lastName' onChange={this.formHandler} placeholder="Enter Last Name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address:</Form.Label>
            <Form.Control type="email" name='email' onChange={this.formHandler} placeholder="Enter Email" />
          </Form.Group>

          <Form.Group controlId="formBasicPass">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="Password" name='password' onChange={this.formHandler} placeholder="Enter Password" />
          </Form.Group>

          <Form.Group controlId="formBasicconfPass">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control type="Password" name='confPassword' onChange={this.formHandler} placeholder="confirm Password" />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default SignUp
