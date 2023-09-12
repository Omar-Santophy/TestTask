import Axios from 'axios';
import {METHODS, SERVICE_ROUTES, replaceUrl} from '../constants';

export const getpostServices = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.POSTS,
      method: METHODS.GET,
      headers: {'Content-Type': 'multipart/form-data'},
      data,
    };

    Axios.request(config)
      .then(res => {
        console.log(res, '.......response from posts services');
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
export const getUserServices = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTES.getUserProfile, {id: data.id}),
      method: METHODS.GET,
      headers: {'Content-Type': 'multipart/form-data'},
      data,
    };
    Axios.request(config)
      .then(res => {
        console.log(res, '.......response from posts services');
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
export const getProfileServices = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTES.GETUSER, {id: data.id}),
      method: METHODS.GET,
      headers: {'Content-Type': 'multipart/form-data'},
      data,
    };
    Axios.request(config)
      .then(res => {
        console.log(res, '.......response from posts services');
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
export const getFriendsServices = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.getFriends,
      method: METHODS.GET,
      headers: {'Content-Type': 'multipart/form-data'},
      data,
    };

    Axios.request(config)

      .then(res => {
        console.log(res, '.......response from posts services');
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
