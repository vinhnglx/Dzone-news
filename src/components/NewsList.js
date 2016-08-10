import React from 'react';
import News from './News';

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listOfNews: null };
  }

  componentWillReceiveProps(nextProps) {
    let nextList = nextProps.listOfNews;

    this.setState({
      listOfNews: nextList
    });
  }

  render() {
    let listOfNews = this.state.listOfNews;
    let entries;

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
}

export default NewsList;

