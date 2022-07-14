import axios from "axios";
//引入进度条
import nprogress from 'nprogress'
import  'nprogress/nprogress.css'

//璃月axios的create创建
//request 就是axios，就是可以配置
const request = axios.create({
  baseURL:'/mock',
  //请求超时的时间，单位毫秒
  timeout:5000
})

//请求拦截器，在请求发出去之前做一些事情
request.interceptors.request.use(data=>{
  //进度条开始动
  nprogress.start()
  return data
},err=>{

})

//响应拦截期
request.interceptors.response.use(res=>{
  nprogress.done()
  return res.data
},err=>{
//  响应失败
  return Promise.reject(new Error('fail'))
})

export default request