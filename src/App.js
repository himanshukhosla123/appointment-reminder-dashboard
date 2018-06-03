import React from 'react';
import Header from './components/header.js';
import MainBox from './components/MainBox.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class App extends React.Component{

    render() {
      return (
      <div> 
         {/* <MuiThemeProvider> */}
          <Header/> 
          <MainBox/> 
          {/* </MuiThemeProvider>            */}
      </div>);
    }

  }

  export default App;
  