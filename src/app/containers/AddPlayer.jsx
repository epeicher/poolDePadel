import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import {connect} from 'react-redux';

const TextFieldExampleError = (props) => {
    var p = props.addPlayer;
    return (
        <div>
            <form>
                <TextField
                hintText="Nombre"
                errorText={p.errorName}
                floatingLabelText="Nombre del jugador"
                /><br/>
                <RaisedButton type="button">Guardar</RaisedButton>
            </form>
        </div>
        );
}

const mapStateToProps = (state) => {    
  return {
      addPlayer: state.addPlayer || {errorName:"This is an error"}
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

const TextFieldExampleErrorConnected = connect(
  mapStateToProps
)(TextFieldExampleError)


export default TextFieldExampleErrorConnected;