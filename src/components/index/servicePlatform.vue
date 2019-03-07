<template>
  <div class="service-platform w1420">
    <div class="service">
      <div class="service-content">
        <h1 class="title"><span class="wow xnxg"></span>ICT服务平台</h1>
        <h2 class="sub-title">一站式ICT服务平台</h2>
        <ul class="detail clearfix">
          <li><i></i>以高性价比的价格</li>
          <li><i></i>提供优惠的ICT服务</li>
          <li><i></i>具备丰富的工程师资源</li>
          <li><i></i>实现高效的交付体系</li>
        </ul>
        <router-link class="more" :to="{name:'servicePlatformView'}">了解更多</router-link>
      </div>
    </div>
    <div class="learn">
      <div class="learn-content">
        <h1 class="title"><span class="special-title">工程师</span>能获得什么</h1>
        <ul class="detail">
          <li><i></i>接单赚钱</li>
          <li><i></i>获取经验</li>
          <li><i></i>获取工作机会</li>
          <li><i></i>获取知识</li>
        </ul>
        <router-link class="more" :to="{name:'servicePlatformView'}">了解获取方式</router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "service-platform"
    }
</script>

<style lang="scss" scoped>
  .service-platform{
    height: 1000px;
    margin: 0 auto;
    &>div{
      position: relative;
      height: 500px;
      color: #252525;
      .title{
        margin-bottom: 28px;
        font-size: 36px;
        text-align: center;
      }
      .sub-title{
        margin-bottom: 25px;
        font-size: 24px;
        text-align: center;
      }
      .detail{
        font-size: 20px;
        li{
          float: none;
          &>i{
            display: inline-block;
            width: 16px;
            height: 18px;
            margin-right: 10px;
            background-image: url("../../../static/images/point_icon.png");
          }
        }
        li + li{
          margin-top: 15px;
        }
      }
      .more{
        display: block;
        margin-top: 28px;
        font-size: 20px;
        text-decoration: underline;
        color: #000;
      }
    }
    .xnxg{
      display: inline-block;
      width: 150px;
      height: 75px;
      margin-right: 10px;
      background-size: 100% 100%;
      background-image: url("../../../static/images/xiniuxiaoge.png");
      animation: fadeInLeft 2s;
    }
    &>div:nth-of-type(1){
      background-image: url("../../../static/images/service_bg.png");
      .service-content{
        position: absolute;
        top:100px;
        left: 100px;
      }
    }
    &>div:nth-of-type(2){
      background-image: url("../../../static/images/service_bg2.png");
      .learn-content{
        position: absolute;
        top:140px;
        right: 100px;
      }
    }
  }
</style>
