var React = require('react'),
    NewsList = require('./NewsList.react');

var Stream = React.createClass({
  getInitialState: function() {
    return {
      data: null
    };
  },

  componentDidMount: function() {
    var url = "http://feeds.dzone.com/home",
        streamComponent = this;

    feednami.load(url, function(result) {
      if(result.error) {
        console.log(result.error);
      }

      var entriesData = result.feed.entries;
      streamComponent.setState({
        data: entriesData
      });
    });
  },

  render: function() {
    return (
      <NewsList listOfNews={this.state.data} />
    )
  }
});

module.exports = Stream;
