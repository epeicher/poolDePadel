
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import {reducer as formReducer} from 'redux-form';

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