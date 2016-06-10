var React = require('react');

var SessionStore = require('./../../../stores/session_store');
var SessionApiUtil = require('./../../../util/session_api_util');
var UserStore = require('./../../../stores/user_store');
var UserApiUtil = require('./../../../util/user_api_util');

var WorkForm = React.createClass({

  getInitialState: function () {
    if (SessionStore.currentUserId() === this.props.id) {
      return( { work: SessionStore.currentUser().work,
                editing: false } );
    } else {
      UserApiUtil.fetchUser(this.props.id);
      return ( { work : "", editing: false } );
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
    this.setState( { work : UserStore.retrieveUser().work || ""} );
  },

  updateWork: function (e) {

    e.preventDefault();

    this.setState( { work : e.target.value } );

  },

  handleSubmit: function (e) {

    e.preventDefault();

    var formData = {
      work : this.state.work
    };

    SessionApiUtil.updateCurrentUser(formData);

    this.toggleEditing();

  },

  render: function () {

    if (SessionStore.currentUserId() !== this.props.id) {

      return (
        <div className="group">
          <div
          className="work-form-work">Work: {this.state.work}</div>
        </div>
      )
    } else if (this.state.editing) {
      return (
        <form className="group"
          onSubmit={this.handleSubmit}>
          <input
          type="text"
          className="work-form-input"
          value={this.state.work}
          onChange={this.updateWork}/>
          <input
          type="submit"
          className="name-form-save"
          value="Save"/>
        </form>
      )
    } else if (this.state.work === "") {
            return (
              <div className="group">
                <div
                className="work-form-work">Where do you work?</div>
                <button
                className="work-form-edit"
                onClick={this.toggleEditing}>Edit</button>
              </div>
            )
      } else {

        return (
          <div className="group">
            <div
            className="work-form-work">Work: {this.state.work}</div>
            <button
            className="work-form-edit"
            onClick={this.toggleEditing}>Edit</button>
          </div>
        )
      }
    }
  });

module.exports = WorkForm;
