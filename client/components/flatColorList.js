import React, {Component} from 'react';
import FlatColorCard from './flatColorCard';
import {createContainer} from 'meteor/react-meteor-data';
import {FlatColors} from '../../imports/collections/FlatColors';

class FlatColorList extends Component {
  render(){
    return (
      <div className="flatColorList">
          {this.props.flatColors.map(color => <FlatColorCard key={color._id} color={color} />) }
      </div>
    );
  }
};

export default createContainer(()=> {
  //set up subscribe
  Meteor.subscribe('flatColors');

  return {flatColors: FlatColors.find({}).fetch()};
}, FlatColorList);
