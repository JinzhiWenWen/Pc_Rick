<template>
  <div class="partner w1420">
    <p class="partner-title">合作伙伴</p>
    <!-- <p class="wow partner-line"></p> -->
    <div class="partner-list clearfix">
      <div class="wow partner-logo f-l">
        <a href="http://www.cnbmtech.com" target="_blank">
          <img src="../../../static/images/cor_logo_home_nor.png"/>
        </a>
      </div>
      <div class="wow partner-logo f-l" style="margin-left:-100px;">
        <a href="https://www.huawei.com" target="_blank">
          <img src="../../../static/images/cor_logo2_home_nor.png"/>
        </a>
      </div>
      <div class="wow partner-logo f-l">
        <a href="http://www.brilliance.com.cn" target="_blank">
          <img src="../../../static/images/cor_logo3_home_nor.png"/>
        </a>
      </div>
      <div class="wow partner-logo f-l">
        <a href="http://www.dhcc.com.cn" target="_blank">
          <img src="../../../static/images/cor_logo4_home_nor.png"/>
        </a>
      </div>
      <div class="wow partner-logo f-l">
        <a href="#" target="_blank">
          <img src="../../../static/images/ext.png" style="width:150px;"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "partner",
        data(){
          return{

          }
        },
        mounted(){
          /*var wow = new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
          });
          wow.init();*/
        }
    }
</script>

<style lang="scss" scoped>
  /*合作伙伴*/
  .partner {
    width: 100%;
    margin: 0 auto;
    .partner-title {
      padding-top: 30px;
      font-size: 24px;
      text-align: center;
    }
    .partner-line {
      width: 140px;
      height: 15px;
      margin: 0 auto;
      background-size: 100% 100%;
      background-image: url("../../../static/images/cor_icon_home_nor.png");
      // animation: fadeInDownBig 1s;
    }
    .partner-list {
      width: 100%;
      margin: 40px 80px 60px;
      text-align: center;
      padding-right: 100px;
      display: flex;
      justify-content: space-around;
      padding-right: 170px;
      .partner-logo{
        text-align: center;
        display: flex;
        justify-content: space-around;
        // &>a{
        //   display: block;
        // }
        img{
          width: 65%;
          height: 80%;
        }
      }
      // .partner-logo + .partner-logo {
      //   margin-left: 60px;
      // }
      // .partner-logo:first-child,.partner-logo:nth-of-type(2){
      //   animation: fadeInLeft 2s;
      // }
      // .partner-logo:nth-of-type(3),.partner-logo:nth-of-type(4){
      //   animation: fadeInRight 2s;
      // }
    }
  }
</style>
