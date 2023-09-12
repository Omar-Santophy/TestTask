import {createSlice} from '@reduxjs/toolkit';
import {THUNK_STATUS} from '../constants';
import {
  getFriendsAsyncThunk,
  getProfileInfoAsyncThunk,
  getUsersAsyncThunk,
  getpostAsyncThunk,
  postAsyncThunk,
} from '../asyncThunk/authAsyncThunk';

const initialState = {
  profile: {},
  logger: {},
  profilePosts: [],
  login: false,
  userPost: [],
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
    unfollow: (state, action) => {
      const personId = action.payload.id;
      const person = state.following.filter(item => item.id === personId);
      person[0].follower = true;
      person[0].following = false;
      const follower = [...state.followers, ...person];
      const newFollowings = state.following.filter(item => item.id != personId);
      state.followers = follower;
      state.following = newFollowings;
    },
    editprofile: (state, action) => {
      const person = action.payload;
      const logger = state.logger;
      const payload = {location: {}};
      payload.firstName = person.name;

      payload.email = person.email;
      payload.location.street = person.address;

      payload.phone = person.phone;
      payload.location.country = person.country;
      payload.picture = person.image;
      const j = {...state.logger, ...payload};
      state.logger = j;
      debugger;
    },
    addUserPost: (state, action) => {
      const newpost = action.payload;
      const payload = {image: '', owner: {}};
      payload.image = newpost.imgData;
      payload.text = newpost.title;
      payload['owner'].firstName = state.logger.firstName;
      payload['owner'].id = state.logger.id;
      payload['owner'].lastName = state.logger.lastName;
      payload['owner'].picture = state.logger.picture;
      payload['owner'].title = state.logger.title;
      const posts = [...state.userPost, payload];

      const newSort = posts.reverse();
      state.userPost = newSort;
    },
  },
  extraReducers: builder => {
    builder.addCase(getUsersAsyncThunk.fulfilled, (state, action) => {
      state.profilePosts = action.payload.data.data;
    });

    builder.addCase(getpostAsyncThunk.fulfilled, (state, action) => {
      state.userPost = action.payload.data.data;
    });
    builder.addCase(getProfileInfoAsyncThunk.fulfilled, (state, action) => {
      const data = action.payload.data;
      state.profile = action.payload.data;
      //debugger
      if (
        action.payload.data.id === '60d0fe4f5311236168a10a03' &&
        !state.login
      ) {
        state.login = true;
        state.logger = action.payload.data;
      }
    });

    builder.addCase(getFriendsAsyncThunk.fulfilled, (state, action) => {
      //state.userPost = action.payload.data.data;

      const followers = [];
      const following = [];
      for (let i = 0; i < action.payload.data.data.length; i++) {
        if (i < 15) {
          const item = action.payload.data.data[i];

          item.follower = true;
          item.following = false;
          followers.push(item);
        } else {
          const item = action.payload.data.data[i];

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
//
export const {addToken, follow, editprofile, unfollow, addUserPost} =
  authSlice.actions;
export const authStatusSelector = state => state.auth.authStatus;

export default authSlice.reducer;
