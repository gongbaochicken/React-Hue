import {Mongo} from 'meteor/mongo';

export const FlatColors = new Mongo.Collection('flatColors');

FlatColors.allow({
	insert: function(){return true;},
	update: function(){return true;},
});
