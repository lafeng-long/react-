//store/modules/token.js
// 封装token相关的方法  存  取  删  三个方法
const TOKENKEY = 'token_key'

function setToken(token) {
  return localStorage.setItem(TOKENKEY, token)
}

function getToken() {
  return localStorage.getItem(TOKENKEY)
}

function removeToken() {
  return localStorage.removeItem(TOKENKEY)
}

export {
  setToken,
  getToken,
  removeToken
}