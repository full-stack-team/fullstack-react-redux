import {combineReducers} from 'redux';
// import trades from './tradeReducer';
import courses from './courseReducer';
import authors from './authorReducer';


const rootReducer = combineReducers({
  // trades: [],
  // commodities: [],
  // counterparties: [],
  // locations: [],
  courses: courses,
  authors: authors
});

export default rootReducer;
