import { combineReducers } from 'redux';
import { gistsReducer } from './gists';

export default combineReducers({
  gists: gistsReducer
});
