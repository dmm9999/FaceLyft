var React = require('react');

var SessionApiUtil = require('../../../util/session_api_util');

var SearchBar = require('./search_bar');

var Navbar = React.createClass({

  render: function() {
    return (
      <div>

        <nav className="navbar group">
          <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
          <SearchBar/>
          <input
            type="submit"
            className="logout-button"
            value="Log Out"
            onClick={SessionApiUtil.logout}/>
        </nav>

      </div>
    );
  }

});

module.exports = Navbar;
