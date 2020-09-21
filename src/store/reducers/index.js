import { combineReducers } from 'redux';
import actionReducer from './actionReducer';
import moodReducer from './moodReducer';

export default combineReducers({
  mood: moodReducer,
  currentAction: actionReducer 
});