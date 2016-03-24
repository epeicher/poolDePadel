import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, RouterContext } from 'react-router'
import Main from './containers/Main'; 
import PanelPlayers from './containers/PanelPlayers';
import Login from './containers/Login';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const AppRouter = (props) => {
  return (<Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Login}/>
      <Route path="login" component={Login} />
      <Route path="convocatoria" component={PanelPlayers} />
    </Route>
  </Router>);
}

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(<AppRouter />, document.getElementById('app'));