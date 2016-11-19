import React from 'react'
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router'

import App from './components/app';
import ColorTabComponent from './components/colorTabComponent';
import Converter from './components/converter';
import SliderPalette from './components/sliderPalette';
import SelectorContainer from './components/selectorContainer';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ColorTabComponent} />
      <Route path="converter" component={Converter} />
      <Route path="palette" component={SliderPalette} />
      <Route path="selector" component={SelectorContainer} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
