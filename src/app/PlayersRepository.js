import Firebase from 'firebase';

class PlayersRepository {
    
    constructor() {
    	let that = this;
        this.firebaseRef = new Firebase('https://mypooldepadel.firebaseio.com/');
    }    

    getPlayers(cb) {
		this.firebaseRef.child('availablePlayers').on("value", (snapshot) => {
			let availablePlayers = [];
			snapshot.forEach(data => {availablePlayers.push(data.val())});
			cb(availablePlayers);
		});
    }

    getSelectedPlayers(cb) {
		this.firebaseRef.child('matches').orderByKey().limitToLast(1)
		.on("value", (snapshot) => {
			let selectedPlayers = [];
			snapshot.forEach(match => {
				match.ref().child('selectedPlayers').once("value", sp => {
					sp.forEach(data => {
                        selectedPlayers.push(data.val())
                    });
				});
			});
			cb(selectedPlayers);
		});
    }
	
	updateSelectedPlayer(playerName) {
      let selectedPlayer;
      this.firebaseRef.child('availablePlayers/'+playerName)
      .once("value", (snapshot) => {
      	snapshot.ref().update({selected:true});
      	selectedPlayer = snapshot.val();
      });
      let p = {};
      p[playerName] = selectedPlayer;
      this.firebaseRef.child('matches').orderByKey().limitToLast(1)
      .once("value", (snapshot) => {
      	snapshot.forEach(d => {
      		d.ref().child('selectedPlayers').update(p);
      	});
      });
	}

	updateConfirmedPlayer(playerName) {
      this.firebaseRef.child('matches').orderByKey().limitToLast(1)
      .once("value", (snapshot) => {
      	snapshot.forEach(d => {
      		d.ref().child('selectedPlayers/'+playerName).update({confirmed:true});
      	});
      });
	}

	abort() {
		this.firebaseRef.off();
	}

}

export default PlayersRepository;