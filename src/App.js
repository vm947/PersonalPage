import React from 'react';
import Jumbo from './components/Jumbo';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Works from './components/Works';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Jumbo/>
      <Navbar/>
      <Switch>
      <Route exact path ='/works' component={Works}></Route>
      <Route exact path='/'component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
