import React from 'react'
import { TextField, RaisedButton } from 'material-ui'
import { connect } from 'react-redux' 
import { reduxForm } from 'redux-form'
import { changePwd } from '../actions'


const ChangePwd = (props) => {
    const {fields: {userEmail, userOldPassword, userNewPassword}, error, handleSubmit} = props;
    return (
        <form>
            <TextField
                id="user"
                hintText="Email"
                //errorText={(playerName.touched && playerName.error) || error ? playerName.error || error : ''}
                floatingLabelText="Email de usuario"
                {...userEmail}
            />
            <br/>
            <TextField
                id="pwd"
                hintText="Contraseña antigua"
                errorText={(userOldPassword.touched && userOldPassword.error) || error ? userOldPassword.error || error : ''}
                floatingLabelText="Contraseña nueva"
                type="password"
                {...userOldPassword}
            />
            <br/>
            <TextField
                id="pwd"
                hintText="Contraseña nueva"
                errorText={(userNewPassword.touched && userNewPassword.error) || error ? userNewPassword.error || error : ''}
                floatingLabelText="Contraseña antigua"
                type="password"
                {...userNewPassword}
            />              
            <br/>
            <RaisedButton
                style={{width: 256}} 
                secondary={true}
                label="Cambia Contraseña"
                onClick={handleSubmit} />            
        </form>
    )
}

const validate = values => {
    const errors = {}
    if(!values.userOldPassword) {
        errors.userOldPassword = 'Rellena la Contraseña anterior'
    }
    if(!values.userNewPassword) {
        errors.userNewPassword = 'Rellena la Contraseña nueva'
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
        onSubmit: (data) => 
            changePwd(data.userEmail, data.userOldPassword, data.userNewPassword)
    }
}

export default reduxForm({
  form: 'changePwd',
  fields: ['userEmail', 'userOldPassword', 'userNewPassword'],
  validate
},
mapStateToProps,
mapDispatchToProps
)(ChangePwd)
