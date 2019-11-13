<template>
    <div id="home">
      <NavBar  class="home-nav">
        <div slot="center">购物街</div>
      </NavBar>

      <scroll class="content"
              ref="scroll"
              :probe-type="3"
              @scroll="contentScroll"
              :pull-up-load="true"
              @pullingUp="loadMore"
      >
        <swiper :banners="banners"></swiper>
        <recommend :recommends="recommend"></recommend>
        <Feature></Feature>
        <TabContral class="tab-control" :titles="titles"></TabContral>

        <router-view></router-view>
      </scroll>
      <BackTop @click.native="backClick" v-show="isShowbacktop"></BackTop>
      </div>



</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar'
  import TabContral from '../../components/content/tabContral/TabContral'

  import swiper from '../../components/common/swiper/swiper'
  import recommend from './chidren/RecommendView'
  import Feature from './chidren/FeatureView'
  import pop from '../../components/content/tabContral/pop'
  import BackTop from '../../components/content/backtop/BackTop'

  import {getHomeMultidata,getHomeGoods} from '../../network/home'

  import Scroll from '../../components/common/scroll/scroll'
    export default {
        name: "home",
        data(){
          return {
             banners:[],
             recommend:[],
            goods:{
               'pop':{page:0,list:[]},
              'news':{page:0,list:[]},
              'sell':{page:0,list:[]}
            },
            titles:[
              {title:'流行',path:'/home/pop'},
              {title:'新款',path:'/home/news'},
              {title:'精选',path:'/home/sell'}
            ],
            isShowbacktop:false
           }
        },

        components:{
        NavBar,
          swiper,
          recommend,
          Feature,
          TabContral,
          Scroll,
          BackTop

      },
      created(){
          //1、请求多个数据
        this.getHomeMultidata();
        //2、请求商品数据
        // this.getHomeGoods('pop'),
        // this.getHomeGoods('new'),
        // this.getHomeGoods('sell')
      },
      methods:{
        getHomeMultidata(){
          getHomeMultidata().then(res =>{
            // console.log(res);
            this.banners = res.data.banner.list
          this.recommend = res.data.recommend.list


        })
        },
        backClick(){
         this.$refs.scroll.scrollTo(0,0)
        },
        contentScroll(position){
            this.isShowbacktop = (-position.y) > 300
        },
        loadMore(){
          console.log('上拉加载更多')
        }
        // getHomeGoods(type){
        //   const page = this.goods[type].page + 1
        //   getHomeGoods(type,page).then(res =>{
        //         this.goods[type].list.push(...res.data.list)
        //   this.goods[type].page + 1
        //   })
        // }
      }
    }
</script>

<style scoped>
  #home{
    /*padding-top: 44px;*/
    height: 100vh;
    margin-top:44px;
  }
.home-nav{
  background: pink;
  color:white;
  position: fixed;
  top:0;
  right: 0;
  left:0;
  z-index: 9;
}
  .tab-control{
    position: sticky;
    top:44px;
  }
  .content{
    height:calc(100% - 93px) ;
    overflow: hidden;
  }
</style>
