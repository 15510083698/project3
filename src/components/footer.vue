<template>
  <div class="footer">
    <ul>
      <li v-for="(item,index) in arr" @click="fn(index)">
        <router-link to="" :style="{color:num==item.num?'#87ceeb':'#000'}">
          <van-icon :name="num==item.num?item.img2:item.img" size="0.45rem" :color="num==item.num?'#87ceeb':'#000'" />
          <br>{{item.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        arr: [{
            name: '首页',
            img: 'wap-home-o',
            img2: 'wap-home',
            num: 0
          },
          {
            name: '分类',
            img: 'apps-o',
            img2: 'add-square',
            num: 1
          },
          {
            name: '购物车',
            img: 'cart-o',
            img2: 'cart',
            num: 2
          },
          {
            name: '个人',
            img: 'user-o',
            img2: 'manager',
            num: 3
          }
        ],
        num: 0
      }
    },
    methods: {
      fn(i) {
        this.num = i
      }
    }
  }
</script>

<style scoped>
  .footer ul {
    width: 100%;
    height: 0.86rem;
    background: #fff;
    border-top: 2px solid #cccccc;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
  }

  .footer ul li {
    width: 25%;
    height: 100%;
    text-align: center;
    padding-top: 0.05rem;
    box-sizing: border-box;
    line-height: 0.3rem;
    font-size: 0.16rem;
  }
</style>
