import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import CommunicationChatBubble from 'material-ui/lib/svg-icons/communication/chat-bubble';
import { SelectableContainerEnhance } from 'material-ui/lib/hoc/selectable-enhance';
import {deepRed500} from 'material-ui/lib/styles/colors';
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

    const mystyle = {
        color: deepRed500
    };
    return (
      <div>
        <List subheader="Jugadores convocados">
        {		
          this.props.selectedPlayers.map((player) => {
              console.log(player);
              console.log(player.confirmed);
            return (
              <ListItem
                style={mystyle}
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