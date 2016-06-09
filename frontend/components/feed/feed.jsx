var React = require('react');

var PostForm = require('./../profile/posts/post_form');
var PostsIndex = require('./../profile/posts/posts_index');

var Feed = React.createClass({

  render: function () {

    return (
      <div className="feed">
        <PostForm/>
        <PostsIndex/>
      </div>
    )

  }

});

module.exports = Feed;
