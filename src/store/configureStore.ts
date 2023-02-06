import {createStore, combineReducers} from 'redux';
import saveUserReducer from './reducers/saveUserReducer';
import userAuthReducer from './reducers/userAuthReducer';

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  saveUser: saveUserReducer,
});
export const configureStore = createStore(rootReducer);
