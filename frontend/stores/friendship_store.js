var Store = require('flux/utils').Store;
var AppDispatcher = require('./../dispatcher/dispatcher');

var FriendshipStore = new Store(AppDispatcher);




module.exports = FriendshipStore;
