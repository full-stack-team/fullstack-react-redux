// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from '../components/common/Header.react';
// import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TraderCard from '../components/mui/presentation/TradeCard';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const MuiApp = () => (
  <MuiThemeProvider>
    <TraderCard />
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
        <Header/>
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
