import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function counterpartyReducer(state = initialState.counterparties, action) {
  switch (action.type) {
    case types.LOAD_COUNTERPARTIES:
      return action.counterparties;

    default:
      return state;
  }
}
