<template>
  <div class="service-platform w100">
    <!-- <div class="service"> -->
      <!-- <div class="service-content">
        <h1 class="title"><span class="wow xnxg"></span>ICT服务平台</h1>
        <h2 class="sub-title">一站式ICT服务平台</h2>
        <ul class="detail clearfix">
          <li><i></i>以高性价比的价格123</li>
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
    </div> -->
    <div class="swiperBox">
      <div class="swiper-platform">
       <div class="swiper-wrapper">
         <div class="swiper-slide">
           <img src="../../../static/images/banner_table_2.png" alt="">
         </div>
         <div class="swiper-slide">
           <img src="../../../static/images/banner_table_3.png" alt="">
         </div>
         <div class="swiper-slide">
           <img src="../../../static/images/banner_table_4.png" alt="">
         </div>
       </div>
     </div>
   </div>
   <div class="swiperTextBox">
     <div class="swiper-platform">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <p class="swiperText">
            <span class="swiperTextTitle">系统化服务流程</span>
            <br>
            <span class="swiperTextCon">&nbsp;&nbsp;&nbsp;&nbsp;以行业标准为参考,制定系统服务流程,可以有效的对服务进度进行监督,提升服务质量,避免重大的问题发生。</span>
          </p>
        </div>
        <div class="swiper-slide">
          <p class="swiperText">
            <span class="swiperTextTitle">一站式接单平台</span>
            <br>
            <span class="swiperTextCon">&nbsp;&nbsp;&nbsp;&nbsp;为工程师提供定制化项目推荐,满足工程师在工作之余接单的需求,以获取相应的报酬,积累项目经验,提升专业能力。</span>
          </p>
        </div>
        <div class="swiper-slide">
          <p class="swiperText">
            <span class="swiperTextTitle">专业的ICT服务平台</span>
            <br>
            <span class="swiperTextCon">&nbsp;&nbsp;&nbsp;&nbsp;为您提供专业的IT工程师资源,满足各种不同的项目需求,实现高效服务、合作共赢。</span>
          </p>
        </div>
      </div>
    </div>
   </div>
   <div class="background_top">

   </div>
   <div class="phone_border">
     <img src="../../../static/images/banner_table_1.png" alt="">
   </div>
   <div class="banner_table_5">
     <img src="../../../static/images/banner_table_5.png" alt="">
   </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default{
  mounted(){
    var swiper = new Swiper('.swiper-platform', {
     spaceBetween: 30,
     autoplay: {
       delay: 3000,
       stopOnLastSlide: false,
       disableOnInteraction: false,
     },
     effect: 'fade',
   });
  }
}
</script>

<style lang="scss" scoped>
  .service-platform{
    height: 680px;
    margin:0 auto;
    background: white;
    position: relative;
    .swiperBox{
      width: 245px;
      height: 480px;
      position: absolute;
      left: 22.5%;
      top:10%;
      z-index: 90;
      .swiper-platform {
        width: 100%;
        height: 100%;
      }
      .swiper-slide {
        width: 100%;
        height: 100%;
        img{
          width: 94%;
          height: 99%;
        }
      }
    }
    .swiperTextBox{
      width: 300px;
      height: 300px;
      position: absolute;
      right:22%;
      top:40%;
      z-index: 10;
      .swiperText{
        background: white;
        height: 300px;
        span{
          display: inline-block;
          text-align: center;
          width: 100%;
        }
        .swiperTextTitle{
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 10px;
        }
        .swiperTextCon{
          text-align: justify;
        }
      }
    }
    .phone_border{
      width: 245px;
      height: 480px;
      position: absolute;
      left: 22%;
      top:9.7%;
      z-index: 100;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .background_top{
      width: 100%;
      height: 50%;
      background: #eee;
      position: absolute;
      top:0;
    }
    .banner_table_5{
      position: absolute;
      z-index: 100;
      top:26%;
      left: 62%;
      img{
        width: 160px;
      }
    }
    // &>div{
    //   position: relative;
    //   height: 500px;
    //   color: #252525;
    //   .title{
    //     margin-bottom: 28px;
    //     font-size: 36px;
    //     text-align: center;
    //   }
    //   .sub-title{
    //     margin-bottom: 25px;
    //     font-size: 24px;
    //     text-align: center;
    //   }
    //   .detail{
    //     font-size: 20px;
    //     li{
    //       float: none;
    //       &>i{
    //         display: inline-block;
    //         width: 16px;
    //         height: 18px;
    //         margin-right: 10px;
    //         background-image: url("../../../static/images/point_icon.png");
    //       }
    //     }
    //     li + li{
    //       margin-top: 15px;
    //     }
    //   }
    //   .more{
    //     display: block;
    //     margin-top: 28px;
    //     font-size: 20px;
    //     text-decoration: underline;
    //     color: #000;
    //   }
    // }
    // .xnxg{
    //   display: inline-block;
    //   width: 150px;
    //   height: 75px;
    //   margin-right: 10px;
    //   background-size: 100% 100%;
    //   background-image: url("../../../static/images/xiniuxiaoge.png");
    //   animation: fadeInLeft 2s;
    // }
    // &>div:nth-of-type(1){
    //   background-image: url("../../../static/images/service_bg.png");
    //   .service-content{
    //     position: absolute;
    //     top:50px;
    //     left: 100px;
    //   }
    // }
    // &>div:nth-of-type(2){
    //   background-image: url("../../../static/images/service_bg2.png");
    //   .learn-content{
    //     position: absolute;
    //     top:140px;
    //     right: 100px;
    //   }
    // }
  }
</style>
