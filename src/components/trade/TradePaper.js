import React, { Component } from "react";
import Paper from 'material-ui/Paper';
import TradeTable from './TradeTable';
import CreateTradeForm from './CreateTradeForm'
import SearchTradeForm from './SearchTradeForm'

import "../../styles/TradePaperApp.css";

const serachPaperstyle = {
  height: 100,
  width: 1160,
  margin: 5,
  textAlign: 'center',
  display: 'flex'
};

const tablePaperstyle = {
  height: 475,
  width: 940,/*470 */
  margin: 5,
  textAlign: 'center',
  display: 'inline-block'
};

const editPaperstyle = {
  height: 475,
  width: 200,
  margin: 5,
  textAlign: 'center',
  display: 'inline-block'
};
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
};

// const TradePaper = () => (
//   <div style={styles.root}>
//     <Paper style={serachPaperstyle} zDepth={2} />
//     <Paper style={tablePaperstyle} zDepth={2} > 
//     </Paper>
//     <Paper style={editPaperstyle} zDepth={2}>
//       <CreateTradeForm/>
//     </Paper>
//   </div>
// );

class TradeApp extends Component {
  state = {
    data: [],
    backData: [],
    editIdx: -1
  };

  handleRemove = i => {
    this.setState(state => ({
      data:state.data.filter((row, j) => j !== i)
    }));
  };

  clearSearchFilter = () => {
    if(this.state.backData.length>0){
      this.setState(state => ({
        data:this.state.backData
      }))
    }
  }

  searchFilter = filterCriteria => {
    let isMatch = false;
    let isTradeFromDate = false;

    if((filterCriteria == null || filterCriteria == undefined)) return;

    let filteredData = this.state.data.filter((row, j) => {
      isMatch = false;
      isTradeFromDate=false;

      filterCriteria.some((eachCondition,index,_arr)=>{ 
        console.log(eachCondition)

        if(eachCondition.key == 'tradeDateFrom'){
          if(eachCondition.value && row.tradeDate>=eachCondition.value){
            isMatch = true;
            isTradeFromDate = true;
          }
          else {
            isMatch = false; 
            return true;//break
          }
        }
        
        if(eachCondition.key == 'tradeDateTo'){
          if(eachCondition.value && row.tradeDate<=eachCondition.value){
            isMatch = isTradeFromDate && !isMatch?false:true;
          }
          else {
            isMatch = false; 
            return true;//break
          }
        }

        if(eachCondition.key == 'commodity'){
          console.log('commodity')
          console.log(row.commodity)
          if(eachCondition.value && row.commodity==eachCondition.value){
            isMatch = true
          }
          else{
            isMatch = false
            return true;//break
          }
        }

        if(eachCondition.key == 'side'){
          if(eachCondition.value && row.side==eachCondition.value){
            isMatch = true
          }
          else{
            isMatch = false
            return true;//break
          }
        }

        if(eachCondition.key == 'counterparty'){
          if(eachCondition.value && row.counterparty==eachCondition.value){
            isMatch = true
          }
          else{
            isMatch = false
            return true;//break
          }
        }

        if(eachCondition.key == 'location'){
          if(isMatch = eachCondition.value && row.location==eachCondition.value){
            isMatch = true
          }
          else{
            isMatch = false
            return true;//break
          }
        }
      })
      return isMatch;
    })
    console.log(filteredData);
    this.setState(state => ({
      data:filteredData
    }))
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };
  handleDateChange = (event, changeDate, i) => {
    this.setState(state => ({
      data: state.data.map(
        (row, j) => (j === i ? { ...row, ['tradeDate']: changeDate } : row)
      )
    }));
    /*this.setState({
      tradeDate: changeDate,
    });*/
  };
  
  //(event, index, counterparty)
  handleDDChange = (event, index, value, name, i) => {
    this.setState(state => ({
      data: state.data.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      data: state.data.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));
  };

  render() {
    return (
      <div style={styles.root} className="TradePaperApp">
        <Paper style={serachPaperstyle} zDepth={2}>
        <SearchTradeForm
          clearSearchFilter={this.clearSearchFilter}
          searchFilter={this.searchFilter}
        />
        </Paper>
        <Paper style={tablePaperstyle} zDepth={2} > 
          <TradeTable
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleChange={this.handleChange}
            handleDateChange={this.handleDateChange}
            handleDDChange={this.handleDDChange}
            data={this.state.data}
            header={[
              {
                name: "Trade Date",
                prop: "tradeDate"
              },
              {
                name: "Commodity",
                prop: "commodity"
              },
              {
                name: "Side",
                prop: "side"
              },
              {
                name: "Quantity",
                prop: "quantity"
              },
              {
                name: "Price",
                prop: "price"
              },
              {
                name: "Counterparty",
                prop: "counterparty"
              },
              {
                name: "Location",
                prop: "location"
              }
            ]}
          />
        </Paper>
        <Paper style={editPaperstyle} zDepth={2}>
          <CreateTradeForm
            onSubmit={submission => {
              this.setState({
                data: [...this.state.data, submission],
                backData:[...this.state.data, submission]
              })
            }}
          />
        </Paper>
      </div>
    );
  }
}

export default TradeApp;

