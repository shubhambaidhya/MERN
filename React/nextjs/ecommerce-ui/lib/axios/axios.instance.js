import axios from 'axios';

const $axios = axios.create({
  baseURL: 'http://localhost:8080',
});

// Add a request interceptor
$axios.interceptors.request.use(function (config) {
  // get token from local storage
  const token = window.localStorage.getItem('token');

  //if token, add token to headers
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default $axios;
