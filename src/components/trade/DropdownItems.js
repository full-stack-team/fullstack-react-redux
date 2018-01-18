import MenuItem from 'material-ui/MenuItem';
import React from "react";
import {sidesItem, locationsItem, 
        counterpartiesItem, commoditiesItem} from './DropdownItemData'

const commodities = commoditiesItem.map(commodity => {return <MenuItem value={commodity} key={commodity} primaryText={`${commodity}`} />});
const sides = sidesItem.map(side => {return <MenuItem value={side} key={side} primaryText={`${side}`} />});
const locations = locationsItem.map(side => {return <MenuItem value={side} key={side} primaryText={`${side}`} />});
const counterparties = counterpartiesItem.map(side => {return <MenuItem value={side} key={side} primaryText={`${side}`} />});

export {sides, locations, counterparties, commodities};