<template>
  <div>
    <!--<head-nav></head-nav>-->
    <div id="content" class="w100">
      <div class="item-card">
        <carousel></carousel>
      </div>
      <div class="item-card">
        <tab-card></tab-card>
      </div>
      <!-- <div class="item-card" style="margin-top:50px;">
       <service-platform></service-platform>
      </div> -->
      <div class="item-card">
        <service-personal></service-personal>
      </div>
      <div class="item-card">
        <map-box></map-box>
      </div>
      <div class="item-card">
       <news></news>
      </div>
      <div class="item-card">
        <partner></partner>
      </div>
    </div>
    <!--<footer-nav></footer-nav> -->
  </div>
</template>

<script>

    import WOW from 'wowjs'
    import carousel from './index/carousel'
    import tabCard from './index/tabCard'
    import servicePlatform from './index/servicePlatform'
    import servicePersonal from './index/servicePersonal'
    import news from './index/news'
    import mapBox from './index/map'
    import partner from './index/partner'
    export default {
        name: "index",
        data(){
          return {}
        },
        components:{carousel,tabCard,servicePlatform,servicePersonal,news,mapBox,partner},
        mounted(){
          var wow = new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
          });
          wow.init();
        }
    }
</script>

<style lang="scss" scoped>
  #content{
    margin:0 auto;
  }
  .item-card{
    margin: 0 auto;
    background-size: 100% 100%;
    &:nth-of-type(3){
      background-image: url("../../static/images/service_personal_bg.png");
      background-repeat: no-repeat;
    }
    &:nth-of-type(5){
      background-image: url("../../static/images/news_bg.png");
    }
  }
</style>
