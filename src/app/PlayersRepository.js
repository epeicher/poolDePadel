import Firebase from 'firebase';
import Promise from 'bluebird'

class PlayersRepository {
    
    constructor() {
        this.firebaseRef = new Firebase('https://mypooldepadel.firebaseio.com/');
        this.players = [];       
    } 

    getPlayersPromise() {
		const p = new Promise((resolve,reject) => {
			if(this.players.length === 0) {
				this.firebaseRef.on("value", (snapshot) => {
					this.players = snapshot.val();
					resolve(this.players);           
				});
			}
			else {
				resolve(this.players);
			}
		});
		return p;
    }


}

export default PlayersRepository;