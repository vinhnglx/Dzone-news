import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/Main';
import Category from './components/Category';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={App} />
    </Route>
    <Route path="/categories/:category" component={Category} />
  </Router>
), document.getElementById('dzone-news'));
