var React = require('react'),
    News = require('./News.react');

var NewsList = React.createClass({
  getInitialState: function() {
    return {
      listOfNews: null
    }
  },

  componentWillReceiveProps: function(nextProps) {
    var nextList = nextProps.listOfNews;

    this.setState({
      listOfNews: nextList
    });

  },

  render: function() {
    var listOfNews = this.state.listOfNews,
        entries;

    if (listOfNews) {
      entries = listOfNews.map(function(news, index) {
        return (
          <News entry={news} key={index} />
        )
      });
    } else {
      entries = null;
    }

    return (
      <div>
        {entries}
      </div>
    )
  }
});

module.exports = NewsList;
