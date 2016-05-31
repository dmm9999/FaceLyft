var AppDispatcher = require('../dispatcher/dispatcher');

var UserApiUtil = {

  post: function (options) {
    $.ajax({
      type: 'POST',
      url: options.url,
      data: {user: options.user},
      success: options.success,
      error: options.error
    });
  },

  logout: function (success, error) {
    $.ajax({
      type: 'DELETE',
      url: 'api/session',
      success: success,
      error: error
    });
  },

  fetchCurrentUser: function (success, error) {
    $.ajax({
      type: 'GET',
      url: 'api/session',
      success: success,
      error: error
    });
  }
};

module.exports = UserApiUtil;
