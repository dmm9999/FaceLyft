var React = require('react');

var SessionStore = require('./../../stores/session_store');
var SessionApiUtil = require('./../../util/session_api_util');

var ProfilePic = React.createClass({

  getInitialState: function () {

    return( { currentUser : SessionStore.currentUser() } ) ;

  },

  updateFile: function (e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    reader.onloadend = function() {
      this.setState({ currentUser : { imageUrl: reader.result, imageFile: file } } );
    }.bind(this);



    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState( { currentUser : { imageUrl: "", imageFile: null } } );
    };

    var file = this.state.imageFile;

    var formData = new FormData();
    formData.append("user[profile_pic]", file);

    var currentUser = this.state.currentUser;

    SessionApiUtil.updateCurrentUser(currentUser);

  },

  render: function () {

    return (
      <div>
        <img src={this.state.imageUrl}/>
        <input type="file" onChange={this.updateFile}/>
      </div>
    );

  }

});




module.exports = ProfilePic;
