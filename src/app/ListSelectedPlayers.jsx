import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import {limeA400} from 'material-ui/lib/styles/colors';
import Checkbox from 'material-ui/lib/checkbox';
import Toggle from 'material-ui/lib/toggle'

class ListSelectedPlayers extends React.Component { 
    
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
                ref={player.name}
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

export default ListSelectedPlayers;