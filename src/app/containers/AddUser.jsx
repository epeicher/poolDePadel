import React from 'react'
import { TextField, RaisedButton } from 'material-ui'
import { connect } from 'react-redux' 
import { reduxForm } from 'redux-form'
import { addUser } from '../actions'
import { validateEmail } from '../services/validationService'

const AddUser = (props) => {
    const {fields: {userEmail, userPassword}, error, handleSubmit} = props;
    return (
        <form>
            <TextField
                id="user"
                hintText="Email"
                errorText={(userEmail.touched && userEmail.error) || error ? userEmail.error || error : ''}
                floatingLabelText="Email de usuario"
                {...userEmail}
            />
            <br/>
            <TextField
                id="pwd"
                hintText="Contraseña"
                errorText={(userPassword.touched && userPassword.error) || error ? userPassword.error || error : ''}
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
    if(!validateEmail(values.userEmail)) {
        errors.userEmail = 'Email incorrecto'
    }
    if(!values.userPassword) {
        errors.userPassword = 'Rellena la Contraseña'
    }
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
