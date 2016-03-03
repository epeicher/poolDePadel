import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import CommunicationChatBubble from 'material-ui/lib/svg-icons/social/person';
import {green200} from 'material-ui/lib/styles/colors';

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

    const styleSelected = {
        backgroundColor:green200
    };
    
    const styleStandard = {};
      
    return (
      <div>
        <List subheader="Jugadores disponibles">
        {    
          this.props.players.map((player,idx) => {

            return (
              <ListItem
                style={player.selected ? styleSelected : styleStandard}
                id={player.name}
                key={player.name}
                value={idx}
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