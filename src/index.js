import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const MaterialApp=()=>(
    <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);
ReactDOM.render(<MaterialApp/>,document.getElementById('root'));
