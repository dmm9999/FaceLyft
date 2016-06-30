var React = require('react');
var PropTypes = React.PropTypes;

var SearchBar = React.createClass({

  render: function() {
    return (
      <div>
        <input
          type="text"
          className="search-bar hidden-items"
          placeholder="Search FaceLyft"/>
        <div className="search-button hidden-items">
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    );
  }

});

module.exports = SearchBar;
