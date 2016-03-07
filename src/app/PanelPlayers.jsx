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

    this.handleSelectedPlayer = this.handleSelectedPlayer.bind(this);
    this.handlePlayerConfirmed = this.handlePlayerConfirmed.bind(this);
    
    this.firebaseRef = new Firebase('https://mypooldepadel.firebaseio.com/'); // Temporary until refactoring
    this.playersRepo = new PlayersRepository();
    
    this.state = {
        availablePlayers: [],
        selectedPlayers: []
    };

  }

  bindAvailablePlayers() {
    this.playersRepo.getPlayers().then(data => {
      this.setState({
        availablePlayers: data
      });
    });
  }

  bindSelectedPlayers() {
    this.playersRepo.getSelectedPlayers().then(data => {
      this.setState({
        selectedPlayers: data
      });      
    });
  }
  
  componentDidMount() {
    this.bindAvailablePlayers();
    this.bindSelectedPlayers();
  }

  handleSelectedPlayer(playerName) {
    this.playersRepo.updateSelectedPlayer(playerName);
  }
  
  handlePlayerConfirmed(playerName) {
    this.playersRepo.updateConfirmedPlayer(playerName);
  }

  render() {
    
    return (
        <div>
            <GridList padding={10}>
                <Paper zDepth={2} children={<ListAvailablePlayers players={this.state.availablePlayers} onPlayerClicked={this.handleSelectedPlayer} />} />
                <Paper zDepth={2} children={<ListChosenPlayers selectedPlayers={this.state.selectedPlayers} onPlayerConfirmed={this.handlePlayerConfirmed} />} />
            </GridList>
        </div>
    )
  }
}

export default PanelPlayers;