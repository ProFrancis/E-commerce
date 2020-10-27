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
          <Route path="/" component={Header}/>
          <Switch>
            <Route exact path="/" component={Accueil}/>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/SignUp" component={SignUp}/>
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/Femme" component={Femme} />
            <Route exact path="/Homme" component={Homme}/>
            <Route exact path="/product/Details/:id" component={Details} />
            <Route exact path="/Dashboard" component={Dashboard}/>
            <Route exact path="/Dashboard/add" component={Add} />
            <Route exact path="/Dashboard/buy" component={Buy} />
            <Route exact path="/Dashboard/profil"  component={Profil}/>
            <Route exact path="/Dashboard/detail/:id" component={DetailDashboard} />
          </Switch>
        </Router>
      </div>
    </Provider>  
  );
}
export default App;