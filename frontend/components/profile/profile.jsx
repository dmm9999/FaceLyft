var React = require('react');
var Navbar = require('./navbar');
var Intro = require('./intro/intro');
var Friends = require('./friends/friends');
var ProfilePic = require('./profile_pic');

var Profile = React.createClass({

  render: function() {
    return (
      <div>
        <Navbar/>
        <ProfilePic/>
        <Intro/>
        <Friends/>
      </div>
    );
  }

});

module.exports = Profile;
