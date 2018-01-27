import React, { PropTypes } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tradeRefActions from '../../actions/tradeRefActions';
import * as tradeActions from '../../actions/tradeActions';

import Paper from 'material-ui/Paper';
import TradeTable from './TradeTable';
import CreateTradeForm from './CreateTradeForm'
import SearchTradeForm from './SearchTradeForm'

import "../../styles/TradePaperApp.css";

const tradeActionsCombined = Object.assign({}, tradeRefActions, tradeActions);

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

class TradePaper extends React.Component {
  constructor(props, context) {
    super(props, context);
    //console.log('cons:'+ JSON.stringify(this.props.trades))
    this.state = {
      trades: Object.assign([], this.props.trades),
      trade:{},
      backTrades: Object.assign([], this.props.trades),
      editIdx: -1
    };

    //this.updateTrade = this.updateTrade.bind(this);
    //this.saveTrade = this.saveTrade.bind(this);
    //this.deleteTrade = this.deleteTrade.bind(this);
  }

  /*updateTrade(event) {
    const field = event.target.name;
    let trade = this.state.trade;
    trade[field] = event.target.value;
    return this.setState({trade: trade});
  }

  saveTrade(event) {
    event.preventDefault();
    this.props.actions.saveTrade(this.state.trade);
    //this.context.router.push('./courses');
  }

  deleteTrade(event) {
    event.preventDefault();
    this.props.actions.deleteTrade(this.state.trade);
    //this.context.router.push('./courses');
  }*/

  handleRemove = i => {
    //console.log('handle remove:'+JSON.stringify(this.state.trades[i]))
    let deleteTrade = this.state.trades[i];//this.state.trades.filter((row, j) => j !== i);
    this.props.actions.deleteTrade(deleteTrade);
    this.setState(state => ({
      trades:this.state.trades.filter((row, j) => j !== i)
    }));
  };

  clearSearchFilter = () => {
    if(this.state.backTrades.length>0){
      this.setState(state => ({
        trades:this.state.backTrades
      }))
    }
  }

  searchFilter = filterCriteria => {
    let isMatch = false;
    let isTradeFromDate = false;

    if((filterCriteria == null || filterCriteria == undefined)) return;

    let filteredData = this.state.trades.filter((row, j) => {
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
          //console.log('commodity')
          //console.log(row.commodity)
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
      trades:filteredData
    }))
  };

  startEditing = i => {
    //console.log(this.state.trades[i])
    this.setState({ trade: this.state.trades[i] });
    //console.log(this.state.trade);
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    //console.log(this.state.trades[this.state.editIdx])
    let saveTrade = this.state.trades[this.state.editIdx];
    this.setState({ trade: saveTrade });
    this.props.actions.saveTrade(saveTrade);
    //console.log(this.state.trade);
    this.setState({ editIdx: -1 });
  };
  handleDateChange = (event, changeDate, i) => {
    this.setState(state => ({
      trades: state.trades.map(
        (row, j) => (j === i ? { ...row, ['tradeDate']: changeDate } : row)
      )
    }));
  };
  
  //(event, index, counterparty)
  handleDDChange = (event, index, value, name, i) => {
    this.setState(state => ({
      trades: state.trades.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      trades: state.trades.map(
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
            data={this.state.trades}//this.state.trades//this.props.trades
            DDItems={{commodities:this.props.commodities,
              counterparties:this.props.counterparties,
              locations:this.props.locations,
              sides:this.props.sides
            }}
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
            onSubmit={createTrade => {
              console.log('before'+JSON.stringify(createTrade))
              this.props.actions.saveTrade(createTrade).then(createdDrade=>
              {
                console.log('trade created:'+createdDrade)
              })
              
              this.setState({
                trades: [...this.state.trades, createTrade],
                backTrades:[...this.state.backTrades, createTrade]
              })
            }}
          />
        </Paper>
      </div>
    );
  }
}

TradePaper.propTypes = {
  commodities: PropTypes.array.isRequired,
  counterparties: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired,
  sides: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function returnData(data)
{
  return data;
}
function mapStateToProps(state, ownProps) {
  //console.log(state)
  //this.state.data = state.trades?state.trades:[];
  return {
    commodities: state.commodities,
    counterparties: state.counterparties,
    locations: state.locations,
    sides: state.sides,
    trades: state.trades//returnData(state.trades)
  };
}

function mapDispatchToProps(dispatch) {
  //console.log(bindActionCreators(tradeActionsCombined, dispatch));
  return {
    actions: bindActionCreators(tradeActionsCombined, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TradePaper);