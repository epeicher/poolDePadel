import React from 'react';

const SelectedPlayer = (props) => {
	return (
		 <ListItem
	        ref={player.name}
	        key={player.name}
	        id={player.name}
	        primaryText={player.name}
	        leftCheckbox={<Checkbox onCheck={this.playerConfirmed} checked={player.confirmed} />}                       
	        disabled={player.confirmed}         
	      />

	);
}