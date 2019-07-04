import { combineReducers } from 'redux';
import { authReducer } from './auth/auth.reducer';

export const Reducers = combineReducers({
  auth: authReducer,
});
