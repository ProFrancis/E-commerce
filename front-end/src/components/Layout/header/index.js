import React from 'react'
import { Link } from "react-router-dom";

// REDUX 
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import { loadUser } from '../../../redux/actions/authActions'

import './style.css'

class Header extends React.Component{
  render(){
    const { user } = this.props.auth
    console.log(user)
    return(
      <div id="layoutHeader">
        <header>
        {user ? 
          <div id="link">
            <Link to="/">MWF</Link> 
            <div>
              <p>{user.fname}</p>
              <img src={user.path} alt="profil
              "/>
            </div>
          </div>
        : window.location.href === "http://localhost:3000/signIn"  ?
        <div className="logoSignIn">
          <Link to="/" >MWF</Link>
        </div>
        : window.location.href === "http://localhost:3000/signup"  ?
          <div className="logoSignIn">
            <Link to="/" >MWF</Link>
          </div>
        :
        <div>
          <Link to="/">MWF</Link>
          <div>
            <Link to="signIn">connexion</Link>            
          </div>
        </div>
        }
        </header>
      </div>
    )
  }
}
function mapStateToProps(state){
  const { auth, error } = state
  return { auth, error }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({loadUser }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);