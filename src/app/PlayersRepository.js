import Firebase from 'firebase';

class PlayersRepository {
    
    constructor() {
        this.firebaseRef = new Firebase('https://mypooldepadel.firebaseio.com/');
        this.players = [];     
        this.selectedPlayers = [];  
    }    

    getPlayersPromise() {
		const p = new Promise((resolve,reject) => {
			this.firebaseRef.child('availablePlayers').on("value", (snapshot) => {
				this.players = snapshot.val();
				resolve(this.players);           
			});
		});
		return p;
    }

    getSelectedPlayer() {
        const p = new Promise((resolve,reject) => {
            this.firebaseRef.orderByChild('matches')
                .limitToLast(1)
                .on("value", (snapshot) => {
                    this.selectedPlayers = snapshot.val().matches[0].selectedPlayers;
                    resolve(this.selectedPlayers);           
            });
        });
        return p;
    }


}

export default PlayersRepository;