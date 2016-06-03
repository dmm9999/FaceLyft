var React = require('react');
var SessionStore = require('./../../../stores/session_store');

var IntroDescription = require('./intro_description');

var Intro = React.createClass({

  render: function() {
    return (
      <div className="intro-container">
        <header className="intro-header group">
          <img src={window.globeIcon} className="intro-icon"/>
          <h1 className="intro-title">Intro</h1>
        </header>
        <IntroDescription/>
      </div>
    );
  }

});

module.exports = Intro;
