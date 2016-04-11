import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import {limeA400} from 'material-ui/lib/styles/colors';
import Checkbox from 'material-ui/lib/checkbox';
import Toggle from 'material-ui/lib/toggle';
import { connect } from 'react-redux'

class ListSelectedPlayers extends React.Component { 
    
    constructor(props){
        super(props);
    }
    
    playerConfirmed = (e) => {
        let id = e.target.parentNode.parentNode.id;
         this.props.onPlayerConfirmed (
            id
         );
    }
    
  render() {

    return (
      <div>
        <List id={this.props.containerId} subheader="Jugadores convocados">
        {		
          this.props.selectedPlayers.map(player => {
            return (
              <ListItem
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

const mapStateToProps = (state) => {
  return {
    selectedPlayers: state.selectedPlayers
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

const SelectedPlayersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListSelectedPlayers)

export default SelectedPlayersList;