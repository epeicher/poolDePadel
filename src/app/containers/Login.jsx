import React from 'react';
import {connect} from 'react-redux'
import {Card, CardText, RaisedButton} from 'material-ui';
import login from '../services/login';
import { browserHistory } from 'react-router'
import FlatButton from 'material-ui/lib/flat-button'
import TextField from 'material-ui/lib/text-field'
import FontIcon from 'material-ui/lib/font-icon'

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

    onClick(){
      login()
      .then(user => {
        this.props.dispatch({type: 'USER_LOGGED_IN', user:user})
        browserHistory.push('/convocatoria')
      })
      .catch(error => console.error(error));
    }
    
    render() {

        return (
          <div>
            <Card style={{
              'maxWidth': '800px',
              'margin': '5px auto',
              'padding': '20px'
            }}>
            <form>
              <TextField
                id="player"
                hintText="Nombre"
                //errorText={(playerName.touched && playerName.error) || error ? playerName.error || error : ''}
                floatingLabelText="Nombre de usuario"
              />
              <br/>
              <TextField
                id="pwd"
                hintText="Contraseña"
                //errorText={(playerName.touched && playerName.error) || error ? playerName.error || error : ''}
                floatingLabelText="Contraseña"
              /> 
              <br/>
              <RaisedButton
                style={{width: 256}} 
                label="Log in" />            
            </form>
            <br/>
            <FlatButton
              style={{fontSize: 12, width: 256}}
              label="Recordar contraseña"
              secondary={true}
            />
            <br/>
            <FlatButton
              style={{fontSize: 12, width: 256}}
              label="Crear usuario"
              secondary={true}
            />          
            </Card>
            <Card style={{
              'margin': '5px auto',
              'padding': '5px'
            }}>
            <FlatButton
              label="Google"
              linkButton={true}
              //href=""
              secondary={true}
              icon={<FontIcon className="fa fa-google" />}
              onClick={this.onClick.bind(this)}
            />           
            <FlatButton
              label="Facebook"
              linkButton={true}
              //href="https://github.com/callemall/material-ui"
              secondary={true}
              icon={<FontIcon className="fa fa-facebook-official" />}
            />           
            </Card>
            </div>
        );
    }
}


export default connect()(Login);