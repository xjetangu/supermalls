import {request} from './request'
export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}

export function getHomeGoods(type,page) {
return request({
  utl:'/home/data',
  params:{
    type,
    page
  }
})
}
