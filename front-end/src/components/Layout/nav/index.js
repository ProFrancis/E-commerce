import React from 'react';
import { Link } from "react-router-dom";
import './style.css';


class Nav extends React.Component{
  render(){
    return(
      <div>
        {window.location.href === "http://localhost:3000/CreateProducts" ? 
          <nav>
            <ul id="ulNav">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/homme">Homme</Link></li>
              <li><Link to="/femme">Femme</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
          </nav>
        : 
        <nav>
          <ul id="ulNav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/homme">Homme</Link></li>
            <li><Link to="/femme">Femme</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
        }
      </div>
    )
  }
}
export default Nav;