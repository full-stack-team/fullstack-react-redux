import * as types from '../actions/tradeActionTypes';
import initialState from './initialState';

export default function tradeReducer(state = initialState.trades, action) {
  //switch (action.type) {
    if(action.type===types.LOAD_TRADE)
      {
        console.log('LOAD_TRADE')
        return action.trades
      }
    else if(action.type===types.CREATE_TRADE)
      {return  [//...state//,Object.assign({}, action.trades)
        ...state,
        Object.assign({}, action.trade)
      ];}
    else if(action.type===types.UPDATE_TRADE)
      {return [
        ...state.filter(trade => trade._id !== action.trade._id),
        Object.assign({}, action.trade)
      ];}
    else if(action.type===types.DELETE_TRADE)//{console.log('delete trade reducer:'+ action.trade)
      {
        console.log('DELETE_TRADE')
        return [
        ...state.filter(trade => trade._id !== action.trade._id)//,//Object.assign({}, action.trades)
        ];}
    else
      {
        console.log('else')
        return state;
      }
}