import React from 'react';
import {connect} from 'react-redux'
import {Card, CardText, RaisedButton, CardHeader} from 'material-ui';
import {login, loginWithPassword, resetPassword} from '../services/login';
import { browserHistory } from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon'
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
    
    onResetPassword() {
      const email = document.getElementById('LoginUserEmail').value;
      resetPassword(email)
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
              label="Resetear contraseña"
              secondary={true}
              onClick={this.onResetPassword.bind(this)}
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
              secondary={true}
              icon={<FontIcon className="fa fa-google" />}
              onClick={this.onClickHandler("google")}
            />           
            <FlatButton
              label="Facebook"
              secondary={true}
              icon={<FontIcon className="fa fa-facebook-official" />}
              onClick={this.onClickHandler("facebook")}
            />  
            <FlatButton
              label="Twitter"
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