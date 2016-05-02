import React from 'react'
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import RaisedButton from 'material-ui/lib/raised-button';
import {connect} from 'react-redux';
import { reduxForm } from 'redux-form'
import {addMatchPromise} from '../actions'
export const fields = [ 'matchDate' ]
import { browserHistory } from 'react-router'


class AddMatch extends React.Component {
    
    componentWillMount() {
        if(!this.props.user) browserHistory.push('/login')
    }
   
    render () {
        const {fields: {matchDate}, error, handleSubmit} = this.props;
        return (
            <form>
                <div style={styleDiv}>
                    <input
                        type="date"
                        style={styleInput}
                        {...matchDate}
                    />
                    <div style={styleErrorLabel}>{matchDate.error || error}</div>
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

export default reduxForm({
    form: 'addMatch',
    fields,
    validate
},
mapStateToProps,
mapDispatchToProps
)(AddMatch)


const styleDiv = {
        "fontSize":"16px",
        //"lineHeight":"24px",
        //"width":"256px",
        //"height":"72px",
        "display":"inline-block",
        "position":"relative",
        //"backgroundColor":"transparent",
        "fontFamily":"Roboto, sans-serif",
        "transition":"height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"
}

const styleInput = {
    //"tapHighlightColor":"rgba(0,0,0,0)",
    "padding":"0",
    "position":"relative",
    "height":"100%",
    "width":"100%",
    "border":"none",
    "outline":"none",
    //"backgroundColor":"transparent",
    //"color":"rgba(0, 0, 0, 0.87)",
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