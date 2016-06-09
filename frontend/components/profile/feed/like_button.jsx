var React = require('react');

var LikeButton = React.createClass({

  getInitialState: function () {
    return ( { liked : false} );
  },

  render: function () {

    if (this.state.liked) {
      return (
        <img src={likedIcon}
        className="react-liked-icon" />
      );
    } else {
      return (
        <img src={likeIcon}
        className="react-like-icon" />
      )
    }
  }

});

module.exports = LikeButton;
