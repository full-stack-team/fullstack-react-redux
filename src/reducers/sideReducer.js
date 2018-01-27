import * as types from '../actions/tradeActionTypes';
import initialState from './initialState';

export default function sideReducer(state = initialState.sides, action) {
  switch (action.type) {
    case types.LOAD_SIDE:
      return action.sides;

    default:
      return state;
  }
}
