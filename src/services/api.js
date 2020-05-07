import axios from 'axios';

const api = axios.create({
  baseURL: 'http://157.245.222.156:3333',
});

export default api;
