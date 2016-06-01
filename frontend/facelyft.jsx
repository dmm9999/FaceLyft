var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var UserApiUtil = require('./util/user_api_util');

var LoginForm = require('./components/login_form');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header><h1>FaceLyft</h1></header>
        {this.props.children}
      </div>
    );
  }
});

var Router = (
  <Router history={hashHistory}>
    <Route path="/login" component={LoginForm}/>
    <Route path="/" component={App}/>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    Router,
    document.getElementById('content')
  )
});
