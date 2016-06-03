var SessionConstants = require('../constants/session_constants');
var SessionStore = require('../stores/session_store');
var AppDispatcher = require('../dispatcher/dispatcher');

var SessionActions = {

  receiveCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
  },

  removeCurrentUser: function () {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
    });
  },

  updateCurrentUser: function (updatedUser) {
    debugger
    AppDispatcher.dispatch({
      actionType: SessionConstants.UPDATE_CURRENT_USER,
      updatedUser: updatedUser
    });
  },

};

module.exports = SessionActions;
