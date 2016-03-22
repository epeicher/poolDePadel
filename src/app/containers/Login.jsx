import React from 'react';
import {Card, CardText, RaisedButton} from 'material-ui';
import login from '../services/login';

class Login extends React.Component {

    onClick(){
      console.log(this.props);
      login(this.context.router);
    }
    
    static propTypes = {
      //router: React.PropTypes.func.isRequired
    }

    render() {

        return (
            <Card style={{
              'maxWidth': '800px',
              'margin': '30px auto',
              'padding': '50px'
            }}>
              <CardText style={{
                'textAlign': 'center'
              }}>
                Please log in with your Google account.
              </CardText>

              <RaisedButton style={{
                display: 'block',
              }} onClick={this.onClick.bind(this)}
              label="Log in with Google" primary={true} />
            </Card>
        );
    }
}


export default Login;