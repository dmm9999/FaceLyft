var React = require('react');

var Navbar = require('./../profile/navbar');
var PostForm = require('./../profile/feed/post_form');
var PostsIndex = require('./../profile/feed/posts_index');
var SessionStore = require('./../../stores/session_store');

var Feed = React.createClass({

  render: function () {

    currentUserId = SessionStore.currentUserId();

    return (
      <div className="feed">
        <Navbar/>
        <div className="feed-content">
          <PostForm
            className="feed-post-form"/>
          <PostsIndex currentUserId={currentUserId}/>
        </div>
      </div>
    )

  }

});

module.exports = Feed;
