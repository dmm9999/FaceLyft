var SessionActions = require('../actions/session_actions');
var ErrorActions = require('../actions/error_actions');

var UserApiUtil = {

  signup: function (formData) {
    $.ajax({
      type: 'POST',
      url: 'api/users',
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
};

module.exports = UserApiUtil;
