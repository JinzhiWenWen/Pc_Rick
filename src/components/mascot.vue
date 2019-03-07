<!-- 吉祥物/联系客服 -->
<template lang="html">
  <div class="mascot">
    <div class="header-doll">
      <div class="header-msg">
        联系客服
      </div>
      <p>
        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=487771938&site=qq&menu=yes">
          <img border="0" src="http://wpa.qq.com/pa?p=2:487771938:53" alt="点击这里给我发消息" title="点击这里给我发消息"/>
        </a>
      </p>
    </div>
  </div>
</template>
<script>

export default {

}
</script>

<style lang="scss" scoped>
.header-doll{
  width:110px;
  height:90px;
  position: fixed;
  bottom:160px;
  right:15px;
  background: url('../../static/images/right_doll.png');
  background-size: 100% 100%;
  cursor:pointer;
  .header-msg{
    width: 100px;
    height: 30px;
    background: url('../../static/images/header_msg.png');
    background-size: 100%  100%;
    position: absolute;
    left:-110px;
    top:-5px;
    text-align: center;
    line-height: 28px;
    color:white;
    font-weight: bold;
    font-size: 12px;
  }
  p{
    width: 100px;
    height: 30px;
    opacity: 0;
    a{
      img{
        display: inline-block;
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>
