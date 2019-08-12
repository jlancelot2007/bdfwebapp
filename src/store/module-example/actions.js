import axios from 'axios'

export function someAction (/* context */) {

export function getArticles ({commit}, form) {
  return axios.post('api/auth/articles', form)
    .then(response => {
      commit('login', {token: response.data.token, user: response.data.user})
      setAxiosHeaders(response.data.token)
    })
}

function setAxiosHeaders (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}
 }