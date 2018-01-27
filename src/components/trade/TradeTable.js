import React, {PropTypes} from 'react';
import {Table,TableBody,TableHeader,TableHeaderColumn,TableRow,
        TableRowColumn} from "material-ui/Table";

 import {sides, locations, counterparties, commodities
        , commoditiesDD, counterpartiesDD, locationsDD, sidesDD} from './DropdownItems'
import EditIcon from "material-ui/svg-icons/image/edit";
import TrashIcon from "material-ui/svg-icons/action/delete";
import CheckIcon from "material-ui/svg-icons/navigation/check";
import TextField from "material-ui/TextField";
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';

  const tableCheckStyle= {checkVisibility : false}
  
  Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('-');
};
const convertObjectToCellValue = (cellValue) => {
  return Object.prototype.toString.call(cellValue) === '[object Date]'?cellValue.yyyymmdd():cellValue
}
const fieldTypeWidth = (fieldname) => {
  return fieldname=='tradeDate'?115:
    ['side', 'commodity', 'location'].includes(fieldname)?80:
    ['counterparty'].includes(fieldname)?180:
    ['quantity', 'price'].includes(fieldname)?150:10
}
const selectMenuItemStyle = (fieldname) => {
  return ['side', 'commodity', 'location'].includes(fieldname)?{fontSize:13, width:90}:
    ['counterparty'].includes(fieldname)?{fontSize:13, width:155}:{fontSize:13, width:100}
}


const rowCell = (x, y, i, handleChange, handleDateChange, handleDDChange
  , DDItems) =>{
  return (
    y.prop=='tradeDate'?
      <DatePicker
        name={y.prop}
        value={x[y.prop]}
        onChange={(e,dt) => handleDateChange(e,dt,i)}
        autoOk={true}
        textFieldStyle={{fontSize:13}}
      />
    :['side', 'counterparty', 'location', 'commodity'].includes(y.prop)?
      <SelectField
        name={y.prop}
        value={convertObjectToCellValue(x[y.prop])}
        onChange={(event, index, value) => handleDDChange(event, index, value, y.prop, i)}
        maxHeight={200}
        menuItemStyle={selectMenuItemStyle(y.prop)}
        style={selectMenuItemStyle(y.prop)}        
      >
      {y.prop=='side'? sidesDD(DDItems.sides) 
      :y.prop=='counterparty'?counterpartiesDD(DDItems.counterparties)
      :y.prop=='commodity'?commoditiesDD(DDItems.commodities): locationsDD(DDItems.locations)
      }
      </SelectField>
    : //y.prop.includes('quantity', 'commodity', 'price')
      <TextField
        name={y.prop}
        value={convertObjectToCellValue(x[y.prop])}
        onChange={e => handleChange(e, y.prop, i)}
        style={{fontSize:13}}
        type="number"
        // type="number"
      />
  )
}

const row = (
  x,
  i,
  header,
  handleRemove,
  startEditing,
  editIdx,
  handleChange,
  stopEditing,
  handleDateChange,
  handleDDChange,
  DDItems
) => {
  const currentlyEditing = editIdx === i;
  return (
    <TableRow key={`tr-${i}`} selectable={false}>
      {header.map((y, k) => (
        <TableRowColumn key={`trc-${k}`} style={{width:fieldTypeWidth(y.prop)}}>
          {currentlyEditing ? (
            rowCell(x,y,i, handleChange, handleDateChange, handleDDChange, DDItems)
          ) 
          : (
            convertObjectToCellValue(x[y.prop])
          )}
        </TableRowColumn>
      ))}
      <TableRowColumn>
        {currentlyEditing ? (
          <CheckIcon onClick={() => stopEditing()} />
        ) : (
          <EditIcon onClick={() => startEditing(i)} />
        )}
      </TableRowColumn>
      <TableRowColumn>
        <TrashIcon onClick={() => handleRemove(i)} />
      </TableRowColumn>
    </TableRow>
  );
};

const TradeTable = ({
  data,
  header,
  handleRemove,
  startEditing,
  editIdx,
  handleChange,
  stopEditing,
  handleDateChange,
  handleDDChange,
  DDItems
}) => (
  <Table>
    <TableHeader
    displaySelectAll={tableCheckStyle.checkVisibility}
    adjustForCheckbox={tableCheckStyle.checkVisibility}
    enableSelectAll={tableCheckStyle.checkVisibility}
    >
      <TableRow>
        {header.map((x, i) => (
          <TableHeaderColumn key={`thc-${i}`} style={{width:fieldTypeWidth(x.prop)}}>
            {x.name}
          </TableHeaderColumn>
        ))}
        <TableHeaderColumn />
        <TableHeaderColumn />
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={tableCheckStyle.checkVisibility}>
      {data.map((x, i) =>
        row(
          x,
          i,
          header,
          handleRemove,
          startEditing,
          editIdx,
          handleChange,
          stopEditing,
          handleDateChange,
          handleDDChange,
          DDItems
        )
      )}
    </TableBody>
  </Table>
);

TradeTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default TradeTable