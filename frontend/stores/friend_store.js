var Store = require('flux/utils').Store;
var AppDispatcher = require('./../dispatcher/dispatcher');
var SessionStore = require('./session_store');

var FriendStore = new Store(AppDispatcher);

var _friends = {};


FriendStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "RECEIVE_FRIENDSHIP":
      _setFriendship(payload.friendship);
      FriendStore.__emitChange();
      break;
    case "REMOVE_FRIENDSHIP":
      _removeFriendship(payload.friendship);
      FriendStore.__emitChange();
      break;
  }
};

_setFriendship = function (friendship) {
  _friends[friendship.id] = friendship;
};

_removeFriendship = function (friendship) {
  delete _friends[friendship.id];
};

FriendStore.friendStatus = function (id) {

  var friends = SessionStore.currentUser().friends;
  var pending_friends = SessionStore.currentUser().pending_friends;
  var status = null;

  if (SessionStore.currentUserId() === id ) {
    status = "self";
  }

  friends.forEach(function(friend) {
    if (friend.id === id) {
      status = "friends";
    }
  }.bind(this));

  pending_friends.forEach(function(pending_friend) {
    if (pending_friend.id === id) {
      status = "pending";
    }
  }.bind(this));

  return status;
};





module.exports = FriendStore;
