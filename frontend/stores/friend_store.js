var Store = require('flux/utils').Store;
var AppDispatcher = require('./../dispatcher/dispatcher');
var SessionStore = require('./session_store');

var FriendStore = new Store(AppDispatcher);

var _friends = {};
var _pendingFriends = {};


FriendStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "RECEIVE_PENDING_FRIENDSHIP":
      _setPendingFriendship(payload.pendingFriendship);
      FriendStore.__emitChange();
      break;
    case "REMOVE_FRIENDSHIP":
      _removeFriendship();
      FriendStore.__emitChange();
      break;
  }
};

_setPendingFriendship = function (pendingFriendship) {
  _pendingFriends = {};
  _friends = {};
  _pendingFriends[pendingFriendship.id] = pendingFriendship;
};

_removeFriendship = function () {
  _friends = {};
  _pendingFriends = {};
};

FriendStore.friendStatus = function (id) {

  var status = null;

  if (SessionStore.currentUserId() === id ) {
    status = "self";
  }

  for (var requestId in _friends) {
    if (parseInt(_friends[requestId].friender_id) === id ||
        parseInt(_friends[requestId].friended_id) === id) {
      status = "friends";
    }
  }

  for (var pendingRequestId in _pendingFriends) {
    if (parseInt(_pendingFriends[pendingRequestId].friender_id) === id ||
        parseInt(_pendingFriends[pendingRequestId].friended_id) === id) {
      status = "pending";
    }
  }

  return status;
};

module.exports = FriendStore;
