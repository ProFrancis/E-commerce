import React, { Component } from 'react'
import {Form, Button, Alert} from 'react-bootstrap'
import './style.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../redux/actions/authActions'
import { clearErrors } from '../../redux/actions/errorActions'
import errorReducer from '../../redux/reducers/errorReducer'

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
    const user = { email, password }
    this.props.signIn(user)

    Object.keys(this.state).forEach(elm => this.setState({[elm]: ''}))
    if (this.props.error.id === 'SIGNIN_FAIL') {
      this.setState({msg: this.props.error.msg})
    } else {
      this.setState({msg: null})
    }
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props
    if(error !== prevProps.error) {
      if (error.id === 'SIGNIN_FAIL') {
        this.setState({msg: error.msg})
      } else {
        this.setState({msg: null})
      } 
    }
  }

  render() {
    return (
      <div id="signIn">
        <Form method="POST" onSubmit={this.handleSubmit}  className="mx-auto w-25 text-left">
        {this.state.msg ? <p className='text-danger w-100' >{this.state.msg}</p> : null }
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
