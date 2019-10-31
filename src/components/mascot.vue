<!-- 吉祥物/联系客服 -->
<template lang="html">
  <div class="mascot">
    <div class="header-doll">
      <ul>
        <li>
          <img src="../../static/images/contact_icon_phone.png" alt="">
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <!-- <div class="header-msg">
        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3324729049&site=qq&menu=yes">
            联系客服
        </a>

      </div>
      <p>
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
  height:400px;
  position: fixed;
  width: 70px;
  bottom:50%;
  margin-bottom: -200px;
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
      background: #ccc;
      transition: .5s all;
      position: absolute;
      right: -140px;
      img{
        width: 60px;
        height:100%;
      }
    }
    li:nth-child(2){
      top:65px;
    }
    li:nth-child(3){
      top:130px
    }
    li:nth-child(4){
      top:195px;
    }
    li:hover{
      right:-10px;
    }
  }
}
</style>
