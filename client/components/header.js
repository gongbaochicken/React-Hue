import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <div className="navbar-brand">Chameleon</div>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Lab</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
