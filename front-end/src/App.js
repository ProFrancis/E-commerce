import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './redux'

// LAYOUT 
import Header from './components/Layout/header'

// COMPONENTS
import Accueil from './components/pageAccueil'
import Home from './components/pageHome'
import SignUp from './components/pageSignUp/SignUp'
import SignIn from './components/pageSignIn/SignIn'
import Femme from './components/pageFemme'
import Homme from './components/pageHomme'
import Details from './components/pageDetails'
import Dashboard from './components/pageDashboard'
import Add from './components/pageDashboard/pageAdd'
import Buy from './components/pageDashboard/pageBuy'
import Profil from './components/pageDashboard/pageProfil'
import DetailDashboard from './components/pageDashboard/pageDetail'


// REDUX
const middleware = [thunk]
const store = createStore( rootReducer ,composeWithDevTools(applyMiddleware(...middleware)) )

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
            <Route exact path="/Femme">
              <Femme/>
            </Route>
            <Route exact path="/Homme">
              <Homme/>
            </Route>
            <Route exact path="/Details">
              <Details/>
            </Route>
            <Route exact path="/Dashboard">
              <Dashboard/>
            </Route>
            <Route exact path="/Dashboard/add">
              <Add/>
            </Route>
            <Route exact path="/Dashboard/buy">
              <Buy/>
            </Route>
            <Route exact path="/Dashboard/profil">
              <Profil/>
            </Route>
            <Route exact path="/Dashboard/detail">
             <DetailDashboard/>
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>  
  );
}
export default App;