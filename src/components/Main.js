require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import Stream from './Stream';
import CategoryList from './CategoryList';

class App extends React.Component {
  render() {
    return (
      <section className="row">
        <article className="col-md-8">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-post">
                <Stream />
              </div>
            </div>
          </div>
        </article>

        <CategoryList />
      </section>
    );
  }
}

export default App;
