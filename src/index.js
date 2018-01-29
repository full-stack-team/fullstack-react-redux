import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadAuthors} from './actions/authorActions';
import {loadCourses} from './actions/courseActions';
import './styles/styles.css'; // Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {loadTrades} from './actions/tradeActions';
import {loadCommodities, loadCounterparties, loadLocations
  , loadSides} from './actions/tradeRefActions';

const store = configureStore();

store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(loadCommodities());
store.dispatch(loadCounterparties());
store.dispatch(loadLocations());
store.dispatch(loadSides());
store.dispatch(loadTrades());

render(
  <Provider store={store}>
    <Router store={store} history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);

export default store;