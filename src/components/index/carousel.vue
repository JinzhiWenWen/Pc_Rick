<template>
  <div class="h-content w100">
    <!-- <div class="hc-banner swiper-container">
      <ul class="swiper-wrapper">
        <li class="swiper-slide">
          <img src="../../../static/images/banner1_1.png" alt="">
        </li>
        <li class="swiper-slide">
          <img src="../../../static/images/banner1_2.png" alt="">
        </li>
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
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div> -->
    <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../../../static/images/banner2_1.png" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../../../static/images/banner2_2.png" alt="">
      </div>
      <!-- <div class="swiper-slide">
        <img src="../../../static/images/banner1_1.png" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../../../static/images/banner1_2.png" alt="">
      </div> -->
      <div class="swiper-slide">
        <img src="../../../static/images/banner01.png" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../../../static/images/banner02.png" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../../../static/images/banner03.png" alt="">
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
  </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        data(){
          return{}
        },
        mounted(){
        let swiper = new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
              dynamicBullets: true,
            },
            autoplay: {
              delay:2000,//2秒切换一次
              stopOnLastSlide: false,
              disableOnInteraction: false,
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
    .swiper-container {
       width: 100%;
       height: 571px;
     }
     .swiper-slide {
       text-align: center;
       font-size: 18px;
       background: #fff;
       /* Center slide text vertically */
       display: -webkit-box;
       display: -ms-flexbox;
       display: -webkit-flex;
       display: flex;
       -webkit-box-pack: center;
       -ms-flex-pack: center;
       -webkit-justify-content: center;
       justify-content: center;
       -webkit-box-align: center;
       -ms-flex-align: center;
       -webkit-align-items: center;
       align-items: center;
       img{
         width: 100%;
         height: 100%;
       }
      }
  }
</style>
