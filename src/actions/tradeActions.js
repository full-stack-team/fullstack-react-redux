import TradeApi from '../api/tradeApi';
import * as types from './actionTypes';

export function createTradesAction(course) {
  return {type: types.CREATE_TRADES, course};
}

export function updateTradesAction(course) {
  return {type: types.UPDATE_TRADES, course};
}

export function loadTradesAction(trades) {
  return {type: types.LOAD_TRADES, trades};
}

export function loadTrades() {
  return function(dispatch) {
    return TradeApi.getAllTrades().then(trades => {
      dispatch(loadTradesAction(trades));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveTrade(trade) {
  return function (dispatch, getState) {
    return TradeApi.saveTrade(trade).then(savedTrade => {
      course.id ? dispatch(updateTradesAction(savedTrade)) :
        dispatch(createTradesAction(savedTrade));
    }).catch(error => {
      throw(error);
    });
  };
}