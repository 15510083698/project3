<template>
  <div id="Hometext">
      <!-- 轮播图 -->
        <van-swipe :autoplay="1000" indicator-color="white" style="width:100% ;height: 7.03rem;">
          <van-swipe-item v-for="item in arr" :key="item.id"><img :src="item.img" alt="" style="width: 100%;height: 7.03rem;"></van-swipe-item>
        </van-swipe>
  </div>
</template>

<script>
  export default{
      data(){
        return{
            arr:[]
        }
      },
      mounted(){
        this.$axios.get('https://shiyaming1994.github.io/mi/static/rotationChart.json')
        .then((res)=>{
            this.arr = res.data
        })
      }
  }
</script>

<style scoped>
</style>
