import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players';

Meteor.methods({
    insertPlayer(player) {
        Players.insert(player);
    },

    updatePlayer(player) {
        console.log("Just before updating player" + player);
        Players.update(player._id, { $set: player });
    }
});
