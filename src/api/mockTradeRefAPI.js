import delay from './delay';
//import React from "react";

const sidesItem = ['Buy', 'Sell'];
const locationsItem = ['LON', 'NYC'];
const counterpartiesItem = ['ABC', 'XYZ'];
const commoditiesItem = ['SLR','GLD'];

export {sidesItem, locationsItem, counterpartiesItem, commoditiesItem};

class TradeRefApi {
  
  static getAllCommodities() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], commoditiesItem));
      }, delay);
    });
  }

  static getAllCounterparties() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], counterpartiesItem));
      }, delay);
    });
  }

  static getAllLocations() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], locationsItem));
      }, delay);
    });
  }

  static getSides() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], sidesItem));
      }, delay);
    });
  }
  //static getTempTrades() {return trades;}
}

export default TradeRefApi;
