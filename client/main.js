import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import Header from './components/header';

Meteor.startup(()=>{
  ReactDOM.render(<Header />, document.querySelector('.header-target'));
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});
