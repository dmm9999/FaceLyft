var React = require('react');

var FriendRequest = React.createClass({

  render: function () {

    return (
      <div className="friend-request group">
        <title className="friend-request-title">Add Friend</title>
        <img src={friendRequestIcon} className="friend-request-icon"/>
      </div>
    );

  }

});

module.exports = FriendRequest;
