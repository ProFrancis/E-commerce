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
    return(
      <div id="layoutHeader">
        <header>
        {user ? 
          <div id="link">
            <Link to="/">MWF</Link> 
            <div>
              <p>{user.fname}</p>
              <img src="https://avatars2.githubusercontent.com/u/27960896?s=400&u=1c07321b5bd09a643d5316d788d49a5473e193c4&v=4" alt="profil
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
        : window.location.href === "http://localhost:3000/"  ?
        <div className="logoSignIn">
          <Link to="/" className="connexionHome">MWF</Link>
          <div>
            <Link to="signIn" className="connexionHome">connexion</Link>            
          </div>
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