export const LOGIN = 'LOGIN'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'
export const FAIL_LOGIN = 'FAIL_LOGIN'
export const LOGOUT = 'LOGOUT'
export const SUCCESS_REGISTER = 'SUCCESS_REGISTER'
export const RECOVER_PASSWORD = 'RECOVER_PASSWORD'

export const login = code => ({
  type: LOGIN,
  payload: {
    code,
  },
})

export const successLogin = payload => ({
  type: SUCCESS_LOGIN,
  payload,
})

export const failLogin = () => ({
  type: FAIL_LOGIN,
})

export const logout = () => ({
  type: LOGOUT,
})

export const successRegister = payload => ({
  type: SUCCESS_REGISTER,
  payload,
})

export const recoverPassword = payload => ({
  type: RECOVER_PASSWORD,
  payload,
})
