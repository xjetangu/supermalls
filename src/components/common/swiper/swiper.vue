<template>
<div class="swiper">
  <swiper :options="swiperOption" class="focusSwiper">
    <swiper-slide v-for="item in banners" class="swiperSlider">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>

  </swiper>
</div>
</template>
<script>
  export default {
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>
<style>
  .swiper{
    width:100%;
    height:174px;
    overflow: hidden;
  }
  .focusSwiper{
    width:100%;
    height: 100%;
  }
  .swiperSlider{
    width:100%;
    height:100%;
  }
  img{
    width:100%;

  }

</style>
