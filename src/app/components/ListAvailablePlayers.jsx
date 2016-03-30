import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import Colors from 'material-ui/lib/styles/colors';
import { connect } from 'react-redux'
import array from 'lodash/array'

class ListAvailablePlayers extends React.Component { 
    
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e,index) {
        this.props.onPlayerClicked(p);
        let p = this.props.players.filter(p => p.name === e.currentTarget.id)[0];
        this.props.onSelectedPlayer({type:'SELECT_PLAYER', player:p});
    }
    
    updatePlayersSelected(player, players){
      if(array.findIndex(players, (p) => p.name === player.name) > 0) {
        player.selected = true;
      }
    }
    
  render() {

    const styleSelected = {
        backgroundColor:Colors.tealA700
    };
    
    const styleStandard = {};

    const iconSelected = <ActionGrade color={Colors.redA200} />;
    const iconNotSelected = <ActionGrade style={{display:'none'}} />;

    return (
      <div>
        <List id={this.props.containerId} subheader="Jugadores disponibles">
        {    
          this.props.players.map((player,idx) => {   
            this.updatePlayersSelected(player, this.props.selectedPlayers);
            return (
              <ListItem
                //style={player.selected ? styleSelected : styleStandard}
                ref='hola'
                id={player.name}
                key={player.name}
                value={idx}
                primaryText={player.name}
                leftAvatar={<Avatar src={player.img} />}
                {...player.selected ? 
                    {rightIcon: iconSelected}:
                     {rightIcon: iconNotSelected}}
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

const mapStateToProps = (state) => {
  return {
      selectedPlayers: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    onSelectedPlayer: (playerAction) => {
      dispatch(playerAction)
    }
  }
}

const ListAvailablePlayersConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListAvailablePlayers)

export default ListAvailablePlayersConnected;
