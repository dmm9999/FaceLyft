var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var SessionApiUtil = require('./util/session_api_util');
var UserApiUtil = require('./util/user_api_util');
var SessionStore = require('./stores/session_store');

var Login = require('./components/login/login');
var Profile = require('./components/profile/profile');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header><h1>FaceLyft</h1></header>
        <input type="submit" value="Log Out" onClick={SessionApiUtil.logout}/>
        {this.props.children}
      </div>
    );
  }
});

var Router = (
  <Router history={hashHistory}>
    <Route path="/login" onEnter={_ensureNotLoggedIn} component={Login}/>
    <Route path="/" onEnter={_ensureLoggedIn} component={App}>
      <Route path="/profile" component={Profile}/>
    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace, asyncDoneCallback) {
  if (SessionStore.currentUserHasBeenFetched()) {
    redirectIfNotLoggedIn();
  } else {
    SessionApiUtil.fetchCurrentUser(redirectIfNotLoggedIn);
  }

  function redirectIfNotLoggedIn () {
    if (!SessionStore.isUserLoggedIn()) {
      replace('/login');
    }
    asyncDoneCallback();
  }
}

function _ensureNotLoggedIn(nextState, replace, asyncDoneCallback) {
  if (SessionStore.currentUserHasBeenFetched()) {
    redirectIfLoggedIn();
  } else {
    SessionApiUtil.fetchCurrentUser(redirectIfLoggedIn);
  }

  function redirectIfLoggedIn () {
    if (SessionStore.isUserLoggedIn()) {
      replace('/profile');
    }
    asyncDoneCallback();
  }
}



document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    Router,
    document.getElementById('content')
  )
});
