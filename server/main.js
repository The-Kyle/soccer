import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players';
import './methods';

Meteor.startup(() => {
  Meteor.publish('players', function() {
    return Players.find({});
  })
});
