<style lang="css">
.box {
  margin: 100px auto;
}

.count {
  font-size: 40px;
  font-weight: 600;
  color: chartreuse;
}
</style>

<template>
  <div class="box">
    <countTo class="count" :startVal="startVal" :endVal="endVal" :duration="1000" suffix="个监测点"></countTo>
    <br />
    <button @click="clickAddNumber">加100</button>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  components: { countTo },
  data() {
    return {
      startVal: 0,
      endVal: 2017
    };
  },
  methods: {
    clickAddNumber() {
      this.endVal += 100;
    }
  }
};
</script>