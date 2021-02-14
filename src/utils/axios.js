import axios from 'axios'

const service = axios.create({
  baseURL: 'http://116.62.27.71:8083'
})

let myToken = sessionStorage.getItem('LBToken')

service.interceptors.request.use(config => {
  if (myToken) {
    config.headers.Authorization = 'Bearer ' + myToken
  }
  return config
})

export { service }
