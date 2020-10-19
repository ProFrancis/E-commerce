import React from 'react'
import { Link } from "react-router-dom";

// CSS
import './style.css'

// VIDEO
import video from '../../asset/videos/pub3.mp4'

class Accueil extends React.Component{
  render(){
    return(
      <div id="body_Accueil">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div id="link_Home">
          <div id="svg">
            <Link to="/home">HOME</Link>
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg" >
              <rect className="stroke" height="60" width="320" />
            </svg>
          </div>
        </div>
      </div>
    )
  }
}
export default Accueil;