//配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/pages/Home'
// import Register from '@/pages/Register'
// import Login from '@/pages/Login'
// import Search from '@/pages/Search'

//使用插件

Vue.use(VueRouter)

//先把VueRouter原型对象的push保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace

//重写push和replace方法
//第一个参数，你告诉原来push方法往哪里1跳（传递哪些参数）
VueRouter.prototype.push= function (location,resolve,reject){
  if(resolve&&reject){
  //  call和apply的区别
  //   相同点：都可以调用函数一次，都可以篡改函数上下文一次（即使改变this的指向）
  //  不同点：call和apply传递参数时，call用逗号隔开，apply方法执行，传递数组
    originPush.call(this,location,resolve,reject)
  }else {
    //如果没传resolve，reject，那么手动传一个
    originPush.call(this,location,()=>{},()=>{})
  }
}

VueRouter.prototype.push= function (location,resolve,reject){
  if(resolve&&reject){
    //  call和apply的区别
    //   相同点：都可以调用函数一次，都可以篡改函数上下文一次（即使改变this的指向）
    //  不同点：call和apply传递参数时，call用逗号隔开，apply方法执行，传递数组
    originReplace.call(this,location,resolve,reject)
  }else {
    //如果没传resolve，reject，那么手动传一个
    originReplace.call(this,location,()=>{},()=>{})
  }
}
const routes=[
  //  重定向。在访问/的时候就是重定向首页
  {
    path:"/",
    redirect:'/home'
  },
  {
    path:"/home",
    component:()=>import('@/pages/Home'),
    meta:{
      isShow:true
    }
  },
  {
    path:"/login",
    component:()=>import('@/pages/Login'),
    //meta是路由的信息，可以从组件获取到
    meta:{
      isShow:false
    }
  },
  {
    path:"/register",
    component:()=>import('@/pages/Register'),
    meta:{
      isShow:false
    }
  },
  {
    //先占好位，然后传递参数
    path:"/search/:keyword?",
    component:()=>import('@/pages/Search'),
    //元信息
    meta:{
      isShow:true
    },
    name:'search'
  }
]
export default new VueRouter({
  routes,
  mode:'history'
})
