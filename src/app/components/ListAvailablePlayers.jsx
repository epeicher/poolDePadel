import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import Colors from 'material-ui/lib/styles/colors';

class ListAvailablePlayers extends React.Component { 
    
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.store = props.store;
    }
    
    handleClick(e,index) {
        // this.props.onPlayerClicked (
        //      e.currentTarget.id
        // );
        let p = this.props.players.filter(p => p.name === e.currentTarget.id)[0];
        this.store.dispatch({type:'SELECT_PLAYER', player:p});
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

export default ListAvailablePlayers;