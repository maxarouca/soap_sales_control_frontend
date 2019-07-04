import axios from 'axios'
// import store from 'store'

const api = axios.create({
  baseURL: 'https://ca8d20fd-aba1-49d8-9916-6b229c62991a.mock.pstmn.io',
  headers: { 'x-api-key': 'b91c809b43764a7cafa0b7ea13879e03' },
})

api.interceptors.request.use((config) => {
  // const { token } = store.getState().auth

  const headers = { ...config.headers }

  /* if (token) {
    headers.authorization = token
  } */
  return { ...config, headers }
})

export default api
