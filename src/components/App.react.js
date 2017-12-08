// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from '../components/common/Header.react';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.properties = {
  children: PropTypes.object.isRequired
};

export default App;
