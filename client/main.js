import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import Header from './components/header';
import Footer from './components/footer';

Meteor.startup(()=>{
  ReactDOM.render(<Header />, document.querySelector('.render-header'));
  ReactDOM.render(<App />, document.querySelector('.render-target'));
  ReactDOM.render(<Footer />, document.querySelector('.render-footer'));
});
