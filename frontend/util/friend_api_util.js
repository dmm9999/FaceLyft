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
      url: 'api/user/friend_requests',
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

  deleteFriendship: function (currentUserId, userProfileId) {
    $.ajax({
      type: 'DELETE',
      url: 'api/users/' + currentUserId + '/friends',
      dataType: 'json',
      data: {userProfileId : userProfileId},
      success: function (friendship) {
        FriendActions.removeFriendship(friendship);
      }
    });
  },

};

module.exports = FriendApiUtil;
