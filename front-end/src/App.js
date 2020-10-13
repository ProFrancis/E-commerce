import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> singup

// LAYOUT 
import Header from './components/Layout/header/nav'

// COMPONENTS
import Accueil from './components/pageAccueil'
import Home from './components/pageHome'
import SignUp from './components/SignUp/SignUp';

function App() {
  // let { pathname};

  return (
    <div>
      <Router>
        <Route path="/">
          <Header/>        
        </Route>
        <Switch>
          <Route exact path="/">
            <Accueil/>
          </Route>
          <Route exact path="/Home">
            <Home/>
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
