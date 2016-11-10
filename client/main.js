import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory} from 'react-router'

import App from './components/app';
import Converter from './components/converter';
import SliderPalette from './components/sliderPalette';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Converter} />
      <Route path="converter" component={Converter} />
      <Route path="sliderpalette" component={SliderPalette} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
