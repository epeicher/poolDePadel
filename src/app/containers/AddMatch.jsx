import React from 'react'
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import { reduxForm, Field } from 'redux-form'
import {addMatchPromise} from '../actions'
import { browserHistory } from 'react-router'

const renderInput = field =>   // Define stateless component to render input and errors
  <div>
    <input style={styleInput} {...field.input} type={field.type}/> 
    {field.meta.touched &&
     field.meta.error &&
     <div style={styleErrorLabel} className="error">{field.meta.error}</div>}
  </div>

class AddMatch extends React.Component {
    
    componentWillMount() {
        //if(!this.props.user) browserHistory.push('/login')
    }

    
   
    render () {
        const { handleSubmit} = this.props;

        return (
            <form>
                <div style={styleDiv}>
                    <Field
                        type="date"
                        style={styleInput}
                        name="matchDate"
                        component={renderInput}
                    />
                </div>
                <br/>
                <RaisedButton type="button" onClick={handleSubmit}>Guardar</RaisedButton>
            </form>
        )
    }
}



const validate = values => {
    const errors = {}
    const date = new Date(values.matchDate)

    if(!date || isNaN(date.getTime())) {
        errors.matchDate = 'Fecha incorrecta'
    } else if(date < new Date()) {
        errors.matchDate = 'Esa fecha ya ha pasado'
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
        onSubmit: data => addMatchPromise(data.matchDate)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(reduxForm({
    form: 'addMatch',
    validate
})(AddMatch))


const styleDiv = {
        "fontSize":"16px",
        "display":"inline-block",
        "position":"relative",
        "fontFamily":"Roboto, sans-serif",
        "transition":"height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"
}

const styleInput = {
    "padding":"0",
    "position":"relative",
    "height":"100%",
    "width":"100%",
    "border":"none",
    "outline":"none",
    "font":"inherit",
    "boxSizing":"border-box",
    "marginTop":"14px",
    "marginBottom":"14px"
}

const styleErrorLabel={
    "paddingTop":"15px",
    "position":"relative",
    "bottom":"15px",
    "fontSize":"12px",
    "lineHeight":"12px",
    "color":"#f44336",
    "transition":"all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"
}