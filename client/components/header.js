import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="nav navbar-custome">
        <div className="navbar-header">
          <div className="navbar-brand">Chameleon</div>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Converter</a>
          </li>
          <li>
            <a href="#">Palette</a>
          </li>
          <li>
            <a href="#">Generater</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
