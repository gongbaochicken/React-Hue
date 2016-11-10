import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './header';
import Footer from './footer';

export default (props) => {
  return(
    <div>
    <Header />
    <MuiThemeProvider>
     {props.children}
    </MuiThemeProvider>
    <Footer />
    </div>
  );
};
