import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function commodityReducer(state = initialState.commodities, action) {
  switch (action.type) {
    case types.LOAD_COMMODITIES:
      return action.commodities;

    default:
      return state;
  }
}
