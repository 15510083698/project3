<template>
  <div id="app">
    <router-view></router-view>
    <!-- <details></details> -->
  </div>
</template>

<script>
  import './assets/js/rem.js'
  // import details from './components/details.vue'
export default {
  name: 'App',
  components:{
     // details
  }
}
</script>

<style>
  @import url("./assets/css/reset.css");
</style>
