import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component{
  render(){
    return(
      <div>
        <nav>
          <ul id="navDash">
            <li><Link to="/dashboard">My products</Link></li>
            <li><Link to="/dashboard/profil">Profil</Link></li>
            <li><Link to="/dashboard/buy">Buy</Link></li>
            <li><Link to="/dashboard/add">Add Product</Link></li>
            {/* <li>Poduct Sell</li>
            <li>Prpduct in wait</li> */}
          </ul>
        </nav>
      </div>
    )
  }
} 
export default Nav;