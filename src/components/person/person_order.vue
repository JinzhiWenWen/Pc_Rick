<!-- 用户订单 -->
<template lang="html">
  <div class="person-order w100">
    <div class="progress_box">
      <p class="gress_con">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </p>
      <div class="gress_fist">
        <p style="color:#eb7a1d;">开发中</p>
      </div>
      <div class="gress_second">
        <p>待开发</p>
      </div>
      <div class="gress_third">
        <p>待开发</p>
      </div>
      <div class="gress_fourth">
        <p>待开发</p>
      </div>
    </div>
    <Deve/>
  </div>
</template>

<script>
import Deve from '@/components/deve'
export default {
  components:{
    Deve
  }
}
</script>

<style lang="scss" scoped>
.person-order{
  margin:0 auto;
  padding-top:30px;
}
.progress_box{
  width: 60%;
  height: 200px;
  margin:0 auto;
  position: relative;
  .gress_con{
    width: 100%;
    height: 10px;
    background: blue;
    position: absolute;
    left:0;
    top:50%;
    margin-top: -5px;
    display: flex;
    z-index: 10;
    span{
      display: inline-block;
      width: 25%;
      height: 100%;
      background: #ccc
    }
    span:nth-child(1){
      background: #eb7a1d;
    }
    // span:nth-child(2){
    //   background: green;
    // }
    // span:nth-child(3){
    //   background: pink;
    // }
    // span:nth-child(4){
    //   background: blue;
    // }
  }
  div{
    position: absolute;
    width: 25%;
    height: 50%;
    border-right:3px dashed #ccc;
    z-index: 1;
  }
  div:nth-of-type(odd){
    p{
      width: 100%;
      position: absolute;
      right:-50%;
      text-align: center;
      bottom:-18%;
      background: white;
    }
  }
  div:nth-of-type(even){
    p{
      width: 100%;
      position: absolute;
      right:-50%;
      text-align: center;
      top:-8%;
      background: white;
    }
  }
  .gress_fist{
    left:0;
    border-right:3px dashed #eb7a1d;
    bottom:0;
  }
  .gress_second{
    left:25%;
    top:0;
  }
  .gress_third{
    left:50%;
    bottom:0;
  }
  .gress_fourth{
    top:0;
    left:75%;
  }
}
</style>
