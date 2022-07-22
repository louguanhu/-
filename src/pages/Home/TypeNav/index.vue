<template>
  <!-- 商品分类导航 -->
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
      <h2 class="all">全部商品分类</h2>
      <transition  name="sort">
        <div class="sort" v-show="isShow">
          <div class="all-sort-list2" @click="goSearch">
            <!-- 三级联动 这是第一级 -->
            <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{cur:currentIndex===index}"
            >
              <!--   商品分类菜单栏-->
              <h3 @mouseenter="changeIndex(index)" >
                <a :data-categoryName="c1.categoryName"
                   :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
                <!--            <router-link to="/search">{{ c1.categoryName }}</router-link>-->
              </h3>
              <!-- 第二级》 -->
              <div class="item-list clearfix" :style="{display:currentIndex===index?'block':'none'}">
                <div
                    class="subitem"
                    v-for="(c2, index) in c1.categoryChild"
                    :key="c2.categoryId"
                >
                  <!-- 第三级 -->
                  <dl class="fore">
                    <dt>
                      <a :data-categoryName="c2.categoryName"
                         :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                    </dt>
                    <!--                <router-link to="/search">{{ c2.categoryName }}</router-link>-->
                    <dd>
                      <em
                          v-for="(c3, index) in c2.categoryChild"
                          :key="c3.categoryId"
                      >
                        <a :data-categoryName="c3.categoryName"
                           :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                        <!--                    <router-link to="/search">{{ c3.categoryName }}</router-link>-->
                      </em>

                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>

    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {throttle} from "lodash";

export default {
  name: "TypeNav",
  data(){
    return {
      currentIndex:-1,
      isShow:true
    }
  },
  methods:{
  //    鼠标进入修改currentIndex的值
    changeIndex:throttle(function (index){
      this.currentIndex = index
    },100),
    goSearch(event) {
      let element = event.target
      let {categoryname,category1id,category2id,category3id} = element.dataset
      let location={name:'search'}
      let query = {categoryName:categoryname}
      // 如果标签上拥有categoryname这个属性，那么他一定是a标签
      if(categoryname){
        if(category1id){
          query.category1Id = category1id
        }else if(category2id){
          query.category2Id = category2id
        }else{
          query.category3Id = category3id
        }
        location.query = query
      }
      if(this.$route.params){
        location.params=this.$route.params
        this.$router.push(location)
      }

    },
    // 鼠标进入展示搜索的菜单
    enterShow(){
      this.isShow=true
    },
    //鼠标移除隐藏搜索的菜单
    leaveShow(){
      this.currentIndex=-1;
      if(this.$route.path !=='/home' ){
        this.isShow=false
      }
    }
  },
  //组件挂载完瓦尼，就看一下服务器发送请求
  mounted() {
    //  通知vuex发送请求，获取数据，存储于仓库

    if(this.$route.path !=='/home' ){
      this.isShow=false
    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.listData,
    }),
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }


    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
          //控制子菜单的显示和隐藏
          //&:hover {
          //  .item-list {
          //    display: block;
          //  }
          //}
        }
        //.item:hover{
        //  background: #4cb9fc;
        //}
        //鼠标移上菜单时添加的背景
        .cur{
          background: #4cb9fc;
        }
      }
    }
    //过渡动画开始状态
    .sort-enter{
      height:0;
      //transform: rotate(0deg);
    }
    //过渡动画结束状态
    .sort-enter-to{
      height: 461px;
      //transform: rotate(360deg);
    }
    //动画过渡时间
    .sort-enter-active{
      overflow: hidden;
      transition: all .5s linear !important
    }
  }

}
</style>
