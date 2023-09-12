import Axios from 'axios';
import {METHODS, SERVICE_ROUTES, replaceUrl} from '../constants';

export const postServices = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.POSTS,
      method: METHODS.POST,
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
      url: SERVICE_ROUTES.GETUSERS,
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
