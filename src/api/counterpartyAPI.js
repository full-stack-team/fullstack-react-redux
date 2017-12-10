import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const counterparties = [
  {
    id: '1',
    name: 'NMC'
  },
  {
    id: '2',
    name: 'SMC'
  }
];

class CounterpartyApi {
  static getAllcounterparties() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], counterparties));
      }, delay);
    });
  }
}

export default CounterpartyApi;
