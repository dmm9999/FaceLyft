var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var SessionStore = require('./../../stores/session_store');

var ProfileButton = React.createClass({

  getInitialState: function () {

    return ( { currentUser : SessionStore.currentUser() } );

  },

  handleClick: function (e) {

    e.preventDefault();

    window.location = '#/users/' + this.state.currentUser.id;
  },


  render: function () {

    var picUrl = this.state.currentUser.profile_pic_url;
    var path = '/users/' + this.state.currentUser.id

    return (
      <div className="profile-link group"
      onClick={this.handleClick}>
        <img src={picUrl}
        className="profile-button-pic"/>
        <button
        className="profile-button">{this.state.currentUser.first_name}</button>
      </div>
    )

  }

});

module.exports = ProfileButton;
