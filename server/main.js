import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import {FlatColors} from '../imports/collections/FlatColors';
import {MaterialColors} from '../imports/collections/MaterialColors';
import MaterialColorSample from './data/materialColors';
import FlatColorSample from './data/flatColors';

Meteor.startup(() => {
  const numberRecords = FlatColors.find({}).count();
  if(numberRecords == 0) {
    _.forEach(FlatColorSample, function(color){
      FlatColors.insert({
        name: color.name,
        hex: color.hex,
        click: 0
      });
    });
    _.forEach(MaterialColorSample, function(color){
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
