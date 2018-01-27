import * as types from '../actions/tradeActionTypes';
import initialState from './initialState';

export default function locationReducer(state = initialState.locations, action) {
  switch (action.type) {
    case types.LOAD_LOCATION:
      return action.locations;

    default:
      return state;
  }
}
