import React, { Component } from 'react';
import Counter from './containers/Counter/Counter';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './route/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
      </div>
    );
  }
}

export default App;
