import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const commodities = [
  {
    id: '1',
    name: 'Silver'
  },
  {
    id: '2',
    name: 'Gold'
  }
];

class CommodityApi {
  static getAllCommodities() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], commodities));
      }, delay);
    });
  }
}

export default CommodityApi;
