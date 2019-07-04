import axios from 'axios'
// import store from '../store';

const api = axios.create({
  baseURL: 'https://api.inova5.space',
  headers: { 'x-api-key': 'CdrmYcJ8aKYH6GF09ilR73kNRnA9neEM7EkRt5d0' },
})

api.interceptors.request.use((config) => {
  // const { token } = store.getState().auth;

  const headers = { ...config.headers }

  /* if (token) {
    headers.authorization = token
  } */
  return { ...config, headers }
})

export default api
