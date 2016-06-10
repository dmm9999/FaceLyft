var React = require('react');

var SessionStore = require('./../../../stores/session_store');
var SessionApiUtil = require('./../../../util/session_api_util');
var UserStore = require('./../../../stores/user_store');
var UserApiUtil = require('./../../../util/user_api_util');

var PhoneNumberForm = React.createClass({

  getInitialState: function () {
    if (SessionStore.currentUserId() === this.props.id) {
      return( { phoneNumber: SessionStore.currentUser().phone_number,
                editing: false } );
    } else {
      UserApiUtil.fetchUser(this.props.id);
      return ( { phoneNumber : "", editing: false } );
    }
  },

  toggleEditing: function (e) {

    if (this.state.editing) {
      this.setState( { editing: false } );
    } else {
    this.setState( { editing: true } );
    }
  },

  componentDidMount: function () {
    this.listener = UserStore.addListener(this.handleChange);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  handleChange: function () {
    this.setState( { phoneNumber : UserStore.retrieveUser().phone_number || ""} );
  },

  updatePhoneNumber: function (e) {

    e.preventDefault();

    this.setState( { phoneNumber : e.target.value } );

  },

  handleSubmit: function (e) {

    e.preventDefault();

    var formData = {
      phone_number : this.state.phoneNumber
    };

    SessionApiUtil.updateCurrentUser(formData);

    this.toggleEditing();

  },

  render: function () {

    if (SessionStore.currentUserId() !== this.props.id) {

      return (
        <div className="group">
          <div
          className="phone-number-form-value">Phone Number: {this.state.phoneNumber}</div>
        </div>
      )
    } else if (this.state.editing) {
      return (
        <form className="group"
          onSubmit={this.handleSubmit}>
          <input
          type="tel"
          className="phone-number-form-input"
          value={this.state.phoneNumber}
          onChange={this.updatePhoneNumber}/>
          <input
          type="submit"
          className="phone-number-form-save"
          value="Save"/>
        </form>
      )
    } else if (this.state.phoneNumber === "") {
            return (
              <div className="group">
                <div
                className="phone-number-form-value">What's your phone number?</div>
                <button
                className="phone-number-form-edit"
                onClick={this.toggleEditing}>Edit</button>
              </div>
            )
      } else {

        return (
          <div className="group">
            <div
            className="phone-number-form-value">Phone Number: {this.state.phoneNumber}</div>
            <button
            className="phone-number-form-edit"
            onClick={this.toggleEditing}>Edit</button>
          </div>
        )
      }
    }
  });

module.exports = PhoneNumberForm;
