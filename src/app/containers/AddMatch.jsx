import React from 'react'
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import RaisedButton from 'material-ui/lib/raised-button';
import {connect} from 'react-redux';
import { reduxForm } from 'redux-form'
import {addMatchPromise} from '../actions'
export const fields = [ 'matchDate' ]

class AddMatch extends React.Component {
    


    render () {
        const {fields: {matchDate}, error, handleSubmit} = this.props;
        return (
            <form>
                <DatePicker
                    id="match"
                    hintText="Fecha del pr&oacute;ximo partido"
                    errorText={(matchDate.touched && matchDate.error) || error ? matchDate.error || error : ''}
                    mode="landscape" 
                    onChange={handleSubmit}
                    //{...matchDate}
                /><br/>
                <RaisedButton type="button" onClick={handleSubmit}>Guardar</RaisedButton>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (event, date) => {console.log(event);console.log(date)}
    }
}

export default reduxForm({
    form: 'addMatch',
    fields
},undefined,
mapDispatchToProps
)(AddMatch)