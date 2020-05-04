<template>
  <div class="home">
    <div id="nav">
      <router-link to="/china">中国地图</router-link>|
    </div>
  </div>
</template>

<style lang="less" scope>
.home {
  padding: 20px;
  text-align: center;

  #nav {
    text-align: center;
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>