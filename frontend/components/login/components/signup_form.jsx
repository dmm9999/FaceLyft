var React = require('react');
var SessionStore = require('../../../stores/session_store');
var ErrorStore = require('../../../stores/error_store');
var UserApiUtil = require('../../../util/user_api_util');

var SignupForm = React.createClass({

  getInitialState: function () {
    return ( { emailAddress: "", password: "", errors: {} } );
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
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
    this.setState( { errors : ErrorStore.all() } );
    setTimeout(function () {
        this.setState({errors: {}});
    }.bind(this), 2000);
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

    UserApiUtil.signup(formData);
  },

  render: function () {

    return (
      <main className="signup">
        <div className="signup-content group">

          <ul className="splash">
            <li>
              Connect with friends and the world around you on FaceLyft
            </li>
          </ul>

          <form onSubmit={this.handleSubmit}>

            <ul className="signup-box">

              <li>
                <h1 className="signup-welcome">
                  Sign Up
                </h1>
              </li>

              <li>
                <input
                  type="text"
                  className="signup-email"
                  onChange={this.emailAddressChange}
                  placeholder="Enter your email address"
                  value={this.state.emailAddress}/>
              </li>

              <li>
                <input
                  type="password"
                  className="signup-password"
                  onChange={this.passwordChange}
                  placeholder="New password"
                  value={this.state.password}/>
              </li>

              <li>
                <input
                  type="submit"
                  className="signup-button"
                  value="Sign Up"/>
              </li>

            </ul>

          </form>

        </div>
      </main>

    );
  }

});

module.exports = SignupForm;
