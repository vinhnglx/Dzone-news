import React from 'react';
import NewsList from './NewsList';
import CategoryList from './CategoryList';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  getFeeds(category) {
    const URL = 'http://feeds.dzone.com/' + category;
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

  componentDidMount() {
    let category = this.props.params.category;
    this.getFeeds(category);
  }

  componentWillUnmount() {
    this.setState({
      data: null
    });
  }

  componentWillReceiveProps(nextProps) {
    let category = nextProps.params.category;
    this.getFeeds(category);
  }

  render() {
    return (
      <section className="row">
        <article className="col-md-8">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-post">
                <NewsList listOfNews={this.state.data} />
              </div>
            </div>
          </div>
        </article>

        <CategoryList />
      </section>
    )
  }
}

export default Category;
