<template>
  <div id="tabbar">
     <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "tabbar"
    }
</script>

<style scoped>
  #tabbar{
    display: flex;
    position: fixed;
    bottom:0;
    left:0;
    right: 0;
    background: #494947;
    opacity: 0.6;

  }


</style>
