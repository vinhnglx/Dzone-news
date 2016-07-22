var React = require('react'),
    News = require('./News.react');

var NewsList = React.createClass({
  render: function() {
    var listOfNews = this.props.listOfNews,
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
