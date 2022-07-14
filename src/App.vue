<template>
  <div id="app">
    <HeaderVue></HeaderVue>
    <router-view></router-view>
    <FooterVue v-show="
    $route.meta.isShow"></FooterVue>
  </div>
</template>

<script>
import HeaderVue from "./components/Header";
import FooterVue from "./components/Footer";
export default {
  name: "App",
  data(){
    return{
    }
  },
  components: {
    HeaderVue,
    FooterVue,
  },
  computed:{
  },
  methods:{

  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
