var React = require('react');

var SessionStore = require('./../../../stores/session_store');
var SessionApiUtil = require('./../../../util/session_api_util');
var UserStore = require('./../../../stores/user_store');
var UserApiUtil = require('./../../../util/user_api_util');

var BirthdayForm = React.createClass({

  getInitialState: function () {
    if (SessionStore.currentUserId() === this.props.id) {
      return( { birthday: SessionStore.currentUser().birthday,
                editing: false } );
    } else {
      UserApiUtil.fetchUser(this.props.id);
      return ( { birthday : "", editing: false } );
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
    this.setState( { birthday : UserStore.retrieveUser().birthday || ""} );
  },

  updateBirthday: function (e) {

    e.preventDefault();

    this.setState( { birthday : e.target.value } );

  },

  handleSubmit: function (e) {

    e.preventDefault();

    var formData = {
      birthday : this.state.birthday
    };

    SessionApiUtil.updateCurrentUser(formData);

    this.toggleEditing();

  },

  render: function () {

    if (SessionStore.currentUserId() !== this.props.id) {

      return (
        <div className="group">
          <div
          className="birthday-form-value">Birthday: {this.state.birthday}</div>
        </div>
      )
    } else if (this.state.editing) {
      return (
        <form className="group"
          onSubmit={this.handleSubmit}>
          <input
          type="date"
          className="birthday-form-input"
          value={this.state.birthday}
          onChange={this.updateBirthday}/>
          <input
          type="submit"
          className="birthday-form-save"
          value="Save"/>
        </form>
      )
    } else if (this.state.birthday === "") {
            return (
              <div className="group">
                <div
                className="birthday-form-value">What's your birthday?</div>
                <button
                className="birthday-form-edit"
                onClick={this.toggleEditing}>Edit</button>
              </div>
            )
      } else {

        return (
          <div className="group">
            <div
            className="birthday-form-value">Birthday: {this.state.birthday}</div>
            <button
            className="birthday-form-edit"
            onClick={this.toggleEditing}>Edit</button>
          </div>
        )
      }
    }
  });

module.exports = BirthdayForm;
