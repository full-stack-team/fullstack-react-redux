import MenuItem from 'material-ui/MenuItem';
import React from "react";
import {sidesItem, locationsItem, 
        counterpartiesItem, commoditiesItem} from './DropdownItemData'

/*const sidesItem = ['Buy', 'Sell']
const locationsItem = ['LON', 'NYC']
const counterpartiesItem = ['ABC', 'XYZ']
const commoditiesItem = ['SLR', 'GLD']
*/

// const sidesData = () => sidesItem;
// const locationsData = () => locationsItem;
// const counterpartiesData = () => counterpartiesItem;
// const commoditiesData = () => commoditiesItem;

const commodities = commoditiesItem.map(commodity => {return <MenuItem value={commodity} key={commodity} primaryText={`${commodity}`} />});
const sides = sidesItem.map(side => {return <MenuItem value={side} key={side} primaryText={`${side}`} />});
const locations = locationsItem.map(side => {return <MenuItem value={side} key={side} primaryText={`${side}`} />});
const counterparties = counterpartiesItem.map(side => {return <MenuItem value={side} key={side} primaryText={`${side}`} />});

//export {sidesData, locationsData, counterpartiesData, commoditiesData};
export {sides, locations, counterparties, commodities};

/*const sidesData = () =>{
  //return sideItems.map(side => {return <MenuItem value={side} key={side} primaryText={`${side}`} />});
  //sidesData.push(<MenuItem value={side} key={side} primaryText={`${side}`} />)
  return sideItems;//sidesData;
}*/


//var sides = ['Buy', 'Sell'].map(side => {return <MenuItem value={side} key={side} primaryText={`${side}`} />});

/*const sideItems = ['Buy', 'Sell']
var sides = () => 
  sideItems.map(side => <MenuItem value={side} key={side} primaryText={`${side}`} />);
*/
/*
const sidesData = [];
const sides = () =>{ sideItems.map(side =>
  sidesData.push(<MenuItem value={side} key={side} primaryText={`${side}`} />)
)
return sidesData
}*/
//export default sides;
//export {locations, counterparties, sides}