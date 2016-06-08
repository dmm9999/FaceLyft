var AppDispatcher = require('./../dispatcher/dispatcher');
var FriendConstants = require('./../constants/friend_constants');

var FriendActions = {

  receivePendingFriendship: function (pendingFriendship) {
    AppDispatcher.dispatch({
      actionType : FriendConstants.RECEIVE_PENDING_FRIENDSHIP,
      pendingFriendship : pendingFriendship
    });
  },

  removeFriendship: function (friendship) {
    AppDispatcher.dispatch({
      actionType: FriendConstants.REMOVE_FRIENDSHIP,
      friendship: friendship
    });
  }

};

module.exports = FriendActions;
