import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import Plate from './plate';

class Converter extends Component {
  constructor(props){
    super(props);

    this.state = {background: ''};
  }

  render(){
    let style = {
      background: this.state.background
    };
    return (

      <div className="plateApp">
        <Plate />
      </div>
    );
  }
}

export default Converter;
