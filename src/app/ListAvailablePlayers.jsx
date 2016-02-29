import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import CommunicationChatBubble from 'material-ui/lib/svg-icons/communication/chat-bubble';

class ListAvailablePlayers extends React.Component { 

  render() {

    const players = [
      {name: "Brendan Lim", img:"http://placecage.com/g/128/128"},
      {name: "Eric Hoffman", img:"http://placecage.com/g/128/128"},
      {name: "Grace Ng", img:"http://placecage.com/g/128/128"},
      {name: "Kerem Suer", img:"http://placecage.com/g/128/128"},
      {name: "Raquel Parrado", img:"http://placecage.com/g/128/128"}
    ];

    return (
      <div>
      <List subheader="Recent chats">
        {    
          players.map((player) => {
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