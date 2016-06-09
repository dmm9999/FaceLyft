var React = require('react');


var PostApiUtil = require('./../../../util/post_api_util');
var LikeButton = require('./like_button');

var PostsIndexItem = React.createClass({

  handleEdit: function () {
    PostApiUtil.updatedPost()
  },

  handleDelete: function () {
    PostApiUtil.deletePost(this.props.post.id);
  },

  render: function () {

    return (
    <div className="posts-index-item">
      <div className="posts-index-item-info group">
        <img src={this.props.post.author_profile_pic_url}
          className="posts-index-item-thumb" />
        <div className="posts-index-item-author-name">{this.props.post.author_name}</div>
        <button
          className="post-delete-button"
          onClick={this.handleDelete}>Delete</button>
        <button
          className="post-edit-button"
          onClick={this.handleEdit}>Edit</button>
      </div>
      <div className="posts-index-item-body">{this.props.post.body}</div>
      <div className="react-container group">
        <LikeButton/>
        <div className="react-like-text">Like</div>
        <img src={commentIcon}
            className="react-comment-icon"/>
        <div className="react-comment-text">Comment</div>
        <img src={shareIcon}
            className="react-share-icon"/>
        <div className="react-share-text">Share</div>
      </div>
      <div className="reactions-container group">
        <img src={this.props.post.author_profile_pic_url}
        className="comment-form-thumb" />
        <textarea
        className="comment-form"
        placeholder="Write a comment..." />
      </div>
    </div>
    );

  }

});

module.exports = PostsIndexItem;
