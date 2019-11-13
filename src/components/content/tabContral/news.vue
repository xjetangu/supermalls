<template>
  <div id="news">
    <div class="images2" v-for="item in img">
      <img :src="item.path" alt="">
      <div>

        <span class="news">{{item.title}}</span>

      </div>
    </div>



  </div>
</template>

<script>
    export default {
        name: "new",
      data(){
          return {
            img:[
              {
                path:'https://img.alicdn.com/imgextra/i3/463140182/O1CN01A8bV0l1DDOdKfbHX7_!!0-saturn_solar.jpg_260x260.jpg',
                price:168,
                title:'秋冬季韩版修身新款棉短款马甲女装学生保暖'

              },
              {
                path:'https://img.alicdn.com/imgextra/i3/49929389/O1CN01FJNpHJ2JEDE8Dgmin_!!0-saturn_solar.jpg_260x260.jpg',
                price:211,
                title:'2019冬季港风新款女学生bf宽松潮情侣'
              },
              {
                path:'https://img.alicdn.com/imgextra/i2/133059260/O1CN01j8bEmO2IH88cDzZqj_!!0-saturn_solar.jpg_260x260.jpg',
                price:89,
                title:'天线宝宝闺蜜装不一样姐妹装卫衣女六人宿舍'
              },
              {
                path:'https://img.alicdn.com/imgextra/i3/120547904/O1CN014HQ6Ne28G54ixiaY7_!!0-saturn_solar.jpg_260x260.jpg',
                price:87,
                title:'定制韩版连帽卫衣男女搞笑潮情侣学生个性班'
              }
            ]
          }
      }
    }
</script>

<style scoped>
  #news{
    display: flex;
    flex-wrap: wrap;
  }
  #news .images2{
    flex: 1;
  }
  #news .images2 img{
    width: 150px;
  }
.news{
  font-size: 12px;

}
</style>
