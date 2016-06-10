var React = require('react');
var SessionStore = require('./../../../stores/session_store');
var SessionApiUtil = require('./../../../util/session_api_util');
var UserApiUtil = require('./../../../util/user_api_util');
var UserStore = require('./../../../stores/user_store');

var SchoolForm = React.createClass({

  getInitialState: function () {

    if (SessionStore.currentUserId() === this.props.id) {
      return( { school : SessionStore.currentUser().school } ) ;
    } else {
      UserApiUtil.fetchUser(this.props.id);
      return( { school : ""} );
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
    this.setState( { school : UserStore.retrieveUser().school || ""} );
  },

  updateSchool: function (e) {

    e.preventDefault();

    this.setState( { school : e.target.value } );
  },

  handleSubmit: function (e) {

    e.preventDefault();

    SessionApiUtil.updateCurrentUser({ school : this.state.school });

    this.toggleEditing();
  },

  render: function () {

    if (SessionStore.currentUserId() !== this.props.id) {

      return (
        <div className="group">
          <div
          className="school-form-value">Hometown: {this.state.school}</div>
        </div>
      )
    } else if (this.state.editing) {
      return (
        <form className="group"
          onSubmit={this.handleSubmit}>
          <input
          type="text"
          className="school-form-input"
          value={this.state.school}
          onChange={this.updateSchool}/>
          <input
          type="submit"
          className="school-form-save"
          value="Save"/>
        </form>
      )
    } else if (this.state.school === "") {
            return (
              <div className="group">
                <div
                className="school-form-value">What school did you attend?</div>
                <button
                className="school-form-edit"
                onClick={this.toggleEditing}>Edit</button>
              </div>
            )
      } else {

        return (
          <div className="group">
            <div
            className="school-form-value">School: {this.state.school}</div>
            <button
            className="school-form-edit"
            onClick={this.toggleEditing}>Edit</button>
          </div>
        )
      }
    }
});

module.exports = SchoolForm;
