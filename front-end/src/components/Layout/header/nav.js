import React from 'react'
import './style.css'

class Nav extends React.Component{
  render(){
    console.log(window.location.href)
    return(
      <div id="layoutHeader">
        <header>
        {window.location.href === "http://localhost:3000/" || window.location.href === "http://localhost:3000/CreateProducts" ? 
          <div>
            <h1 class="style">MWF</h1> 
            <div>
              <button class="style">connexion</button>
            </div>
          </div>
        : 
        <div>
          <h1>MWF</h1>
          <div>
            <button>connexion</button>
          </div>
        </div>
        }
        </header>
      </div>
    )
  }
}
export default Nav;