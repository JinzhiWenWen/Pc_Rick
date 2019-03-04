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
      name:'engineer',//注册
      path:'/engineer/engineer',
      component:engineer
    },
    {
      path:'/engineer/loginIn',//登录
      name:'LoginIn',
      component:resolve=>require(['@/components/engineer/loginIn'],resolve)
    },
    {
      path:'/plan/planPro',//产品解决方案
      name:'PlanPro',
      component:resolve=>require(['@/components/planPro/plan_pro'],resolve)
    },
    {
      path:'/person/personOrder',//用户订单
      name:'PersonOrder',
      component:resolve=>require(['@/components/person/person_order'],resolve)
    },
    {
      path:'/person/personSingle',//接单赚钱
      name:'PersonSingle',
      component:resolve=>require(['@/components/person/person_single'],resolve)
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
