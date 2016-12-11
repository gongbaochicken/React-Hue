import React, { Component } from 'react';

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {selected: props.navSelected};
  }

  handleClick(event) {
    const selectedId = event.target.id;
    console.log(selectedId);
    this.setState({selected: selectedId});
  }

  render() {
    console.log()
    return (
      <nav className="nav navbar-custome">
        <div className="navbar-header">
          <div className="navbar-brand">React Hue</div>
        </div>
        <ul className="nav navbar-nav">
          <li id = "home" className={(this.state.selected === "home"?"active":"")} onClick={this.handleClick.bind(this)} >
            <a href="/">Home</a>
          </li>
          <li id = "converter" className={(this.state.selected === "converter"?"active":"")} onClick={this.handleClick.bind(this)}>
            <a href="/converter">Converter</a>
          </li>
          <li id = "palette" className={(this.state.selected === "palette"?"active":"")} onClick={this.handleClick.bind(this)}>
            <a href="/palette">Palette</a>
          </li>
          <li id = "selector" className={(this.state.selected === "selector"?"active":"")} onClick={this.handleClick.bind(this)}>
            <a href="/selector">Selector</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
