import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// LAYOUT 
import Header from './components/Layout/header/nav'

// COMPONENTS
import Accueil from './components/pageAccueil'
import Home from './components/pageHome'
import SignUp from './components/pageSignUp/SignUp';
import CreateProducts from './components/pageCreateProducts';


function App() {
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
          <Route exact path="/CreateProducts">
            <CreateProducts/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
