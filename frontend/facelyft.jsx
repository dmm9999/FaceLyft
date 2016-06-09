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
var Feed = require('./components/feed/feed');

var App = React.createClass({

  contextTypes : {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedOut);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },

  redirectIfLoggedOut: function () {
    if (!SessionStore.isUserLoggedIn()) {
      this.context.router.push('/login');
    }
  },

  render: function () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var Router = (
  <Router history={hashHistory}>
    <Route path="/login" onEnter={_ensureNotLoggedIn} component={Login}/>
    <Route path="/" onEnter={_ensureLoggedIn} component={App}>
      <IndexRoute component={Feed}/>
      <Route path="/users/:id" component={Profile}/>
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
      replace('/');
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
