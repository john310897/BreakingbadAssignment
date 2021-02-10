import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Episodes from './Episodes';
import Episodedetails from './Episodedetails';

function App() {
  return (
    <Router>
      <Switch>
          <Route path='/' exact component={Login}/>
          <Route path='/signup' exact component={SignUp}/>
          <Route path='/home' exact component={Home}/>
          <Route path='/episodes' exact component={Episodes}/>
          <Route path='/episodedetails/:id' exact component={Episodedetails}/>
      </Switch>
    </Router>
  );
}

export default App;
