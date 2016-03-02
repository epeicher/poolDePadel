import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import CommunicationChatBubble from 'material-ui/lib/svg-icons/communication/chat-bubble';
import { SelectableContainerEnhance } from 'material-ui/lib/hoc/selectable-enhance';

class ListAvailablePlayers extends React.Component { 
    
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e,index) {
        this.props.onPlayerClicked (
             e.currentTarget.id
        );
    }
    
  render() {

    return (
      <div>
        <List subheader="Jugadores disponibles">
        {    
          this.props.players.map((player) => {
            return (
              <ListItem
                id={player.name}
                key={player.name}
                ref="player"
                value={player.name}
                primaryText={player.name}
                leftAvatar={<Avatar src={player.img} />}
                rightIcon={<CommunicationChatBubble />}
                onTouchTap={this.handleClick}
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