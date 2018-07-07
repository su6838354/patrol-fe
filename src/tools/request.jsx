/**
 * Created by pdd on 2018/6/22.
 */

import axios from 'axios'
import Cookies from 'js-cookie'

// const csrftoken = Cookies.get('csrfToken');
// import store from '@/store'
// import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
    baseURL: 'http://127.0.0.1:7001', // api的base_url
    // baseURL: 'http://security.weichongming.com', // api的base_url
    timeout: 10000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
    // config.headers['x-csrf-token'] = csrftoken;
    // Do something before request is sent
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    // }
    return config
}, error => {
    console.log(error) // for debug
    message.error(error.message)
    Promise.reject(error)
})

// respone拦截器
// service.interceptors.response.use(
//   ({ data, config, status }) => {
//     if (config.method === 'delete' && status === 204) {
//       return {data, code: 0, message: 'delete success'}
//     } else if (data.code !== 0) {
//       message.error(data.message)
//       return Promise.reject(new Error(data))
//     } else {
//       return data
//     }
//   },
//   /**
//   * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
//   * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
//   */
//   //  const res = response.data;
//   //     if (res.code !== 20000) {
//   //       Message({
//   //         message: res.message,
//   //         type: 'error',
//   //         duration: 5 * 1000
//   //       });
//   //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
//   //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//   //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
//   //           confirmButtonText: '重新登录',
//   //           cancelButtonText: '取消',
//   //           type: 'warning'
//   //         }).then(() => {
//   //           store.dispatch('FedLogOut').then(() => {
//   //             location.reload();// 为了重新实例化vue-router对象 避免bug
//   //           });
//   //         })
//   //       }
//   //       return Promise.reject('error');
//   //     } else {
//   //       return response.data;
//   //     }
//   error => {
//     console.log('err' + error)// for debug
//     message.error(error.message)
//     return Promise.reject(error)
//   })

export default service
