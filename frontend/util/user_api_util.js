var SessionActions = require('../actions/session_actions');
var ErrorActions = require('../actions/error_actions');

var UserApiUtil = {

  signup: function (formData) {
    $.ajax({
      type: 'POST',
      url: 'api/user',
      dataType: 'json',
      data: {user: formData},
      success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
      },
      error: function (xhr) {
        var errors = xhr.responseJSON;
        ErrorActions.setErrors("signup", errors);
      }
    });
  },

  fetchUser: function (id) {
    debugger
    $.ajax({
      type: 'GET',
      url: 'api/users/' + parseInt(id),
      dataType: 'json',
      success: function (fetchedUser) {
        UserActions.receiveFetchedUser(fetchedUser);
      }
    });
  }
};

module.exports = UserApiUtil;
