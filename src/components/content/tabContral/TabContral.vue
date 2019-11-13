<template>
<div class="tabcontral">
<div v-for="(item,index) in titles"
     class="tab-contral-item" :class="{active:index===currentIndex}" @click="itemClick(index,item)">
  <span>{{item.title}}</span>
</div>
</div>
</template>

<script>
    export default {
        name: "tab-contral",
      props:{
          titles:{
              type:Array,
            default(){
                return []
            }
          }
      },
      data(){
          return {
            currentIndex:0,

          }
      },
      methods:{
        itemClick(index,item){
           this.currentIndex =index
            this.$router.push({path:item.path})
        }
      }
    }
</script>

<style scoped>
.tabcontral{
  display: flex;
  text-align: center;
  font-size: 15px;
  background: #fff;
}
  .tab-contral-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
.tab-contral-item span{
  padding:5px;
}
  .active{
    color:pink;

  }
  .active span{
    border-bottom: 3px solid hotpink;
  }
</style>
