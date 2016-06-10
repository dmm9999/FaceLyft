var React = require('react');

var LikeButton = React.createClass({

  getInitialState: function () {
    return ( { liked : false} );
  },

  handleLike: function () {
    LikeApiUtil.likePost(this.props.postId);
  },

  render: function () {

    debugger

    if (this.state.liked) {
      return (
        <img src={likedIcon}
        className="react-liked-icon" />
      );
    } else {
      return (
        <img src={likeIcon}
        className="react-like-icon"
        onClick={this.handleLike} />
      )
    }
  }

});

module.exports = LikeButton;
