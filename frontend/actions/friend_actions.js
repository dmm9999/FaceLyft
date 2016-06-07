var AppDispatcher = require('./../dispatcher/dispatcher');
var FriendConstants = require('./../constants/friend_constants');

var FriendActions = {

  receiveFriendship: function (friendship) {
    AppDispatcher.dispatch({
      actionType : FriendConstants.RECEIVE_FRIENDSHIP,
      friendship : friendship
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
