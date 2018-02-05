import delay from './delay';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['ID'] = '1';

const sidesItem = ['Buy', 'Sell'];
const locationsItem = ['LON', 'NYC'];
const counterpartiesItem = ['ABC', 'XYZ'];
const commoditiesItem = ['SLR','GLD'];

export {sidesItem, locationsItem, counterpartiesItem, commoditiesItem};

class TradeRefApi {
  
  static getAllCommodities() {
    return axios({
      method: 'get',
      url: '/api/refdata'
    })/*.then(data=>{
      return data.commodity.map(item => item.code);
    })*/
    /*return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], commoditiesItem));
      }, delay);
    });*/
  }

  static getAllCounterparties() {
    return axios({
      method: 'get',
      url: '/api/refdata'
    })/*.then(data=>{
      return data.counterparty.map(item => item.code);
    })*/
    /*return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], counterpartiesItem));
      }, delay);
    });*/
  }

  static getAllLocations() {
    return axios({
      method: 'get',
      url: '/api/refdata'
    })/*.then(data=>{
      return data.location.map(item => item.code);
    })*/
    /*return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], locationsItem));
      }, delay);
    });*/
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
