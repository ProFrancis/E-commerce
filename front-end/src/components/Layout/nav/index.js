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
              {/* <li><a href="#" className="nav">Home</a></li>
              <li><a href="#" className="nav">Home</a></li>
              <li><a href="#" className="nav">Home</a></li>
              <li><a href="#" className="nav">Home</a></li>
              <li><a href="#" className="nav">Home</a></li>
              <li><a href="#" className="nav">Home</a></li> */}
            </ul>
          </nav>
        : 
        <nav>
          <ul id="ulNav">
            {/* <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li> */}
          </ul>
        </nav>
        }
      </div>
    )
  }
}
export default Nav;