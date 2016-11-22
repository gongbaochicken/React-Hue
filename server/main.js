import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import {FlatColors} from '../imports/collections/FlatColors';
import {MaterialColors} from '../imports/collections/MaterialColors';

Meteor.startup(() => {
  const numberRecords = FlatColors.find({}).count();
  if(!numberRecords) {
    _.forEach(FlatColors, function(color){
      FlatColors.insert({
        name: color.name,
        hex: color.hex,
        click: 0
      });
    });
    _.forEach(MaterialColors, function(color){
      MaterialColors.insert({
        name: color.name,
        hex: color.hex,
        click: 0
      });
    });
  }

  Meteor.publish('flatColors', function() {
    return FlatColors.find({});
  });
  Meteor.publish('materialColors', function() {
    return MaterialColors.find({});
  });

});
