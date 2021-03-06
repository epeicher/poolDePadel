import React from 'react';
import {connect} from 'react-redux'
import { GridList } from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import ListAvailablePlayers from '../components/ListAvailablePlayers';
import ListSelectedPlayers from '../components/ListSelectedPlayers';
import PlayersRepository from '../services/PlayersRepository';
import DragAndDropService from '../services/dragAndDropService';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MatchDateSelector from './MatchDateSelector'
import { getNextMatch } from '../actions'
import { browserHistory } from 'react-router'


class PanelPlayers extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.playersRepo = new PlayersRepository();
    this.dragAndDropService = new DragAndDropService();
  }
  
  componentWillMount() {
    this.props.dispatch(getNextMatch());
    if(!this.props.user) browserHistory.push('/login')
  } 
  
  componentDidMount() {
    this.dragAndDropService.configureContainers(document.getElementById('containerLeft'), document.getElementById('containerRight'));
    this.dragAndDropService.onRemoveRightItem(el => {
      let player = el.querySelectorAll('[id]')[0].id; // <- Don't know how to do it better      
      this.playersRepo.updatePlayerRejecting(player, this.props.matchSelected);
    });
  }

  render() {
    
    return (
        <div>
          <MatchDateSelector />
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

export default connect(  
  (st) => {
    return {
      matchSelected: st.matches.matchDate,
      user: st.login.user
    }
  }
)(PanelPlayers);