import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { magicsReducer } from './magics';

export default combineReducers({
  magics: magicsReducer,
  form: formReducer
});
