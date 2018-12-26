import {URL,PARAM,OPTION} from './config'
import jsonp from './jsonp'
export function getCarousel() {
  const data = Object.assign({},PARAM,{
    g_tk:701075963,
    uin:0,
    platform:"h5",
    needNewCode:1,
    _:new Date().getTime()
  })
  return jsonp(URL.carousel,data,OPTION)
}
export function getNewAlbum() {}