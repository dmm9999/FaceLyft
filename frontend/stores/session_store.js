var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var SessionConstants = require('../constants/session_constants');

var SessionStore = new Store(AppDispatcher);

var _currentUser = {},
  _currentUserHasBeenFetched = false;

function _login(currentUser) {
  _currentUser = currentUser;
  _currentUserHasBeenFetched = true;
}

function _logout () {
  _currentUser = {};
  _currentUserHasBeenFetched = false;
}

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      break;
    case SessionConstants.LOGOUT:
      _logout();
      break;
  }
  SessionStore.__emitChange();
};

SessionStore.currentUser = function () {
  return $.extend({}, _currentUser);
};

SessionStore.currentUserHasBeenFetched = function () {
  return _currentUserHasBeenFetched;
};

SessionStore.isUserLoggedIn = function () {
  return !!_currentUser.id;
};

module.exports = SessionStore;
