
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import PlayersRepository from '../services/PlayersRepository'

const repo = new PlayersRepository();

export default function configureStore(initialState) {

  let store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )

  function asyncAction() {
    return (dispatch) => {
      repo.getSelectedPlayers((p) => {
        dispatch({type:'SELECT_PLAYER', selectedPlayers:p});
      });
      repo.getPlayers((p) => {
        dispatch({type:'ADD_PLAYER', availablePlayers:p});
      });
    }
  }

  store.dispatch(asyncAction);

  return store;

}