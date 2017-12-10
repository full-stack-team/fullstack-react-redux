import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const locations = [
  {
    id: '1',
    name: 'LON'
  },
  {
    id: '2',
    name: 'NYC'
  }
];

class LocationApi {
  static getAllLocations() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], locations));
      }, delay);
    });
  }
}

export default LocationApi;
