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

  componentDidMount: function () {
    this.listener = UserStore.addListener(this.handleChange);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  handleChange: function () {
    this.setState( { school : UserStore.retrieveUser().school } );
  },

  updateSchool: function (e) {

    e.preventDefault();

    this.setState( { school : e.target.value } );
  },

  handleSubmit: function (e) {

    e.preventDefault();

    SessionApiUtil.updateCurrentUser({ user : school });
  },

  render: function() {

    if (SessionStore.currentUserId() === this.props.id) {
      return (
        <div>
          <form
            onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.school}
              onChange={this.updateSchool}
              placeholder="Where did you go to school?"
              />
            <input
              type="submit"
              value="Save"
              />
          </form>
        </div>
      );
    } else {
      return (
        <div>
        <input
        type="text"
        value={this.state.school}
        placeholder="Where did you go to school?"
        />
        </div>
      )
    }
  }

});

module.exports = SchoolForm;
