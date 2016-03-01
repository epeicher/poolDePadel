import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import CommunicationChatBubble from 'material-ui/lib/svg-icons/communication/chat-bubble';
import { SelectableContainerEnhance } from 'material-ui/lib/hoc/selectable-enhance';

class ListAvailablePlayers extends React.Component { 

  render() {

    return (
      <div>
        <List subheader="Jugadores disponibles">
        {    
          this.props.players.map((player) => {
            return (
              <ListItem
                key={player.name}
                primaryText={player.name}
                leftAvatar={<Avatar src={player.img} />}
                rightIcon={<CommunicationChatBubble />}
              />
            );        
          })
        }
      </List>
      </div>
      );
  }
}

export default ListAvailablePlayers;