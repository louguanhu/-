import {reGetSearchInfo} from "@/api";

const state={
    searchInfo:{}
}
const mutations={
  searchInfo(state,data){
    state.SearchInfo =  data
  }
}
const actions ={
  async getSearchList({commit},payload ){
    //payload至少是一个空对象
    const result  = await reGetSearchInfo(payload)
    if(result.code===200){
      commit('searchInfo',result)
    }
  }
}
export default {
  state,
  mutations,
  actions,
};