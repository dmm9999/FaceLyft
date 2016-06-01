var React = require('react');
var SessionStore = require('../stores/session_store');
var ErrorStore = require('../stores/error_store');
var SessionApiUtil = require('../util/session_api_util');
var UserApiUtil = require('../util/user_api_util');

function overlay() {
	el = document.getElementById("overlay");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

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
    this.setState( { errors : ErrorStore.all() } );
    setTimeout(function () {
        this.setState({errors: {}});
    }.bind(this), 2000);
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

    var modalState;

    console.log(this.state.errors);

    if (Object.keys(this.state.errors).length !== 0) {
      modalState = "visible-error-modal";
    } else {
      modalState = "hidden-error-modal";
    }

    return (
      <div>
        <nav className="group">

          <nav className="loginbar">

            <h1 className="logo">
                FaceLyft
            </h1>

            <form onSubmit={this.handleSubmit} className="login">

              <ul>

                <li>
                  <label for="email">Email Address</label>
                    <input
                      className="email"
                      id="email"
                      type="text"
                      value={this.state.emailAddress}
                      onChange={this.emailAddressChange}/>
                </li>

                <li>
                  <label for="password">Password</label>
                    <input
                      className="password"
                      id="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.passwordChange}/>
                </li>

                <li>
                  <label for="button"> </label>
                  <input
                    className="button"
                    id="button"
                    type="submit"
                    value="Log In"/>
                </li>

              </ul>
            </form>
          </nav>

        </nav>

        <div className={modalState}>
            <div>
              <p>
                {this.fieldErrors("base")}
                {this.fieldErrors("emailAddress")}
                {this.fieldErrors("password")}
              </p>
            </div>
        </div>

      </div>
    );
  }

});

module.exports = LoginForm;
