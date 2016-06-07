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

  createFriendship: function (frienderid, friended_id) {
    $.ajax({
      type: 'POST',
      url: 'api/users/' + frienderid + '/friends',
      dataType: 'json',
      data: {friended_id : friended_id},
      success: function (friendship) {
        FriendActions.receiveFriendship(friendship);
      }
    });
  },

  deleteFriendship: function (currentUserId, userProfileId) {
    $.ajax({
      type: 'POST',
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
