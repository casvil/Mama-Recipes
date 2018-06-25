import { combineReducers } from 'redux';

import userReducer from './userReducer';
import recipeReducer from './recipeReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  user: userReducer,
  recipes: recipeReducer,
  form: formReducer
});
