var React = require('react');
var Navbar = require('./navbar');
var Intro = require('./intro/intro');
var Friends = require('./friends/friends');
var ProfilePic = require('./profile_pic');
var CoverPic = require('./coverpic');
var NameBox = require('./name_box');
var FriendRequest = require('./friend_request');
var PostForm = require('./feed/post_form');
var PostsIndex = require('./feed/posts_index');

var Profile = React.createClass({

  render: function() {

    var pageId = parseInt(this.props.params.id);

    return (
      <div>
        <Navbar/>
        <CoverPic id={pageId} >
          <ProfilePic id={pageId}/>
          <NameBox id={pageId}/>
          <FriendRequest id={pageId}/>
        </CoverPic>
        <main className="content group">
          <section className="content-sidebar">
            <Intro id={pageId}/>
            <Friends id={pageId}/>
          </section>
          <section className="content-main">
            <div className="timeline">
              <PostForm id={pageId}/>
              <PostsIndex id={pageId}/>
            </div>
          </section>
        </main>
      </div>
    );
  }

});

module.exports = Profile;
