import { combineReducers } from 'redux';
import { filesReducer } from './files';
import { gistsReducer } from './gists';

export default combineReducers({
  gists: gistsReducer,
  files: filesReducer
});
