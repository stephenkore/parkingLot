import React, { useState,useEffect } from 'react';
import './App.css';
import Greet from './components/Greet'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header'
import Feature from './components/Feature'
import Pricing from './components/Pricing'
import {
  BrowserRouter as Router,  
 Switch ,Route
} from "react-router-dom";
import Parking from './components/Parking';
function App() {
  return (
    <>
   
    <div className="App">      
      <Router>
      <Header></Header>
      <div className="container">
        <Switch> 
          <Route  path="/" exact > <Parking/> </Route>                 
          </Switch>
          </div>
        </Router>        
    </div>
    </>
  );
}

export default App;
