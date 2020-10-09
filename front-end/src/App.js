import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// LAYOUT 
import Nav from './components/Layout/nav'

// COMPONENTS
import Accueil from './components/pageAccueil'
import Home from './components/pageHome'

function App() {
  return (
    <div>
      <Router>
        <Route path="/">
          <Nav/>        
        </Route>
        <Switch>
          <Route exact path="/">
            <Accueil/>
          </Route>
          <Route exact path="/Home">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
