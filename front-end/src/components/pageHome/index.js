import React from 'react'

class Home extends React.Component{
  render(){
    return(
      <div>
        <h1>Home</h1>
        <section>
          <div id="navHome">
            <ul>
              <li>Femme</li>
              <li>Homme</li>
            </ul>
          </div>
          <div id="card">
            <img src="" alt="article" />
            <p>Jean Skinny bleu</p>
            <p>49,99 $</p>
            <button>Buy Now</button>
          </div>
        </section>
      </div>
    )
  }
} 
export default Home;