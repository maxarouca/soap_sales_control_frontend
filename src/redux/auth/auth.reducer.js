import {
  FAIL_LOGIN,
  LOGIN,
  LOGOUT,
  SUCCESS_LOGIN,
  SUCCESS_REGISTER,
  RECOVER_PASSWORD,
} from './auth.actions'

const initialState = {
  token: null,
  email: 'dev@ionvamind.com.br',
  password: null,
  load: false,
  fail: null,
  products: null,
  inova_key: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        load: true,
        fail: false,
      }

    case SUCCESS_LOGIN:
      return {
        ...state,
        id: action.payload.api_key_id,
        firstName: action.payload.username,
        email: action.payload.email,
        groups: action.payload.groups,
        token: action.payload.token,
        refresh_token: action.payload.refresh_token,
        products: action.payload.plans,
        inova_key: action.payload.api_key,
        user_id: action.payload.sub,
        load: false,
        fail: false,
      }

    case FAIL_LOGIN:
      return {
        ...state,
        load: false,
        fail: true,
      }

    case LOGOUT:
      return {
        ...state,
        id: null,
        firstName: null,
        email: null,
        groups: null,
        token: null,
        refresh_token: null,
        products: null,
        inova_key: null,
        user_id: null,
        load: false,
        fail: false,
      }

    case SUCCESS_REGISTER:
      return {
        ...state,
        destination: action.payload.destination,
        sub: action.payload.sub,
      }

    case RECOVER_PASSWORD:
      return {
        ...state,
        destination: action.payload,
      }
    default:
      return state
  }
}

export default authReducer
