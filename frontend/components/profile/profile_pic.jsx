var React = require('react');

var ProfilePic = React.createClass({

  getInitialState: function () {

    return ( {
      imageFile : null,
      imageUrl : null
    });

  },

  updateFile: function (e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    reader.onloadend = function() {
      this.setState({ imageUrl: reader.result, imageFile: file});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    };
  },

  render: function () {

    return (
      <div>
        <img src={this.state.imageUrl}/>
        <input type="file" onClick={this.updateFile}/>
      </div>
    );

  }

});




module.exports = ProfilePic;
