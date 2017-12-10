import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import React, {Component} from 'react';
import TradeAPI from '../../../api/tradeAPI';

//import ReactBsTable  from 'react-bootstrap-table';
//var BootstrapTable = ReactBsTable.BootstrapTable;
//var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
var tempProducts = TradeAPI.getTempTrades();

var products = [{
      id: 1,
      name: "Product1",
      price: 120
  }, {
      id: 2,
      name: "Product2",
      price: 80
  }];

  const selectRowProp = {
    mode: 'checkbox'
  };

  class TradeTable extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        data: products,
        page: 1
      };
    }

    render() {
      return (
        <BootstrapTable data={tempProducts} deleteRow={ true } insertRow={ true }  selectRow={ selectRowProp } striped hover>
            <TableHeaderColumn isKey dataField='id'>Trade ID</TableHeaderColumn>
            <TableHeaderColumn dataField='commodity'>Commodity</TableHeaderColumn>
            <TableHeaderColumn dataField='side'>Side</TableHeaderColumn>
            <TableHeaderColumn dataField='qty'>Quantity in gms</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
            <TableHeaderColumn dataField='counterparty'>Counter Party</TableHeaderColumn>
            <TableHeaderColumn dataField='location'>Location</TableHeaderColumn>
        </BootstrapTable>
      );
    }
  }

  export default TradeTable;