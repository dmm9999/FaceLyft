var React = require('react');

var PostsIndexItem = React.createClass({

  render: function () {

    debugger

    return (
    <div className="posts-index-item">
      <div className="posts-index-item-info group">
        <img src={this.props.post.author_profile_pic_url}
          className="posts-index-item-thumb" />
        <div>{this.props.post.author_name}</div>
      </div>
      <div>{this.props.post.body}</div>
    </div>
    );

  }

});

module.exports = PostsIndexItem;
