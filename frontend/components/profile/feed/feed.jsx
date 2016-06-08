var React = require('react');

var Feed = React.createClass({

  render: function () {
    return (
      <div className="feed">
        {this.props.children}
      </div>
    );
  }

});

module.exports = Feed;
