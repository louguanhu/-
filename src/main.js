import Vue from "vue";
import App from "./App.vue";

//引入路由
import router from "@/router";
// 引入请求
import {reqCategoryList} from "@/api";
//引入仓库
import store from "@/store";

//三级联动组件，注册为全局组件
import TypeNav from "@/pages/Home/TypeNav";
import Carousel from "@/components/Carousel";
//第一个参数是全局组件的名字 第二个参数：是哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.config.productionTip = false;

//引入MockServer.js,只是执行一次才能模拟数据
import  '@/mock/mockServer'
//引入swiper
import 'swiper/css/swiper.css'

new Vue({
  render: (h) => h(App),
  router,
  //注册仓库，实例上会多出一个$store的属性
  store
}).$mount("#app");
