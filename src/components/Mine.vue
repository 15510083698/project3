<template>
  <div class="mine">
    <div class="head">
      <div class="head_por"></div>
      <p>154548787</p>
    </div>
    <div class="indent">
      <div class="indent_order">
        我的订单
      </div>
      <div class="indent_all">
        <p>我的订单</p>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="cont">
      <ul>
        <li>
          <van-icon name="shopping-cart-o" size='.36rem' />
          <p>代付款</p>
        </li>
        <li>
          <van-icon name="coupon-o" size='.36rem' />
          <p>优惠券</p>
        </li>
        <li>
          <van-icon name="star" size='.36rem' />
          <p>收藏</p>
        </li>
      </ul>
    </div>
    <div class="one">
      <div class="left">
        <van-icon name="like-o" size='.37rem' color="red"/>
        <van-icon name="location-o" size='.37rem' color="red"/>
      </div>
      <div class="right">
        <div class="member">
          <p>会员中心</p>
          <van-icon name="arrow" size='.29rem' />
        </div>
        <div class="site" @click="gonewly()">
          <p>收货地址</p>
          <van-icon name="arrow" size='.29rem' />
        </div>
      </div>
    </div>
    <div class="one">
      <div class="left">
        <van-icon name="coupon-o" size='.37rem' color="red"/>
        <van-icon name="chat-o" size='.37rem' color="red"/>
      </div>
      <div class="right">
        <div class="member">
          <p>我的优惠</p>
          <van-icon name="arrow" size='.29rem' />
        </div>
        <div class="site">
          <p>我的意见</p>
          <van-icon name="arrow" size='.29rem' />
        </div>
      </div>
    </div>
    <div class="two">
      <div class="left">
        <van-icon name="clock-o" size='.37rem' color="red"/>
      </div>
      <div class="right">
        <p>浏览记录</p>
        <van-icon name="arrow" size='.29rem' />
      </div>
    </div>
    <div class="two">
      <div class="left">
        <van-icon name="qr" size='.37rem' color="red"/>
      </div>
      <div class="right">
        <p>我的名片</p>
        <van-icon name="arrow" size='.29rem' />
      </div>
    </div>
    <foo></foo>
  </div>
</template>
<script>
  import foo from './footer.vue'
  export default {
    components:{
      foo
    },
    methods:{
      gonewly(){
        this.$router.push('/site')
      }
    }
  }
</script>
<style scoped>
  .mine {
    width: 100%;
    background: #f5f5f5;
  }

  .head {
    width: 100%;
    height: 1.33rem;
    background: #f37d0f;
    position: relative;
  }

  .head_por {
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: .08rem;
    left: .26rem;
    border-radius: 50%;
    border: 5px solid #f8b16f;
    float: left;
  }

  .head p {
    font-size: .25rem;
    color: #fff;
    position: absolute;
    left: 1.5rem;
    top: .45rem;
  }

  .indent {
    width: 100%;
    height: .83rem;
    border-bottom: 2px solid #d9d9d9;
    background: #fff;
  }

  .indent_order {
    font-size: .31rem;
    float: left;
    text-indent: .28rem;
    line-height: .83rem;
  }

  .indent_all {
    float: right;
    margin-right: .23rem;
  }

  .indent_all p {
    font-size: .25rem;
    float: left;
    line-height: .83rem;
  }

  .indent_all .van-icon {
    margin-top: .35rem;
    margin-left: .05rem;
  }

  .cont {
    width: 100%;
    height: 1.7rem;
    background: #fff;
  }

  .cont ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .cont ul li {
    width: 33.3%;
    height: 100%;
    text-align: center;
    margin-top: .43rem;
  }

  .cont ul li p {
    font-size: .25rem;
  }

  .cout ul li i {
    margin: auto;
  }

  .one {
    width: 100%;
    height: 1.8rem;
    margin-top: .22rem;
    background: #fff;
  }

  .one .left {
    width: .9rem;
    height: 1.8rem;
    text-align: center;
    padding: .25rem 0 0 .1rem;
    box-sizing: border-box;
    line-height: .75rem;
    float: left;
  }

  .right {
    width: 5.45rem;
    height: 1.8rem;
    float: right;
  }

  .right .member {
    width: 100%;
    height: .87rem;
    border-bottom: 2px solid #d9d9d9;
  }

  .right .member p {
    float: left;
    font-size: .33rem;
    line-height: .87rem;
  }

  .right .member i {
    float: right;
    margin-right: .24rem;
    margin-top: .3rem;
  }

  .right .site {
    width: 100%;
    height: .87rem;
  }

  .right .site p {
    float: left;
    font-size: .33rem;
    line-height: .87rem;
  }

  .right .site i {
    float: right;
    margin-right: .24rem;
    margin-top: .24rem;
  }

  .two {
    width: 100%;
    height: .89rem;
    margin-top: .3rem;
    background: #fff;
  }

  .two .left {
    float: left;
  }

  .two .left i {
    margin-left: .31rem;
    margin-top: .24rem;
  }

  .two .right {
    width: 5.45rem;
    height: .89rem;
    float: right;
  }

  .two .right p {
    font-size: .33rem;
    float: left;
    line-height: .89rem;
  }

  .two .right i {
    font-size: .33rem;
    float: right;
    line-height: .89rem;
    margin-right: .24rem;
  }
</style>
