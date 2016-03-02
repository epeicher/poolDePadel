import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import Paper from 'material-ui/lib/paper';
import ListAvailablePlayers from './ListAvailablePlayers';
import ListChosenPlayers from './ListChosenPlayers';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class PanelPlayers extends React.Component {
    
  constructor() {
    super();
    
    this.availablePlayers = [
      {name: "Brendan Lim", img:"http://placecage.com/g/128/128"},
      {name: "Eric Hoffman", img:"http://fillmurray.com/128/128"},
      {name: "Grace Ng", img:"http://placecage.com/128/128"},
      {name: "Kerem Suer", img:"http://fillmurray.com/g/128/128"},
      {name: "Raquel Parrado", img:"http://lorempixel.com/128/128"}
    ];    

    this.onSelectedPlayer = this.onSelectedPlayer.bind(this);

    this.state = {
	   selectedPlayers: []
    };
  }

  onSelectedPlayer(playerName) {
	var newPlayers = this.state.selectedPlayers;
    if(!newPlayers.find(p => p.name === playerName)) {
	   newPlayers.push(this.availablePlayers.find(p => p.name === playerName));
    }
	this.setState({selectedPlayers: newPlayers});
  }

  render() {
    
    return (
        <div>
            <GridList padding={10}>
                <Paper zDepth={2} children={<ListAvailablePlayers players={this.availablePlayers} onPlayerClicked={this.onSelectedPlayer} />} />
                <Paper zDepth={2} children={<ListChosenPlayers selectedPlayers={this.state.selectedPlayers} />} />
            </GridList>
        </div>
    )
  }
}

export default PanelPlayers;