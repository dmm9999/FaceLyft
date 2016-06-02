var React = require('react');
var Navbar = require('./components/navbar');

var Profile = React.createClass({

  render: function() {
    return (
      <div>
        <Navbar/>
        I'll be your profile
      </div>
    );
  }

});

module.exports = Profile;
