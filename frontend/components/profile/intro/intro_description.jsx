var React = require('react');

var SessionApiUtil = require('./../../../util/session_api_util');
var SessionStore = require('./../../../stores/session_store');
var UserApiUtil = require('./../../../util/user_api_util');
var UserStore = require('./../../../stores/user_store');

var IntroDescription = React.createClass({

  getInitialState: function () {

    if (SessionStore.currentUserId() === this.props.id) {
      return( { description : SessionStore.currentUser().description } ) ;
    } else {
      UserApiUtil.fetchUser(this.props.id);
      return( { description : ""} );
    }
  },

  componentDidMount: function () {
    this.listener = UserStore.addListener(this.handleChange);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  handleChange: function () {
    this.setState( { description : UserStore.retrieveUser().description } );
  },

  updateDescription: function (e) {

    e.preventDefault();

    this.setState( { description : e.target.value } );

  },

  handleSubmit: function (e) {

    e.preventDefault();

    SessionApiUtil.updateCurrentUser({ user: description } );

  },

  render: function() {

    if (SessionStore.currentUserId() === this.props.id ) {
      return (
        <div>
          <form
            onSubmit={this.handleSubmit}
            className="intro-description-form group">
            <textarea
              onChange={this.updateDescription}
              className="intro-description-form-text"
              placeholder="Describe who you are"
              value={this.state.description}/>
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
    } else {
      return (
        <div>
          <textarea
            className="intro-description-form-text"
            placeholder="Describe who you are"
            value={this.state.description}/>
        </div>
      );
    }

  }

});

module.exports = IntroDescription;
