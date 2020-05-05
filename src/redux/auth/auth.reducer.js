import {
  FAIL_LOGIN,
  LOGIN,
  LOGOUT,
  SUCCESS_LOGIN,
  SUCCESS_REGISTER,
  RECOVER_PASSWORD,
} from './auth.actions';

const initialState = {
  id: null,
  name: '',
  email: '',
  token: null,
  load: false,
  fail: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        load: true,
        fail: false,
      };

    case SUCCESS_LOGIN:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
        fail: false,
      };

    case FAIL_LOGIN:
      return {
        ...state,
        load: false,
        fail: true,
      };

    case LOGOUT:
      return {
        ...state,
        id: null,
        name: '',
        email: '',
        token: null,
        load: false,
        fail: null,
      };

    case SUCCESS_REGISTER:
      return {
        ...state,
        destination: action.payload.destination,
        sub: action.payload.sub,
      };

    case RECOVER_PASSWORD:
      return {
        ...state,
        destination: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
