import React from 'react';
let moment = require('moment');

class News extends React.Component {
  render() {
    let news = this.props.entry;
    let desc = news.description;
    let categories;

    categories = news.categories.map(function(category, index) {
      return (
        <a href="javascript:void(0);" className="tag-name" key={index}>
          <span className="label label-default">{category}</span>
        </a>
      )
    });

    return (
      <div>
        <div className="post-preview">
          <a href={news.link} target="_blank">
            <h2 className="post-title">
              {news.title}
            </h2>
            <h5 className="post-subtitle" dangerouslySetInnerHTML={{__html: desc}}></h5>
          </a>

          <p>
            {categories}
          </p>
          <p className="post-meta">Posted by {news.author} on {moment(news.pubDate).format('YYYY-MM-DD hh:mm:ss')}</p>
        </div>
        <hr/>
      </div>
    )
  }

}

export default News;
