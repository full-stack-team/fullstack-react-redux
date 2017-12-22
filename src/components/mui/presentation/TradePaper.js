import React from 'react';
import Paper from 'material-ui/Paper';
import TradeTable from './TradeTable';

const serachPaperstyle = {
  height: 100,
  width: 1160,
  margin: 5,
  textAlign: 'center',
  display: 'inline-block'
};

const tablePaperstyle = {
  height: 400,
  width: 1160,/*470 */
  margin: 5,
  textAlign: 'center',
  display: 'inline-block'
};

const editPaperstyle = {
  height: 400,
  width: 330,
  margin: 5,
  textAlign: 'center',
  display: 'inline-block'
};

const TradePaper = () => (
  <div>
    <Paper style={serachPaperstyle} zDepth={2} />
    <Paper style={tablePaperstyle} zDepth={2}>
      <TradeTable/>
    </Paper>
    {/* <Paper style={editPaperstyle} zDepth={2} /> */}
  </div>
);

export default TradePaper;