import React from 'react';
import Jumbo from './components/Jumbo';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Jumbo/>
      <Navbar/>
      <Route exact path='/'component={Home}></Route>
    </div>
  );
}

export default App;
