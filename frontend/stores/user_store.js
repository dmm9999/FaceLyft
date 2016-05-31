var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils');
var UserConstants = require('../constants/user_constants');

var UserStore = new Store();

var _currentUser, _errors;

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.LOGIN:
      UserStore.login(payload.user);
      break;
    case UserConstants.LOGOUT:
      UserStore.logout();
      break;
    case UserConstants.ERROR:
      UserStore.setErrors(payload.errors);
      break;
  }
  UserStore.__emitChange();
};

UserStore.login = function (user) {
  _currentUser = user;
  _errors = null;
};

UserStore.logout = function () {
  _currentUser = null;
  _errors = null;
};

UserStore.setErrors = function (errors) {
  _errors = errors;
};

module.exports = UserStore;
