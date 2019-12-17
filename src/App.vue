<template>
  <div id="app">
<<<<<<< HEAD
      <classify></classify>
=======
    <Shop></Shop>
    <router-view/>
>>>>>>> 1f803252511c2ee1390cbf61f71ea7c1f3382678
  </div>
</template>

<script>
<<<<<<< HEAD
  import './assets/js/rem.js'
  import classify from './components/classify.vue'
  export default {
    name: 'App',
    components: {
       classify
    }
  }
</script>

<style>
  @import url("./assets/css/reset.css");
  #app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  }
=======
import './assets/js/remStyle.js'
import Shop from './components/shop'
export default {
  name: 'App',
  components:{
    Shop
  }
}
</script>

<style>
@import './assets/css/reset.css'
>>>>>>> 1f803252511c2ee1390cbf61f71ea7c1f3382678
</style>
