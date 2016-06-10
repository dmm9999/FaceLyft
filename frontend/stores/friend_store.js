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
    case "RECEIVE_FRIEND_REQUESTS":
      _receiveFriendRequests(payload.friendRequests);
      FriendStore.__emitChange();
      break;
    case "RECEIVE_FRIENDS":
      _receiveFriends(payload.friends);
      FriendStore.__emitChange();
      break;
    case "RECEIVE_ACCEPTED_FRIENDSHIP":
      _setAcceptedFriendship(payload.acceptedFriendship);
      FriendStore.__emitChange();
      break;
  }
};

_setPendingFriendship = function (pendingFriendship) {
  _pendingFriends = {};
  _friends = {};
  _pendingFriends[pendingFriendship.id] = pendingFriendship;
};

_setAcceptedFriendship = function (acceptFriendship) {
  _pendingFriends = {};
  _friends = {};
  _friends[acceptFriendship.id] = acceptFriendship;
};

_removeFriendship = function () {
  _friends = {};
  _pendingFriends = {};
};

_receiveFriendRequests = function (friendRequests) {
  _pendingFriends = {};
  friendRequests.forEach(function(friendRequest) {
    _pendingFriends[friendRequest.id] = friendRequest;
  });
};

_receiveFriends = function (friends) {

  _friends = {};
  friends.forEach(function(friend) {
    _friends[friend.id] = friend;
  });
};

FriendStore.friendStatus = function (id) {

  var status = null;

  if (SessionStore.currentUserId() === id ) {
    status = "self";
  }

  for (var requestId in _friends) {
    if (parseInt(_friends[parseInt(requestId)].id) === id ||
        parseInt(_friends[parseInt(requestId)].id) === id) {
      status = "friends";
    }
  }

  for (var pendingRequestId in _pendingFriends) {
    if (parseInt(_pendingFriends[parseInt(pendingRequestId)].friender_id) === id ||
        parseInt(_pendingFriends[parseInt(pendingRequestId)].friended_id) === id) {
      status = "pending";
    }
  }

  return status;
};

FriendStore.friendRequests = function (id) {

  var requests = [];

  Object.keys(_pendingFriends).forEach(function(requestId) {
    if (parseInt(_pendingFriends[requestId].friended_id) === id) {
      requests.push(_pendingFriends[requestId]);
    }
  });

  return requests;

};

module.exports = FriendStore;
