import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {sides, locations, counterparties, commodities} from './DropdownItems'
import DatePicker from 'material-ui/DatePicker';
const selectMenuItemStyle = (fieldname) => {
  return ['side', 'commodity', 'location'].includes(fieldname)?{fontSize:13, width:160, textAlign: 'left'}:
    ['counterparty'].includes(fieldname)?{fontSize:13, width:160, textAlign: 'left'}:
    {fontSize:13, width:160, textAlign: 'left'}
}
export default class CreateTradeForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tradeDate: new Date(),
      tradeDateError: "",
      commodity: "",
      commodityError: "",
      side: "",
      sideError: "",
      quantity: "",
      quantityError: "",
      price: "",
      priceError: "",
      counterparty: "",
      counterpartyError: "",
      location: "",
      locationError: ""      
    };
  }

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

  handleDateChange = (event, changeDate) => {
    this.setState({
      tradeDate: changeDate,
    });
  };
  change= e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate =() => {
    let isError = false;
    const errors = {
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
      emailError: "",
      passwordError: ""
    };

    if (this.state.commodity.length < 1) {
      isError = true;
      errors.commodityError = "Please select valid commodity";
    }

    if (this.state.quantity.length < 1) {
      isError = true;
      errors.quantityError = "Please enter valid quantity";
    }

    if (this.state.price.length < 1) {
      isError = true;
      errors.priceError = "Please enter valid price";
    }

    if (this.state.side.length < 1) {
      isError = true;
      errors.sideError = "Please select valid side";
    }
    if (this.state.counterparty.length < 1) {
      isError = true;
      errors.counterpartyError = "Please select valid counterparty";
    }
    if (this.state.location.length < 1) {
      isError = true;
      errors.locationError = "Please select valid location";
    }
    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = (e) => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      this.setState({
        tradeDate: new Date(),
        tradeDateError: "",
        commodity: "",
        commodityError: "",
        side: "",
        sideError: "",
        quantity: "",
        quantityError: "",
        price: "",
        priceError: "",
        counterparty: "",
        counterpartyError: "",
        location: "",
        locationError: "" 
      });
    }
  };

  render() {
    return (
      <form>
        <DatePicker
          name="tradeDate"
          onChange={this.handleDateChange}
          autoOk={true}
          floatingLabelText="Trade Date"
          value={this.state.tradeDate}
          textFieldStyle={{fontSize:13, width:160}}
        />
        <br />
        <SelectField
          name="commodity"
          hintText="Commodity"
          value={this.state.commodity}
          onChange={this.handleCommodityChange}
          errorText={this.state.commodityError}
          maxHeight={200}
          style={selectMenuItemStyle("commodity")}
          menuItemStyle={selectMenuItemStyle("commodity")}
        >
          {commodities}
        </SelectField>
        <br />
        <SelectField
          name="side"
          hintText="Side"
          value={this.state.side}
          onChange={this.handleSideChange}
          errorText={this.state.sideError}
          maxHeight={200}
          style={selectMenuItemStyle("side")}
          menuItemStyle={selectMenuItemStyle("side")}
        >
          {sides}
        </SelectField>
        <br />
        <TextField
          name="quantity"
          hintText="Quantity"
          value={this.state.quantity}
          onChange={e => this.change(e)}
          errorText={this.state.quantityError}
          type="number"
          floatingLabelFixed
          style={{fontSize:13, width:160,  align: 'left'}}
        />
        <br />
        <TextField
          name="price"
          hintText="Price"
          // floatingLabelText="Price"
          value={this.state.price}
          onChange={e => this.change(e)}
          errorText={this.state.priceError}
          type="number"
          floatingLabelFixed
          style={{fontSize:13, width:160, align: 'left'}}
        />
        <SelectField
          name="counterparty"
          hintText="Counterparty"
          value={this.state.counterparty}
          onChange={this.handleCounterpartyChange}
          errorText={this.state.counterpartyError}
          maxHeight={200}
          style={selectMenuItemStyle("counterparty")}
          menuItemStyle={selectMenuItemStyle("counterparty")}
        >
          {counterparties}
        </SelectField>
        <SelectField
          name="location"
          hintText="Location"
          value={this.state.location}
          onChange={this.handleLocationChange}
          errorText={this.state.locationError}
          maxHeight={200}
          style={selectMenuItemStyle("location")}
          menuItemStyle={selectMenuItemStyle("location")}
        >
          {locations}
        </SelectField>
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} backgroundColor="#a4c639" />
      </form>
    );
  }
}