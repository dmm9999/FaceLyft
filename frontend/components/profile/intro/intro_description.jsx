var React = require('react');
var PropTypes = React.PropTypes;
var SessionApiUtil = require('./../../../util/session_api_util');
var SessionStore = require('./../../../stores/session_store');

var IntroDescription = React.createClass({

  getInitialState: function () {

    return( { currentUser : SessionStore.currentUser() } ) ;

  },

  updateDescription: function (e) {

    e.preventDefault();

    this.setState( { currentUser : { description : e.target.value } } );

  },

  handleSubmit: function (e) {

    e.preventDefault();

    var currentUser = this.state.currentUser;

    SessionApiUtil.updateCurrentUser(currentUser);

  },

  render: function() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="intro-description-form group">
          <textarea
            onChange={this.updateDescription}
            className="intro-description-form-text"
            placeholder="Describe who you are"
            value={this.state.currentUser.description}/>
          <div
            className="intro-description-form-button-container">
            <input
              type="submit"
              className="intro-description-form-save-button"
              value='Save'/>
            <input
              type="submit"
              className="intro-description-form-cancel-button"
              value='Cancel'/>
          </div>
        </form>
      </div>
    );
  }

});

module.exports = IntroDescription;
