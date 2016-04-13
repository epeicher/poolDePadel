import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import {connect} from 'react-redux';
import {addPlayer} from '../actions'

const TextFieldExampleError = (props) => {
    var p = props.addPlayer;
    return (
        <div>
            <TextField
                id="player"
                hintText="Nombre"
                errorText={p.errorName}
                floatingLabelText="Nombre del jugador"
                /><br/>
            <RaisedButton type="button" onClick={handleAddPlayer}>Guardar</RaisedButton>
        </div>
        );
}

const handleAddPlayer = (a,b) => {
    let playerName = document.getElementById("player").value;
    addPlayer(playerName);
}

const mapStateToProps = (state) => {    
  return {
      addPlayer: state.addPlayer || {errorName:"This is an error"}
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