import React from 'react'
import { TextField, RaisedButton } from 'material-ui'
import { connect } from 'react-redux' 
import { reduxForm, Field } from 'redux-form'
import { addUser } from '../actions'
import { validateEmail } from '../services/validationService'

const renderInput = field => {
    return  (
        <div>
            <TextField id={field.id}
                {...field.input}
                hintText={field.hintText}
                errorText={field.meta.touched && field.meta.error}
                floatingLabelText={field.floatingLabelText}
                type={field.type}
            />
        </div>
    )
}

const AddUser = (props) => {
    const { handleSubmit} = props;
    return (
        <form>
            <Field
                id="user"
                name="userEmail"
                hintText="Email"
                floatingLabelText="Email de usuario"
                component={renderInput}
            />
            <br/>
            <Field
                id="pwd"
                name="userPassword"
                hintText="Contraseña"
                floatingLabelText="Contraseña"
                type="password"
                component={renderInput}
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(reduxForm({
  form: 'addUser',
  validate
})(AddUser))
