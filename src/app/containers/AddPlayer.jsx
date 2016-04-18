import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import {connect} from 'react-redux';
import {addPlayerPromise} from '../actions'
import {validateAddPlayer, getAddedPlayer} from '../reducers'
import { reduxForm } from 'redux-form'
export const fields = [ 'playerName' ]

class AddPlayerForm extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    render() {
        const {fields: {playerName}, error, handleSubmit} = this.props;

        return (
            <form>
                <TextField
                    id="player"
                    hintText="Nombre"
                    errorText={(playerName.touched && playerName.error) || error ? playerName.error || error : ''}
                    floatingLabelText="Nombre del jugador"
                    {...playerName}
                    /><br/>
                <RaisedButton type="button" onClick={handleSubmit}>Guardar</RaisedButton>
            </form>
        );
    }
}

const validate = values => {
    const errors = {}
    if(!values.playerName) {
        errors.playerName = 'Rellena el Nombre'
    }
    return errors
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => addPlayerPromise(data.playerName)
    }
}

export default reduxForm({
  form: 'addPlayer',
  fields,
  validate
},undefined,
mapDispatchToProps
)(AddPlayerForm)