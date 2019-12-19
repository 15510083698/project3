<template>
  <div class="classify">
      <hea txt="分类"></hea>
       <div class="con">
          <ul>
             <li v-for="(item,index) in arr" @click="fn(index)" :class="num == index?'active':''">{{item}}</li>
          </ul>
          <ol>
            <li v-for="(item,index) in 5">
              <img src="../assets/images/分类_03.gif" alt="">
              <h2>手机</h2>
              <div>
                <p v-for="(item,index) in 4">
                  <img src="../assets/images/5a38e39b2975e837.jpg" alt="">
                  <span>小米9</span>
                </p>
              </div>
              <button>查看更多</button>
            </li>
          </ol>
       </div>
      <foo></foo>
  </div>
</template>

<script>
  import hea from './header.vue'
  import foo from './footer.vue'
  export default{
    data(){
      return{
          arr:['手机','电视','电脑','家电','路由','出行','出行','智能','灯具','家电','电脑'],
          num:0
      }
    },
    methods:{
       fn(i){
          this.num = i
       }
    },
    components:{
      hea,
      foo
    }
  }
</script>

<style scoped>
  .active{
    background: #fff;
    border-right: 3px solid #e02e24;
  }
  .classify .con{
    width: 100%;
    display: flex;
    margin-top: 0.85rem;
    margin-bottom: 0.86rem;
  }
  .classify .con ul{
    width: 1.55rem;
    background: #fafafa;
    position: fixed;
    left: 0;
    top: 0.85rem;
  }
  .classify .con ul li{
    width: 1.53rem;
    height: 0.86rem;
    box-sizing: border-box;
    text-align: center;
    line-height: 0.86rem;
    font-size: 0.35rem;
  }
  .classify ol{
    width: 4.9rem;
    position: absolute;
    top: 0.85rem;
    right: 0;
    background: #fff;
  }
  .classify ol li{
    width: 100%;
  }
  .classify ol li img{
    width: 4.35rem;
    height: 1.48rem;
    display: block;
    margin: auto;
    margin-top: 0.2rem;
  }
  .classify ol li h2{
    font-size: 0.3rem;
    text-align: center;
    margin-top: 0.2rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }
  .classify ol div p{
    width: 1.6rem;
    height: 1.3rem;
    float: left;
    text-align: center;
    color: #757575;
    font-size: 0.25rem;
  }
  .classify ol div p img{
    width: 0.8rem;
    height: 0.8rem;
    display: block;
    margin: auto;
    margin-bottom: 0.1rem;
  }
  .classify ol li button{
    width: 4.3rem;
    height: 0.67rem;
    background: #f9f5e6;
    border: none;
    display: block;
    margin: auto;
    position: relative;
    top: 0.15rem;
    font-size: 0.25rem;
  }
</style>
