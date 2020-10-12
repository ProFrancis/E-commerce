import React from 'react'
import './style.css'
import { useRouteMatch, useLocation, useHistory } from "react-router-dom";

class Nav extends React.Component{


  render(){
    const { pathname } = useLocation
    console.log(window.location.href)
    return(
      <div id="layoutHeader">
        <header>
          <h1>MWF</h1>
          <div>
            <button>connexion</button>
          </div>
        </header>
      </div>
    )
  }
}
export default Nav;