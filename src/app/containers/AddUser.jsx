import React from 'react'
import { TextField, RaisedButton } from 'material-ui'
import { connect } from 'react-redux' 
import { reduxForm } from 'redux-form'
import { addUser } from '../actions'

const AddUser = (props) => {
    const {fields: {userEmail, userPassword}, error, handleSubmit} = props;
    return (
        <form>
            <TextField
                id="user"
                hintText="Nombre"
                //errorText={(playerName.touched && playerName.error) || error ? playerName.error || error : ''}
                floatingLabelText="Nombre de usuario"
                {...userEmail}
            />
            <br/>
            <TextField
                id="pwd"
                hintText="Contraseña"
                //errorText={(playerName.touched && playerName.error) || error ? playerName.error || error : ''}
                floatingLabelText="Contraseña"
                type="password"
                {...userPassword}
            /> 
            <br/>
            <RaisedButton
                style={{width: 256}} 
                secondary={true}
                label="Crea Usuario"
                onClick={handleSubmit} />            
        </form>
    )
}

const validate = values => {
    const errors = {}
    // if(!values.playerName) {
    //     errors.playerName = 'Rellena el Nombre'
    // }
    return errors
}

const mapStateToProps = (st) => {
    return {
        user: st.login.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => addUser(data.userEmail, data.userPassword)
    }
}

export default reduxForm({
  form: 'addUser',
  fields: ['userEmail', 'userPassword'],
  validate
},
mapStateToProps,
mapDispatchToProps
)(AddUser)
