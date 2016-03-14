import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import {Link} from 'react-router';

const MenuAppBar = () => (
  <AppBar
    title="Pool de Padel"
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem>
          <Link to="/convocatoria" style={{textDecoration:'none'}}>Convocatoria</Link>
        </MenuItem>
        <MenuItem primaryText="Partidos" />
        <MenuItem primaryText="Jugadores" />
      </IconMenu>
    }
  />
);

export default MenuAppBar;