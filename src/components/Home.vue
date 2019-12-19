<template>
  <div id="Home">
    <div class="home_top">
       <div class="circle"></div>
       <div class="home_in">
           <van-icon name="search" size='.34rem'/>
            <input type="text">
       </div>
    </div>

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 轮播图 -->
        <van-swipe :autoplay="1000" indicator-color="white" style="width:100% ;height: 3.2rem;margin-top: 1.13rem;">
          <van-swipe-item v-for="item in arr" :key="item.id"><img :src="item.img" alt="" style="width: 100%;height: 3.2rem;"></van-swipe-item>
        </van-swipe>
      <!-- 导航 -->
      <nav>
        <ul class="nav_s">
          <li>
              <van-icon name="balance-pay" size=".35rem" />
              <p>icon1</p>
          </li>
          <li>
              <van-icon name="chat-o" size=".35rem" />
              <p>icon2</p>
          </li>
          <li>
              <van-icon name="like-o" size=".35rem" />
              <p>icon3</p>
          </li>
          <li>
              <van-icon name="qr" size=".35rem" />
              <p>icon4</p>
          </li>
          <li>
              <van-icon name="newspaper-o" size=".35rem" />
              <p>icon5</p>
          </li>
        </ul>
      </nav>
      <!-- 产品 -->
       <section>
          <ul class="section_ul">
              <li v-for="(item,index) in arr2" :key="item.id" @click="godetails(index)">
              <img :src="item.img" alt="" style="width:100%;height: 3.12rem;">
              <h1>{{ item.name }}</h1>
              <p>{{ item.content }}</p>
              <h5>￥{{ item.price }}</h5>
            </li>
          </ul>
       </section>
    </van-pull-refresh>
    <foo></foo>
  </div>
</template>

<script>
  import foo from './footer.vue'
  export default{
    components:{
      foo
    },
    data(){
      return{
        count: 0,
        isLoading: false,
        arr:[],
        arr2:[],
        n:123
      }
    },
     methods: {
        onRefresh() {
          setTimeout(() => {
            this.$toast('刷新成功');
            this.isLoading = false;
            this.count++;
          }, 500);
        },
        godetails(i){
          this.$router.push({
              name:'details',
              params:{
                  i:i
              }
          })
        }
      },
      mounted(){
        this.$axios.get('https://shiyaming1994.github.io/mi/static/rotationChart.json')
        .then((res)=>{
            this.arr = res.data
        })
        this.$axios.get('https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1')
        .then((res)=>{
            console.log(res.data)
            this.arr2 = res.data
        })
      }
  }
</script>

<style scoped>
  .home_top{
    width: 100%;
    height: 1.13rem;
    background:#f2f2f2;
    position: fixed;
    left: 0;
    top:0;
    z-index: 99;
  }
  .home_top .circle{
    width: .72rem;
    height: .72rem;
    border-radius: .5rem;
    background:#87ceeb;
    margin-top: .22rem;
    margin-left:.34rem ;
    float: left;
  }
  .home_in{
    width: 3.88rem;
    height: .47rem;
    border-radius: .4rem;
    border: 1px solid #ccc;
    margin-top: .32rem;
    margin-right: .44rem;
    float: right;
  }
  .home_in input{
    width: 3rem;
    height: .46rem;
    font-size: .2rem;
    float:right;
    margin-right:0.2rem ;
    background:#f2f2f2;
    border: 0;
  }
  .home_in i{
    margin-top: .1rem;
    margin-left: .26rem;
  }
  .nav_s{
    width: 100%;
    height:1.32rem ;
    background: #fff;
    display: flex;
    justify-content: space-around;
  }
  .nav_s li{
    width:1.3rem;
    height: 1.3rem;
  }
  .nav_s .van-icon::before{
    margin-left:.45rem ;
    margin-top:.34rem ;
  }
  .nav_s p{
    text-align: center;
    font-size: .14rem;
    margin-top: .05rem;
  }
  .section_ul{
    width: 100%;
    height: 15.5rem;
  }
  .section_ul li{
    width:3.16rem ;
    height: 4.6rem;
    background: #fff;
    margin-top: 0.2rem;
    float: left;
    margin-left: 0.05rem;
  }
  .section_ul h1{
    margin-top: 0.18rem;
    font-size:0.3rem ;
    margin-left: 0.16rem;
  }
  .section_ul p{
    font-size:0.22rem ;
    color:#757575 ;
    margin-top: 0.08rem;
    margin-left: 0.16rem;
  }
  .section_ul h5{
    font-size:0.26rem ;
    color: red;
    margin-top: 0.08rem;
    margin-left: 0.16rem;
  }
</style>
