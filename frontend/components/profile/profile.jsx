var React = require('react');
var Navbar = require('./navbar');
var Intro = require('./intro/intro');
var Friends = require('./friends/friends');
var ProfilePic = require('./profile_pic');
var CoverPic = require('./coverpic');

var Profile = React.createClass({

  render: function() {
    return (
      <div>
        <Navbar/>
        <CoverPic>
          <ProfilePic/>
        </CoverPic>
        <Intro/>
        <Friends/>
      </div>
    );
  }

});

module.exports = Profile;
