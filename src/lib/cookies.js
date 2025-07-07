import Cookies from 'js-cookie'

// Set Cookie
export const setToken = (value) => {
  Cookies.set('token', value, {
    expires: 7, 
    path: '/',
    secure: true,
  })
}

// Get Cookie
export const getToken = () => {
  return Cookies.get('token')
}

// Delete Cookie
export const deleteToken = () => {
  Cookies.remove('token')
}
