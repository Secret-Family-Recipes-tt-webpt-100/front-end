import { combineReducers } from 'redux';

import RecipeForm from './RecipeForm.reducer';
import AuthUser from './AuthUser.reducer';

export default combineReducers({ RecipeForm, AuthUser });
