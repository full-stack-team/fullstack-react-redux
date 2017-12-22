import {BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import React, {Component} from 'react';
import TradeAPI from '../../../api/mockTradeAPI';

//import ReactBsTable  from 'react-bootstrap-table';
//var BootstrapTable = ReactBsTable.BootstrapTable;
//var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
let tempProducts = TradeAPI.getTempTrades();

let products = [{
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

  const cellEditProp = {
    mode: 'dbclick'
  };

  class TradeTable extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {toggle: true};
      // this.state = {
      //   data: products,
      //   page: 1
      // };
      this.eventHandler = this.eventHandler.bind(this);
    }
      // this.editFormatter = (cell, row) => {
      //   return(
      //     <div>
      //       <button onClick={()=>this.editObject(row)}><Icon glyph="glyphicon glyphicon-pencil"/></button>
      //       <button onClick={()=>this.deleteObject(row)}><Icon glyph="glyphicon glyphicon-trash"/></button>
      //     </div>
      //       // <ButtonGroup>
      //       //     <Button xs outlined onlyOnHover onClick={()=>this.editObject(row)}    bsStyle="green"><Icon glyph="icon-fontello-edit-1"/></Button>
      //       //     <Button xs outlined onlyOnHover onClick={()=>this.deleteObject(row)}  bsStyle="danger"><Icon glyph="icon-fontello-trash-1"/></Button>
      //       // </ButtonGroup>
      //   )
      // }

    // this.editObject = (row) => {
    //     console.log('edit',row);
    // };

    // this.deleteObject = (row) => {
    //     console.log('delete object',row);
    // };
    /*this.componentDidMount = () => {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.innerHTML = "function handleDelete(){alert('hi')}";
      this.instance.appendChild(s);
    }*/
      /*this.createCustomDeleteButton = (onClick) => {
        return (
          <button style={ { color: 'red' } } onClick={ onClick }>Delete rows</button>
        );
      }
      this.options = {
        deleteBtn: this.createCustomDeleteButton
      };*/
    
      eventHandler(event) {
        alert('clicked')
        // this.setState((prevState) => ({
        //     toggle: !prevState.toggle
        //   })
        // );
      }
      actionFormatter(cell, row) {//${JSON.stringify(row)
        
        return `<div>
                <button onClick=${this.eventHandler}><i class='glyphicon glyphicon-trash'></i></button>
              </div>`;
        // return `<div align="center"><button onClick="alert('${row.id}')">
        //       <i class='glyphicon glyphicon-trash'>
        //       </i></button></div>
        //       `;
        //glyphicon glyphicon-trash
        //glyphicon glyphicon-ok
        //glyphicon glyphicon-plus
        //glyphicon glyphicon-remove
        //glyphicon glyphicon-pencil
      }

    render() {
      return (//selectRow={selectRowProp}//options={this.options} deleteRow 
        <BootstrapTable data={tempProducts} insertRow cellEdit={cellEditProp} striped hover>
            <TableHeaderColumn isKey dataField="id" editable={false}>Trade ID</TableHeaderColumn>
            <TableHeaderColumn dataField="commodity">Commodity</TableHeaderColumn>
            <TableHeaderColumn dataField="side">Side</TableHeaderColumn>
            <TableHeaderColumn dataField="qty">Quantity in gms</TableHeaderColumn>
            <TableHeaderColumn dataField="price">Price</TableHeaderColumn>
            <TableHeaderColumn dataField="counterparty" dataSort={true}>Counter Party</TableHeaderColumn>
            <TableHeaderColumn dataField="location">Location</TableHeaderColumn>
            {/* <TableHeaderColumn key="editAction" dataField="editId" width="120" dataFormat={this.editFormatter} editable={false} ></TableHeaderColumn> */}
            <TableHeaderColumn dataFormat={ this.actionFormatter } editable={false} ></TableHeaderColumn>
        </BootstrapTable>
      );
    }
  }

  export default TradeTable;