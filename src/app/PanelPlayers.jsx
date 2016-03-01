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

const PanelPlayers = () => {
    
    const players = [
      {name: "Brendan Lim", img:"http://placecage.com/g/128/128"},
      {name: "Eric Hoffman", img:"http://fillmurray.com/128/128"},
      {name: "Grace Ng", img:"http://placecage.com/128/128"},
      {name: "Kerem Suer", img:"http://fillmurray.com/g/128/128"},
      {name: "Raquel Parrado", img:"http://lorempixel.com/128/128"}
    ];
    
    return (
        <div>
            <GridList padding={10}>
                <Paper zDepth={2} children={<ListAvailablePlayers players={players} />} />
                <Paper zDepth={2} children={<ListAvailablePlayers players={players} />} />
            </GridList>
        </div>
    )
};

export default PanelPlayers;