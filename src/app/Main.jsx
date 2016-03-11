/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React from 'react';
import {deepOrange500} from 'material-ui/lib/styles/colors';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
//import { Router, Route, Link, browserHistory } from 'react-router'
import PanelPlayers from './PanelPlayers'

const styles = {
  container: {
    textAlign: 'center'
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <h1>Convocatoria</h1>          
          <PanelPlayers />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
