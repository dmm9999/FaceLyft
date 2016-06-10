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
var UserStore = require('./../../stores/user_store');
var UserApiUtil = require('./../../util/user_api_util');

var Profile = React.createClass({

  componentDidMount: function () {
    this.listener = UserStore.addListener(this.handleChange);
    UserApiUtil.fetchUser(parseInt(this.props.params.id));
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    UserApiUtil.fetchUser(parseInt(newProps.params.id));
  },

  handleChange: function () {

  },

  render: function() {

    var pageId = parseInt(this.props.params.id);

    return (
      <div className="profile">
        <Navbar/>
        <div className="not-navbar">
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
      </div>
    );
  }

});

module.exports = Profile;
