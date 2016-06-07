var React = require('react');
var Navbar = require('./navbar');
var Intro = require('./intro/intro');
var Friends = require('./friends/friends');
var ProfilePic = require('./profile_pic');
var CoverPic = require('./coverpic');

var Profile = React.createClass({

  render: function() {

    var pageId = parseInt(this.props.params.id);

    return (
      <div>
        <Navbar/>
        <CoverPic id={pageId} >
          <ProfilePic id={pageId}/>
        </CoverPic>
        <Intro id={pageId}/>
        <Friends id={pageId}/>
      </div>
    );
  }

});

module.exports = Profile;
