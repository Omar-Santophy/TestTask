import {combineReducers} from '@reduxjs/toolkit';
import authReducer from '../slices/auth.slices';
export default combineReducers({
  auth: authReducer,
});
