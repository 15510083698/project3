<template>
  <div class="footer">
    <van-tabbar route>
      <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/ify">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :info="num" to="/shop">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mine">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num:JSON.parse(localStorage.getItem('arr')).length
      }
    }
  }
</script>

<style scoped>
</style>
