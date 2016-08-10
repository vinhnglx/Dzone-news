import React from 'react';
let moment = require('moment');

class News extends React.Component {
  render() {
    let news = this.props.entry;
    let desc = news.description;
    console.log(news);

    return (
      <div>
        <h4>
          <a href={news.link} target="_blank">
            {news.title}
          </a>
          <small>
            <span>      Posted: </span>
            <span className="post_time">{moment(news.pubDate).format('YYYY-MM-DD hh:mm:ss')}></span>
          </small>
        </h4>

        <div className="content" dangerouslySetInnerHTML={{__html: desc}}></div>
        <hr/>
      </div>
    )
  }

}

export default News;
