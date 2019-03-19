<template>
  <div class="h-content w100">
    <div class="hc-banner swiper-container">
      <ul class="swiper-wrapper">
        <li class="swiper-slide">
          <img src="../../../static/images/banner01.png" alt="">
        </li>
        <li class="swiper-slide">
          <img src="../../../static/images/banner02.png" alt="">
        </li>
        <li class="swiper-slide">
          <img src="../../../static/images/banner03.png" alt="">
        </li>
      </ul>
      <div class="swiper-pagination"></div>
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
    </div>
  </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "carousel",
        data(){
          return{}
        },
        mounted(){
          new Swiper('.swiper-container',{
            autoplay: {
              delay:2000,//1秒切换一次
              stopOnLastSlide: false,
              disableOnInteraction: false,
            },//可选选项，自动滑动
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        }
    }
</script>

<style lang="scss" scoped>
  .h-content{
    height: 571px;
    margin: 0 auto;
    background-color: #fff;
    .hc-banner{
      width: 100%;
      height: 571px;
      li{
        img{
          width: 100%;
          height: 100%;
        }
      }
      .swiper-button-prev{
        left: 50px;
      }
      .swiper-button-next{
        right: 50px;
      }
    }
  }
</style>
