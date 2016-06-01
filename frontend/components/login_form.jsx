var React = require('react');
var SessionStore = require('../stores/session_store');
var ErrorStore = require('../stores/error_store');
var SessionApiUtil = require('../util/session_api_util');
var UserApiUtil = require('../util/user_api_util');

var LoginForm = React.createClass({

  getInitialState: function () {
    return { emailAddress: "", password: "", errors: {} };
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

  emailAddressChange: function (e) {
    var newEmailAddress = e.target.value;
    this.setState( { emailAddress: newEmailAddress } );
  },

  passwordChange: function (e) {
    var newPassword = e.target.value;
    this.setState( { password: newPassword } );
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var formData = {
      email_address: this.state.emailAddress,
      password: this.state.password
    };

    if (this.props.location.pathname === "/login") {
      SessionApiUtil.login(formData);
    } else {
      UserApiUtil.signup(formData);
    }
  },

  render: function () {


    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Email Address
            <input
              type="text"
              value={this.state.emailAddress}
              onChange={this.emailAddressChange}/>
          </label>
          <label>Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.passwordChange}/>
            <input type="submit" value="Log In"/>
          </label>
        </form>
      </div>
    );
  }

});

module.exports = LoginForm;
