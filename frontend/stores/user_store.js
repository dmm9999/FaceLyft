var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');

var UserStore = new Store(AppDispatcher);

var _user, _errors;

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.LOGIN:
      UserStore.login(payload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.LOGOUT:
      UserStore.logout();
      UserStore.__emitChange();
      break;
    case UserConstants.ERROR:
      UserStore.setErrors(payload.errors);
      UserStore.__emitChange();
      break;
    case UserConstants.RECEIVE_FETCHED_USER:
      UserStore.receiveFetchedUser(payload.fetchedUser);
      UserStore.__emitChange();
      break;
  }
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

UserStore.receiveFetchedUser = function (fetchedUser) {
  _user = fetchedUser;
};

UserStore.retrieveUser = function () {
  return _user;
};

module.exports = UserStore;
