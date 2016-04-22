import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import Paper from 'material-ui/lib/paper';
import ListAvailablePlayers from '../components/ListAvailablePlayers';
import ListSelectedPlayers from '../components/ListSelectedPlayers';
import PlayersRepository from '../services/PlayersRepository';
import DragAndDropService from '../services/dragAndDropService';
import AppBar from 'material-ui/lib/app-bar';


class PanelPlayers extends React.Component {
    
  constructor(props) {
    super(props);
    
    this.playersRepo = new PlayersRepository();
    this.dragAndDropService = new DragAndDropService();
  }
  
  componentWillMount() {
    this.playersRepo.getNextMatch().then(m => this.setState({nextMatch: m}));
  }
  
  componentDidMount() {
    this.dragAndDropService.configureContainers(document.getElementById('containerLeft'), document.getElementById('containerRight'));
    this.dragAndDropService.onRemoveRightItem(el => {
      let player = el.querySelectorAll('[id]')[0].id; // <- Don't know how to do it better
      this.playersRepo.updatePlayerRejecting(player);
    });
  }

  render() {
    
    return (
        <div>
          <AppBar title={this.state.nextMatch} iconElementLeft="" />
            <GridList padding={10}>
                <Paper zDepth={2} children={
                    <ListAvailablePlayers 
                      containerId='containerLeft' 
                    />} />
                <Paper zDepth={2} children={
                  <ListSelectedPlayers
                    containerId='containerRight' 
                  />} 
                />
            </GridList>
        </div>
    )
  }
}

export default PanelPlayers;