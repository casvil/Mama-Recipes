import { combineReducers } from 'redux';

import authReducer from './authReducer';
import recipeReducer from './recipeReducer';
import userReducer from './userReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  recipes: recipeReducer,
  form: formReducer
});
