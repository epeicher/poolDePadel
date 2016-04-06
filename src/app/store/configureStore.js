
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import PlayersRepository from '../services/PlayersRepository'

const repo = new PlayersRepository();

export default function configureStore() {

  let store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  )

  function asyncAction() {
    return (dispatch) => {
      repo.getSelectedPlayers((p) => {
        dispatch({type:'SELECTED_PLAYERS', selectedPlayers:p});
      });
      repo.getPlayers((p) => {
        dispatch({type:'AVAILABLE_PLAYERS', availablePlayers:p});
      });
    }
  }

  store.dispatch(asyncAction());

  return store;

}