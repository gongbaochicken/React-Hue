import React, {Component} from 'react';

class ColorCard extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.color.hex);
    var style = {
      background: this.props.color.hex
    };
    return (
      <div className="colorCard">
        <img className="img-responsive" style={style}/>
        <div className="textblock">
          <div className="colorName">{this.props.color.name}</div>
          <div className="colorHex">{this.props.color.hex}</div>
          <div className="colorClick">{this.props.color.click}</div>
        </div>
      </div>
    );
  }
};

export default ColorCard;
