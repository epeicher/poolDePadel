import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import Paper from 'material-ui/lib/paper';
import ListAvailablePlayers from './ListAvailablePlayers';
import ListChosenPlayers from './ListChosenPlayers';
import PlayersRepository from './PlayersRepository';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class PanelPlayers extends React.Component {
    
  constructor() {
    super();

    this.handleSelectedPlayer = this.handleSelectedPlayer.bind(this);
    this.handlePlayerConfirmed = this.handlePlayerConfirmed.bind(this);
    
    this.firebaseRef = new Firebase('https://mypooldepadel.firebaseio.com/');
    
    this.state = {
        availablePlayers: [],
        selectedPlayers: []
    };

  }

  bindAvailablePlayers() {
    this.firebaseRef.child('availablePlayers').on("value", (snapshot) => {
      let avaPlayers = [];
      snapshot.forEach(data => {avaPlayers.push(data.val())});
        this.setState({
            availablePlayers: avaPlayers
        });
    });
  }

  bindSelectedPlayers() {
     this.firebaseRef.child('matches/0/selectedPlayers')
        .on("value", (snapshot) => {
            let selPlayers = [];
            snapshot.forEach(data => {
                let player = data.val();
                player.key = data.key();
                selPlayers.push(player);
            });
           this.setState({
                selectedPlayers: selPlayers
            });      
    });
  }
  
  componentDidMount() {
    this.bindAvailablePlayers();
    this.bindSelectedPlayers();
  }

  handleSelectedPlayer(playerName) {
    this.firebaseRef.child('availablePlayers/'+playerName).update({selected:true});
    if(!this.state.selectedPlayers.find(p => p.name === playerName)){
      let selectedPlayer = this.state.availablePlayers.find(p => p.name === playerName);
      this.firebaseRef.child('matches/0/selectedPlayers').push(selectedPlayer);
    }
  }
  
  handlePlayerConfirmed(playerName) {
      var player = this.state.selectedPlayers.find(p => p.name === playerName);
      if(player) player.confirmed = true;
      this.setState({selectedPlayers: this.state.selectedPlayers})
  }

  render() {
    
    return (
        <div>
            <GridList padding={10}>
                <Paper zDepth={2} children={<ListAvailablePlayers players={this.state.availablePlayers} onPlayerClicked={this.handleSelectedPlayer} />} />
                <Paper zDepth={2} children={<ListChosenPlayers selectedPlayers={this.state.selectedPlayers} onPlayerConfirmed={this.handlePlayerConfirmed} />} />
            </GridList>
        </div>
    )
  }
}

export default PanelPlayers;