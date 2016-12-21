/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MenuAppBar from '../components/MenuAppBar';

const styles = {
  container: {
    textAlign: 'center'
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },  
};

const muiTheme = getMuiTheme();

class Main extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.initialState={
      loggedIn : false
    }
  }

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: true
    });
  }

  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <MenuAppBar />     
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
