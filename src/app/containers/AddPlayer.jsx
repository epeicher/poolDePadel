import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {addPlayerPromise} from '../actions'
import {validateAddPlayer, getAddedPlayer} from '../reducers'
import { reduxForm, Field } from 'redux-form'
import { browserHistory } from 'react-router'
import Snackbar from 'material-ui/Snackbar'

const renderInput = field => {
    return  (
        <div>
            <TextField id={field.id}
                {...field.input}
                hintText={field.hintText}
                errorText={field.meta.touched && field.meta.error}
                floatingLabelText={field.floatingLabelText}
            />
        </div>
    )
}

class AddPlayerForm extends React.Component {
    
    constructor(props){
        super(props);
        this.state={saved:false};
    }
    
    componentWillMount() {
        //if(!this.props.user) browserHistory.push('/login')
    }

    render() {
        const {handleSubmit, onCloseNotification} = this.props;
        const saved = this.props.saved || false;

        return (
            <div>
                <form>
                    <Field
                        name="playerName"
                        id="player"
                        hintText="Nombre"
                        floatingLabelText="Nombre del jugador"
                        component={renderInput}
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
        onSubmit: (data) => {
            addPlayerPromise(data.playerName)
                .then(dispatch({type: 'SAVED_SUCCESSFULLY', saved: true}))
        },
        onCloseNotification: () => dispatch({type: 'SAVED_SUCCESSFULLY', saved: false})
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(reduxForm({
  form: 'addPlayer',
  validate
})(AddPlayerForm))