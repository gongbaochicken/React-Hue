import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import Plate from './plate';
// console.log('Hex color #03F is rgb:');
// console.log(hexToRgb('#03F'));
// console.log('Hex color #0033F0 is rgb:');
// console.log(hexToRgb('#0033F0'));

// export default ()=> {
//   return (
//     <div className="plateApp">
//       <div>React Color</div>
//       <Plate />
//     </div>
//   );
// };

class App extends Component {
  constructor(props){
    super(props);

    this.state = {background: ''};
  }

  render(){
    var style = {
      background: this.state.background
    };
    return (
      <div className="plateApp">
        <Plate />
      </div>
    );
  }
}

  export default App;
