import defaultAxios from 'axios'

export const axios = defaultAxios.create({
  baseURL: 'https://api-nodejs-todolist.herokuapp.com/user/register',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: false,
});
