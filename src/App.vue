<template>
  <div id="app">
    <mainTabbar></mainTabbar>
    <router-view></router-view>
  </div>
</template>
<script>
  import mainTabbar from './components/content/mainTabbar/mainTabbar'
  export default {
    name:'app',
    components:{
      mainTabbar
    }
  }
</script>
<style>
@import "assets/css/normallize.css";
@import "./assets/css/base.css";

</style>
