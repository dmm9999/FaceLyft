var React = require('react');

var SessionStore = require('./../../stores/session_store');
var SessionApiUtil = require('./../../util/session_api_util');
var UserApiUtil = require('./../../util/user_api_util');
var UserStore = require('./../../stores/user_store');

var CoverPic = React.createClass({

  getInitialState: function () {

    if (SessionStore.currentUserId() === this.props.id) {
      return( { imageUrl : SessionStore.currentUser().coverpic_url } ) ;
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
    this.setState( { imageUrl : UserStore.retrieveUser().coverpic_url } );
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
    formData.append("user[coverpic]", this.state.imageFile);

    SessionApiUtil.updateCurrentUserPic(formData);
  },

  render: function () {

    if (SessionStore.currentUserId() === this.props.id) {
      return (
        <div className="cover-pic">
        <img src={this.state.imageUrl}/>
        <input type="file" onChange={this.updateFile} className="cover-pic-select"/>
        <input type="submit" value="Save Cover Pic" onClick={this.savePic} className="cover-pic-save"/>
        {this.props.children}
      </div>
      )
    } else {
      return (
        <div className="cover-pic">
        <img src={this.state.imageUrl}/>
        {this.props.children}
        </div>
      )
    };

  }
});

module.exports = CoverPic;
