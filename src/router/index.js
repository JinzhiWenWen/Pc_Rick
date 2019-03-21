import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import headNav from '@/components/head'
import footer from '@/components/footer'
import NProgress from 'nprogress'
//安装全局组件
Vue.component('headNav',headNav)
Vue.component('footerNav',footer)

// 数据请求
import Axios from 'axios'
Axios.defaults.baseURL = 'http://rightservicetech.com:8080'
// Axios.defaults.baseURL = 'http://hexsoft.top:8080'
Vue.prototype.url="http://rightservicetech.com:8080/"
// Vue.prototype.url="http://hexsoft.top:8080/"
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

const router= new Router({
  routes: [
    {
      path:'/',
      redirect:{name:'index'}
    },
    {
      path: '/ ',
      name:'index',
      component: Index,
      meta:{
        keep:true
      }
    },
    {
      name:'newsView',
      path:'/news/newsView',
      component:resolve=>require(['@/components/news/newsView'],resolve)
    },
    {
      name:'newsDetails',
      path:'/news/newsDetails',
      component:resolve=>require(['@/components/news/newsDetails'],resolve)
    },
    {
      name:'demand',
      path:'/demand/demand',
      component:resolve=>require(['@/components/demand/demand'],resolve)
    },
    {
      name:'aboutUs',
      path:'/aboutUs/aboutUs',
      component:resolve=>require(['@/components/aboutUs/aboutUs'],resolve)
    },
    {
      name:'contactUs',
      path:'/contactUs/contactUs',
      component:resolve=>require(['@/components/contactUs/contactUs'],resolve)
    },
    {
      name:'engineer',//注册
      path:'/engineer/engineer',
      component:resolve=>require(['@/components/engineer/engineer'],resolve)
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
      component:resolve=>require(['@/components/servicePlatform/servicePlatformView'],resolve)
    },
    {
      name:'successfulCaseView',
      path:'/successfulCase/successfulCaseView',
      component:resolve=>require(['@/components/successfulCase/successfulCaseView'],resolve)
    },
    {
      name:'successfulCaseDetail',
      path:'/successfulCase/successfulCaseDetail',
      component:resolve=>require(['@/components/successfulCase/successfulCaseDetail'],resolve)
    },
    {
      name:'Mine',//个人中心
      path:'/mine',
      component:resolve=>require(['@/components/mine/mine'],resolve),
      children:[
        {
          name:'PersonMes',//用户资料
          path:'/mine/personMes',
          component:resolve=>require(['@/components/mine/person_mes'],resolve)
        },
        {
          name:'ChangeMes',//编辑资料
          path:'/mine/changeMes',
          component:resolve=>require(['@/components/mine/change_mes'],resolve)
        },
        {
          name:'PersonCard',//身份认证
          path:'/mine/personCard',
          component:resolve=>require(['@/components/mine/person_cardSec'],resolve)
        },
        {
          name:'PersonSkill',//技能认证
          path:'/mine/personSkill',
          component:resolve=>require(['@/components/mine/person_skills'],resolve)
        },
        {
          name:'PersonCation',//资质申请
          path:'/mine/personCation',
          component:resolve=>require(['@/components/mine/person_cation'],resolve)
        }
      ],
      redirect:'/mine/personMes'
    }
  ]
});
router.beforeEach((to,from,next)=>{
  //路由守卫
  const Mine=['Mine','PersonMes','ChangeMes','PersonCard','PersonSkill'];
  if(Mine.indexOf(to.name)>-1){
    if(!window.sessionStorage.getItem('user')){
      next('/engineer/loginIn')
    }
  }
  //启用加载进度条
  NProgress.start();
  next();
});
router.afterEach(()=>{
  //路由结束关闭进度条
  NProgress.done()
})
export default router;
