import React, {Component}  from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Tabs, Tab} from 'material-ui/Tabs';
import FlatColorList from './flatColorList';
import MaterialColorList from './materialColorList';

injectTapEventPlugin();

class ColorTabComponent extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Tabs>
        <Tab label="Flat UI" >
          <div className="colorBorad">
            <FlatColorList />
          </div>
        </Tab>
        <Tab label="Mateiral UI" >
          <div>
            <MaterialColorList />
          </div>
        </Tab>
        <Tab label="Industrial UI" >
          <div>
            <p>
              This is under development.
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}

export default ColorTabComponent;
