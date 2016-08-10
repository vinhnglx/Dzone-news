require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import Stream from './Stream';

class App extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="blog-post">
            <Stream />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
