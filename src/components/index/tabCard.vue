<template>
  <div class="effect w1420">
    <div class="nt-content clearfix">
      <div class="wow nt-img f-l p-r">
        <router-link :to="{name:'engineer'}">
          <img src="../../../static/images/enter_home_img1.png">
          <div class="img-decription p-a">
            <span></span>
            <p>小哥注册</p>
          </div>
        </router-link>
      </div>
      <div class="wow nt-img f-l p-r">
        <router-link tag="div" to="/person/personSingle">
          <img src="../../../static/images/enter_home_img2.png">
          <div class="img-decription p-a" onclick="">
            <span></span>
            <p>接单赚钱</p>
          </div>
        </router-link>
      </div>
      <div class="wow nt-img f-l p-r">
        <router-link :to="{name:'demand'}">
          <img src="../../../static/images/enter_home_img3.png">
          <div class="img-decription p-a">
              <span></span>
              <p>发布需求</p>
          </div>
        </router-link>
      </div>
      <div class="wow nt-img f-l p-r">
        <router-link tag="div" to="/person/personOrder">
          <img src="../../../static/images/enter_home_img4.png">
          <div class="img-decription p-a">
            <span></span>
            <p>订单追踪</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "tab-card",
      data(){
        return{

        }
      },
      mounted(){

      }
    }
</script>

<style lang="scss" scoped>
  .effect{
    margin:50px auto;
  }
  .nt-content{
    width: 868px;
    margin:auto;
    .nt-img{
      width: 187px;
      height: 182px;
      background-color: #F6F6F6;
      text-align: left;
      img{
        width: 100%;
        height: 100%;
      }
      h3{
        font-size: 20px;
        font-weight: bold;
      }
      .img-decription{
        overflow: hidden;
        width: 100%;
        height: 100%;
        margin:0px auto;
        bottom:0;
        transition: .3s;
        color: #fff;
        text-align: left;
        font-size: 0;
        cursor: pointer;
        background-color: rgba(0,0,0,.5);
        border-radius: 11px;
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
        &:hover{
          transform: scale(1.1);
          transition-duration: 1s;
        }
      }
      &:nth-of-type(1){
        .img-decription{
          /*background-color: rgba(50,177,108,.9);!*#32b16c*!*/
          span{
            background-image: url("../../../static/images/enter_icon_home_nor.png");
          }
        }
        animation: fadeInLeft 2s;
      }
      &:nth-of-type(2){
        .img-decription{
          /*background-color: rgba(200,189,42,.9);!*#c8bd2a*!*/
          span{
            background-image: url("../../../static/images/enter_icon2_home_nor.png");
          }
        }
        animation: fadeInLeft 2s;
      }
      &:nth-of-type(3){
        .img-decription{
          /*background-color: rgba(0,160,233,.9);!*#00a0e9*!*/
          span{
            background-image: url("../../../static/images/enter_icon3_home_nor.png");
          }
        }
        animation: fadeInRight 2s;
      }
      &:nth-of-type(4){
        .img-decription{
          /*background-color: rgba(239,106,54,.9);!*#eb7a1d*!*/
          span{
            background-image: url("../../../static/images/enter_icon4_home_nor.png");
          }
        }
        animation: fadeInRight 2s;
      }
    }
    .nt-img + .nt-img{
      margin-left: 40px;
    }
  }
</style>
