const selectedPlayer = (state = {}, action) => {
	switch(action.type) {
		case 'SELECT_PLAYER':
			return {...action.player}
		default:
			return state;
	}
}

const selectedPlayers = (state = [], action) => {
	console.log(action);
	switch(action.type) {
		case 'SELECT_PLAYER':
			let players = action.player.map((p) => selectedPlayer(undefined, p));
			return [
				...state,
				...players
			]
		default:
			return state;
	}
}

export default selectedPlayers;