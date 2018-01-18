import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {sides, locations, counterparties, commodities} from './DropdownItems'
import DatePicker from 'material-ui/DatePicker';

const isDate = (data) => {
  return Object.prototype.toString.call(data) === '[object Date]'?true:false
}

const serachFormStyle = {
  display: 'flex'
};
const datePickerStyle = {fontSize:13, width:'100%'}
const buttonContainerStyle = {boxShadow:0}
//const priceStyle = {fontSize:13, width:'40%',  align: 'left', marginLeft:10}
//const quantityStyle = {fontSize:13, width:'25%', align: 'left', marginLeft:10}
const buttonStyle = {marginLeft:10, marginTop:'60%'}

const selectFieldStyle = (fieldname) => {
  return ['side', 'commodity', 'location'].includes(fieldname)?{fontSize:13, width:'30%', textAlign: 'left', marginLeft:10}:
    ['counterparty'].includes(fieldname)?{fontSize:13, width:'40%', textAlign: 'left', marginLeft:10}:
    {fontSize:13, width:'15%', textAlign: 'left', marginLeft:10}
}

const selectMenuItemStyle = (fieldname) => {
  return ['side', 'commodity', 'location'].includes(fieldname)?{fontSize:13, width:'80%', textAlign: 'left', marginLeft:10}:
    ['counterparty'].includes(fieldname)?{fontSize:13, width:'80%', textAlign: 'left', marginLeft:10}:
    {fontSize:13, width:'80%', textAlign: 'left', marginLeft:10}
}

export default class SearchTradeForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tradeDateFrom: null,
      tradeDateTo: null,
      commodity: "",
      side: "",
      counterparty: "",
      location: ""
    };
  }
  handleFromDateChange = (event, changeDate) => {
    this.setState({
      tradeDateFrom: changeDate,
    });
  };
  handleToDateChange = (event, changeDate) => {
    this.setState({
      tradeDateTo: changeDate,
    });
  };
  handleLocationChange = (event, index, location) => {
    this.setState({location})
  };
  handleCounterpartyChange = (event, index, counterparty) => {
    this.setState({counterparty})
  };
  handleSideChange = (event, index, side) => {
    this.setState({side})
  };
  handleCommodityChange = (event, index, commodity) => {
    this.setState({commodity})
  };

  clearSearchFilter = () => {
    this.setState({
      tradeDateFrom: null,
      tradeDateTo: null,
      commodity: "",
      side: "",
      counterparty: "",
      location: "",
    });
    this.props.clearSearchFilter();
  }

  searchFilter = (e) => {
    e.preventDefault();
    var filterCriteria = [];

    if(isDate(this.state.tradeDateFrom))
    filterCriteria.push({key:'tradeDateFrom', value:this.state.tradeDateFrom})
    
    if(isDate(this.state.tradeDateTo))
    filterCriteria.push({key:'tradeDateTo', value:this.state.tradeDateTo})

    if(this.state.commodity.length>0)
    filterCriteria.push({key:'commodity', value:this.state.commodity})

    if(this.state.side.length>0)
    filterCriteria.push({key:'side', value:this.state.side})

    if(this.state.location.length>0)
    filterCriteria.push({key:'location', value:this.state.location})

    if(this.state.counterparty.length>0)
    filterCriteria.push({key:'counterparty', value:this.state.counterparty})
    
    this.props.searchFilter(filterCriteria);
  };

  render() {
    return (
      <form style={serachFormStyle} >
      &nbsp;&nbsp;&nbsp;
        <DatePicker
          name="tradeDateFrom"
          autoOk={true}
          floatingLabelText="Date From"
          floatingLabelFixed={true}
          value={this.state.tradeDateFrom}
          textFieldStyle={datePickerStyle}
          onChange={this.handleFromDateChange}
        />
        <br />
        &nbsp;&nbsp;&nbsp;
        <DatePicker
          name="tradeDateTo"
          autoOk={true}
          floatingLabelText="Date To"
          floatingLabelFixed={true}
          value={this.state.tradeDateTo}
          textFieldStyle={datePickerStyle}
          onChange={this.handleToDateChange}
        />
        <br />
        &nbsp;&nbsp;&nbsp;        
        <SelectField
          name="commodity"
          hintText="Commodity"
          floatingLabelText="Commodity"
          floatingLabelFixed={true}          
          value={this.state.commodity}
          maxHeight={200}
          style={selectFieldStyle("commodity")}
          menuItemStyle={selectMenuItemStyle("commodity")}
          onChange={this.handleCommodityChange}
        >
          {commodities}
        </SelectField>
        <br />
        <SelectField
          name="side"
          hintText="Side"
          floatingLabelText="Side"
          floatingLabelFixed={true}          
          value={this.state.side}
          maxHeight={200}
          style={selectFieldStyle("side")}
          menuItemStyle={selectMenuItemStyle("side")}
          onChange={this.handleSideChange}
        >
          {sides}
        </SelectField>
        <br />
        <SelectField
          name="counterparty"
          hintText="Counterparty"
          floatingLabelText="Counterparty"
          floatingLabelFixed={true}          
          value={this.state.counterparty}
          maxHeight={200}
          style={selectFieldStyle("counterparty")}
          menuItemStyle={selectMenuItemStyle("counterparty")}
          onChange={this.handleCounterpartyChange}
        >
          {counterparties}
        </SelectField>
        <SelectField
          name="location"
          hintText="Location"
          floatingLabelText="Location"
          floatingLabelFixed={true}           
          value={this.state.location}
          maxHeight={200}
          style={selectFieldStyle("location")}
          menuItemStyle={selectMenuItemStyle("location")}
          onChange={this.handleLocationChange}
        >
          {locations}
        </SelectField>
        <br />
        <div style={buttonContainerStyle}>
        <RaisedButton label="Clear" backgroundColor="#FF8D33" onClick={e => this.clearSearchFilter()} 
          style={buttonStyle}
        />
        </div>
        <div style={buttonContainerStyle}>
        <RaisedButton label="Search" backgroundColor="#a4c639" color="#FFFFFF" 
          onClick={e => this.searchFilter(e)} 
          style={buttonStyle}
        />
        </div>
      </form>
    );
  }
}
