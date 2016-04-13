import PlayersRepository from '../services/PlayersRepository'

const repo = new PlayersRepository();

export function getSelectedPlayers() {
	return (dispatch) => {
		repo.getSelectedPlayers((p) => {
			dispatch({type:'SELECTED_PLAYERS', selectedPlayers:p});
		});
	}
}

export function getAvailablePlayers() {
	return (dispatch) => {
		repo.getPlayers((p) => {
			dispatch({type:'AVAILABLE_PLAYERS', availablePlayers:p});
		});
	}
}

export function updateSelectedPlayer(playerName) {
    repo.updateSelectedPlayer(playerName);
}
    
export function updateConfirmedPlayer(playerName) {
    repo.updateConfirmedPlayer(playerName);
}
    
export function addPlayer(playerName) {
    repo.addPlayer(playerName);
}
    
