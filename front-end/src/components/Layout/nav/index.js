import React from 'react';
// import { Link } from "react-router-dom";
import './style.css';


class Nav extends React.Component{
  render(){
    return(
      <div>
        {window.location.href === "http://localhost:3000/CreateProducts" ? 
          <nav>
            <ul id="ulNav">
              <li><a class="nav">Home</a></li>
              <li><a class="nav">Home</a></li>
              <li><a class="nav">Home</a></li>
              <li><a class="nav">Home</a></li>
              <li><a class="nav">Home</a></li>
              <li><a class="nav">Home</a></li>
            </ul>
          </nav>
        : 
        <nav>
          <ul id="ulNav">
            <li><a>Home</a></li>
            <li><a>Home</a></li>
            <li><a>Home</a></li>
            <li><a>Home</a></li>
            <li><a>Home</a></li>
            <li><a>Home</a></li>
          </ul>
        </nav>
        }
      </div>
    )
  }
}
export default Nav;