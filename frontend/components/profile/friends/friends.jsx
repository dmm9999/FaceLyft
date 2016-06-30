var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var SessionStore = require('./../../../stores/session_store');
var UserStore = require('./../../../stores/user_store');
var UserApiUtil = require('./../../../util/user_api_util');

var Friends = React.createClass({

  getInitialState: function () {

    if (SessionStore.currentUserId() === this.props.id) {
      return( { friends : SessionStore.currentUser().friends } ) ;
    } else {
      return( { friends : [] } );
    }
  },

  componentDidMount: function () {
    this.listener = UserStore.addListener(this.handleChange);
    if (this.props.id) {
      UserApiUtil.fetchUser(this.props.id);
    } else {
      UserApiUtil.fetchRandomUsers();
    }
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  handleChange: function () {

    if (this.props.id) {
      this.setState( { friends : UserStore.retrieveUser().friends } );
    } else {
      this.setState( { friends: UserStore.randomUsers() } );
    }
  },

  render: function () {

    if (this.props.id) {
      var friends;
      var length = <div/>;

      if (this.state.friends && this.state.friends.length !== 0) {
        length = <div>{this.state.friends.length}</div>;
        friends = this.state.friends.map(function(friend) {
          var path = "/users/" + friend.id;
          return <li key={friend.id} className="friend-picture">
                    <Link to={path} className="friend-link"/>
                    <img className="friend-image" src={friend.profile_pic_url} />
                    <title className="friend-name">{friend.name}</title>
                </li>;
        });
      } else {
        friends = <div/>;
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
    } else {

        if (this.state.friends && this.state.friends.length !== 0) {
          randomUsers = this.state.friends.map(function(randomUser) {
            var path = "/users/" + randomUser.id;
            return <li key={randomUser.id} className="random-user-picture">
                      <Link to={path} className="random-user-link"/>
                      <img className="random-user-image" src={randomUser.profile_pic_url} />
                      <title className="random-user-name">{randomUser.name}</title>
                  </li>;
          });
        } else {
          randomUsers = <div/>
        }

      return (
        <ul className="random-users-container">
          <header className="random-users-header group">
            <img src={window.friendsIcon} className="friends-icon"/>
            <title className="random-users-title">Random Users</title>
          </header>
          {randomUsers}
        </ul>
      );
    }
  }
});


module.exports = Friends;
