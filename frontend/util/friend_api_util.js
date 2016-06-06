var FriendActions = require('./../actions/friend_actions');

var FriendApiUtil = {

  fetchFriends: function (id) {
    $.ajax({
      type: 'GET',
      url: 'api/users/' + id + '/friends',
      dataType: 'json',
      success: function (friends) {
        FriendActions.receiveFriends(friends);
      }
    });

  }

};

module.exports = FriendApiUtil;
