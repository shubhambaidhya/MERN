import axios from 'axios';

const $axios = axios.create({
  baseURL: 'http://localhost:8080',
});

export default $axios;
