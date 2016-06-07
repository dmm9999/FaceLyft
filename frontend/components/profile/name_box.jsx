var React = require('react');

var SessionStore = require('./../../stores/session_store');
var UserStore = require('./../../stores/user_store');
var UserApiUtil = require('./../../util/user_api_util');

var NameBox = React.createClass({

  getInitialState: function () {

    if (SessionStore.currentUserId() === this.props.id) {
      return ( { name : SessionStore.currentUser().name } );
    } else {
      UserApiUtil.fetchUser(this.props.id);
      return ( { name : "" } );
    }
  },

  componentDidMount: function () {
    this.listener = UserStore.addListener(this.handleChange);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  handleChange: function () {
    this.setState( { name : UserStore.retrieveUser().name } );
  },

  render: function () {
    return (
      <title className="name-box">{this.state.name}</title>
    );
  }

});

module.exports = NameBox;
