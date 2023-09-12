import {createSlice} from '@reduxjs/toolkit';
import {THUNK_STATUS} from '../constants';
import {getUsersAsyncThunk, postAsyncThunk} from '../asyncThunk/authAsyncThunk';

const initialState = {
  person: {
    name: 'Rajat Singh',
    email: 'rajat@gmail.com',
    address: 'Nandurbar,Maharashtra',
    mobile: '1234567890',
    country: 'India',
    img: 'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
  },
  userPost: [
    {
      imgData: 'https://api.slingacademy.com/public/sample-photos/22.jpeg',
      title: 'Dimple',
      post: '',
    },
    {
      imgData: 'https://api.slingacademy.com/public/sample-photos/23.jpeg',
      title: 'Simple',
      post: '',
    },
    {
      imgData: 'https://api.slingacademy.com/public/sample-photos/24.jpeg',
      title: 'Bahar Gaon',
      post: '',
    },
    {
      imgData: 'https://api.slingacademy.com/public/sample-photos/25.jpeg',
      title: 'Videsh',
      post: '',
    },
    {
      imgData: 'https://api.slingacademy.com/public/sample-photos/26.jpeg',
      title: '',
      post: '',
    },
    {
      imgData: 'https://api.slingacademy.com/public/sample-photos/27.jpeg',
      title: 'Nepal',
      post: '',
    },
    {
      imgData: 'https://api.slingacademy.com/public/sample-photos/28.jpeg',
      title: 'China',
      post: '',
    },
  ],
  user: [],
  followers: [],
  following: [],
  accessToken: null,
  authStatus: null,
  isLoading: false,
  isAuthenticated: false,
  isError: false,
};

const setLoadingState = state => {
  state.authStatus = THUNK_STATUS.LOADING;
  state.isLoading = true;
  state.isAuthenticated = false;
  state.isError = false;
};

const setSuccessState = (state, action) => {
  state.authStatus = THUNK_STATUS.SUCCESS;
};

const setFailedState = state => {
  state.authStatus = THUNK_STATUS.FAILED;
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    follow: (state, action) => {
      const personId = action.payload.id;
      const person = state.followers.filter(item => item.id === personId);
      person[0].follower = false;
      person[0].following = true;
      const followings = [...state.following, ...person];
      const newFollow = state.followers.filter(item => item.id != personId);
      state.followers = newFollow;
      state.following = followings;
    },
    editprofile: (state, action) => {
      const person = action.payload;
      state.person = person;
    },
    addUserPost: (state, action) => {
      const newpost = action.payload;
      const posts = [...state.userPost, newpost];
      state.userPost = posts;
    },
  },
  extraReducers: builder => {
    builder.addCase(getUsersAsyncThunk.fulfilled, (state, action) => {
      const result = [];
      const followers = [];
      const following = [];
      for (let i = 0; i < action.payload.data.length; i++) {
        if (i < 4) {
          const item = action.payload.data[i];
          item.img = `https://api.slingacademy.com/public/sample-photos/${
            i + 1
          }.jpeg`;
          item.follower = true;
          item.following = false;
          followers.push(item);
        } else {
          const item = action.payload.data[i];
          item.img = `https://api.slingacademy.com/public/sample-photos/${
            i + 1
          }.jpeg`;

          item.follower = false;
          item.following = true;
          following.push(item);
        }
      }
      state.followers = followers;
      state.following = following;
    });
  },
});

export const {addToken, follow, editprofile, addUserPost} = authSlice.actions;
export const authStatusSelector = state => state.auth.authStatus;

export default authSlice.reducer;
