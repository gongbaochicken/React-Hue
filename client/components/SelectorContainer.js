import React, {Component}  from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
//import FlatColorList from './flatColorList';
//import MaterialColorList from './materialColorList';


class SelectorContainer extends Component {
  constructor(props){
    super(props);
    this.state = {value1: "abc", value2: "cba"};
  }

  handleA(event){
    this.setState({
     value1: event.target.value,
     value2: event.target.value+"CCC"
    });

  }
  handleB(event){
    this.setState({
     value1: event.target.value+"BB",
     value2: event.target.value
    });
  }

  render(){
    return (
      <div className="row">
        <div className="leftSide col-8">
          <div className="row reactLiveDemo">

          </div>
          <div className="row colorScrollList">
          </div>
        </div>
        <div className="cssBoard col-4">
          <div>AA</div>
        </div>
      </div>
    );
  }
}

export default SelectorContainer;
