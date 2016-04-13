import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import Colors from 'material-ui/lib/styles/colors';
import { connect } from 'react-redux'
import { getAvailablePlayers, updateSelectedPlayer } from '../actions'

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
            this.props.availablePlayers.map((player,idx) => {   
                return (
                <ListItem
                    //style={player.selected ? styleSelected : styleStandard}
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
      availablePlayers: state.availablePlayers
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

const ListAvailablePlayersConnected = connect(
  mapStateToProps
)(ListAvailablePlayers)

export default ListAvailablePlayersConnected;
