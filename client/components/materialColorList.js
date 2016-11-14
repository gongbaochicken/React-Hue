import React, {Component} from 'react';
import MaterialColorCard from './materialColorCard';
import {createContainer} from 'meteor/react-meteor-data';
import {MaterialColors} from '../../imports/collections/MaterialColors';

class MaterialColorList extends Component {
  render(){
    return (
      <div className="materialColorList">
          {this.props.materialColors.map(color => <MaterialColorCard key={color._id} color={color} />) }
      </div>
    );
  }
};

export default createContainer(()=> {
  //set up subscribe
  Meteor.subscribe('materialColors');

  return {materialColors: MaterialColors.find({}).fetch()};
}, MaterialColorList);
