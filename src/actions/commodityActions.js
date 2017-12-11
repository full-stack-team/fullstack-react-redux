const CommodityApi =require('../api/mockCommodityApi');
import * as types from './actionTypes';

export function loadCommodityAction(commodities) {
  return {type: types.LOAD_COMMODITIES, commodities};
}

export function loadCommodities() {
  return function(dispatch) {
    return CommodityApi.getAllCommodities().then(commodities => {
      dispatch(loadCommodityAction(commodities));
    }).catch(error => {
      throw(error);
    });
  };
}
