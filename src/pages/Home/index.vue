<template>
  <div>
    <!-- 三级联动已经注册为全局组件，不需要再引入注册 -->
    <TypeNav />
    <ListContainer />
    <Reommend />
    <Rank />
    <Like />
    <Floor  v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>

    <Brand />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListContainer from "@/pages/Home/ListContainer";
import Reommend from "@/pages/Home/Reommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
export default {
  name: "Home",
  components: {
    ListContainer,
    Reommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  computed: {
    ...mapState({
      floorList:state=>state.home.floorList
    }),
  },
  mounted() {
    this.$store.dispatch('getFloorList')
  }
};
</script>

<style scoped></style>
