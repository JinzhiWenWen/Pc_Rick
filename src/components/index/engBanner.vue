<!-- 工程师展示 -->
<template lang="html">
  <div class="eng_banner w1420">
    <!-- <p class="banner_title">犀牛小哥人才库</p> -->
    <p class="banner_title"><span class="wow xnxg"></span><span class="special-title">人才库</span></p>
    <div class="swiper-containerSec">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(eng,index) in engList" :key="index">
          <div class="eng_mes">
            <img :src="imgUrl+eng.icon" alt="">
            <div class="eng_pic">

            </div>
            <div class="eng_mask">

            </div>
            <p class="eng_name">{{eng.name}}</p>
            <p class="eng_skill">{{eng.type}}</p>
            <p class="eng_skill">{{eng.experience}}经验&nbsp;&nbsp;&nbsp;{{eng.professionType}}</p>
            <p class="eng_remark">&nbsp;&nbsp;&nbsp;熟悉数据库,熟悉数据的调拨、查询、销售统计、数据汇总;熟悉网络信息安全技术,了解企业安全及解决方案。</p>
          </div>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-paginationSec"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  data(){
    return{
      imgUrl:"static/images/personImg/",
      engList:[
        {name:"郑彦振",type:"UC，CC，监控",experience:"11年",professionType:"HCNA，HCNP",icon:"person_zyz.png"},
        {name:"耿海涛",type:"UC，CC，监控",experience:"9年",professionType:"HCNA，HCNP",icon:"person_ght.png"},
        {name:"王永胜",type:"系统集成",experience:"17年",professionType:"-",icon:"person_wys.png"},
        {name:"李少华",type:"系统集成",experience:"17年",professionType:"HCNA，HCNP，售前VC",icon:"person_lsh.png"},
        {name:"刘鹏",type:"光伏，视讯",experience:"8年",professionType:"HCNP",icon:"person_lp.png"},
        {name:"陈记",type:"视讯",experience:"9年",professionType:"HCNP",icon:"person_cj.png"},
        {name:"杨海光",type:"数通，IT",experience:"7年",professionType:"HCIE",icon:"person_yhg.png"},
        {name:"马东慧",type:"数通，IT",experience:"8年",professionType:"HCNP",icon:"person_mdh.png"},
        {name:"凌含涛",type:"数通，IT",experience:"6年",professionType:"HCNP",icon:"person_lht.png"},
        {name:"张立鹏",type:"数通，IT",experience:"5年",professionType:"HCNP",icon:"person_zlp.png"},
        {name:"容雄",type:"数通，IT",experience:"7年",professionType:"HCNP",icon:"person_rx.png"},
        {name:"朱贺真",type:"UC，CC，监控",experience:"5年",professionType:"HCNP",icon:"person_zhz.png"},
        {name:"张东磊",type:"UC，CC，监控",experience:"10年",professionType:"HCNP",icon:"person_zdl.png"},
        {name:"于晓东",type:"UC，CC，监控",experience:"9年",professionType:"HCNP",icon:"person_yxd.png"},
        {name:"张陆",type:"UC，CC，监控",experience:"5年",professionType:"HCNP",icon:"person_zl2.png"},
        {name:"赵小林",type:"系统集成",experience:"8年",professionType:"HCNP",icon:"person_zxl.png"},
        {name:"罗亮",type:"能基",experience:"9年",professionType:"HCNP",icon:"person_ll.png"},
        {name:"张江林",type:"能基",experience:"10年",professionType:"HCNP",icon:"person_zjl.png"},
      ]
    }
  },
  mounted(){
    let swiperSec = new Swiper('.swiper-containerSec', {
        slidesPerView:5,
        spaceBetween: 120,
  	    centeredSlides: true,
  	    loop: true,
        pagination: {
          el: '.swiper-paginationSec',
          clickable: true,
          // type:'progressbar'
        },
        autoplay: {
         delay:5000,//2秒切换一次
         stopOnLastSlide: false,
         disableOnInteraction: false,
       }
    });

  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
.eng_banner{
  height: 700px;
  box-sizing: border-box;
  position: relative;
  margin:0 auto;
  .banner_title{
    padding: 30px 0 20px;
    text-align: center;
    font-size: 36px;
    letter-spacing: 2px;
    color:#e86521;
    .xnxg{
      display: inline-block;
      width: 150px;
      height: 75px;
      margin-right: 10px;
      background-size: 100% 100%;
      background-image: url('../../../static/images/xiniuxiaoge.png');
      animation: fadeInLeft 2s;
    }
  }
  .swiper-containerSec {
    width: 100%;
    height: 60%;
  }
  .swiper-paginationSec{
    position: absolute;
    width: 500px;
    left: 50%;
    margin-left: -250px;
    text-align: center;
    bottom:10px;
    z-index: 100;
  }
  .swiper-slide {
    // width: 280px!important;
    background: #fff;
    transition: 1000ms;
    transform: scale(.8);
    border:1px solid #e86521;
    // position: relative;
    box-sizing: border-box;
    box-shadow: 0px 10px 10px #af4c18;
    position: relative;
    margin-top: 30px;
    background: rgba(232,101,33,1);
    .eng_mes{
      width: 200px;
      position: absolute;
      top:0;
      right: -11px;
      height: 133px;
      .eng_mask{
        width: 100%;
        height: 190px;
        border-left:188px solid black;
        border-bottom:37px solid transparent;
        margin-left: 2px;
        margin-top:.5px;
      }
      .eng_pic{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: absolute;
        left:50%;
        margin-left: -50px;
        background: white;
        top:20%;
      }
      .eng_name{
        width: 100%;
        text-align: center;
        position: absolute;
        top:104%;
        color:white;
        z-index: 2;
        font-size: 16px;
      }
      img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: absolute;
        left:50%;
        margin-left: -50px;
        top:20%;
        z-index: 1;
      }
      .eng_skill{
        width: 100%;
        text-align: center;
        color:white;
        font-size: 15px;
      }
      .eng_remark{
        font-size: 15px;
        color:white;
        width: 90%;
        margin:0 auto;
        margin-top: 30px;
        text-align: justify;
        box-sizing: border-box;
        padding-right: 5px;
      }
    }
  }
  .swiper-slide-active,.swiper-slide-duplicate-active{
    transform: scale(1);
  }
}
</style>
