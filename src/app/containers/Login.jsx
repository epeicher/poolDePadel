import React from 'react';
import {connect} from 'react-redux'
import {Card, CardText, RaisedButton, CardHeader} from 'material-ui';
import {login, loginWithPassword} from '../services/login';
import { browserHistory } from 'react-router'
import FlatButton from 'material-ui/lib/flat-button'
import TextField from 'material-ui/lib/text-field'
import FontIcon from 'material-ui/lib/font-icon'
import { withRouter } from 'react-router'

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  
  onCreateUser(e) {
    this.props.router.push('/adduser')
  }

    onClickHandler(provider){
      return (e) => {
        login(provider)
        .then(user => {
          this.props.dispatch({type: 'USER_LOGGED_IN', user:user})
          browserHistory.push('/convocatoria')
        })
        .catch(error => console.error(error));
      }
    }
    
    onLoginWithPassword() {
      const email = document.getElementById('LoginUserEmail').value;
      const pwd = document.getElementById('LoginUserPwd').value;
      loginWithPassword(email, pwd)
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
                id="LoginUserEmail"
                hintText="Email"
                //errorText={(playerName.touched && playerName.error) || error ? playerName.error || error : ''}
                floatingLabelText="Email de usuario"
              />
              <br/>
              <TextField
                id="LoginUserPwd"
                hintText="Contraseña"
                type="password"
                //errorText={(playerName.touched && playerName.error) || error ? playerName.error || error : ''}
                floatingLabelText="Contraseña"
              /> 
              <br/>
              <RaisedButton
                style={{width: 256}} 
                secondary={true}
                label="Log in"
                onClick={this.onLoginWithPassword.bind(this)} />            
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
              onClick={this.onCreateUser.bind(this)}
            />          
            </Card>
            <Card style={{
              'maxWidth': '800px',
              'margin': '5px auto',
              'padding': '5px'
            }}>
            <CardHeader title="O únete usando..." />
            <FlatButton
              key="google"
              label="Google"
              linkButton={true}
              //href=""
              secondary={true}
              icon={<FontIcon className="fa fa-google" />}
              onClick={this.onClickHandler("google")}
            />           
            <FlatButton
              label="Facebook"
              linkButton={true}
              //href="https://github.com/callemall/material-ui"
              secondary={true}
              icon={<FontIcon className="fa fa-facebook-official" />}
              onClick={this.onClickHandler("facebook")}
            />  
            <FlatButton
              label="Twitter"
              linkButton={true}
              //href="https://github.com/callemall/material-ui"
              secondary={true}
              icon={<FontIcon className="fa fa-twitter" />}
              onClick={this.onClickHandler("twitter")}
            />                     
            </Card>
            </div>
        );
    }
}


export default connect()(withRouter(Login));