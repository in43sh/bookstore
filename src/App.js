import React, { Component } from 'react';
import './App.css';

import NavBar from '../src/NavBar/NavBar';
import Content from '../src/Content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Content />
      </div>
    );
  }
}

export default App;
