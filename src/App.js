import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Donations from './containers/Donations/Donations';

class App extends Component {
  render() {
    return (
      <div className="App" style={{"height" : "100%"}}>
          <Donations/>
      </div>
    );
  }
}

export default App;
