import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')

const pop = ()=>import('../components/content/tabContral/pop')
const news = ()=>import('../components/content/tabContral/news')
const sell = ()=>import('../components/content/tabContral/sell')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:Home
  },
  {
    path:'/home',
    component:Home,
    children:[
      // {
      //   path:'',
      //   redirect:pop
      // },
      {
        path:'pop',
        component:pop
      },
      {
        path:'news',
        component:news
      },
      {
        path:'sell',
        component:sell
      }
    ]
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,

})

export default router
