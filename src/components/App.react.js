// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
// import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import Header from '../components/common/Header.react';
const TradePage = require( '../components/trade/TradePage');
// import RaisedButton from 'material-ui/RaisedButton';

// export const TradePageNew  = () => {
// 	return (
//       <div>
//         <h1>Trade</h1>
//         <p>Trade Grid comes here</p>
//         <RaisedButton label="New" />
//       </div>
//     );
//   }


const MuiApp = () => (
  <MuiThemeProvider>
    <Header/>
    {/* <TradePage /> */}
  </MuiThemeProvider>
);

/*ReactDOM.render(
  <App />,
  document.getElementById('app')
);*/

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
