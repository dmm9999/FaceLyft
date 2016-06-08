var React = require('react');
var SessionStore = require('./../../../stores/session_store');
var SessionApiUtil = require('./../../../util/session_api_util');
var UserApiUtil = require('./../../../util/user_api_util');
var UserStore = require('./../../../stores/user_store');

var HometownForm = React.createClass({

  getInitialState: function () {

    if (SessionStore.currentUserId() === this.props.id) {
      return( { hometown : SessionStore.currentUser().hometown } ) ;
    } else {
      UserApiUtil.fetchUser(this.props.id);
      return( { hometown : ""} );
    }
  },

  componentDidMount: function () {
    this.listener = UserStore.addListener(this.handleChange);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  handleChange: function () {
    this.setState( { hometown : UserStore.retrieveUser().hometown || "" } );
  },

  updateHometown: function (e) {

    e.preventDefault();

    this.setState( { hometown: e.target.value } );
  },

  handleSubmit: function (e) {

    e.preventDefault();

    SessionApiUtil.updateCurrentUser( { user : hometown });
  },

  render: function() {

    if (SessionStore.currentUserId() === this.props.id) {
      return (
        <div>
          <form
            onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.hometown}
              onChange={this.updateHometown}
              placeholder="What's your hometown?"
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
              value={this.state.hometown}
              onChange={this.updateHometown}
              placeholder="What's your hometown?"
              />
        </div>
      );
    }

  }

});

module.exports = HometownForm;
