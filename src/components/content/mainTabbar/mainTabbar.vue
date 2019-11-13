<template>
  <tabbar>
    <tabbatItem path="/home" activeColor="hotpink">
      <img slot="item-icon" src="../../../assets/img/tabbar/首页.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/首页-1.svg" alt="">
      <div slot="item-text">首页</div>
    </tabbatItem>
    <tabbatItem path="/category" activeColor="hotpink">
      <img slot="item-icon" src="../../../assets/img/tabbar/分类.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/分类-1.svg" alt="">
      <div slot="item-text">分类</div>
    </tabbatItem>
    <tabbatItem path="/cart" activeColor="hotpink">
      <img slot="item-icon" src="../../../assets/img/tabbar/购物车.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/购物车-1.svg" alt="">
      <div slot="item-text">购物车</div>
    </tabbatItem>
    <tabbatItem path="/profile" activeColor="hotpink">
      <img slot="item-icon" src="../../../assets/img/tabbar/我的.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/我的-1.svg" alt="">
      <div slot="item-text">我的</div>
    </tabbatItem>
  </tabbar>
</template>

<script>
  import tabbar from '../../../components/common/tabbar/tabbar'
  import tabbatItem from '../../../components/common/tabbar/tabbatItem'
    export default {
        name: "main-tabbar",
      components:{
        tabbar,
        tabbatItem

      }
    }
</script>

<style scoped>

</style>
