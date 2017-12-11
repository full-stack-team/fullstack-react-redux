import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const trades = [
  {
    id: '1',
    commodity: 'Silver',
    side: 'Buy',
    qty: '8',
    price: '100',
    counterparty: 'NMC',
    location: 'LON'
  },
  {
    id: '2',
    commodity: 'Silver',
    side: 'Buy',
    qty: '10',
    price: '200',
    counterparty: 'NMC',
    location: 'LON'
  },
  {
    id: '3',
    commodity: 'Gold',
    side: 'Buy',
    qty: '8',
    price: '1000',
    counterparty: 'SMC',
    location: 'NYC'
  },  
  {
    id: '4',
    commodity: 'Gold',
    side: 'Buy',
    qty: '16',
    price: '2000',
    counterparty: 'SMC',
    location: 'NYC'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (trades) => {
  Math.max.apply(Math,trades.map(function(trade){return trade.id +1;}));//return trades.id
};

class TradeApi {
  static getAllTrades() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], trades));
      }, delay);
    });
  }

  static getTempTrades() {return trades;}

  static saveTrade(trade) {
	trade = Object.assign({}, trade); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minQty = 1;
        if (trade.qty < minQty) {
          reject(`Qty must be at least ${minQty}.`);
        }

        if (trade.id) {
          const existingTradeIndex = trades.findIndex(a => a.id == trade.id);
          trades.splice(existingTradeIndex, 1, trade);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new trades in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          trade.id = generateId(trade);
          trades.push(trade);
        }

        resolve(trade);
      }, delay);
    });
  }

  static deleteTrade(tradeId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfTradeToDelete = trades.findIndex(trade => {
          trade.tradeId == tradeId;
        });
        trades.splice(indexOfTradeToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default TradeApi;
