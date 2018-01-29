// This component handles the App template used on every page.
import React from 'react';//, {PropTypes}
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TradeTab from './TradeTab'

const MuiAppNew = () => (
  <MuiThemeProvider>
    <TradeTab/>
  </MuiThemeProvider>
);

const TradePage  = () => {
	return (
      <div>
        <MuiAppNew/>
      </div>
    );
  }

  export default TradePage;