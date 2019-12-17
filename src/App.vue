<template>
  <div id="app">
    <!-- <Home></Home> -->
    <Hometext></Hometext>
    <router-view/>
  </div>
</template>

<script>
  import './assets/js/remStyle'
  // import Home from './components/Home'
  import Hometext from './components/Hometext'
export default {
  name: 'App',
  components:{
      // Home
      Hometext
  }
}
</script>

<style>
@import url("./assets/css/reset.css");
</style>
