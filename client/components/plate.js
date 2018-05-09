import React, {Component} from 'react';

class Plate extends Component {
  constructor(props){
    super(props);
    this.state = {background: '#DB932A', outputRgb: 'rgb(219, 147, 42)'};
  }

  handleHexRGB(event){
      event.preventDefault();
      let value = this.refs.hex.value;

      //For both '#ffffff' and 'ffffff' work
      if(value.length >0 && value.slice(0, 1) != '#'){
        value = "#"+value;
      }

      //hex start with # is invalid, if length < 4;
      //hex start without # is invalid, if length < 3.
      if(value.slice(0, 1) == '#' && value.length < 4
        ||  value.length < 3){
        this.setState({background: value,
                      outputRgb: ""});
      }else{
        //conversion from hex to rgb
        var rgb = hexToRgb(value);
        if(rgb){
          var rgbString = "RGB(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
        }
        console.log(rgbString);
        this.setState({background: value,
                      outputRgb: rgbString});
      }
  }

  render(){
    let style = {
      background: this.state.background
    };

    return (
      <div className="plate" style={style}>
        <div className="inputSection">
          <input type="text" name="HEX" id="hexInput" value={this.state.background} onChange={this.handleHexRGB.bind(this)} ref="hex" placeholder="HEX #" autoComplete="off" autoCorrect="off" />
          <input type="text" name="rgb" id="rgbInput" value={this.state.outputRgb} readOnly autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
        </div>
      </div>
    );
  }
}

export default Plate;
