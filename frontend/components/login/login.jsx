var React = require('react');
var LoginForm = require('./login_form');
var SignupForm = require('./signup_form');
var ErrorStore = require('./../../stores/error_store');
var SessionStore = require('./../../stores/session_store');

var Login = React.createClass({

  getInitialState: function () {
    return (
      { errors: {} }
    );
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

  render: function () {

    var modalState;

    if (Object.keys(this.state.errors).length !== 0) {
      modalState = "visible-error-modal";
    } else {
      modalState = "hidden-error-modal";
    }

    return (
      <div>
        <div>
          <LoginForm/>
          <SignupForm/>
        </div>
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

module.exports = Login;
