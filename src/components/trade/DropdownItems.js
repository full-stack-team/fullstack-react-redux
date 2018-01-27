import MenuItem from 'material-ui/MenuItem';
import React from "react";
import {sidesItem, locationsItem, 
        counterpartiesItem, commoditiesItem} from './DropdownData'

const commodities = commoditiesItem.map(commodity => {return <MenuItem value={commodity} key={commodity} primaryText={`${commodity}`} />});
const sides = sidesItem.map(side => {return <MenuItem value={side} key={side} primaryText={`${side}`} />});
const locations = locationsItem.map(location => {return <MenuItem value={location} key={location} primaryText={`${location}`} />});
const counterparties = counterpartiesItem.map(counterparty => {return <MenuItem value={counterparty} key={counterparty} primaryText={`${counterparty}`} />});

const commoditiesDD = (commoditiesToMap)=> commoditiesToMap.map(commodity => {return <MenuItem value={commodity} key={commodity} primaryText={`${commodity}`} />});
const sidesDD = (sidesToMap)=> sidesToMap.map(side => {return <MenuItem value={side} key={side} primaryText={`${side}`} />});
const locationsDD = (locationsToMap)=> locationsToMap.map(location => {return <MenuItem value={location} key={location} primaryText={`${location}`} />});
const counterpartiesDD = (counterpartiesToMap)=> counterpartiesToMap.map(counterparty => {return <MenuItem value={counterparty} key={counterparty} primaryText={`${counterparty}`} />});

export {sides, locations, counterparties, commodities
        , commoditiesDD, counterpartiesDD, locationsDD, sidesDD};