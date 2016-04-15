
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import PlayersRepository from '../services/PlayersRepository'
import {reducer as formReducer} from 'redux-form';

const repo = new PlayersRepository();

export default function configureStore() {
  
  const reducers = {
    rootReducer,
    form: formReducer
  }

  const reducer = combineReducers(reducers);

  let store = createStore(
    reducer,
    applyMiddleware(thunk)
  )

  return store;

}