import React from 'react';
import { Link } from "react-router-dom";

// REDUX 
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import { loadUser } from '../../../redux/actions/authActions'

// SCSS
import './style.css';

class Nav extends React.Component{
  
  home = () => {
    const { user } = this.props.auth
    return(
      <div>
        <nav>
          <ul id="ulNav">
            <li id="underlineOne"><Link to="/home">Home</Link></li>
            <li><Link to="/homme">Homme</Link></li>
            <li><Link to="/femme">Femme</Link></li>
            {user ?
              <li><Link to="/dashboard">Dashboard</Link></li>
            :
             <li><Link className="fantome">Dashboard</Link></li>
            }
            <div className="line"></div>
          </ul>
        </nav>
      </div>
    )
  }
  hommme = () => {
    const { user } = this.props.auth
    return(
      <div>
        <nav>
          <ul id="ulNav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/homme">Homme</Link></li>
            <li><Link to="/femme">Femme</Link></li>
            {user ?
              <li><Link to="/dashboard">Dashboard</Link></li>
            :
             <li><Link className="fantome">Dashboard</Link></li>
            }            <div className="line2"></div>
          </ul>
        </nav>
      </div>
    )
  }
  femme = () => {
    const { user } = this.props.auth
    return(
      <div>
        <nav>
          <ul id="ulNav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/homme">Homme</Link></li>
            <li id="underline"><Link to="/femme">Femme</Link></li>
            {user ?
              <li><Link to="/dashboard">Dashboard</Link></li>
            :
             <li><Link className="fantome">Dashboard</Link></li>
            }            <div className="line3"></div>
          </ul>
        </nav>
      </div>
    )
  }
  dashboard = () => {
    const { user } = this.props.auth
    return(
      <div>
        <nav>
          <ul id="ulNav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/homme">Homme</Link></li>
            <li><Link to="/femme">Femme</Link></li>
            <li id="underline"><Link to="/dashboard">Dashboard</Link></li>
            <div className="line4"></div>
          </ul>
        </nav>
      </div>
    )
  }

  renderSwitch = (url) => {
    switch(url){
      case 'http://localhost:3000/':
        return ''
      case 'http://localhost:3000/home':
        return this.home()
      case 'http://localhost:3000/homme':
        return this.hommme()
      case 'http://localhost:3000/femme':
        return this.femme()
      default:
        return this.dashboard()
    }
  }

  render(){
    return(
      <div>
        {this.renderSwitch(window.location.href)}
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
export default connect(mapStateToProps,mapDispatchToProps)(Nav);