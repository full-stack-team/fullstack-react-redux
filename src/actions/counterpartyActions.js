const CounterpartyApi = require('../api/mockCounterpartyApi');
import * as types from './actionTypes';

export function loadCounterpartiesAction(counterparties) {
  return {type: types.LOAD_COUNTERPARTIES, counterparties};
}

export function loadCounterparties() {
  return function(dispatch) {
    return CounterpartyApi.getAllCounterparties().then(counterparties => {
      dispatch(loadCounterpartiesAction(counterparties));
    }).catch(error => {
      throw(error);
    });
  };
}
