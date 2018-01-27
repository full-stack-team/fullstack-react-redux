// This is an action creator
import * as types from './tradeActionTypes';
import tradeApi from '../api/mockTradeAPI';

export function loadTradeComplete(trades) {
  return {type: types.LOAD_TRADE, trades: trades};
}

export function createTradeComplete(trade) {
  return {type: types.CREATE_TRADE, trade};
}

export function updateTradeComplete(trade) {
  return {type: types.UPDATE_TRADE, trade};
}

export function deleteTradeComplete(trade) {
  return {type: types.DELETE_TRADE, trade};
}

export function loadTrades() {
  return function(dispatch) {
    return tradeApi.getAllTrades().then(trades => {
      dispatch(loadTradeComplete(trades));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveTrade(trade) {
  return function (dispatch, getState) {
    return tradeApi.saveTrade(trade).then(savedTrade => {
      trade.id ? dispatch(updateTradeComplete(savedTrade)) :
        dispatch(createTradeComplete(savedTrade));
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteTrade(trade) {
  return function(dispatch) {
    return tradeApi.deleteTrade(trade).then(() => {
      dispatch(deleteTradeComplete(true));
    }).catch(error => {
      throw(error);
    });
  };
}