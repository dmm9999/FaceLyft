var React = require('react');
var SessionStore = require('../stores/session_store');
var ErrorStore = require('../stores/error_store');
var SessionApiUtil = require('../util/session_api_util');
var UserApiUtil = require('../util/user_api_util');

var LoginForm = React.createClass({

  getInitialState: function () {
    return { email_address: "", password: "", errors: {} };
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  fieldErrors: function (field) {
    var errors = ErrorStore.formErrors(this.formType());
    if (!errors[field]) {
      return;
    }
    var messages = errors[field].map(function (errorMsg, i) {
      return <li key = {i}>{ errorMsg }</li>;
    });
    return <ul>{ messages }</ul>;
  },

  formType: function () {
    return this.props.location.pathname.slice(1);
  },

  updateErrors: function () {
    var errors =
    this.setState( { errors : ErrorStore.all() } );
  },

  componentDidMount: function () {
    this.errorListener = ErrorStore.addListener(this.updateErrors);
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount: function () {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn: function () {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var formData = {
      email_address: this.state.email_address,
      password: this.state.password
    };

    if (this.props.location.pathname === "/login") {
      SessionApiUtil.login(formData);
    } else {
      UserApiUtil.signup(formData);
    }
  },

  form: function () {

  },

  render: function () {
    return (
      <div>
        One Day I Will Be A Form
      </div>
    );
  }

});

module.exports = LoginForm;
