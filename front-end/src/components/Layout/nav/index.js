import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

class Nav extends React.Component{
  
  home = () => {
    return(
      <div>
        <nav>
          <ul id="ulNav">
            <li id="underlineOne"><Link to="/home">Home</Link></li>
            <li><Link to="/homme">Homme</Link></li>
            <li><Link to="/femme">Femme</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <div className="line"></div>
          </ul>
        </nav>
      </div>
    )
  }
  hommme = () => {
    return(
      <div>
        <nav>
          <ul id="ulNav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/homme">Homme</Link></li>
            <li><Link to="/femme">Femme</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <div className="line2"></div>
          </ul>
        </nav>
      </div>
    )
  }
  femme = () => {
    return(
      <div>
        <nav>
          <ul id="ulNav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/homme">Homme</Link></li>
            <li id="underline"><Link to="/femme">Femme</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <div className="line3"></div>
          </ul>
        </nav>
      </div>
    )
  }
  dashboard = () => {
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
export default Nav;