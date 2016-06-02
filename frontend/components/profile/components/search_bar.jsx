var React = require('react');
var PropTypes = React.PropTypes;

var SearchBar = React.createClass({

  render: function() {
    return (
      <div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search FaceLyft"/>
        <i class="fa fa-search" aria-hidden="true"></i>
        <input
          type="submit"
          className="search-button"
          value="Search"/>
      </div>
    );
  }

});

module.exports = SearchBar;
