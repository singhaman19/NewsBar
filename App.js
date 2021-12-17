//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize=10
  render() {
    return (
      <div>
      <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/"><News key="general" pageSize={this.pagesize} country="in" topic="general" /></Route>
        <Route exact path="/business"><News key="business" pageSize={this.pagesize} country="in" topic="business" /></Route>
        <Route exact path="/entertainment"><News key="entertainment" pageSize={this.pagesize} country="in" topic="entertainment" /></Route>
        <Route exact path="/general"><News key="general" pageSize={this.pagesize} country="in" topic="general" /></Route>
        <Route exact path="/health"><News key="health" pageSize={this.pagesize} country="in" topic="health" /></Route>
        <Route exact path="/science"><News key="science" pageSize={this.pagesize} country="in" topic="science" /></Route>
        <Route exact path="/sports"><News key="sports" pageSize={this.pagesize} country="in" topic="sports" /></Route>
        <Route exact path="/technology"><News key="technology" pageSize={this.pagesize} country="in" topic="technology" /></Route>
      </Switch> 
      </Router>
      </div>
    )
  }
}

