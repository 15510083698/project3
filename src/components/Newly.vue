<template>
  <div class="newly">
    <van-nav-bar @click-left="back()" title="新增地址" left-text="返回" left-arrow style="width: 100%;position: fixed;top: 0;left: 0;">
      <van-icon name="search" slot="right" size="0.4rem"/>
    </van-nav-bar>
    <van-address-edit :area-list="city" show-postal show-delete show-set-default show-search-result :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete" @change-detail="onChangeDetail" />
  </div>
</template>
<script>

  import city from '../assets/js/city.js'
  export default {
    data() {
      return {
        searchResult: [],
        city
      }
    },
    methods: {
      onSave() {
        Toast('save');
      },
      onDelete() {
        Toast('delete');
      },
      onChangeDetail(val) {
        if (val) {
          this.searchResult = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }];
        } else {
          this.searchResult = [];
        }
      },
      back(){
        history.back()
      }
    },
    components:{

    }
  }
</script>
<style scoped>
  .newly{
    margin-top: 0.85rem;
  }
</style>
