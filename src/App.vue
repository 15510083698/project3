<template>
  <div id="app">
    <Shop></Shop>
    <router-view/>
  </div>
</template>

<script>
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
</style>
