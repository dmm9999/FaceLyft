var React = require('react');

var SessionStore = require('./../../../stores/session_store');
var PostApiUtil = require('./../../../util/post_api_util');
var PostStore = require('./../../../stores/session_store');

var PostForm = React.createClass({

  getInitialState: function () {

    var ownPage = SessionStore.currentUserId() === this.props.id;

    return ( { currentUser : SessionStore.currentUser(),
              ownPage : ownPage, post: "" } );

  },

  componentDidMount: function () {
    PostStore.addListener(this.handleChange);
  },

  handleChange: function () {
    PostApiUtil.fetchPosts(this.props.id);
  },

  postUpdate: function (e) {

    e.preventDefault();

    this.setState( { post : e.target.value } );

  },

  handleSubmit: function (e) {

    e.preventDefault();

    PostApiUtil.createPost(this.state.post, this.props.id);

    this.setState( { post : "" } );

  },

  render: function () {

    var text = "What's on your mind?";

    if (this.state.ownPage) {
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
