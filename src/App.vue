<template>
  <div id="app">
   <!--  <Site/>  -->
<!--   	<Mine/>-->    
    <Newly/> 
    <router-view/>
  </div>
</template>

<script>
import './assets/css/reset.css';
import './assets/js/remStyle.js'
// import Mine from './components/Mine.vue' 
// import Site from './components/Site.vue'
import Newly from './components/Newly.vue'
export default {
  name: 'App',
  components:{
  	// Mine,
  	// Site
    Newly 
  }
}
</script>

<style>
#app {
  
}
</style>
