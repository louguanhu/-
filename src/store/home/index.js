import { reqCategoryList,reGetBannerList,reGetFloorList } from "@/api";

const state = {
  listData: [],
  bannerList:[],
  floorList:[]
};
const mutations = {
  getHomeData(state, res) {

    state.listData = res;
  },
  getBannerList(state,data){
    state.bannerList=data
  },
  getFloorList(state,data){
    state.floorList=data
  }
};
const actions = {
  async categoryList({commit}) {
    let result = await reqCategoryList();
    if (result.code === 200) {
      commit("getHomeData", result.data);
    }
  },
  //获取首页轮播图的数据
  async getBannerList({commit}){
    //处理请求回来的数据
    let result = await reGetBannerList()
    if(result.code===200){
      commit('getBannerList',result.data)
    }
  },
  async getFloorList({commit}){
    let result = await reGetFloorList()
    if(result.code===200){
      commit('getFloorList',result.data)
    }
  }
};

export default {
  state,
  mutations,
  actions,
};
