// This component handles the App template used on every page.
import React from 'react';//, {PropTypes}
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import Header from '../components/common/Header.react';
const TradePage = require( '../components/trade/TradePage');

const MuiApp = () => (
  <MuiThemeProvider>
    <Header/>
    {/* <TradePage /> */}
  </MuiThemeProvider>
);

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <MuiApp />
        {this.props.children}
      </div>
    );
  }
}

App.properties = {
  children: PropTypes.object.isRequired
};

export default App;
