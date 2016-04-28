import Firebase from 'firebase';

class PlayersRepository {
    
  constructor() {
    this.firebaseRef = new Firebase('https://mypooldepadel.firebaseio.com/');
    this.nextMatchRef = this.firebaseRef.child('matches')
        .orderByKey()
        .startAt(this.getToday())
        .limitToFirst(1)
  }    
  
  getToday() {
    let d = new Date();
    return d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + d.getDate();
  }
  
  getNextMatch() {
    return new Promise((resolve, reject) => {
      this.nextMatchRef.on("value", (snapshot) => {
          let dateObj = snapshot.val();
          if(dateObj && typeof dateObj === 'object')
          {
            let objKeys = Object.keys(dateObj);
            if(dateObj && objKeys) {
              let dateMatch = objKeys[0]
              resolve(dateMatch);
            }
            else {
              reject('No hay partido configurado');
            }
          }
          else {
            reject('No hay partido configurado');
          }
        })
    })    
  }

  getPlayers(cb) {
		this.firebaseRef.child('availablePlayers').on("value", (snapshot) => {
			let availablePlayers = [];
			snapshot.forEach(data => {availablePlayers.push(data.val())});
			cb(availablePlayers);
		});
  }
  
  getSelectedPlayers(dt) {
    console.log(dt);
    return new Promise((resolve, reject) => {
      
      if(!dt) {
        reject()
      } else {
        this.firebaseRef
          .child("matches")
          .child(dt)
          .child('selectedPlayers')
          .on("value", sp =>  {
            let selectedPlayers = [];
            sp.forEach(data => {
                            selectedPlayers.push(data.val())
                        });
            resolve(selectedPlayers);
          });
      }
    })
  }
	
	updateSelectedPlayer(playerName) {
      let selectedPlayer;
      this.firebaseRef.child('availablePlayers/'+playerName)
        .once("value", (snapshot) => {
          selectedPlayer = snapshot.val();
        });
      let p = {};
      p[playerName] = selectedPlayer;
      this.nextMatchRef
      .once("value", (snapshot) => {
      	snapshot.forEach(d => {
      		d.ref().child('selectedPlayers').update(p);
      	});
      });
	}

	updateConfirmedPlayer(playerName) {
      this.nextMatchRef
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
    this.nextMatchRef
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
  
  addMatch(date) {
    return new Promise((resolve,reject) => {
      this.firebaseRef.child('matches').child(date)
        .once('value', (sp) => {
          if(sp.exists()) {
            reject('El partido ya existe')
          } else {
            let newMatch = {}
            newMatch[date] = {"dateMatch": date}
            resolve(this.firebaseRef.child('matches').update(newMatch))
          }
      })
    })
  }

}

export default PlayersRepository;