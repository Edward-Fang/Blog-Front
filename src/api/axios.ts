import axios from 'axios'
import { useUserStore } from '@/store'
import { ElMessage } from 'element-plus'
// import { getToken } from '@/utils/auth'


const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    // const user = useUserStore()
    // if (store.getters.token) {
    //   config.headers['token'] = getToken()
    // }
    return config
  },
  error => {
    console.log(error, 'err') // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      ElMessage.error(res.msg || 'Error')
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('接口信息报错' + error)
    return Promise.reject(error)
  }
)

export default service
