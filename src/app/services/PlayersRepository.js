import Firebase from 'firebase';
import _ from 'lodash'

class PlayersRepository {
    
  constructor() {
    this.firebaseRef = new Firebase('https://mypooldepadel.firebaseio.com/');
  }    
  
  getToday() {
    let d = new Date();
    let today = d.getFullYear() + "-" + this.padLeftZero(d.getMonth()) + "-" + this.padLeftZero(d.getDate());
    return today;
  }
  
  padLeftZero(n){
    return ("0"+n).slice(-2);
  }
  
  getNextMatch() {
    return new Promise((resolve, reject) => {
      this.firebaseRef.child('matches')
        .orderByKey()
        .startAt(this.getToday())
        .limitToFirst(1)
        .once("value", (snapshot) => {
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
  
  getMatchesDates() {
    return new Promise((resolve, reject) => {
      this.firebaseRef
        .child("matches").once("value", sp => {
          let matches = [];
          sp.forEach(data => {
            matches.push(data.key());
          })
          resolve(matches);
        })
    });
  }
  
  getPlayers(cb) {
		this.firebaseRef.child('availablePlayers').on("value", (snapshot) => {
			let availablePlayers = [];
			snapshot.forEach(data => {availablePlayers.push(data.val())});
			cb(availablePlayers);
		});
  }
  
  getSelectedPlayers(dt, cb, err) {
      
      if(!dt) {
        err()
      } else {
        this.firebaseRef
          .child("matches")
          .child(dt)
          .child('selectedPlayers')
          .on("value", sp =>  {
            cb(_.values(sp.val()))
          });
      }
  }
	
	updateSelectedPlayer(playerName,dt) {
      let selectedPlayer;
      this.firebaseRef.child('availablePlayers/'+playerName)
        .once("value", (snapshot) => {
          selectedPlayer = snapshot.val();
        });
      let p = {};
      p[playerName] = selectedPlayer;
      this.firebaseRef
          .child("matches")
          .child(dt)
          .child('selectedPlayers').update(p);
	}

	updateConfirmedPlayer(playerName, dt) {
    return new Promise((resolve, reject) => {
      if(dt) {
        resolve(
          this.firebaseRef
            .child("matches")
            .child(dt)
            .child('selectedPlayers')
            .child(playerName)
            .update({confirmed:true})
        )
      }
      else {
        reject()
      }
    })
	}

  updatePlayerRejecting(playerName, dt){
    return new Promise((resolve, reject) => {
      if(dt) {
          resolve(
            this.firebaseRef
              .child("matches")
              .child(dt)
              .child('selectedPlayers')
              .child(playerName)
              .remove()
          )
      } else {
        reject()
      }      
    })
  }

	abort() {
		this.firebaseRef.off();
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
  
  addUser(email, pwd) {
        
    return this.firebaseRef.createUser({
      email    : email,
      password : pwd
    })
  }

}

export default PlayersRepository;