<!-- 吉祥物/联系客服 -->
<template lang="html">
  <div class="mascot">
    <div class="header-doll">
      <ul>
        <li class="goLeft">
          <img src="../../static/images/cot_qq.png" alt="">
          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3324729049&site=qq&menu=yes">
              点击咨询
          </a>
        </li>
        <router-link :to="{name:'demand'}" class="goLeft" tag="li">
          <img src="../../static/images/cot_email.png" alt="">
          点击发送邮件
        </router-link>
        <li class="goLeft">
          <img src="../../static/images/cot_hear.png" alt="">
          13699122103
        </li>
        <li>
          <el-popover
            placement="left"
            width="220"
            trigger="hover">
            <img  slot="reference" src="../../static/images/cot_qr.png" alt="">
            <img src="../../static/images/ziling.jpg" alt="" style="width:200px;height:200px;">
          </el-popover>
        </li>
      </ul>
      <!-- <p>
        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3324729049&site=qq&menu=yes">
          <img border="0" src="http://wpa.qq.com/pa?p=2:3324729049:53" alt="点击这里给我发消息" title="点击这里给我发消息"/>
        </a>
      </p> -->

    </div>
  </div>
</template>
<script>

export default {

}
</script>

<style lang="scss" scoped>
.header-doll{
  height:260px;
  position: fixed;
  width: 70px;
  bottom:50%;
  margin-bottom: -130px;
  right:0;
  cursor:pointer;
  ul{
    height: 100%;
    width: 60px;
    position: relative;
    li{
      width: 190px;
      height: 60px;
      border-radius: 5px;
      margin-bottom: 5px;
      background: rgba(49,49,49,10);
      transition: .5s all;
      position: absolute;
      right: -140px;
      color:white;
      font-size: 18px;
      line-height: 60px;
      text-align: center;
      box-sizing: border-box;
      padding-left: 50px;
      a{
        color:white;
        text-decoration: none;
      }
      img{
        width: 40px;
        height:65%;
        position: absolute;
        top:10px;
        left:10px;
      }
    }
    li:nth-child(2){
      top:65px;
      img{
        height: 55%;
        top: 15px;
      }
    }
    li:nth-child(3){
      top:130px
    }
    li:nth-child(4){
      top:195px;
    }
    li:hover{
      background: #eb7a1d;
    }
    .goLeft:hover{
      right:-10px;
    }
  }
}
</style>
