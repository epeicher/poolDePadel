
const selectedPlayers = (state = {selectedPlayers:[], availablePlayers:[]}, action) => {
console.log(action);
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
		case 'ADDED_PLAYER':
		case 'ADDING_PLAYER':
			
			return {
				addedPlayer: action.playerName
			}			
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