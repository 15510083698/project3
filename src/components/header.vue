<template>
  <div class="header">
    <h2>
      <van-icon name="arrow-left" size="0.35rem" @click="back()"/>{{txt}}
      <van-icon name="search" size="0.35rem" />
    </h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods:{
      back(){
        this.$router.push('/home')
      }
    },
    props:['txt']
  }
</script>

<style scoped>
  .header h2 {
    width: 100%;
    height: 0.85rem;
    background: #f2f2f2;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    line-height: 0.85rem;
    font-size: 0.35rem;
  }

  .header h2 i {
    position: absolute;
    top: 0.25rem;
  }

  .header h2 i:first-of-type {
    left: 0.2rem;
  }

  .header h2 i:last-of-type {
    right: 0.2rem;
  }
</style>
