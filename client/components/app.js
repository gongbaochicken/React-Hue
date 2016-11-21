import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navigation from '../layout/navigation';
import Footer from '../layout/footer';

const muiTheme = getMuiTheme({
  slider: {
    trackColor: '#146eb4',
    selectionColor: '#fd5c63',
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
