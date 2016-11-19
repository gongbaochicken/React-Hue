import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navigation from './navigation';
import Footer from './footer';

const muiTheme = getMuiTheme({
  slider: {
    trackColor: '#2ecc71',
    selectionColor: '#3498db',
    trackSize: 10,
    handleSize: 20
  },
});

export default (props) => {
  return(
    <div>
    <Navigation />
    <MuiThemeProvider  muiTheme={muiTheme}>
     {props.children}
    </MuiThemeProvider>
    <Footer />
    </div>
  );
};
