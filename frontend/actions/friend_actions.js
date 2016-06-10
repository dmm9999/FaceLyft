var AppDispatcher = require('./../dispatcher/dispatcher');
var FriendConstants = require('./../constants/friend_constants');

var FriendActions = {

  receivePendingFriendship: function (pendingFriendship) {
    AppDispatcher.dispatch({
      actionType : FriendConstants.RECEIVE_PENDING_FRIENDSHIP,
      pendingFriendship : pendingFriendship
    });
  },

  receiveAcceptedFriendship: function (acceptedFriendship) {
    AppDispatcher.dispatch({
      actionType : FriendConstants.RECEIVE_ACCEPTED_FRIENDSHIP,
      acceptedFriendship : acceptedFriendship
    });
  },

  removeFriendship: function (friendship) {
    AppDispatcher.dispatch({
      actionType: FriendConstants.REMOVE_FRIENDSHIP,
      friendship: friendship
    });
  },

  receiveFriendRequests: function (friendRequests) {
    AppDispatcher.dispatch({
      actionType: FriendConstants.RECEIVE_FRIEND_REQUESTS,
      friendRequests : friendRequests
    });
  },

  receiveFriends: function (friends) {
      AppDispatcher.dispatch({
        actionType: FriendConstants.RECEIVE_FRIENDS,
        friends: friends
      });
  }

};

module.exports = FriendActions;
