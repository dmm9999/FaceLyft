var React = require('react');

var SessionStore = require('./../../../stores/session_store');

var PostForm = React.createClass({

  getInitialState: function () {

    return ( { currentUser : SessionStore.currentUser() } )

  },

  render: function () {

    var text = "Write something to " + this.props.id.first_name;

    return (
      <div className="post-form">
        <header className="tab-container group">
          <div className="post-form-post-tab">Post</div>
          <div className="post-form-photo-tab">Photo</div>
        </header>
        <main>
          <img
            src={this.state.currentUser.profile_pic_url}
            className="post-form-thumb"/>
          <textarea placeholder={text}/>
        </main>
        <footer>
        </footer>
      </div>
    );

  }

});

module.exports = PostForm;
