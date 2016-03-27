const selectedPlayer = (state = {}, action) => {

	switch(action.type) {
		case 'SELECT_PLAYER':
			return {player: action.player}
		default:
			return state;
	}
}

const selectedPlayers = (state = [], action) => {
	switch(action.type) {
		case 'SELECT_PLAYER':
			return [
				...state,
				selectedPlayer(undefined, action)
			]
		default:
			return state;
	}
}

export default selectedPlayers;