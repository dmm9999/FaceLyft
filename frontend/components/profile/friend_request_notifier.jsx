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

  handleDelete: function (e) {

    debugger

    e.preventDefault();

    FriendApiUtil.deleteFriendshipById(e.target.value, SessionStore.currentUserId());

  },

  handleConfirm: function (e) {

    e.preventDefault();

    FriendApiUtil.acceptFriendship(e.target.value);

  },

  render: function () {

    if (this.state.friendRequests.length) {

      var friendRequests = this.state.friendRequests.map(function(friendRequest) {
        return (
          <li key={friendRequest.id}
              className="friend-request-list-item group">
            <img className="friend-request-thumb" src={friendRequest.thumb}/>
            <div className="friend-request-text">{friendRequest.name}</div>
            <button
            className="friend-request-delete"
            onClick={this.handleDelete}
            value={friendRequest.id}>Delete Request</button>
            <button
            className="friend-request-confirm"
            onClick={this.handleConfirm}
            value={friendRequest.id}>Confirm</button>
          </li>
        );
      });

      return (
        <div className="friend-requests">
          <div className="friend-request-counter-container">
            <img src={friendRequestIcon} className="friend-request-notifier-icon"/>
            <div className="friend-request-counter">{this.state.friendRequests.length}</div>
          </div>
          <ul className="friend-request-list">
            {friendRequests}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="friend-requests">
          <img src={friendRequestIcon} className="friend-request-notifier-icon"/>
        </div>
      );
    }

  }

});

module.exports = FriendRequestNotifier;
