import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function tradeReducer(state = initialState.trades, action) {
  switch (action.type) {
    case types.LOAD_TRADES:
      return action.trades;
    
    case types.CREATE_TRADES:
      return  [
        ...state,
        Object.assign({}, action.trade)
      ];

    case types.UPDATE_TRADES:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.trade)
      ];

    default:
      return state;
  }
}