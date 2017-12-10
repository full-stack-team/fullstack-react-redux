import LocationApi from '../api/locationApi';
import * as types from './actionTypes';

export function loadLocationsAction(locations) {
  return {type: types.LOAD_LOCATIONS, locations};
}

export function loadLocations() {
  return function(dispatch) {
    return LocationApi.getAllTrades().then(locations => {
      dispatch(loadLocationAction(locations));
    }).catch(error => {
      throw(error);
    });
  };
}
