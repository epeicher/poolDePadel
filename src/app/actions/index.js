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

export function getNextMatch() {
	return (dispatch) => {
		repo.getNextMatch().then(nm => 
		{
			dispatch({type: 'NEXT_MATCH', nextMatch: nm})
		});
	}
}

export function updateSelectedPlayer(playerName) {
    repo.updateSelectedPlayer(playerName);
}
    
export function updateConfirmedPlayer(playerName) {
    repo.updateConfirmedPlayer(playerName);
}

export function addPlayerPromise(playerName) {
	return repo.addPlayer(playerName)
		.catch((error) => Promise.reject({_error: error}));
}

export function addMatchPromise(date) {
	return repo.addMatch(date)
		.catch(error => Promise.reject({_error: error}));
}
    
