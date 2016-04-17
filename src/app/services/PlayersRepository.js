import Firebase from 'firebase';

class PlayersRepository {
    
  constructor() {
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

  updatePlayerRejecting(playerName){
    this.updateAvailableplayerToUnselected(playerName);
    this.removeFromSelectedPlayers(playerName);
  }

	abort() {
		this.firebaseRef.off();
	}

  updateAvailableplayerToUnselected(playerName) {
    this.firebaseRef.child('availablePlayers/'+playerName)
    .update({selected:false});
  }

  removeFromSelectedPlayers(playerName) {
    this.firebaseRef.child('matches').orderByKey().limitToLast(1)
      .once("value", (snapshot) => {
        snapshot.forEach(d => {
          d.ref().child('selectedPlayers/'+playerName).remove();
        });
      });
  }
  
  addPlayer(playerName){
    return new Promise((resolve, reject) => {
      this.firebaseRef.child('availablePlayers').child(playerName)
        .once('value', (sp) => {
          if(sp.exists()) {
            reject('El jugador ya existe')
          } else {
            let newPlayer = {};
            newPlayer[playerName] = {"name": playerName};
            resolve(this.firebaseRef.child('availablePlayers').update(newPlayer))
          }          
        })
    });
  }

}

export default PlayersRepository;