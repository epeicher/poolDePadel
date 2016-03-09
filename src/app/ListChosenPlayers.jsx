import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import CommunicationChatBubble from 'material-ui/lib/svg-icons/communication/chat-bubble';
import { SelectableContainerEnhance } from 'material-ui/lib/hoc/selectable-enhance';
import {limeA400} from 'material-ui/lib/styles/colors';
import Checkbox from 'material-ui/lib/checkbox';
import Toggle from 'material-ui/lib/toggle'

class ListChosenPlayers extends React.Component { 
    
    constructor(){
        super();
        this.playerConfirmed = this.playerConfirmed.bind(this);
    }
    
    playerConfirmed(e) {
         this.props.onPlayerConfirmed (
              e.target.parentNode.parentNode.id
         );
    }
    
    onUnselected(e) {
      this.props.onPlayerRejecting (
        e.target.parentNode.parentNode.id,
        e.target.checked)
    }

  render() {

    const styleSelected = {
        backgroundColor:limeA400
    };
    
    const styleStandard = {};

    return (
      <div>
        <List id={this.props.containerId} subheader="Jugadores convocados">
        {		
          this.props.selectedPlayers.map((player) => {
            return (
              <ListItem
                //style={player.confirmed ? styleSelected : styleStandard}
                key={player.name}
                id={player.name}
                primaryText={player.name}
                leftCheckbox={<Checkbox onCheck={this.playerConfirmed} checked={player.confirmed} />}                       
                disabled={player.confirmed}         
              />
            );        
          })
        }
      </List>
      </div>
      );
  }
}

export default ListChosenPlayers;