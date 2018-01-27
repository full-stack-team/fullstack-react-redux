import * as types from '../actions/tradeActionTypes';
import initialState from './initialState';

export default function counterpartyReducer(state = initialState.counterparties, action) {
  switch (action.type) {
    case types.LOAD_COUNTERPARTY:
      return action.counterparties;

    default:
      return state;
  }
}
