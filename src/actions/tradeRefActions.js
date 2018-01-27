import * as types from './tradeActionTypes';
import tradeRefApi from '../api/mockTradeRefAPI';

export function loadCommoditiesComplete(commodities) {
    return {type: types.LOAD_COMMODITY, commodities: commodities};
}
export function loadCounterpartiesComplete(counterparties) {
return {type: types.LOAD_COUNTERPARTY, counterparties: counterparties};
}
export function loadLocationsComplete(locations) {
return {type: types.LOAD_LOCATION, locations: locations};
}
export function loadSidesComplete(sides) {
    return {type: types.LOAD_SIDE, sides: sides};
}

export function loadCommodities() {
return function(dispatch) {
    return tradeRefApi.getAllCommodities().then(commodities => {
    dispatch(loadCommoditiesComplete(commodities));
    }).catch(error => {
    throw(error);
    });
};
}

export function loadCounterparties() {
return function(dispatch) {
    return tradeRefApi.getAllCounterparties().then(counterparties => {
    dispatch(loadCounterpartiesComplete(counterparties));
    }).catch(error => {
    throw(error);
    });
};
}

export function loadLocations() {
return function(dispatch) {
    return tradeRefApi.getAllLocations().then(locations => {
    dispatch(loadLocationsComplete(locations));
    }).catch(error => {
    throw(error);
    });
};
}

export function loadSides() {
    return function(dispatch) {
        return tradeRefApi.getSides().then(sides => {
        dispatch(loadSidesComplete(sides));
        }).catch(error => {
        throw(error);
        });
    };
}