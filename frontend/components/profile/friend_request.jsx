var React = require('react');

var FriendApiUtil = require('../../util/friend_api_util');
var FriendStore = require('../../stores/friend_store');
var SessionStore = require('../../stores/session_store');

var FriendRequest = React.createClass({

  getInitialState: function () {

    return ( { status : FriendStore.friendStatus(this.props.id) } );

  },

  componentDidMount: function () {
    FriendStore.addListener(this.handleChange);
  },

  handleChange: function () {
    this.setState( { status : FriendStore.friendStatus(this.props.id) } );
  },

  handleRequest: function (e) {

    e.preventDefault();

    FriendApiUtil.createPendingFriendship(SessionStore.currentUserId(), this.props.id);

  },

  handleCancel: function (e) {

    e.preventDefault();

    FriendApiUtil.deleteFriendship(SessionStore.currentUserId(), this.props.id);
  },

  handleUnfriend: function (e) {

    e.preventDefault();

    FriendApiUtil.deleteFriendship(SessionStore.currentUserId(), this.props.id);

  },

  render: function () {

    if (this.state.status === "self") {
      return(
        <div/>
      );
    } else if (this.state.status === null) {
      return (
        <div className="friend-request group" onClick={this.handleRequest}>
          <div className="friend-request-title">Add Friend</div>
          <div className="friend-request-icon-container">
            <img src={friendRequestIcon} className="friend-request-icon"/>
          </div>
        </div>
      );
    } else if (this.state.status === "pending") {
        return (
          <div className="friend-request-pending group">
            <div className="friend-request-sent">Friend Request Sent</div>
            <div className="friend-request-cancel"
            onClick={this.handleCancel}>Cancel Friend Request</div>
          </div>
        );
    } else {
      return (
        <div className="unfriend group" onClick={this.handleUnfriend}>
          <div className="unfriend-title">Unfriend</div>
        </div>
      );
    }
  }

});

module.exports = FriendRequest;
