var React = require('react'),
    moment = require('moment');

var News = React.createClass({
  render: function() {
    var news = this.props.entry,
        desc = news.description;

    return (
      <div>
        <h4>
          <a href={news.link} target="_blank">
            {news.title}
          </a>
          <small>
            <span>    Posted: </span>
            <span className="post_time">{moment(news.pubDate).format("YYYY-MM-DD hh:mm:ss")}</span>
          </small>
        </h4>
        <div className="content" dangerouslySetInnerHTML={{__html: desc}}>
        </div>
        <hr/>
      </div>
    )
  }
});

module.exports = News;

