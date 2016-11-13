import React, {Component} from 'react';
import Slider from 'material-ui/Slider';

class SliderPalette extends Component {
  constructor(props){
    super(props);
    this.state = {background: 'rgb(25, 178, 206)', r: 25, g: 187, b:206};
  }

  handleChangeR(event, value){
      event.preventDefault();
      let rVal = value;
      let gVal = this.state.g;
      let bVal = this.state.b;

      var rgbString = "rgb(" + rVal + "," + gVal + "," + bVal + ")";
      this.setState({background: rgbString,
                    r: rVal, g: gVal, b: bVal});
  }

  handleChangeG(event, value){
      event.preventDefault();
      let rVal = this.state.r;
      let gVal = value;
      let bVal = this.state.b;

      var rgbString = "rgb(" + rVal + "," + gVal + "," + bVal + ")";
      this.setState({background: rgbString,
                    r: rVal, g: gVal, b: bVal});
  }

  handleChangeB(event, value){
      event.preventDefault();
      let rVal = this.state.r;
      let gVal = this.state.g;
      let bVal = value;

      var rgbString = "rgb(" + rVal + "," + gVal + "," + bVal + ")";
      this.setState({background: rgbString,
                    r: rVal, g: gVal, b: bVal});
  }

  render(){
    var style = {
      background: this.state.background
    };

    return (
      <div className="sliderPlate" style={style}>
        <div className="reatTimeUpdateSection">
          <div className="realTimeSample">
            <i className="fa fa-calendar-check-o fa-3x" aria-hidden="true"></i>
            <div className="sliderRGBValue">{this.state.background}</div>
          </div>
        </div>
        <div className="sliderGroup" style={style}>
          <Slider name="R" defaultValue={25} min={0} max={255} step={1} onChange={this.handleChangeR.bind(this)} ref="r" />
          <Slider name="G" defaultValue={187} min={0} max={255} step={1} onChange={this.handleChangeG.bind(this)} ref="g" />
          <Slider name="B" defaultValue={206} min={0} max={255} step={1} onChange={this.handleChangeB.bind(this)} ref="b" />
        </div>
      </div>
    );
  }
}

export default SliderPalette;
