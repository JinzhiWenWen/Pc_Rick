<template>
  <div class="service-personal w1420">
    <p class="title"><span class="xnxg"></span><span class="special-title">人才库</span></p>
    <div class="swiper-container1">
      <div class="item-content p-a swiper-wrapper">
        <div class="item-card f-l swiper-slide" v-for="(person,index) in personList">
          <ul>
            <li>
              <!--<img :src="imgUrl+person.icon"/>-->
              <img src="../../../static/images/person_img.jpeg"/>
              <p class="mark-floor"></p>
            </li>
            <li>
              {{person.name}}
            </li>
            <li>
              {{person.type}}
            </li>
            <li>
              {{person.experience}}
            </li>
            <li>
              {{person.professionType}}
            </li>
            <li>
              <span>联系他</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="swiper-pagination1"></div>
    </div>
  </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "service-personal",
        data(){
          return {
            imgUrl:"../../../static/images/",
            personList:[
                {name:"1",type:"UCC",experience:"5年经验",professionType:"HCNP认证",icon:"person_img.jpeg"},
                {name:"2",type:"UCC",experience:"5年经验",professionType:"HCNP认证",icon:"person_img.jpeg"},
                {name:"3",type:"UCC",experience:"5年经验",professionType:"HCNP认证",icon:"person_img.jpeg"},
                {name:"4",type:"UCC",experience:"5年经验",professionType:"HCNP认证",icon:"person_img.jpeg"},
                {name:"5",type:"UCC",experience:"5年经验",professionType:"HCNP认证",icon:"person_img.jpeg"},
                {name:"6",type:"UCC",experience:"5年经验",professionType:"HCNP认证",icon:"person_img.jpeg"},
                {name:"7",type:"UCC",experience:"5年经验",professionType:"HCNP认证",icon:"person_img.jpeg"},
                {name:"8",type:"UCC",experience:"5年经验",professionType:"HCNP认证",icon:"person_img.jpeg"},
              ]
          }
        },
        mounted(){
          new Swiper('.swiper-container1', {
            autoplay: {
              delay:5000,//2秒切换一次
              stopOnLastSlide: false,
              disableOnInteraction: false,
            },
            slidesPerView: 4,
            spaceBetween: 30,
            pagination: {
              el: '.swiper-pagination1',
              clickable: true,
            },
          });
        }
    }
</script>

<style lang="scss" scoped>
  .service-personal{
    height: 800px;
    margin: 0 auto;
    text-align: center;
    .special-title{
      color: $fontColor;
    }
    .xnxg{
      display: inline-block;
      width: 150px;
      height: 75px;
      margin-right: 10px;
      background-size: 100% 100%;
      background-image: url("../../../static/images/xiniuxiaoge.png");
    }
    .title{
      padding: 30px 0 50px;
      text-align: center;
      font-size: 36px;
      letter-spacing: 2px;
    }
    .item-content{
      width: 1180px;
      margin: 0 120px;
    }
    .item-card{
      width: 280px !important;
      height: 528px;
      background-image: url('../../../static/images/contect_msg_home_nor.png');
    }
    .item-card + .item-card{
      margin-left: 20px;
    }
  }
  .item-card {
    ul{
      width: 260px;
      height: 100%;
      margin:0 3px;
      li{
        width:272px;
        height: 43px;
        text-align: center;
        font-size: 20px;
        line-height: 43px;
        color: #fff;
        &:nth-of-type(2){
          border-top: none;
        }
        &:first-child{
          position: relative;
          height: 100px;
          /*background-image: url("../../../static/images/enter_im_home_nor.png");*/
          background-color: #000;
          padding-top: 88px;
          img{
            position: absolute;
            left: 94px;
            top: 32px;
            width: 85px;
            height: 85px;
            border-radius: 50%;
          }
          .mark-floor{
            bottom: 0;
            width: 0;
            height: 0;
            border-right: 136px solid $fontColor;
            border-bottom: 50px solid $fontColor;
            border-left: 136px solid transparent;
            border-top: 50px solid transparent;
          }
        }
        &:last-child{
          height: 125px;
          padding-top: 57px;
          span{
            display: block;
            width: 130px;
            height: 47px;
            margin: 0 auto;
            background-size: 100% 100%;
            background-image: url("../../../static/images/contect_btn_home_nor.png");
          }
        }
      }
      li + li{
        border-top: 3px solid #fff;
      }
    }
  }
</style>
