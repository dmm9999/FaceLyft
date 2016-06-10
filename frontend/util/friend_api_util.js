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
  },

  fetchFriendRequests: function () {
    $.ajax({
      type: 'GET',
      url: 'api/user/friendships',
      dataType: 'json',
      success: function (friendRequests) {
        FriendActions.receiveFriendRequests(friendRequests);
      }
    });
  },

  createPendingFriendship: function (friender_id, friended_id) {
    $.ajax({
      type: 'POST',
      url: 'api/users/' + friender_id + '/friends',
      dataType: 'json',
      data: {friended_id : friended_id},
      success: function (pendingFriendship) {
        FriendActions.receivePendingFriendship(pendingFriendship);
      }
    });
  },

  deleteFriendship: function (id) {
    $.ajax({
      type: 'DELETE',
      url: 'api/friendships/' + id,
      dataType: 'json',
      data: {id : id},
      success: function (friendship) {
        FriendActions.removeFriendship(friendship);
      }
    });
  },

  acceptFriendship: function () {

  }
};

module.exports = FriendApiUtil;
