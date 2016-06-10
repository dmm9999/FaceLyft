var React = require('react');

var PostsIndexItem = require('./posts_index_item');
var PostStore = require('./../../../stores/post_store');
var PostApiUtil = require('./../../../util/post_api_util');

var PostsIndex = React.createClass({

  getInitialState: function () {

    var isTimeline = !!(this.props.id);

    return ( { isTimeline: isTimeline, posts : [] } );
  },

  componentDidMount: function () {

    this.listener = PostStore.addListener(this.handleChange);

    if (this.state.isTimeline) {
      PostApiUtil.fetchPosts(this.props.id);
    } else {
      PostApiUtil.fetchFeedPosts();
    }
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    if (this.state.isTimeline) {
      PostApiUtil.fetchPosts(newProps.id);
    } else {
      PostApiUtil.fetchFeedPosts(newProps.id);
    }
  },

  handleChange: function () {
    this.setState( { posts : PostStore.all() } );
  },

  render: function () {

    var posts = <div/>;

    if (this.state.posts.length > 0) {
      posts = this.state.posts.reverse().map(function(post) {
        return <li key={post.id}><PostsIndexItem
          post={post}
          /></li>;
      });
    }

    return (
      <ul className="posts-index">
        {posts}
      </ul>
    );

  }

});

module.exports = PostsIndex;
