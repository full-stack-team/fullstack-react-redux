import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function tradeReducer(state = initialState.trades, action) {
  switch (action.type) {
    case types.LOAD_TRADES:
      return action.trades;

    default:
      return state;
  }
}
