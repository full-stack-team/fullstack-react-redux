import * as types from '../actions/tradeActionTypes';
import initialState from './initialState';

export default function commodityReducer(state = initialState.commodities, action) {
  switch (action.type) {
    case types.LOAD_COMMODITY:
      return action.commodities;

    default:
      return state;
  }
}
