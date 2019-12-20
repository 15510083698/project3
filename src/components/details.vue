<template>
  <div class="details">
    <van-icon name="arrow-left" size="0.8rem" color="#dddddd" @click="gohome()" />
    <van-swipe :autoplay="1000" indicator-color="white" style="width:100% ;height: 7.03rem;" v-if='arr.length!=0'>
      <van-swipe-item v-for="(item,index) in arr.imgList" :key="index"><img :src="item.img" alt="" style="width: 100%;height: 100%;"></van-swipe-item>
    </van-swipe>
    <div class="con">
      <h2>{{arr.name}}</h2>
      <p>{{arr.info}}</p>
      <span>￥{{arr.price}}</span>
      <div>
        <p>已选<span>{{arr.name}}&nbsp;&nbsp;{{arr.edition[n].Memory}}&nbsp;&nbsp;{{arr.edition[n].color[n2].color_list}}</span>
          <van-icon name="arrow" size="0.3rem" />
        </p>
        <p>送至<span>北京</span>
          <van-icon name="arrow" size="0.3rem" />
        </p>
      </div>
    </div>
    <img v-for="(item,index) in arr.info_img" :key="item.index" :src="item.img" alt="">
    <footer>
      <ul>
        <li>
          <van-icon name="wap-home-o" size="0.4rem" @click="gohome2()" /><br>首页</li>
        <li @click="goshop()">
          <van-icon name="shopping-cart-o" size="0.4rem" :info="info" /><br>购物车</li>
        <button @click="blockspec()">加入购物车</button>
      </ul>
    </footer>
    <div class="spec" v-show="isspec">
      <div>
        <van-icon name="cross" size="0.5rem" @click="show()" />
        <p>
          <img :src="arr.edition[n].color[n2].img" alt="">
          <strong>￥{{arr.edition[n].edition_price}}</strong>{{arr.name}}&nbsp;&nbsp;&nbsp;{{arr.edition[n].Memory}}&nbsp;&nbsp;&nbsp;{{arr.edition[n].color[n2].color_list}}
        </p>
        <p style="margin-top: 0.2rem;">
          <span style="border: none;text-indent: 0;">版本</span>
          <span @click="num(item.edition_price,index)" :class="n==index?'active':'active2'" v-for="(item,index) in arr.edition"
            :key="item.index">
            {{item.Memory}}<strong>{{item.edition_price}}</strong>
          </span>
        </p>
        <p style="margin-top: 0.2rem;">
          <span style="float: left;">颜色</span><br>
          <button style="width: 1rem;height: 0.5rem;background: #fff;margin-left: 0.2rem;" @click="fn(index)" :class="n2==index?'active':'active2'"
            v-for="(item,index) in arr.edition[n].color" :key="item.index">{{item.color_list}}</button>
        </p>
        购买数量
        <van-stepper v-model="obj.value" style="position: absolute;right: 0.3rem;bottom: 1.5rem;" />
        <van-button @click="addshop()" round type="info" style="width:5.8rem;height:0.6rem;position: absolute;bottom: 0.4rem;left: 0.2rem;background: #f56600;color: #fff;">加入购物车</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        arr: [],
        isspec: false,
        i: this.$route.params.i,
        n: 0,
        n2: 0,
        str: JSON.parse(localStorage.getItem('user')) || [],
        obj: {
          value: 1,
          num2: '',
          name: '',
          img: ''
        }
      }
    },
    methods: {
      fn(i) {
        this.n2 = i
      },
      show() {
        this.isspec = false
      },
      blockspec() {
        this.isspec = true
      },
      gohome() {
        history.back()
      },
      gohome2() {
        this.$router.push('/home')
      },
      goshop() {
        this.$router.push('/shop')
      },
      num(n, u) {
        this.obj.num2 = n
        this.n = u
      },
      addshop() {
        this.obj.name = this.arr.name
        this.obj.img = this.arr.edition[this.n].color[this.n2].img
        if (this.str.length == 0) {
          this.str.push(this.obj);
        } else {
          console.log(this.str)
          for (var i = 0; i < this.str.length; i++) {
            if (this.str[i].name == this.obj.name && this.str[i].num2 == this.obj.num2) {
              this.str[i].value = this.str[i].value + this.obj.value;
              localStorage.setItem("user", JSON.stringify(this.str));
              this.$router.push("/shop");
              return;
            }
          }
          this.str.push(this.obj);
          localStorage.setItem("user", JSON.stringify(this.str));
          this.$router.push("/shop");


        }
        localStorage.setItem("user", JSON.stringify(this.str));
        this.$router.push("/shop");
      }
    },

    mounted() {
      this.$axios.get('https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1').then((res) => {
        this.arr = res.data[this.i]
        console.log(this.arr)
      })
    },
    computed:{
      info(){
        var num = 0
        if(this.str!=[]){
          this.str.forEach((res)=>{
           num += res.value
        })
        }
        return num
      }
    }
  }
</script>

<style scoped>
  .active {
    border: 1px solid #F56600;
    color: #F56600;
  }

  .active2 {
    border: 1px solid #ccc;
  }

  .details>i {
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    z-index: 2;
    border-radius: 50%;
    background: rgba(98, 98, 98, 0.5)
  }

  .details .con {
    width: 100%;
    height: 5.14rem;
    background: #fff;
    overflow: hidden;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    box-sizing: border-box;
  }

  .details .con h2 {
    font-size: 0.35rem;
    margin-top: 0.3rem;
  }

  .details .con p {
    line-height: 0.4rem;
    color: #757575;
  }

  .details .con span {
    font-size: 0.35rem;
    color: #ff6700;
  }

  .details .con div {
    width: 5.87rem;
    height: 1.64rem;
    background: #fafafa;
    border-radius: 0.2rem;
    margin: auto;
    margin-top: 0.2rem;
  }

  .details .con div p {
    height: 50%;
    padding-top: 0.2rem;
    box-sizing: border-box;
    position: relative;
  }

  .details .con div p:first-of-type {
    border-bottom: 1px solid #cccccc;
  }

  .details .con div p span {
    font-size: 0.3rem;
    color: #212121;
    margin-left: 0.25rem;

  }

  .details .con div p i {
    position: absolute;
    right: 0.2rem;
    top: 0.3rem;
  }

  .details>img {
    width: 100%;
  }

  .details footer {
    width: 6rem;
    height: 0.87rem;
    background: #fff;
    border-radius: 0.2rem;
    position: fixed;
    bottom: 0.2rem;
    left: 0.2rem;
  }

  .details footer ul {
    display: flex;
    height: 100%;
    position: relative;
  }

  .details footer li {
    width: 1rem;
    height: 100%;
    margin-left: 0.2rem;
    text-align: center;
    padding-top: 0.05rem;
  }

  .details footer button {
    width: 2.55rem;
    height: 0.59rem;
    background: #f56600;
    border-radius: 0.3rem;
    border: none;
    position: absolute;
    right: 0.2rem;
    top: 0.15rem;
    font-size: 0.3rem;
    color: #fff;
    text-align: center;
  }

  .details .spec {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
  }

  .details .spec>div {
    width: 100%;
    height: 8.5rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    border-radius: 0.3rem 0.3rem 0 0;
  }

  .details .spec div>i {
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
  }

  .details .spec div p {
    width: 100%;
    height: 1.75rem;
    margin-top: 0.8rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    box-sizing: border-box;
    line-height: 0.4rem;
  }

  .details .spec div p img {
    width: 1.68rem;
    height: 100%;
    float: left;
    margin-right: 0.2rem;
  }

  .details .spec div strong {
    width: 65%;
    float: left;
    margin-top: 0.35rem;
    margin-bottom: 0.1rem;
    font-size: 0.35rem;
    font-weight: 200;
  }

  .details .spec p h2 {
    float: left;
  }

  .details .spec .van-button {
    width: 1rem;
    height: 0.5rem;
    padding: 0;
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    border: 1px solid #ccc;
    color: #ccc;
  }

  .details .spec .van-button__text {
    display: block;
    width: 100%;
    line-height: 0;
    text-align: center;
  }

  .details .spec p span {
    position: relative;
  }

  .details .spec p span strong {
    width: 1rem;
    font-weight: 200;
    position: absolute;
    right: 0;
    top: 0;
    line-height: 0.5rem;
    margin: 0;
    font-size: 0.3rem;
  }

  .details .spec div>p:nth-child(3) span {
    display: block;
    width: 5.18rem;
    height: 0.5rem;
    margin-top: 0.1rem;
    line-height: 0.5rem;
    text-indent: 0.2rem;
  }
</style>
