import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.soapcontrol.maxarouca.com',
});

export default api;
