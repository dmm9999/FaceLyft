var React = require('react');

var FriendStore = require('./../../../stores/friend_store');
var FriendApiUtil = require('./../../../util/friend_api_util');
var SessionStore = require('./../../../stores/session_store');

var Friends = React.createClass({

  getInitialState: function () {

    var currentUser = SessionStore.currentUser();

    return ( { friends : null } );
  },

  componentDidMount: function () {
    var currentUserId = SessionStore.currentUserId();
    var friends = FriendApiUtil.fetchFriends(currentUserId);
    this.listener = FriendStore.addListener(this._handleChange);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _handleChange: function (e) {

    this.setState( { friends: FriendStore.all() } );

  },

  render: function () {

    var friends;

    if (this.state.friends !== null) {
      friends = this.state.friends.map(function(friend) {
        return <li key={friend.id} className="friend-picture">
                  <img className="friend-image" src={friend.profile_pic_url} />
              </li>;
      });
    } else {
      friends = <div>Friends</div>;
    }

    var length = <div/>;

    if (this.state.friends !== null &&
        this.state.friends.length !== 0) {
      length = <div>{this.state.friends.length}</div>;
    }

    return (
      <ul className="friends-container">
        <header className="friends-header group">
          <img src={window.friendsIcon} className="friends-icon"/>
          <title className="friends-title">Friends</title>
          <div className="friends-count">{length}</div>
        </header>
        {friends}
      </ul>
    );
  }

});

module.exports = Friends;
