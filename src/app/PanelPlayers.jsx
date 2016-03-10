import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import Paper from 'material-ui/lib/paper';
import ListAvailablePlayers from './ListAvailablePlayers';
import ListSelectedPlayers from './ListSelectedPlayers';
import PlayersRepository from './PlayersRepository';
import DragAndDropService from './dragAndDropService';

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
    
    this.playersRepo = new PlayersRepository();
    this.dragAndDropService = new DragAndDropService();

    this.state = {
        availablePlayers: [],
        selectedPlayers: []
    };

  }

  bindAvailablePlayers() {
    this.playersRepo.getPlayers((data => {
      this.setState({
        availablePlayers: data
      });
    }).bind(this));
  }

  bindSelectedPlayers() {
    this.playersRepo.getSelectedPlayers((data => {
      this.setState({
        selectedPlayers: data
      });      
    }).bind(this));
  }
  
  componentDidMount() {
    this.dragAndDropService.configureContainers(document.getElementById('containerLeft'), document.getElementById('containerRight'));
    this.dragAndDropService.onRemoveRightItem(el => {
      let player = el.querySelectorAll('[id]')[0].id; // <- Don't know how to do it better
      this.playersRepo.updatePlayerRejecting(player);
    });

    this.bindAvailablePlayers();
    this.bindSelectedPlayers();
  }

  
  componentWillUnmount() {
    this.playersRepo.abort();
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
                <Paper zDepth={2} children={
                    <ListAvailablePlayers players={this.state.availablePlayers} 
                    onPlayerClicked={this.handleSelectedPlayer}
                    containerId='containerLeft' />} />
                <Paper zDepth={2} children={
                  <ListSelectedPlayers selectedPlayers={this.state.selectedPlayers} 
                  onPlayerConfirmed={this.handlePlayerConfirmed}
                  containerId='containerRight' />} 
                />
            </GridList>
        </div>
    )
  }
}

export default PanelPlayers;