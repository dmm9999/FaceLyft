var React = require('react');
var SessionStore = require('./../../../stores/session_store');
var SessionApiUtil = require('./../../../util/session_api_util');

var SchoolForm = React.createClass({

  getInitialState: function () {

    var currentUser = SessionStore.currentUser();

    return ( { currentUser : currentUser });

  },

  updateSchool: function (e) {

    e.preventDefault();

    this.setState( { currentUser : { school : e.target.value } } );
  },

  handleSubmit: function (e) {

    e.preventDefault();

    var currentUser = this.state.currentUser;

    SessionApiUtil.updateCurrentUser(currentUser);
  },

  render: function() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.currentUser.school}
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
  }

});

module.exports = SchoolForm;
