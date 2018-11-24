<template>
  <div id="app" class="page">
    <v-head></v-head>
    <v-left></v-left>
    <v-center></v-center>
    <v-right></v-right>
  </div>
</template>

<script>
import head from "./components/top";
import left from './components/LeftTable';
import center from './components/CenterTable';
import right from './components/RightTable';

export default {
  data () {
    return {
      
    }
  },
  components: {
    'v-head': head,
    'v-left': left,
    'v-center': center,
    'v-right': right
  }
}
</script>

<style>
  @import 'styleApp.css';
</style>
