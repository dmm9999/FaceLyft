var React = require('react');

var SessionApiUtil = require('../../util/session_api_util');

var SearchBar = require('./search_bar');
var ProfileButton = require('./profile_button');

var Navbar = React.createClass({

  handleClick: function (e) {

    e.preventDefault();

    window.location = '#/';
  },

  render: function() {
    return (
      <nav>

        <div className="navbar group">
          <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
          <SearchBar/>
          <ProfileButton/>
          <button
            className="home-button"
            onClick={this.handleClick}
            >Home</button>
          <input
            type="submit"
            className="logout-button"
            value="Log Out"
            onClick={SessionApiUtil.logout}/>
        </div>

      </nav>
    );
  }

});

module.exports = Navbar;
