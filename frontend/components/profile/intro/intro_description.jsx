var React = require('react');
var PropTypes = React.PropTypes;
var UserActions = require('./../../../actions/user_actions');

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

    var currentUser = Object.assign({}, this.state);

    UserActions.updateUser(currentUser);

  },

  render: function() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="intro-description-form">
          <textarea
            onChange={this.updateDescription}
            className="intro-description-form-text"
            placeholder="Describe who you are"/>
          <div
            className="intro-description-form-button-container">
            <input
              className="intro-description-form-save-button"
              value='Save'/>
              <input
                className="intro-description-form-cancel-button"
                value='Cancel'/>
          </div>
        </form>
      </div>
    );
  }

});

module.exports = IntroDescription;
