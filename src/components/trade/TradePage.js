// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
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