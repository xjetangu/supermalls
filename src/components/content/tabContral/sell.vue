<template>
    <div class="sell">
      <div class="images3" v-for="item in img">
        <img :src="item.path" alt="">
        <div>
          <span class="sells">{{item.price}}</span>
          <span class="sells">{{item.title}}</span>

        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "sell",
      data(){
          return {
            img:[
              {
                path:'https://img.alicdn.com/imgextra/i4/131098681/O1CN01fYZ2aS2DzwoTwvTKQ_!!0-saturn_solar.jpg_260x260.jpg',
                price:66,
                title:'宽松高腰灯芯绒减龄背带裙学生女装ins潮'
              },
              {
                path:'https://img.alicdn.com/imgextra/i2/30469676/O1CN01iCOZaS2LLetZEPj2f_!!0-saturn_solar.jpg_260x260.jpg',
                price:229,
                title:'2019新款连帽百搭学生潮ins秋冬款卫'
              },
              {
                path:'https://img.alicdn.com/imgextra/i4/44737540/O1CN017XXxD025ZMtsPA5Iq_!!0-saturn_solar.jpg_260x260.jpg',
                price:138,
                title:'棉衣女学生大毛领羽绒棉服冬天工装韩版冬季'
              },
              {
                path:'https://img.alicdn.com/imgextra/i4/108645632/O1CN01qo9D4J1rTVBZMpQzn_!!0-saturn_solar.jpg_260x260.jpg',
                price:133,
                title:'韩版2019秋冬新款纯棉无帽卫衣裙学生女'
              }
            ]
          }
      }
    }
</script>

<style scoped>
  .sell{
    display: flex;
    flex-wrap: wrap;
  }
  .sell .images3{
    flex: 1;
  }
  .sell .images3 img{
    width: 150px;
  }
.sells{
  font-size: 12px;
}
</style>
