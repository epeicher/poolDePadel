import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';

const players = (state = {selectedPlayers:[], availablePlayers:[]}, action) => {
	
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

const addPlayers = (state = {}, action) => {
	switch(action.type) {
		case 'ADDED_PLAYER':
		case 'ADDING_PLAYER':
			return {
				addedPlayer: action.playerName
			}	
		default:
			return state;			
	}
}

const nextMatch = (state = {}, action) => {
	switch(action.type) {
		case 'NEXT_MATCH':
			return {
				matchDate: action.nextMatch
			}
		default:
			return state;			
	}
}

export default combineReducers({
  players,
  addPlayers,
  nextMatch,
  form: formReducer
})

export function validateAddPlayer(state) {
	if(!!!state.addedPlayer) {
		return "Este campo es obligatorio";
	}
	return "";
}

export function getAddedPlayer(state) {
	return state.addedPlayer;
}

