import * as types from '../actions/tradeActionTypes';
import initialState from './initialState';

export default function tradeReducer(state = initialState.trades, action) {
  switch (action.type) {
    case types.LOAD_TRADE:
      return action.trades;

    case types.CREATE_TRADE:
      return  [
        ...state,
        Object.assign({}, action.trades)
      ];

    case types.UPDATE_TRADE:
      return [
        ...state.filter(trade => trade.id !== action.trade.id),
        Object.assign({}, action.trades)
      ];
    
    case types.DELETE_TRADE:
      return [
        ...state.filter(trade => trade.id !== action.trade.id)//,
        //Object.assign({}, action.trades)
      ];

    default:
      return state;
  }
}