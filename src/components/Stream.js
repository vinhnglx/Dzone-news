import React from 'react';
import NewsList from './NewsList';

class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    const URL = 'http://feeds.dzone.com/home';
    let streamComponent = this;

    feednami.load(URL, function(result) {
      if (result.error) {
        //console.log(result.error)
      }

      let entriesData = result.feed.entries;

      streamComponent.setState({
        data: entriesData
      });
    });
  }

  render() {
    return (
      <NewsList listOfNews={this.state.data} />
    )
  }
}

export default Stream;

