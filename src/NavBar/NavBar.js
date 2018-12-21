import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__inner-container">
          <header className="nav__header">Assemble books</header>
        </div>
      </nav>
    );
  }
}

export default NavBar;
