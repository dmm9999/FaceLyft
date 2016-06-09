var React = require('react');

var SessionStore = require('./../../../stores/session_store');
var SessionApiUtil = require('./../../../util/session_api_util');
var UserStore = require('./../../../stores/user_store');
var UserApiUtil = require('./../../../util/user_api_util');

var NameForm = React.createClass({

  getInitialState: function () {

    if (SessionStore.currentUserId === this.props.id) {
      return( { first_name : SessionStore.currentUser().first_name,
                last_name : SessionStore.currentUser().last_name,
                editing: false } );
    } else {
      UserApiUtil.fetchUser(this.props.id);
      return ( { first_name : "", last_name: "", editing: false } );
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
    this.setState( { first_name : UserStore.retrieveUser().first_name || "",
                    last_name : UserStore.retrieveUser().last_name || "" } );
  },

  updateFirstName: function (e) {

    e.preventDefault();

    this.setState( { first_name : e.target.value } );

  },

  updateLastName: function (e) {

    e.preventDefault();

    this.setState( { last_name : e.target.value } );

  },

  handleSubmit: function (e) {

    e.preventDefault();

    var formData = {
      first_name : this.state.first_name,
      last_name : this.state.last_name
    };

    SessionApiUtil.updateCurrentUser(formData);

    this.toggleEditing();

  },

  render: function () {

    if (this.state.editing) {
      return (
        <form className="group"
          onSubmit={this.handleSubmit}>
          <input
          type="text"
          className="first-name-form-input"
          value={this.state.first_name}
          onChange={this.updateFirstName}/>
          <input
          type="text"
          className="last-name-form-input"
          value={this.state.last_name}
          onChange={this.updateLastName}/>
          <input
          type="submit"
          className="name-form-save"
          value="Save"/>
        </form>
      )
    } else {
      if (this.state.first_name === "" ||
          this.state.last_name === "") {
            return(
              <div className="group">
                <div
                className="name-form-name">What's your name?</div>
                <button
                className="name-form-edit"
                onClick={this.toggleEditing}>Edit</button>
              </div>
            )
      } else {

        var name = this.state.first_name + " " + this.state.last_name;

        return (
          <div className="group">
            <div
            className="name-form-name">Name: {name}</div>
            <button
            className="name-form-edit"
            onClick={this.toggleEditing}>Edit</button>
          </div>
        )
      }
    }



  }


});

module.exports = NameForm;
