import {BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import React, {Component} from 'react';
import TradeAPI from '../../../api/mockTradeAPI';
import CreateTradeForm from './CreateTradeForm'
//import ReactBsTable  from 'react-bootstrap-table';
//var BootstrapTable = ReactBsTable.BootstrapTable;
//var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
let tempProducts = TradeAPI.getTempTrades();

class TradeTable extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {toggle: true};
      // this.state = {
      //   data: products,
      //   page: 1
      // };
    }

    render() {
      return (
        <CreateTradeForm/>
      );
    }
  }

  export default TradeTable;

  