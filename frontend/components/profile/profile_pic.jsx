var React = require('react');

var SessionStore = require('./../../stores/session_store');
var SessionApiUtil = require('./../../util/session_api_util');
var UserApiUtil = require('./../../util/user_api_util');
var UserStore = require('./../../stores/user_store');

var ProfilePic = React.createClass({

  getInitialState: function () {

    if (SessionStore.currentUserId() === this.props.id) {
      return( { imageUrl : SessionStore.currentUser().profile_pic_url } ) ;
    } else {
      UserApiUtil.fetchUser(this.props.id);
      return( { imageUrl : ""} );
    }
  },

  componentDidMount: function () {
    this.listener = UserStore.addListener(this.handleChange);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  handleChange: function () {
    this.setState( { imageUrl : UserStore.retrieveUser().profile_pic_url } );
  },

  updateFile: function (e) {

    e.preventDefault();

    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    reader.onloadend = function() {
      this.setState( { imageUrl: reader.result, imageFile: file } );
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState( { imageFile: null } );
    }
  },

  savePic: function (e) {

    e.preventDefault();

    var formData = new FormData();
    formData.append("user[profile_pic]", this.state.imageFile);

    SessionApiUtil.updateCurrentUser(formData);
  },

  render: function () {

    if (SessionStore.currentUserId() === this.props.id) {
      return (
        <div className="profile-pic">
          <img src={this.state.imageUrl}/>
          <input type="file" onChange={this.updateFile}/>
          <input type="submit" value="Save Profile Pic" onClick={this.savePic} />
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div className="profile-pic">
          <img src={this.state.imageUrl}/>
          {this.props.children}
        </div>
      )
    }
  }


});




module.exports = ProfilePic;
