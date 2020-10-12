import React from 'react'
import './style.css'
import video from '../../asset/videos/pub3.mp4'
class Accueil extends React.Component{
  render(){
    return(
      <div id="body_Accueil">
        <video autoplay muted>
          <source src={video} type="video/mp4" />
        </video>
        <div id="link_Home">
          <div id="svg">
            <a>HOME</a>
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg" >
              <rect class="stroke" height="60" width="320" />
              <div>zaeazeae</div>
            </svg>
          </div>
        </div>
      </div>
    )
  }
}
export default Accueil;