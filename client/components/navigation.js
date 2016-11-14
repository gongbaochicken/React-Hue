import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav className="nav navbar-custome">
        <div className="navbar-header">
          <div className="navbar-brand">React Hue</div>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/converter">Converter</a>
          </li>
          <li>
            <a href="/palette">Palette</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
