// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'



import animate from 'animate.css'
import WOW from 'wowjs'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../theme/index.css'
import './assets/iconfont/iconfont.css'
import './assets/iconfontT/iconfont.css'
import '../static/css/index.css'
import ElementUI from 'element-ui'
import store from './assets/store.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
NProgress.configure({
    easing: 'ease',  // 动画方式
    speed: 500,  // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时的最小百分比
})
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
