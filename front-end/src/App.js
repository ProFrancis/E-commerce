import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from './redux/store'

// LAYOUT 
import Header from './components/Layout/header'

// COMPONENTS
import Accueil from './components/pageAccueil'
import Home from './components/pageHome'
import SignUp from './components/pageSignUp/SignUp';
import SignIn from './components/pageSignIn/SignIn';
import CreateProducts from './components/pageCreateProducts';
import Dashboard from './components/pageDashboard';


function App() {
  return (
    <Provider store={store}>
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
            <Route exact path="/SignIn">
              <SignIn />
            </Route>
            <Route exact path="/CreateProducts">
              <CreateProducts/>
            </Route>
            <Route exact path="/Dashboard">
              <Dashboard/>
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>  
  );
}
export default App;