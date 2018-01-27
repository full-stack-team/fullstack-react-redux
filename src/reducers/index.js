import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import commodities from './commodityReducer'
import counterparties from './counterpartyReducer'
import locations from './locationReducer'
import sides from './sideReducer'
import trades from './tradeReducer'

const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  commodities: commodities,
  counterparties: counterparties,
  locations: locations,
  sides: sides,
  trades: trades
});

export default rootReducer;
