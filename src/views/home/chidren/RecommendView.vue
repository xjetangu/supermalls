<template>
<div class="recommend">
  <div v-for="item in recommends" class="recommend-item">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
    export default {
        name: "recommend-view",
      props:{
          recommends:{
            type:Array,
            default(){
              return []
            }
          }
      }
    }
</script>

<style scoped>
.recommend{
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 30px;
  border-bottom: 8px solid #eee;
}
.recommend-item{
  flex: 1;
}
  .recommend-item img{
    flex: 1;
    width: 70px;
    height: 65px;
    margin-bottom: 10px;
  }
</style>
