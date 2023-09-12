import {createAsyncThunk} from '@reduxjs/toolkit';
import {ASYNC_ROUTES} from '../constants';
import {getUserServices, postServices} from '../services/authServices';

export const postAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.POSTS,
  async (payload, {rejectWithValue}) => {
    console.log(payload, '...payload from signUp');
    try {
      const response = await postServices(payload);
      return response;
    } catch (error) {
      return rejectWithValue;
    }
  },
);

export const getUsersAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.GETUSERS,
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
