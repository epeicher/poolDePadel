import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import {connect} from 'react-redux';
import {addPlayer} from '../actions'
import {validateAddPlayer, getAddedPlayer} from '../reducers'

class TextFieldExampleError extends React.Component {
    
    constructor(props){
        super(props);
    }

    handleAddPlayer = () => {
        if(!!!this.props.errorMsg) {
            let playerElem = document.getElementById("player");
            let playerName = playerElem && playerElem.value;
            this.props.dispatch(addPlayer(playerName));
        }    
    }        
    
    addingPlayer = (e) => {        
        this.props.dispatch({type: 'ADDING_PLAYER', playerName: e.target.value});
    }
    
    render() {
        return (
            <div>
                <TextField
                    id="player"
                    hintText="Nombre"
                    errorText={this.props.errorMsg}
                    floatingLabelText="Nombre del jugador"
                    onChange={this.addingPlayer}
                    /><br/>
                <RaisedButton type="button" onClick={this.handleAddPlayer}>Guardar</RaisedButton>
            </div>
        );
    }
}



const mapStateToProps = (state) => { 
  return {
      errorMsg: validateAddPlayer(state),
      playerName: getAddedPlayer(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
  }
}

const TextFieldExampleErrorConnected = connect(
  mapStateToProps
)(TextFieldExampleError)


export default TextFieldExampleErrorConnected;