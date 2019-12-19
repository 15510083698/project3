<template>
  <div class="page" v-if='arr.length!=0'>
    <hea txt="购物车"></hea>
    <header>
      <p style="color:#212121;font-size:0.3rem;">登录以后享受更多优惠</p>
      <p id="hp" style="color:#757575;font-size:0.26rem;">
        去登陆
        <van-icon name="arrow" />
      </p>
    </header>
    <nav v-show='arr2.length==0?true:false'>
      <p>
        购物车还是空的
        <span style="background: #fff;padding: 0.1rem;" @click="gohome()">去逛逛</span>
      </p>
    </nav>
    <div class="nav2" v-for="(item,index) in arr2" :key="item.index" v-show='arr2.length==0?false:true'>
      <van-card
        :price="item.num2*item.value"
        :title="arr[item.n3].name"
        :thumb="arr[item.n3].edition[item.n].color[item.n2].img"
        position='relative'
      >
        <div slot="footer">
         <van-stepper v-model="item.value" style='position: absolute;top:1.5rem;left:2.5rem;'/>
         <van-icon name="delete" size='.35rem' style="position: absolute;right: 0.5rem;bottom: 0.2rem;"/>
        </div>
      </van-card>
    </div>

    <footer>
      <van-divider :style="{ color: '#666666', borderColor: '#666666', padding: '0 16px' }">
        <span style="font-size:0.25rem">实时推荐你的心心念念</span>
      </van-divider>
      <ul>
        <li v-for="team in arr" :key="team.index">
          <img :src="team.img" alt />
          <h2>{{team.name}}</h2>
          <span>{{team.content}}</span>
          <p>￥{{team.price}}</p>
        </li>
      </ul>
    </footer>
    <div class="foo">
        <ul>
          <li style="font-size: 0.16rem;line-height: 0.4rem;">共{{num3}}件 金额：<br><span style="font-size: 0.35rem;color: #ff5722;">{{num}}元</span></li>
          <li style="background: #f4f4f4;">继续购物</li>
          <li style="background: #ff6700;color: #fff;">去结算</li>
        </ul>
    </div>
  </div>
</template>

<script>
  import hea from './header.vue'
export default {
  data() {
    return {
      arr: [],
      arr2: []
    }
  },
  components:{
    hea
  },
  mounted() {
    this.$axios
      .get("https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1")
      .then(res => {
        this.arr = res.data
        console.log(this.arr)

      })
      this.arr2 = JSON.parse(localStorage.getItem('arr'))
  },
  methods:{
    gohome(){
      this.$router.push('/home')
    }
  },
  computed:{
      num(){
      	var num = 0;
      	this.arr2.forEach(function(val){
      			num += val.num2*val.value
      	})
      	return num
      },
      num3(){
      	var num = 0;
      	this.arr2.forEach(function(val){
      			num += val.value
      	})
      	return num
      }
  }
}
</script>

<style scoped>
.page {
  width: 100%;
}
header {
  width: 100%;
  height: 1.12rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  line-height: 1.12rem;
  padding: 0 0.2rem 0 0.2rem;
  box-sizing: border-box;
  margin-top: 0.85rem;
}
header p {
  position: relative;
}
header p i {
  position: absolute;
  top: 0.45rem;
  right: -0.2rem;
}
#hp {
  margin-right: 0.15rem;
}
nav {
  width: 100%;
  height: 1.2rem;
  background: #ebebeb;
  text-align: center;
  line-height: 1.2rem;
}
nav p {
  font-size: 0.35rem;
  color: #ababab;
}
nav span {
  font-size: 0.25rem;
  color: #000;
  border: solid #ababab 1px;
  margin-left: 0.2rem;
}
.nav2 {
  width: 100%;
}
footer ul {
  width: 100%;
  height: 16rem;
}
footer ul li {
  width: 3rem;
  height: 4.5rem;
  background: #fff;
  float: left;
  margin-left: 0.15rem;
  margin-top: 0.4rem;
}
footer ul li img {
  width: 100%;
}
footer ul li h2 {
  font-size: 0.3rem;
  color: #212121;
  margin-top: 0.2rem;
}
footer ul li span {
  color: #757575;
  font-size: 0.2rem;
  margin-top: 0.2rem;
}
footer ul li p {
  font-size: 0.3rem;
  color: red;
}
.van-card__footer{
  top:0.73rem;
  left:1.7rem;
}
.van-button::before{
  top: 0px;
  right:0;
}
.foo{
  height: 0.88rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
.foo ul{
  display: flex;
  height: 100%;
  background: #fff;
}
.foo li{
  width: 33.33%;
  height: 100%;
  line-height: 0.88rem;
  text-align: center;
  font-size: 0.3rem;
}
</style>
