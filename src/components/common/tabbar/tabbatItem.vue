<template>
  <div class="tabbarItem" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon" ></slot></div>
    <div  v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>

</template>

<script>
    export default {
      name: "tabbat-item",
      props: {
        path: String,
        activeColor: String
      },
      // data(){
      //     return {
      //       // isActive:true
      //     }
      // },

      computed: {
        isActive() {
          return this.$route.path == this.path
        },
        activeStyle() {
          return this.isActive ? {color: this.activeColor} : {}
        }
      },
      methods: {
        itemClick() {
          this.$router.push(this.path)
        }
      }
    }

</script>

<style scoped>
 .tabbarItem{
    flex: 1;
    height: 49px;
    text-align: center;
    margin-bottom: 2px;
    font-size: 14px;

  }
 .tabbarItem img{
   width: 24px;
   height: 24px;
   margin-top: 3px;

 }

</style>
