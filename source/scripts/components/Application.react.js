var React = require('react'),
    Stream = require('./Stream.react');

var Application = React.createClass({
  render: function() {
    return(
      <div className="row">
        <div className="col-md-12">
          <div className="blog-post">
            <Stream />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Application;
