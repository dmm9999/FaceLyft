var React = require('react');

var PostsIndexItem = React.createClass({

  render: function () {

    return (
    <div className="posts-index-item">
      <div className="posts-index-item-info group">
        <img src={this.props.post.author_profile_pic_url}
          className="posts-index-item-thumb" />
        <div className="posts-index-item-author-name">{this.props.post.author_name}</div>
      </div>
      <div className="posts-index-item-body">{this.props.post.body}</div>
      <div className="react-container group">
        <div className="react-like-text">Like</div>
        <div className="react-comment-text">Comment</div>
        <div className="react-share-text">Share</div>
      </div>
      <div className="reactions-container group">
        <textarea />
      </div>
    </div>
    );

  }

});

module.exports = PostsIndexItem;
