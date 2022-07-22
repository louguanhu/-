import {reGetSearchInfo} from "@/api";

const state={
    searchList:{}
}
const mutations={
  searchInfo(state,data){
    state.searchList =  data
  }
}
const actions ={
  async getSearchList({commit},payload ={}){
    //payload至少是一个空对象
    console.log(payload)
    const result  = await reGetSearchInfo(payload)
    if(result.code===200){
      commit('searchInfo',result.data)
    }
  }
}
const getters = {
  //当前仓库中的state
  goodList(state){
    return state.searchList.goodsList || []
  },
  attrsLists(state){
    return state.searchList.attrsList || []
  },
  trademarksList(state){
    return state.searchList.trademarkList || []
  }
}
export default {
  state,
  mutations,
  actions,
  getters
};