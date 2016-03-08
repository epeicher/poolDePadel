import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import Colors from 'material-ui/lib/styles/colors';
import dragula from 'react-dragula';

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

    componentDidMount() {
      let container = ReactDOM.findDOMNode(this.refs.container);
      dragula([container]);
    }
    
  render() {

    const styleSelected = {
        backgroundColor:Colors.tealA700
    };
    
    const styleStandard = {};

    const iconSelected = <ActionGrade color={Colors.redA200} />;
      
    return (
      <div>
        <List ref='container' subheader="Jugadores disponibles">
        {    
          this.props.players.map((player,idx) => {

            return (
              <ListItem
                //style={player.selected ? styleSelected : styleStandard}
                id={player.name}
                key={player.name}
                value={idx}
                primaryText={player.name}
                leftAvatar={<Avatar src={player.img} />}
                rightIcon={player.selected ? iconSelected : ''}
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