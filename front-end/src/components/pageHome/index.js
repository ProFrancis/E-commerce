import React from 'react'

import './style.css'

import Cards from '../Layout/card/cards'
import Nav from '../Layout/nav'

class Home extends React.Component{
  render(){
    return(
      <div>
        <Nav/>
        <section>
          <div id="navHome">
            <ul>
              <li>Femme</li>
              <li>Homme</li>
            </ul>
          </div>
          <div id="itemsCards">
            <Cards/>
          </div>
        </section>
      </div>
    )
  }
} 
export default Home;
