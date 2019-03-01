<template>
  <div class="service-platform-view w100">
    <div class="banner"></div>
    <ul class="clearfix tab-ul">
      <li>
        <router-link :to="{name:'engineer'}">
          <span></span>
          <p>小哥注册</p>
        </router-link>
      </li>
      <li>
        <span></span>
        <p>接单赚钱</p>
      </li>
      <li>
        <router-link :to="{name:'demand'}">
          <span></span>
          <p>发布需求</p>
        </router-link>
      </li>
      <li>
        <span></span>
        <p>订单追踪</p>
      </li>
    </ul>
    <div class="img-div w1420">
      <img src="../../../static/images/content-1.png"/>
      <img src="../../../static/images/content-2.png"/>
      <img src="../../../static/images/content-3.png"/>
      <img src="../../../static/images/content-4.png"/>
    </div>
  </div>
</template>

<script>
    export default {
        name: "service-platform-view"
    }
</script>

<style lang='scss' scoped>
  .service-platform-view{
    margin: 0 auto;
    .img-div{
      margin: 0 auto;
    }
  }
  .banner{
    height: 300px;
    margin: 0 auto;
    background-size: 100% 100%;
    background-image: url("../../../static/images/service-banner.png");
  }
  .tab-ul{
    li{
      width: 25%;
      height: 182px;
      color: #fff;
      text-align: center;
      &>a{
        color: #fff;
        text-decoration: none;
      }
      p{
        height: 90px;
        line-height: 90px;
        vertical-align: top;
        cursor: pointer;
        text-align: center;
        font-size: 24px;
        color: #fff;
        letter-spacing: 4px;
      }
      span{
        display: block;
        width: 41px;
        height: 46px;
        margin: 46px auto 0;
        vertical-align: top;
        background-size: 100% 100%;
      }
      &:nth-of-type(1){
        background-color: rgba(50,177,108,.9);
        span{
          background-image: url("../../../static/images/enter_icon_home_nor.png");
        }
      }
      &:nth-of-type(2){
        background-color: rgba(200,189,42,.9);
        span{
          background-image: url("../../../static/images/enter_icon2_home_nor.png");
        }
      }
      &:nth-of-type(3){
        background-color: rgba(0,160,233,.9);
        span{
          background-image: url("../../../static/images/enter_icon3_home_nor.png");
        }
      }
      &:nth-of-type(4){
        background-color: rgba(239,106,54,.9);
        span{
          background-image: url("../../../static/images/enter_icon4_home_nor.png");
        }
      }
    }
  }
</style>
