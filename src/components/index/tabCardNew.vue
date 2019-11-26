<template lang="html">
  <div class="tabCardNew">
    <p class="title"><span class="special-title">以高效执行力为客户创造价值</span></p>
    <div class="card">
      <ul>
        <li @mouseenter="enter1()" @mouseleave="leave1()">
          <img src="../../../static/images/card_icon1.png" alt="" ref="topPic">
          <img src="../../../static/images/card_icon1_1.png" alt="" class="outPic" ref="outPic">
          <p>大数据及云计算增值业务</p>
          <span class="border"></span></br>
          <span class="text">ICT数据及资源整合</span>
          <router-link :to="{name:'successfulCaseView'}" tag="span" class="look_more">>>查看更多</router-link>
        </li>
        <li @mouseenter="enter2()" @mouseleave="leave2()">
          <img src="../../../static/images/card_icon2.png" alt="" ref="topPic2">
          <img src="../../../static/images/card_icon2_2.png" alt="" class="outPic" ref="outPic2">
          <p>国内系统集成业务</p>
          <span class="border"></span></br>
          <span class="text">UC&C</span>
          <span class="text">数通</span>
          <span class="text">视讯</span>
          <span class="text">IDC机房整体实施</span>
          <span class="text">运维解决方案</span>
          <router-link :to="{name:'successfulCaseView'}" tag="span" class="look_more">>>查看更多</router-link>
        </li>
        <li @mouseenter="enter3()" @mouseleave="leave3()">
          <img src="../../../static/images/card_icon3.png" alt="" ref="topPic3">
          <img src="../../../static/images/card_icon3_3.png" alt="" class="outPic" ref="outPic3">
          <p>国外系统集成业务</p>
          <span class="border"></span></br>
          <span class="text">非洲</span>
          <span class="text">中东</span>
          <span class="text">拉美</span>
          <router-link :to="{name:'successfulCaseView'}" tag="span" class="look_more">>>查看更多</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    enter1(){
      this.$refs.topPic.style.opacity='0';
      this.$refs.outPic.style.opacity='1';
    },
    leave1(){
      this.$refs.topPic.style.opacity='1';
      this.$refs.outPic.style.opacity='0';
    },
    enter2(){
      this.$refs.topPic2.style.opacity='0';
      this.$refs.outPic2.style.opacity='1';
    },
    leave2(){
      this.$refs.topPic2.style.opacity='1';
      this.$refs.outPic2.style.opacity='0';
    },
    enter3(){
      this.$refs.topPic3.style.opacity='0';
      this.$refs.outPic3.style.opacity='1';
    },
    leave3(){
      this.$refs.topPic3.style.opacity='1';
      this.$refs.outPic3.style.opacity='0';
    },
  }
}
</script>

<style lang="scss" scoped>
.tabCardNew{
  width: 100%;
  height: 700px;
  background: white;
  .title{
    padding: 30px 0 50px;
    text-align: center;
    font-size: 36px;
    letter-spacing: 2px;
    .special-title{
      color:black;
    }
  }
  .card{
    width: 60%;
    height: 70%;
    margin:0 auto;
    ul{
      width: 100%;
      height: 100%;
      display: flex;
      // text-align: center;
      justify-content: center;
      box-shadow: 0px 0px 10px #999;
      li{
        width: 400px;
        height: 100%;
        background: white;
        border:1px solid #ccc;
        border-radius:5px;
        transition: .5s all;
        text-align: center;
        box-sizing: border-box;
        padding-top: 120px;
        position: relative;
        img{
          width: 80px;
          height: 80px;
          position: absolute;
          top:40px;
          left: 50%;
          margin-left: -40px;
          transition: .5s all;
        }
        .outPic{
            opacity: 0;
        }
        p{
          width: 100%;
          text-align: left;
          font-size: 17px;
          font-weight: bold;
          margin-top:15px;
          box-sizing: border-box;
          padding-left: 20px;
        }
        .border{
          display: inline-block;
          width: 20%;
          height: 6px;
          background: red;
          position: absolute;
          left:20px;
          border-radius:5px;
          transition: .5s all;
          background: $fontColor;
        }
        .text{
          display: inline-block;
          width: 100%;
          text-align: left;
          box-sizing: border-box;
          padding-left: 20px;
          font-size: 17px;
          line-height: 40px;
        }
        .look_more{
          font-size: 16px;
          position: absolute;
          bottom:20px;
          left: 20px;
          cursor:pointer;
        }
        .look_more:hover{
          text-decoration: underline;
        }
      }
      li:hover{
        background: url('../../../static/images/card_bg2.png')!important;
        background-size: 100% 100%!important;
        color:white!important;
        .border{
          width: 50%;
          background: white;
        }
      }
    }
  }
}
</style>
