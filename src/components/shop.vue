<template>
  <div class="page">
    <header>
      <p style="color:#212121;font-size:0.3rem;">登录以后享受更多优惠</p>
      <p id="hp" style="color:#757575;font-size:0.26rem;">
        去登陆
        <van-icon name="arrow" />
      </p>
    </header>
    <nav>
      <p>
        购物车还是空的
        <span>去逛逛</span>
      </p>
    </nav>
    <div class="nav2">
        
    </div>
    <footer>
      <van-divider :style="{ color: '#666666', borderColor: '#666666', padding: '0 16px' }">
        <span style="font-size:0.25rem">实时推荐你的心心念念</span>
      </van-divider>
      <ul>
        <li v-for="team in arr">
          <img :src="team.img" alt />
          <h2>{{team.name}}</h2>
          <span>{{team.content}}</span>
          <p>￥{{team.price}}</p>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
    data(){
        return{
            arr:[]
        }
    },
    mounted(){
        this.$axios.get('https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1').then((res)=>{
            console.log(res)
            this.arr = res.data
        })
    }
};
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
.nav2{
    width: 100%;
}
footer ul {
  width: 100%;
}
footer ul li {
  width: 3rem;
  height: 4.5rem;
  float: left;
  margin-left: 0.15rem;
  margin-top: 0.4rem;
}
footer ul li img{
    width: 100%;
}
footer ul li h2{
    font-size:.3rem;
    color: #212121;
    margin-top: .2rem;
}
footer ul li span{
    color: #757575;
    font-size:.2rem;
    margin-top: .2rem;
}
footer ul li p{
    font-size:.3rem;
    color: red;
}
</style>