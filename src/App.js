import React, { Component } from 'react';
import './App.css';

import NavBar from '../src/NavBar/NavBar';
import Content from '../src/Content/Content';
import Footer from '../src/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
