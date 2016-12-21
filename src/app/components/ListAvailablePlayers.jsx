import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Subheader from 'material-ui/Subheader';
import ActionGrade from 'material-ui/svg-icons/action/Grade';
import * as colors from 'material-ui/styles/colors';
import { connect } from 'react-redux'
import { getAvailablePlayers, updateSelectedPlayer } from '../actions'
import _ from 'lodash'


class ListAvailablePlayers extends React.Component { 

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e,index) {
        updateSelectedPlayer(e.currentTarget.id, this.props.matchDate)
    }

    componentWillMount() {
	    this.props.dispatch(getAvailablePlayers());
    }
    
    isSelectedPlayer(selPlayers, player) {

        if(!selPlayers || !player) return false;        
        return _.findIndex(selPlayers, e => {
            if(e.name)
                e.name.toLowerCase() === player.name.toLowerCase()
            else
                false
        }) !== -1;
    }
    
    render() {
        
        const {availablePlayers, selectedPlayers} = this.props;
        
        const styleStandard = {};

        const iconSelected = <ActionGrade color={colors.redA200} />;
        const iconNotSelected = <ActionGrade style={{display:'none'}} />;

        return (
        <div>
            <List id={this.props.containerId}>
                <Subheader>Jugadores disponibles</Subheader>
            {    
            availablePlayers.map((player,idx) => {   
                return (
                <ListItem
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
      ...state.players,
    matchDate: state.matches.matchDate
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

const ListAvailablePlayersConnected = connect(
  mapStateToProps
)(ListAvailablePlayers)

export default ListAvailablePlayersConnected;
