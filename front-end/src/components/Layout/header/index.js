import React from 'react'
import { Link } from "react-router-dom";

import './style.css'

class Header extends React.Component{
  render(){
    return(
      <div id="layoutHeader">
        <header>
        {window.location.href === "http://localhost:3000" || window.location.href === "http://localhost:3000/CreateProducts" ? 
          <div className="link">
            <Link to="/">MWF</Link> 
            <div>
              <Link to="signIn">connexion</Link>            
            </div>
          </div>
        : 
        <div>
          <Link to="/">MWF</Link>
          <div>
            <Link to="/signIn">connexion</Link>
          </div>
        </div>
        }
        </header>
      </div>
    )
  }
}
export default Header;