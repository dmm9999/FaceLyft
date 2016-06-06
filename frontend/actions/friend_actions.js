var AppDispatcher = require('./../dispatcher/dispatcher');
var FriendConstants = require('./../constants/friend_constants');

var FriendActions = {

  receiveFriends: function (friends) {
    AppDispatcher.dispatch({
      actionType: FriendConstants.RECEIVE_FRIENDS,
      friends: friends
    });
  }

};

module.exports = FriendActions;
