<template>
   <div id="pop">
        <div class="images" v-for="item in img">
          <img :src="item.path" alt="">
          <div>
            <span class="pop">{{item.price}}</span>
            <span class="pop">{{item.title}}</span>
          </div>
         </div>



   </div>
</template>

<script>
    export default {
        name: "tabcontrol",
     data(){
          return {
            img:[
              {
                path:'https://img.alicdn.com/imgextra/i1/33328510/O1CN01dNzgBX2Cjd0y52gBx_!!0-saturn_solar.jpg_260x260.jpg',
                price:158,
                title:'大码女装毛呢外套胖mm200斤宽松秋冬加'
              },
              {
                path:'https://img.alicdn.com/imgextra/i4/116351897/O1CN015WbbVn1PsruIH9wdJ_!!0-saturn_solar.jpg_260x260.jpg',
                price:59,
                title:'卫衣2019新款女长袖冬韩版宽松潮黑色加绒'
              },
              {
                path:'https://img.alicdn.com/imgextra/i3/526840172/O1CN017cGCkE1D8ogwnAFoZ_!!0-saturn_solar.jpg_260x260.jpg',
                price:553,
                title:'短款秋冬女装大棉服宽松学生加厚收腰棉衣'
              },
              {
                path:'https://img.alicdn.com/imgextra/i2/580160113/O1CN01FugvfK1ChnKJx0KRQ_!!0-saturn_solar.jpg_260x260.jpg',
                price:167,
                title:'宽松中长款加绒加厚女卫衣2019新款冬圆领'
              }
            ]
          }
     }
    }
</script>

<style scoped>
  #pop{
    display: flex;
    flex-wrap: wrap;
  }
  #pop .images{

    flex: 1;
  }
  #pop .images img{
    width: 150px;


  }
.pop{
  font-size: 12px;
}
</style>
