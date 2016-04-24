
const selectedPlayers = (state = {selectedPlayers:[], availablePlayers:[], nextMatch: undefined}, action) => {
	
	switch(action.type) {

		case 'SELECTED_PLAYERS':
			return {
				selectedPlayers: [
					//...state.selectedPlayers,
					...action.selectedPlayers
				],
				availablePlayers: [...state.availablePlayers],
				nextMatch: state.nextMatch
			}
		case 'AVAILABLE_PLAYERS':
			return {
				selectedPlayers: [...state.selectedPlayers],
				availablePlayers: [
					//...state.availablePlayers,
					...action.availablePlayers
				],
				nextMatch: state.nextMatch
			}
		case 'ADDED_PLAYER':
		case 'ADDING_PLAYER':
			return {
				addedPlayer: action.playerName
			}
		case 'NEXT_MATCH':
			return {
				nextMatch: action.nextMatch,
				selectedPlayers: [...state.selectedPlayers],
				availablePlayers: [...state.availablePlayers]
			}
			return state;			
		default:
			return state;
	}
}

export default selectedPlayers;

export function validateAddPlayer(state) {
	if(!!!state.addedPlayer) {
		return "Este campo es obligatorio";
	}
	return "";
}

export function getAddedPlayer(state) {
	return state.addedPlayer;
}