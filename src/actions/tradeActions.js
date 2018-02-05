// This is an action creator
import * as types from './tradeActionTypes';
import tradeApi from '../api/mockTradeAPI';
import io from 'socket.io-client';

let dispatchTrade = {};
let socket = io('http://localhost:3000');

socket.on('connect', function (data) {
  console.log('Socket connected...')
});

socket.on("chat message", trade => {
  //console.log(JSON.stringify(trade).replace(/\\/g, ''))
  let newTrade = JSON.stringify(trade);
  let parsedTrade = JSON.parse(newTrade.substring(1, newTrade.length - 1).replace(/\\/g, ''));
  //console.log(new Date(parsedTrade['tradeDate']))
  parsedTrade['tradeDate']=(new Date(parsedTrade['tradeDate']));

  receivedTrade(parsedTrade);
});
    
export function loadTradeComplete(trades) {
  console.log('loadTradeComplete'+JSON.stringify(trades))
  return {type: types.LOAD_TRADE, trades: trades};
}

export function createTradeComplete(trade) {
  console.log('createTradeComplete'+JSON.stringify(trade))
  return {type: types.CREATE_TRADE, trade};
}

/*export function receiveTradeComplete(trade) {
  console.log('receiveTradeComplete')
  return {type: types.RECEIVED_TRADE, trade};
}*/

export function updateTradeComplete(trade) {
  console.log('updateTradeComplete'+JSON.stringify(trade))
  return {type: types.UPDATE_TRADE, trade};
}

export function deleteTradeComplete(trade) {
  console.log('deleteTradeComplete:'+JSON.stringify(trade))
  return {type: types.DELETE_TRADE, trade};
}

export function loadTrades() {
  console.log('loadTade1:')
  return function(dispatch) {
    return tradeApi.getAllTrades().then(trades => {
      console.log('loadTade:In')
      
      trades.data.forEach(function(trade) {
        console.log('before:'+trade.tradeDate);
        trade['tradeDate']=new Date(trade['tradeDate']);//.yyyymmdd();
        console.log('later:'+trade.tradeDate);
      })

      dispatch(loadTradeComplete(trades.data));
    }).catch(error => {
      console.log('loadTade:err')
      throw(error);
    });
  };
}

export function saveTrade(trade) {
  return function (dispatch, getState) {
    console.log('in save trade')
    dispatchTrade = dispatch;
    if(!trade._id)  {
      return tradeApi.saveTrade(trade).then(savedTrade => {
        console.log('add trade received:'+ JSON.stringify(savedTrade))
        //dispatch(createTradeComplete(savedTrade));
      });
    }
    else{
      return tradeApi.updateTrade(trade).then(updatedTrade => {
        console.log('update trade received:'+ JSON.stringify(updatedTrade))
        //dispatch(updateTradeComplete(updatedTrade))
    });
  }
    /*return tradeApi.saveTrade(trade).then(savedTrade => {
      trade._id ? dispatch(updateTradeComplete(savedTrade)) :
        dispatch(createTradeComplete(savedTrade));
    }).catch(error => {
      throw(error);
    });*/
  };
}

export function receivedTrade(trade) {
  //return function (dispatch, getState) {
    //console.log('received dispatch:'+trade)
    //console.log('received:'+JSON.stringify(trade))
    console.log('received trade:'+ JSON.stringify(trade))
    if(trade.status ==='created') dispatchTrade(createTradeComplete(trade));
    if(trade.status ==='updated') dispatchTrade(updateTradeComplete(trade));
    if(trade.status ==='deleted') dispatchTrade(deleteTradeComplete(trade));
    //dispatchTrade(receiveTradeComplete(trade));
  //};
}

export function deleteTrade(trade) {
  return function(dispatch) {
    dispatchTrade = dispatch;
    console.log('delete trade action:'+JSON.stringify(trade))
    return tradeApi.deleteTrade(trade).then((deleteTrade) => {
      console.log('delete trade received:'+deleteTrade)
      //dispatch(deleteTradeComplete(deleteTrade));
    }).catch(error => {
      throw(error);
    });
  };
}

