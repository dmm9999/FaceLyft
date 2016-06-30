var React = require('react');


var PostApiUtil = require('./../../../util/post_api_util');
var SessionStore = require('./../../../stores/session_store');
var LikeButton = require('./like_button');

var PostsIndexItem = React.createClass({

  handleEdit: function () {
    PostApiUtil.updatedPost();
  },

  handleDelete: function () {
    PostApiUtil.deletePost(this.props.post.id);
  },

  render: function () {

    var isYourPost = this.props.post.author_id === SessionStore.currentUserId();

    if (isYourPost) {
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
              className="post-edit-button hidden-items"
              onClick={this.handleEdit}>Edit</button>
          </div>
          <div className="posts-index-item-body">{this.props.post.body}</div>
          <div className="react-container group">
            <LikeButton/>
            <div className="react-like-text hidden-items">Like</div>
            <img src={commentIcon}
              className="react-comment-icon hidden-items"/>
            <div className="react-comment-text hidden-items">Comment</div>
            <img src={shareIcon}
              className="react-share-icon hidden-items"/>
            <div className="react-share-text hidden-items">Share</div>
          </div>
          <div className="reactions-container group">
            <img src={this.props.post.author_profile_pic_url}
              className="comment-form-thumb hidden-items" />
            <textarea
              className="comment-form hidden-items"
              placeholder="Write a comment..." />
          </div>
        </div>
      );
    } else {
      return (
        <div className="posts-index-item">
          <div className="posts-index-item-info group">
            <img src={this.props.post.author_profile_pic_url}
              className="posts-index-item-thumb" />
            <div className="posts-index-item-author-name">{this.props.post.author_name}</div>
          </div>
          <div className="posts-index-item-body">{this.props.post.body}</div>
          <div className="react-container group">
            <LikeButton/>
            <div className="react-like-text hidden-items">Like</div>
            <img src={commentIcon}
              className="react-comment-icon hidden-items"/>
            <div className="react-comment-text hidden-items">Comment</div>
            <img src={shareIcon}
              className="react-share-icon hidden-items"/>
            <div className="react-share-text hidden-items">Share</div>
          </div>
          <div className="reactions-container group">
            <img src={this.props.post.author_profile_pic_url}
              className="comment-form-thumb hidden-items" />
            <textarea
              className="comment-form hidden-items"
              placeholder="Write a comment..." />
          </div>
        </div>
      );
    }
  }
});

module.exports = PostsIndexItem;
