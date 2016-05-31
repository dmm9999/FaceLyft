var UserStore = require('../stores/user_store');
var UserActions = require('../actions/user_actions');

var CurrentUserState = {

  getInitialState: function () {
    return {
      currentUser: UserStore.currentUser(),
      userErrors: UserStore.errors()
    };
  }

};

module.exports = CurrentUserState;
