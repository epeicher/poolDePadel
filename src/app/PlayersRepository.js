import Firebase from 'firebase';

class PlayersRepository {
    
    constructor() {
        this.firebaseRef = new Firebase('https://mypooldepadel.firebaseio.com/');
    }    

    getPlayers() {
		const p = new Promise((resolve,reject) => {
			this.firebaseRef.child('availablePlayers').on("value", (snapshot) => {
				let availablePlayers = [];
				snapshot.forEach(data => {availablePlayers.push(data.val())});
				resolve(availablePlayers);
			});
		});
		return p;
    }

    getSelectedPlayers() {
        const p = new Promise((resolve,reject) => {
			this.firebaseRef.child('matches/0/selectedPlayers')
	        .on("value", (snapshot) => {
				let selectedPlayers = [];
				snapshot.forEach(data => {selectedPlayers.push(data.val())});
				resolve(selectedPlayers);
			});
        });
        return p;
    }
	
	updateSelectedPlayer(playerName) {
      this.firebaseRef.child('availablePlayers/'+playerName).update({selected:true});
      this.firebaseRef.child('matches/0/selectedPlayers/' + playerName)
      .once("value", (snapshot) => {
        if(!snapshot.exists()) {
          this.firebaseRef.child('matches/0/selectedPlayers').push({name: playerName});
		}
      });
	}

	updateConfirmedPlayer(playerName) {
      this.firebaseRef.child('matches/0/selectedPlayers/' + playerName).update({confirmed:true});
	}


	abort() {
		// Cancel the callbacks
	}

}

export default PlayersRepository;