import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import Paper from 'material-ui/lib/paper';
import ListAvailablePlayers from './ListAvailablePlayers';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperExampleSimple = () => (
  <div>
  	<GridList padding={10}>
    <Paper zDepth={2} children={<ListAvailablePlayers />} />
    <Paper zDepth={2} children={<ListAvailablePlayers />} />
    </GridList>
  </div>
);

export default PaperExampleSimple;