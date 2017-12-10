import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TradeCardTable from './TradeCardTable';
import DataTableSample from './DataTableSample';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

function handleActive(tabEvent) {
  alert(`TRADES Selected ${tabEvent.props['data-route']} Selected. 
          Tab Label : ${tabEvent.props['data-label']}`);
}

const TradeCard = () => (
<Tabs>
<Tab label="TRADES" 
  data-route="/home"
  data-label="TRADES"
  onActive={handleActive}
>
  <TradeCardTable />
</Tab>
<Tab label="TRANSFERS" >
  <div>
    {/* <DataTableSample /> */}
  </div>
</Tab>
<Tab
  label="TRANSPORTS"
>
  <div>
    <h2 style={styles.headline}>Tab Three</h2>
    <p>
      This is a third example tab.
    </p>
  </div>
</Tab>
</Tabs>

);

export default TradeCard;