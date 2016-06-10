var React = require('react');
var SessionStore = require('./../../../stores/session_store');

var IntroDescription = require('./intro_description');
var HometownForm = require('./hometown_form');
var SchoolForm = require('./school_form');
var NameForm = require('./name_form');
var WorkForm = require('./work_form');
var CurrentCityForm = require('./current_city_form');
var BirthdayForm = require('./birthday_form');
var PhoneNumberForm = require('./phone_number_form');

var Intro = React.createClass({

  render: function() {
    return (
      <div className="intro-container">
        <header className="intro-header group">
          <img src={window.globeIcon} className="intro-icon"/>
          <h1 className="intro-title">Intro</h1>
        </header>
        <IntroDescription id={this.props.id}/>
        <NameForm id={this.props.id}/>
        <BirthdayForm id={this.props.id}/>
        <WorkForm id={this.props.id}/>
        <SchoolForm id={this.props.id}/>
        <CurrentCityForm id={this.props.id}/>
        <HometownForm id={this.props.id}/>
        <PhoneNumberForm id={this.props.id}/>
      </div>
    );
  }

});

module.exports = Intro;
