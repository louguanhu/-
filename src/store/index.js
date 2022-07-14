import Vue from "vue";
import Vuex from "vuex";
//需要使用插件一次
Vue.use(Vuex);

//存储数据的地方
const state = {};

import home from "./home";
import search from "./search";

//类似于computed，简化仓库数据，让组件获取仓库数据更加方便
const getters = {};
//修改state数据的唯一地方
const mutations = {};
//处理异步操作和复杂逻辑的地方
const actions = {};

//对象暴露一个store类的实例
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    home,
    search,
  },
});
