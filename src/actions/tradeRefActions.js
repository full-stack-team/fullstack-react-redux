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
    return tradeRefApi.getAllCommodities().then(data => {
        //console.log(data.data[0].commodity)
        let commodities =data.data[0].commodity.map(function(item) {
            return (item.code);
        });
        //console.log(commodities)
        dispatch(loadCommoditiesComplete(commodities));
    }).catch(error => {
    throw(error);
    });
};
}

export function loadCounterparties() {
return function(dispatch) {
    return tradeRefApi.getAllCounterparties().then(data => {
        let counterparties= data.data[0].counterparty.map(function(item) {
            return (item.code);
        });
        dispatch(loadCounterpartiesComplete(counterparties));
    }).catch(error => {
    throw(error);
    });
};
}

export function loadLocations() {
return function(dispatch) {
    return tradeRefApi.getAllLocations().then(data => {
        let locations = data.data[0].location.map(function(item) {
            return (item.code);
        });
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