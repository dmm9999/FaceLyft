var React = require('react');

var Navbar = require('./../profile/navbar');
var PostForm = require('./../profile/feed/post_form');
var PostsIndex = require('./../profile/feed/posts_index');
var Friends = require('./../profile/friends/friends');
var SessionStore = require('./../../stores/session_store');

var Feed = React.createClass({

  render: function () {

    currentUserId = SessionStore.currentUserId();

    return (
      <div className="feed">
        <Navbar/>
        <main className="feed-content group">
          <section className="feed-posts group">
            <PostForm
              className="feed-post-form"/>
            <PostsIndex
              className="feed-posts-index"
              currentUserId={currentUserId}/>
          </section>
          <section className="right-sidebar">
            <Friends/>
          </section>
        </main>
      </div>
    );

  }

});

module.exports = Feed;
