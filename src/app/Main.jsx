/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React from 'react';
import {deepOrange500} from 'material-ui/lib/styles/colors';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import AppBar from 'material-ui/lib/app-bar';
import Tabs from 'material-ui/lib/tabs';
import Tab from 'material-ui/lib/tabs';
import IconButton from 'material-ui/lib/icon-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import PanelPlayers from './PanelPlayers'
import Slider from 'material-ui/lib/slider';

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props.route} was activated.`);
}

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

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

function handleTouchTap(e) {
    
}

const MyTabs = () => (
  <Tabs>
    <Tab label="Item One" >
    </Tab>
  </Tabs>
);

const PadelAppBar = () => (
        
  <AppBar
    title="Convocatoria"
    onTitleTouchTap={handleTouchTap}
  />
);


class Main extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <PadelAppBar />
          <h1>Convocatoria</h1>          
          <PanelPlayers />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
