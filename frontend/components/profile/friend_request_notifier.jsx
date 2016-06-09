var React = require('react');

var FriendStore = require('./../../stores/friend_store');
var FriendApiUtil = require('./../../util/friend_api_util');
var SessionStore = require('./../../stores/session_store');

var FriendRequestNotifier = React.createClass({

  getInitialState: function () {

    return ( { friendRequests : [] } );

  },

  componentDidMount: function () {
    this.listener = FriendStore.addListener(this.handleChange);
    FriendApiUtil.fetchFriendRequests();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  handleChange: function () {
    this.setState( { friendRequests : FriendStore.friendRequests(SessionStore.currentUserId()) } );
  },

  render: function () {

    if (this.state.friendRequests.length) {

      var friendRequests = this.state.friendRequests.map(function(friendRequest) {
        return (
          <li key={friendRequest.id}>
            <div className="friend-request-text">{friendRequest.friender_user} wants to be your friend!</div>
            <button className="friend-request-accept">Accept</button>
            <button className="friend-request-deny">Deny</button>
          </li>
        );
      });

      return (
        <div className="friend-requests">
          <img src={friendRequestIcon} className="friend-request-icon"/>
          <div className="friend-request-counter">{this.state.friendRequests.length}</div>
          <ul className="friend-request-list">
            {friendRequests}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="friend-requests">
          <img src={friendRequestIcon} className="friend-request-icon"/>
        </div>
      );
    }

  }

});

module.exports = FriendRequestNotifier;
