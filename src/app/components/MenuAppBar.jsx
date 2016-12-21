import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';

const MenuAppBar = () => (
  <AppBar
    title="Pool de Padel"
    iconElementLeft={<IconButton />}
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
        <MenuItem>
            <Link to="/addmatch" style={{textDecoration:'none'}}>Agrega Partido</Link>
        </MenuItem>
        <MenuItem>
            <Link to="/addplayer" style={{textDecoration:'none'}}>Agrega Jugador</Link>
        </MenuItem>
        <MenuItem>
            <Link to="/changepwd" style={{textDecoration:'none'}}>Cambia Contraseña</Link>
        </MenuItem>

      </IconMenu>
    }
  />
);

export default MenuAppBar;