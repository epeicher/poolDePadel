
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

  return store;

}