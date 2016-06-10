var React = require('react');

var SessionStore = require('./../../../stores/session_store');
var PostApiUtil = require('./../../../util/post_api_util');
var PostStore = require('./../../../stores/session_store');
var FriendStore = require('./../../../stores/friend_store');

var PostForm = React.createClass({

  getInitialState: function () {

    var isOwnPage = SessionStore.currentUserId() === this.props.id;
    var isTimeline = !!(this.props.id);

    return ( { currentUser : SessionStore.currentUser(),
              isOwnPage : isOwnPage, isTimeline : isTimeline, post: "" } );

  },

  componentDidMount: function () {
    this.listener = PostStore.addListener(this.handleChange);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    if (this.state.isTimeline) {
      PostApiUtil.fetchPosts(newProps.id);
    } else {
      PostApiUtil.fetchFeedPosts(this.state.currentUser.id);
    }
  },

  handleChange: function () {

    if (this.state.isTimeline) {
      PostApiUtil.fetchPosts(this.props.id);
    } else {
      PostApiUtil.fetchFeedPosts(this.state.currentUser.id);
    }
  },

  postUpdate: function (e) {

    e.preventDefault();

    this.setState( { post : e.target.value } );

  },

  handleSubmit: function (e) {

    e.preventDefault();

    if (this.state.isTimeline) {
      PostApiUtil.createPost({ body : this.state.post, profile_id : this.props.id });
    } else {
      PostApiUtil.createPost({ body : this.state.post, profile_id : this.state.currentUser.id });
    }

    this.setState( { post : "" } );

  },

  render: function () {
    
    var text = "What's on your mind?";

    if (!this.state.isTimeline || this.state.isOwnPage) {
      return (
        <form
          className="post-form"
          onSubmit={this.handleSubmit}>
          <header className="tab-container group">
            <img src={postIcon} className="post-form-post-icon"/>
            <div className="post-form-status-tab">Status</div>
            <img src={photoIcon} className="post-form-photo-icon"/>
            <div className="post-form-photo-tab">Photo</div>
          </header>
          <main>
            <img
              src={this.state.currentUser.profile_pic_url}
              className="post-form-thumb"/>
            <textarea
              placeholder={text}
              value={this.state.post}
              onChange={this.postUpdate}/>
          </main>
          <footer className="group">
            <button className="post-form-submit-button">Post</button>
          </footer>
        </form>
      );
    } else if (FriendStore.friendStatus(this.props.id) === null ||
        FriendStore.friendStatus(this.props.id) === "pending") {

        return(
          <div/>
        );

    } else {
      return (
        <form
          className="post-form"
          onSubmit={this.handleSubmit}>
          <header className="tab-container group">
            <img src={postIcon} className="post-form-post-icon"/>
            <div className="post-form-status-tab">Post</div>
            <img src={photoIcon} className="post-form-photo-icon"/>
            <div className="post-form-photo-tab">Photo</div>
          </header>
          <main>
            <img
              src={this.state.currentUser.profile_pic_url}
              className="post-form-thumb"/>
            <textarea
              placeholder={text}
              onChange={this.postUpdate}/>
          </main>
          <footer className="group">
            <button className="post-form-submit-button">Post</button>
          </footer>
        </form>
      );
    }

  }

});

module.exports = PostForm;
