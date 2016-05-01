import React from 'react';
import {Card, CardText, RaisedButton} from 'material-ui';
import login from '../services/login';
import { browserHistory } from 'react-router'
import FlatButton from 'material-ui/lib/flat-button'
import TextField from 'material-ui/lib/text-field'
import FontIcon from 'material-ui/lib/font-icon'

class Login extends React.Component {

    onClick(){
      login(browserHistory);
    }
    
    render() {

        return (
          <div>
            <Card style={{
              'maxWidth': '800px',
              'margin': '5px auto',
              'padding': '50px'
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
              <RaisedButton label="Log in" />            
            </form>
            </Card>
            <Card style={{
              'margin': '5px auto',
              'padding': '20px'
            }}>
            <FlatButton
              label="Crear usuario"
            />          
            <br/>
            <FlatButton
              label="Recordar contraseña"
            />
            </Card>
            <Card style={{
              'margin': '5px auto',
              'padding': '20px'
            }}>
            <FlatButton
              label="Autentícate con Google"
              linkButton={true}
              href=""
              secondary={true}
              icon={<FontIcon className="muidocs-icon-custom-github" />}
              onClick={this.onClick.bind(this)}
            />           
            <FlatButton
              label="Autentícate con Facebook"
              linkButton={true}
              href="https://github.com/callemall/material-ui"
              secondary={true}
              icon={<FontIcon className="muidocs-icon-custom-facebook" />}
            />           
            </Card>
            </div>
        );
    }
}


export default Login;