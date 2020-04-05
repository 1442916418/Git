<template>
  <div id="app">
    <countTo />
  </div>
</template>

<script>
// import SwiperIndex from "./components/swiper/index.vue"
// import SwiperIndex2 from "./components/swiper2/index.vue"
import countTo from "./components/count/index.vue"; // 数字滚动

export default {
  name: "App",
  components: {
    countTo
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
