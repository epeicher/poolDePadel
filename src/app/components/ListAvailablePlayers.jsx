import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import Colors from 'material-ui/lib/styles/colors';
import { connect } from 'react-redux'
import { getAvailablePlayers, updateSelectedPlayer } from '../actions'
import _ from 'lodash'

class ListAvailablePlayers extends React.Component { 
/*
	static propTypes = {
		dispatch: React.PropTypes.func.isRequired
	}
*/  
    constructor(props){
        super(props);
    }
    
    handleClick(e,index) {
        updateSelectedPlayer(e.currentTarget.id)
    }

    componentWillMount() {
	    this.props.dispatch(getAvailablePlayers());
    }
    
    isSelectedPlayer(selPlayers, player) {

        if(!selPlayers || !player) return false;        
        return _.findIndex(selPlayers, e => e.name.toLowerCase() === player.name.toLowerCase()) !== -1;
    }
    
    render() {
        
        const {availablePlayers, selectedPlayers} = this.props;

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
            availablePlayers.map((player,idx) => {   
                return (
                <ListItem
                    //style={player.selected ? styleSelected : styleStandard}
                    id={player.name}
                    key={player.name}
                    value={idx}
                    primaryText={player.name}
                    leftAvatar={<Avatar src={player.img} />}
                    {...this.isSelectedPlayer(selectedPlayers, player) ? 
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
      ...state.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

const ListAvailablePlayersConnected = connect(
  mapStateToProps
)(ListAvailablePlayers)

export default ListAvailablePlayersConnected;
