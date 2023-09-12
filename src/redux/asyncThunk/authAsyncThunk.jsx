import {createAsyncThunk} from '@reduxjs/toolkit';
import {ASYNC_ROUTES} from '../constants';
import {
  getFriendsServices,
  getProfileServices,
  getUserServices,
  getpostServices,
} from '../services/authServices';

export const getpostAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.POSTS,
  async (payload, {rejectWithValue}) => {
    console.log(payload, '...payload from signUp');
    try {
      const response = await getpostServices(payload);
      return response;
    } catch (error) {
      return rejectWithValue;
    }
  },
);

export const getUsersAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.GetUserProfile,
  async (payload, {rejectWithValue}) => {
    console.log(payload, '...payload from signUp');
    try {
      const response = await getUserServices(payload);
      return response;
    } catch (error) {
      return rejectWithValue;
    }
  },
);
export const getProfileInfoAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.GETUSER,
  async (payload, {rejectWithValue}) => {
    console.log(payload, '...payload from signUp');
    try {
      const response = await getProfileServices(payload);
      return response;
    } catch (error) {
      return rejectWithValue;
    }
  },
);
export const getFriendsAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.getFriends,
  async (payload, {rejectWithValue}) => {
    console.log(payload, '...payload from signUp');
    try {
      const response = await getFriendsServices(payload);

      return response;
    } catch (error) {
      return rejectWithValue;
    }
  },
);
//getFriendsServices
