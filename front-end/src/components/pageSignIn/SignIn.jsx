import React, { Component } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import './style.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../redux/actions/authActions'
import { clearErrors } from '../../redux/actions/errorActions'

class SignIn extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email: '',
      password: '',
      msg: ''  
    }
  }
  
  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (event) => {
    // event.persist()
    event.preventDefault()

    const {email, password} = this.state
    this.props.signIn({ email, password })

    Object.keys(this.state).forEach(elm => this.setState({[elm]: ''}))
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props

    if(error !== prevProps.error) {
      error.id === 'SIGNIN_FAIL' ?
      this.setState({msg: error.msg}) :
      this.setState({msg: null})
    } 
  }

  render() {
    return (
      <div id="signIn">
        <Form method="POST" onSubmit={this.handleSubmit}  className="mx-auto w-50 text-left">
          {this.state.msg && <Alert  variant='danger'>{this.state.msg}</Alert >}
         
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              name='email' 
              onChange={this.handleInput}  
              placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              name='password' 
              onChange={this.handleInput}  
              placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>

        <Link to="/signup">Sign Up</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
})

export default connect(mapStateToProps, {signIn, clearErrors})(SignIn)