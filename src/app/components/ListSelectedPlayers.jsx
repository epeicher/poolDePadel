import React from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import { connect } from 'react-redux'
import { getSelectedPlayers, updateConfirmedPlayer } from '../actions'

class ListSelectedPlayers extends React.Component { 
    
    constructor(props){
        super(props);
        
        this.playerConfirmed = this.playerConfirmed.bind(this);
    }
    
    playerConfirmed(e) {
        let id = e.target.parentNode.parentNode.id;
        updateConfirmedPlayer(id, this.props.matchDate);
    }
    
    componentWillMount(){
      this.props.dispatch(getSelectedPlayers(this.props.matchDate));
    }
    
    componentWillReceiveProps(nextProps) {
      if(nextProps.matchDate !== this.props.matchDate){
	      this.props.dispatch(getSelectedPlayers(nextProps.matchDate));
      }
    }

    
  render() {

    return (
      <div>
        <List id={this.props.containerId}>
          <Subheader>Jugadores convocados</Subheader>
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
    selectedPlayers: state.players.selectedPlayers,
    matchDate: state.matches.matchDate
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
  }
}

const SelectedPlayersList = connect(
  mapStateToProps
)(ListSelectedPlayers)

export default SelectedPlayersList;