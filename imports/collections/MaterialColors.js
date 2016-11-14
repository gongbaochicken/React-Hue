import {Mongo} from 'meteor/mongo';

export const MaterialColors = new Mongo.Collection('materialColors');

MaterialColors.allow({
	insert: function(){return true;},
	update: function(){return true;},
});
