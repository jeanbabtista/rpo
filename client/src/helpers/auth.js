import cookie from 'js-cookie'

// cookies
export const setCookie = (key, value) => cookie.set(key, value)
export const removeCookie = (key) => cookie.remove(key)
export const getCookie = (key) => cookie.get(key)

// local storage
export const setLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value))
export const removeLocalStorage = (key) => localStorage.removeItem(key)
export const getLocalStorage = (key) => localStorage.getItem(key)

// auth
export const authenticate = (response, next) => {
  const { token, user } = response.data
  setCookie('token', token)
  setLocalStorage('user', user)
  next()
}

export const signout = () => {
  removeCookie('token')
  removeLocalStorage('user')
}

export const isAuth = () =>
  getCookie('token') && getLocalStorage('user')
    ? JSON.parse(getLocalStorage('user'))
    : false

export const updateUser = (response) => setLocalStorage('user', response.data)
