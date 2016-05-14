import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import {connect} from 'react-redux';
import {addPlayerPromise} from '../actions'
import {validateAddPlayer, getAddedPlayer} from '../reducers'
import { reduxForm } from 'redux-form'
export const fields = [ 'playerName' ]
import { browserHistory } from 'react-router'
import Snackbar from 'material-ui/lib/Snackbar'

class AddPlayerForm extends React.Component {
    
    constructor(props){
        super(props);
        this.state={saved:false};
    }
    
    componentWillMount() {
        if(!this.props.user) browserHistory.push('/login')
    }
    
    render() {
        const {fields: {playerName}, error, handleSubmit, onCloseNotification} = this.props;
        const saved = this.props.saved || false;
        return (
            <div>
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
                <Snackbar
                    open={saved}
                    message="Jugador agregado"
                    autoHideDuration={4000}
                    onRequestClose={onCloseNotification}
                />
            </div>
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

const mapStateToProps = (st) => {
    return {
        user: st.login.user,
        saved: st.addPlayers.saved
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => 
            addPlayerPromise(data.playerName)
            .then(dispatch({type: 'SAVED_SUCCESSFULLY', saved: true})),
        onCloseNotification: () => dispatch({type: 'SAVED_SUCCESSFULLY', saved: false})
    }
}

export default reduxForm({
  form: 'addPlayer',
  fields,
  validate
},
mapStateToProps,
mapDispatchToProps
)(AddPlayerForm)