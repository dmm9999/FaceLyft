var Store = require('flux/utils').Store;
var AppDispatcher = require('./../dispatcher/dispatcher');

var FriendStore = new Store(AppDispatcher);

var _friends = {};

FriendStore.all = function () {
  var result = [];
  for (var i in _friends) {
    result.push(_friends[i]);
  }
  return result;
};

_resetFriends = function (friends) {
  friends.forEach(function (friend) {
    _friends[friend.id] = friend;
  });
};

FriendStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "RECEIVE_FRIENDS":
    _resetFriends(payload.friends);
    FriendStore.__emitChange();
    break;
  }
};



module.exports = FriendStore;
