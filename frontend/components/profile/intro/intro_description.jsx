var React = require('react');

var SessionApiUtil = require('./../../../util/session_api_util');
var SessionStore = require('./../../../stores/session_store');
var UserApiUtil = require('./../../../util/user_api_util');
var UserStore = require('./../../../stores/user_store');

var IntroDescription = React.createClass({

  getInitialState: function () {

    if (SessionStore.currentUserId() === this.props.id &&
        SessionStore.currentUser().description !== null) {
        return( { description : SessionStore.currentUser().description,
                  editing : false } ) ;
    } else {
      UserApiUtil.fetchUser(this.props.id);
      return( { description : "", editing : false } );
    }
  },

  toggleEditing: function (e) {

    if (this.state.editing) {
      this.setState( { editing: false } );
    } else {
    this.setState( { editing: true } );
    }
  },

  componentDidMount: function () {
    this.listener = UserStore.addListener(this.handleChange);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  handleChange: function () {
    this.setState( { description : UserStore.retrieveUser().description || "" } );
  },

  updateDescription: function (e) {

    e.preventDefault();

    this.setState( { description : e.target.value } );

  },

  handleSubmit: function (e) {

    e.preventDefault();

    SessionApiUtil.updateCurrentUser({ description : this.state.description } );

    this.toggleEditing();

  },

  render: function () {

    if (SessionStore.currentUserId() !== this.props.id) {
      return (
        <div>
          <textarea
            className="intro-description-form-text"
            readonly="true"
            value={this.state.description}/>
        </div>
      );
    } else if (this.state.editing) {
      return (
        <form className="group"
          onSubmit={this.handleSubmit}>
          <input
          type="date"
          className="birthday-form-input"
          value={this.state.birthday}
          onChange={this.updateBirthday}/>
          <input
          type="submit"
          className="birthday-form-save"
          value="Save"/>
        </form>
      )
    } else if (this.state.description === "") {
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
              <button
              className="birthday-form-edit"
              onClick={this.toggleEditing}>Edit</button>
            </div>
          </form>
        </div>
        )
      } else {
        return(
        <div>
          <form
            onSubmit={this.handleSubmit}
            className="intro-description-form group">
            <textarea
              onChange={this.updateDescription}
              className="intro-description-form-text"
              placeholder={this.state.description}
              value={this.state.description}/>
            <div
              className="intro-description-form-button-container">
              <button
              className="birthday-form-edit"
              onClick={this.toggleEditing}>Edit</button>
            </div>
          </form>
        </div>
      )
    }
  }
});

module.exports = IntroDescription;
