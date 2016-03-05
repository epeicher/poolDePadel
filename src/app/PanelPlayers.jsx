import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import Paper from 'material-ui/lib/paper';
import ListAvailablePlayers from './ListAvailablePlayers';
import ListChosenPlayers from './ListChosenPlayers';
import PlayersRepository from './PlayersRepository';

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
    
    // const availablePlayers = [
    //   {name: "Brendan Lim", img:"http://placecage.com/g/128/128"},
    //   {name: "Eric Hoffman", img:"http://fillmurray.com/128/128"},
    //   {name: "Grace Ng", img:"http://placecage.com/128/128"},
    //   {name: "Kerem Suer", img:"http://fillmurray.com/g/128/128"},
    //   {name: "Raquel Parrado", img:"http://lorempixel.com/128/128"}
    // ];    
    
    this.onSelectedPlayer = this.onSelectedPlayer.bind(this);
    this.onPlayerConfirmed = this.onPlayerConfirmed.bind(this);
    
    this.playersRepository = new PlayersRepository();
    
    this.state = {
        availablePlayers: [],
        selectedPlayers: []
    };

  }
  
  componentDidMount() {
    this.playersRepository.getPlayersPromise()
	.then((data => {
		this.setState({
		    availablePlayers: data,
		    selectedPlayers: []
		});
		}).bind(this));
  }
    

  onSelectedPlayer(playerName) {
	var newPlayers = this.state.selectedPlayers;
    if(!newPlayers.find(p => p.name === playerName)) {
        let selectedPlayer = this.state.availablePlayers.find(p => p.name === playerName);
        selectedPlayer.selected = true;
	   newPlayers.push(selectedPlayer);
    }
	this.setState({selectedPlayers: newPlayers});
  }
  
  onPlayerConfirmed(playerName) {
      var player = this.state.selectedPlayers.find(p => p.name === playerName);
      if(player) player.confirmed = true;
      this.setState({selectedPlayers: this.state.selectedPlayers})
  }

  render() {
    
    return (
        <div>
            <GridList padding={10}>
                <Paper zDepth={2} children={<ListAvailablePlayers players={this.state.availablePlayers} onPlayerClicked={this.onSelectedPlayer} />} />
                <Paper zDepth={2} children={<ListChosenPlayers selectedPlayers={this.state.selectedPlayers} onPlayerConfirmed={this.onPlayerConfirmed} />} />
            </GridList>
        </div>
    )
  }
}

export default PanelPlayers;