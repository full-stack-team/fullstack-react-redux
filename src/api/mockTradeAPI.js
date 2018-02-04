
import delay from './delay';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['ID'] = '1';

/*Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('-');
};*/

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const trades = [
  {
    _id: 1,
    tradeDate:new Date('2017-12-01'),
    commodity: 'SLR',
    side: 'Buy',
    quantity: 8,
    price: '100',
    counterparty: 'ABC',
    location: 'LON'
  },
  {
    _id: 2,
    tradeDate:new Date('2017-12-31'),
    commodity: 'SLR',
    side: 'Buy',
    quantity: 10,
    price: '200',
    counterparty: 'XYZ',
    location: 'LON'
  },
  {
    _id: 3,
    tradeDate:new Date('2017-12-05'),
    commodity: 'GLD',
    side: 'Buy',
    quantity: 8,
    price: '1000',
    counterparty: 'ABC',
    location: 'NYC'
  },  
  {
    _id: 4,
    tradeDate:new Date('2017-12-15'),
    commodity: 'GLD',
    side: 'Buy',
    quantity: 16,
    price: '2000',
    counterparty: 'XYZ',
    location: 'NYC'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
//not require
/*const generateId = () => {
  //console.log(Math.max.apply(Math,trades.map(function(trade){return trade.id +1;})))
  return Math.max.apply(Math,trades.map(function(trade){return trade._id +1;}));//return trades.id
};*/

class TradeApi {
  static getAllTrades() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        /*trades.forEach(function(trade) {
          console.log('before:'+trade.tradeDate);
          trade['tradeDate']=trade['tradeDate'].yyyymmdd();
          console.log('later:'+trade.tradeDate);
        });*/
        resolve(Object.assign([], trades));
      }, delay);
    });
  }

  static getTempTrades() {
    return trades;
  }

  static saveTrade(trade) {
    //console.log('savetrade:'+JSON.stringify(trade))
    return axios({
      method: 'post',
      url: '/api/createTrade',
      data: trade
    });
  }
  static updateTrade(trade) {
    //console.log('savetrade:'+JSON.stringify(trade))
    return axios({
      method: 'put',
      url: '/api/updateTrade',
      data: trade
    });
  }
  static deleteTrade(trade) {
    //console.log('savetrade:'+JSON.stringify(trade))
    return axios({
      method: 'delete',
      url: '/api/deleteTrade',
      data: trade
    });
  }
  //save trade with mock data
    /*//console.log(trade);
	  trade = Object.assign({}, trade); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minQty = 1;
        if (trade.qty < minQty) {
          reject(`Qty must be at least ${minQty}.`);
        }

        if (trade._id) {
          const existingTradeIndex = trades.findIndex(a => a._id == trade._id);
          trades.splice(existingTradeIndex, 1, trade);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new trades in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          trade._id = generateId();
          //console.log(trade.id)
          trades.push(trade);
        }
        //return trade;
        //console.log(trade)
        resolve(trade);
      }, delay);
      });
    }
      */
    
  

  /*static deleteTrade(tradeToDelete) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //console.log(trades)
        const indexOfTradeToDelete = trades.findIndex(trade => {
          //console.log(JSON.stringify(trade.id == tradeToDelete.id))
          return trade._id == tradeToDelete._id;
        });
        //console.log(indexOfTradeToDelete)
        trades.splice(indexOfTradeToDelete, 1);
        console.log('trades after delete:'+JSON.stringify(trades))
        resolve();
      }, delay);
    });
  }*/
}

export default TradeApi;
