
const selectedPlayers = (state = {selectedPlayers:[], availablePlayers:[]}, action) => {

	switch(action.type) {
		case 'SELECTED_PLAYERS':
			return {
				selectedPlayers: [
					//...state.selectedPlayers,
					...action.selectedPlayers
				],
				availablePlayers: [...state.availablePlayers]
			}
		case 'AVAILABLE_PLAYERS':
			return {
				selectedPlayers: [...state.selectedPlayers],
				availablePlayers: [
					//...state.availablePlayers,
					...action.availablePlayers
				]
			}
		default:
			return state;
	}
}

export default selectedPlayers;