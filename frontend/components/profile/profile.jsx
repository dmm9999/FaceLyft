var React = require('react');
var Navbar = require('./navbar');
var Intro = require('./intro/intro');

var Profile = React.createClass({

  render: function() {
    return (
      <div>
        <Navbar/>
        <Intro/>
      </div>
    );
  }

});

module.exports = Profile;
