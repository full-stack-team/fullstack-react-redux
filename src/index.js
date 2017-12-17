import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
// import {loadTrades} from './actions/tradeActions';
import {loadAuthors} from './actions/authorActions';
// import {loadCommodities} from './actions/commodityActions';
// import {loadCounterparties} from './actions/counterpartyActions';
// import {loadLocations} from './actions/locationActions';
import {loadCourses} from './actions/courseActions';
import './styles/styles.css'; // Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
// store.dispatch(loadTrades());
// store.dispatch(loadCommodities());
// store.dispatch(loadCounterparties());
// store.dispatch(loadLocations());
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
