import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import headNav from '../components/head'
import footer from '../components/footer'
import newsView from '../components/news/newsView'
import newsDetails from '../components/news/newsDetails'
import demand from '../components/demand/demand'
import aboutUs from '../components/aboutUs/aboutUs'
import contactUs from '../components/contactUs/contactUs'
import engineer from '../components/engineer/engineer'
import servicePlatformView from '../components/servicePlatform/servicePlatformView'
import successfulCaseView from '../components/successfulCase/successfulCaseView'
import successfulCaseDetail from '../components/successfulCase/successfulCaseDetail'

//安装全局组件
Vue.component('headNav',headNav)
Vue.component('footerNav',footer)

// 数据请求
import Axios from 'axios'
Axios.defaults.baseURL = 'http://rightservicetech.com:8080/'
Vue.prototype.url="http://rightservicetech.com:8080/"
Vue.prototype.$ajax = Axios
Vue.prototype.dataURL = function (file,title,id) {
  id = (id === undefined)?'':id;
  return file+'?title='+title+id;
}
import $ from 'jquery'
Vue.prototype.$jq = $;


// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

Vue.use(Router)

import '../../static/css/hover.css'
import '../../static/css/reset.css'
import 'swiper/dist/css/swiper.css'

export default new Router({
  routes: [
    {
      path:'/',
      redirect:{name:'index'}
    },
    {
      path: '/ ',
      name:'index',
      component: Index
    },
    {
      name:'newsView',
      path:'/news/newsView',
      component:newsView
    },
    {
      name:'newsDetails',
      path:'/news/newsDetails',
      component:newsDetails
    },
    {
      name:'demand',
      path:'/demand/demand',
      component:demand
    },
    {
      name:'aboutUs',
      path:'/aboutUs/aboutUs',
      component:aboutUs
    },
    {
      name:'contactUs',
      path:'/contactUs/contactUs',
      component:contactUs
    },
    {
      name:'engineer',
      path:'/engineer/engineer',
      component:engineer
    },
    {
      name:'servicePlatformView',
      path:'/servicePlatform/servicePlatformView',
      component:servicePlatformView
    },
    {
      name:'successfulCaseView',
      path:'/successfulCase/successfulCaseView',
      component:successfulCaseView
    },
    {
      name:'successfulCaseDetail',
      path:'/successfulCase/successfulCaseDetail',
      component:successfulCaseDetail
    }
  ]
})
