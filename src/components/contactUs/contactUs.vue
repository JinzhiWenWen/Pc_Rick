<template>
  <div class="contact-us w100">
    <div class="banner"></div>
    <div class="content clearfix w1420">
      <div class="c-left f-l p-r">
        <img src="../../../static/images/contact_img_qr_code.png">
      </div>
      <div class="c-right f-l clearfix">
        <div class="title f-l">联系我们</div>
        <div class="info f-l">
          <p class="description"><i class='name-icon'></i>北京瑞得音信息技术有限公司</p>
          <p class="description"><i class='phone-icon'></i>010－62115806</p>
          <p class="description"><i class='wechar-icon'></i>扫码关注公众号</p>
          <p class="description"><i class='email-icon'></i>service＠rightservicetech.com</p>
          <p class="description"><i class='addr-icon'></i>北京市海淀区马连洼北路8号万霖科技大厦B座707－708</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "contact-us"
    }
</script>

<style lang="scss" scoped>
  .contact-us{
    margin: 0 auto;
  }
  .banner{
    height: 300px;
    margin: 0 auto;
    background-size: cover;
    background-image: url("../../../static/images/contact_banner.png");
  }
  .content{
    margin: 0 auto;
  }
  .c-left{
    width: 500px;
    height: 400px;
    margin: 50px 20px 50px 20px;
    background-size: 100% 100%;
    background-image: url("../../../static/images/contact_img_dot.png");
    &>img{
      position: absolute;
      width: 300px;
      height: 300px;
      left: 300px;
      top:50px;
    }
  }
  .c-right{
    .title{
      width: 36px;
      height: 100%;
      padding-top: 150px;
      margin: 0 40px 0 100px;
      text-align: center;
      vertical-align: middle;
      font-size: 28px;
    }
    .info{
      padding-top: 100px;
    }
    .description{
      font-size: 16px;
      line-height: 16px;
      margin-bottom: 30px;
      vertical-align: middle;
      &>i{
        display: inline-block;
        width: 30px;
        height: 30px;
        margin-right: 16px;
        vertical-align: middle;
        background-size: 100% 100%;
      }
      .name-icon{
        background-image: url("../../../static/images/contact_icon_name.png");
      }
      .phone-icon{
        background-image: url("../../../static/images/contact_icon_phone.png");
      }
      .wechar-icon{
        background-image: url("../../../static/images/contact_icon_wechar.png");
      }
      .email-icon{
        background-image: url("../../../static/images/contact_icon_email.png");
      }
      .addr-icon{
        background-image: url("../../../static/images/contact_icon_addr.png");
      }
    }
  }
</style>
