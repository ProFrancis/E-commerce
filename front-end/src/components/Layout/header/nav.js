import React from 'react'
import './style.css'

class Nav extends React.Component{
  render(){
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