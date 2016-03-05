import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import CommunicationChatBubble from 'material-ui/lib/svg-icons/communication/chat-bubble';
import { SelectableContainerEnhance } from 'material-ui/lib/hoc/selectable-enhance';
import {limeA400} from 'material-ui/lib/styles/colors';
import Checkbox from 'material-ui/lib/checkbox';

class ListChosenPlayers extends React.Component { 
    
    constructor(){
        super();
        this.playerConfirmed = this.playerConfirmed.bind(this);
    }
    
    playerConfirmed(e) {
         this.props.onPlayerConfirmed (
              e.target.parentNode.parentNode.id
         );
        return true;
    }
    

  render() {

    const styleSelected = {
        backgroundColor:limeA400
    };
    
    const styleStandard = {};

    return (
      <div>
        <List subheader="Jugadores convocados">
        {		
          this.props.selectedPlayers.map((player) => {
            return (
              <ListItem
                style={player.confirmed ? styleSelected : styleStandard}
                key={player.name}
                id={player.name}
                primaryText={player.name}
                rightAvatar={<Avatar src={player.img} />}
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