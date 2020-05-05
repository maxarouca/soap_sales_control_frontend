import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use((config) => {
  // const { token } = store.getState().auth

  const headers = { ...config.headers };

  /* if (token) {
    headers.authorization = token
  } */
  return { ...config, headers };
});

export default api;
