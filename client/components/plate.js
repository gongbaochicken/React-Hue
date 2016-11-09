import React, {Component} from 'react';

class Plate extends Component {
  constructor(props){
    super(props);
    this.state = {background: '', outputRgb: ''};
  }

  handleHexRGB(event){
      event.preventDefault();
      let value = this.refs.hex.value;

      var rgb = hexToRgb(this.state.background);
      //console.log(rgb);
      if(rgb){
        var rgbString = "RGB(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
      }

      // if(value.slice(0) == '#'){
      //
      // }else if(value != ''){
      //   value = "#"+value;
      // }
      // console.log(value);
      this.setState({background: value,
                    outputRgb: rgbString});
  }

  // handleRGBHex(event){
  //   event.preventDefault();
  //   let value = this.refs.rgb.value;
  //
  //   //rgb(0,0,0)
  //   if(value.length > 10){
  //     const str1 = value.substring(4,value.length - 1);
  //     console.log(str1);
  //     var partsOfStr = str1.split(',');
  //     if(partsOfStr.length == 3){
  //       var r = parseInt(partsOfStr[0]);
  //       var g = parseInt(partsOfStr[1]);
  //       var b = parseInt(partsOfStr[2]);
  //       var hexValue = rgbToHex(r,g,b);
  //       console.log(hexValue);
  //       this.setState({background: value,
  //                     outputRgb: value,
  //                     outputHex: hexValue});
  //     }
  //   }else{
  //     this.setState({background: '',
  //                   outputRgb: '',
  //                   outputHex: ''});
  //   }
  // }

  render(){
    var style = {
      background: this.state.background
    };

    return (
      <div className="plate" style={style}>
        <div className="inputSection">
          <input type="text" name="HEX" id="hexInput" onChange={this.handleHexRGB.bind(this)} ref="hex" placeholder="HEX #" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
          <input type="text" name="rgb" id="rgbInput" value={this.state.outputRgb} placeholder="rgb" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
        </div>
      </div>
    );
  }
}

export default Plate;
