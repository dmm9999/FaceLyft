var React = require('react');

var SessionStore = require('./../../../stores/session_store');
var SessionApiUtil = require('./../../../util/session_api_util');
var UserStore = require('./../../../stores/user_store');
var UserApiUtil = require('./../../../util/user_api_util');

var CurrentCityForm = React.createClass({

  getInitialState: function () {
    if (SessionStore.currentUserId() === this.props.id) {
      return( { currentCity: SessionStore.currentUser().current_city,
                editing: false } );
    } else {
      UserApiUtil.fetchUser(this.props.id);
      return ( { currentCity : "", editing: false } );
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
    this.setState( { currentCity : UserStore.retrieveUser().current_city || ""} );
  },

  updateCurrentCity: function (e) {

    e.preventDefault();

    this.setState( { currentCity : e.target.value } );

  },

  handleSubmit: function (e) {

    e.preventDefault();

    var formData = {
      current_city : this.state.currentCity
    };

    SessionApiUtil.updateCurrentUser(formData);

    this.toggleEditing();

  },

  render: function () {

    if (SessionStore.currentUserId() !== this.props.id) {

      return (
        <div className="group">
          <div
          className="current-city-form-work">Current City: {this.state.currentCity}</div>
        </div>
      )
    } else if (this.state.editing) {
      return (
        <form className="group"
          onSubmit={this.handleSubmit}>
          <input
          type="text"
          className="current-city-form-input"
          value={this.state.current_city}
          onChange={this.updateCurrentCity}/>
          <input
          type="submit"
          className="current-city-form-save"
          value="Save"/>
        </form>
      )
    } else if (this.state.currentCity === "") {
            return (
              <div className="group">
                <div
                className="current-city-form-value">Where do you currently live?</div>
                <button
                className="current-city-form-edit"
                onClick={this.toggleEditing}>Edit</button>
              </div>
            )
      } else {

        return (
          <div className="group">
            <div
            className="current-city-form-value">Current City: {this.state.currentCity}</div>
            <button
            className="current-city-form-edit"
            onClick={this.toggleEditing}>Edit</button>
          </div>
        )
      }
    }
  });

module.exports = CurrentCityForm;
