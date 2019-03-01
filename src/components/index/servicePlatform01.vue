<template>
  <div class="service-platform w1420">
    <p class="title">犀牛小哥合众服务平台</p>
    <p class="intro">简单，灵活，安全</p>
    <div class="sp-content clearfix">
      <div class="phone-img f-l">
        <img src="../../../static/images/service_im_home_nor.png" width="346" height="710"/>
      </div>
      <ul class="list f-l clearfix">
        <li class="f-l">
          <i class="icon"></i>
          <p class="name">客户体验</p>
          <p class="description">一站式服务平台，从接单、项目管理、收款，操作简单、灵活、有保障</p>
        </li>
        <li class="f-l">
          <i class="icon"></i>
          <p class="name">便捷服务</p>
          <p class="description">可视化的流程监控系统，工单状态一目了然，随处可查。工程师快速响应，在线支付，安全方便</p>
        </li>
        <li class="f-l">
          <i class="icon"></i>
          <p class="name">数据服务</p>
          <p class="description">标准化的服务流程，项目进度实时更新 ，解决传统T行业项目信息孤岛，项目资料混乱的问题，建设项目管理系统，分析、统计项目数据</p>
        </li>
        <li class="f-l">
          <i class="icon"></i>
          <p class="name">优势团队</p>
          <p class="description">专业的技术实力、资深的服务经验，帮助小白学习实践，提升能力</p>
        </li>
        <li class="f-l">
          <i class="icon"></i>
          <p class="name">高性价比服务</p>
          <p class="description">通过精准匹配、资源优化，降低服务成本，解决服务资源错配、服务成本高、工程师时间闲置的问题</p>
        </li>
        <li class="f-l">
          <i class="icon"></i>
          <p class="name">资源融合</p>
          <p class="description">融合了工程师、最终用户、IT服务商、IT代理商、厂商资源，以资源广泛为优势，提供专业、诚信服务</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "service-platform"
    }
</script>

<style lang="scss" scoped>
  .service-platform{
    height: 1201px;
    margin: 0 auto;
    .title{
      padding-top: 71px;
      text-align: center;
      font-size: 36px;
      letter-spacing: 2px;
    }
    .intro{
      padding: 26px 0;
      text-align: center;
      font-size: 24px;
      letter-spacing: 2px;
    }
  }
  .sp-content {
    .phone-img{
      margin-left: 300px;
    }
    .list{
      width: 600px;
      margin-left: 100px;
      text-align: center;
      li{
        width: 240px;
        height: 200px;
        margin-bottom: 100px;
        &:nth-of-type(2n){
          margin-left: 80px;
        }
        &:nth-of-type(1){
          .icon{
            background-image: url("../../../static/images/service_icon5_home_nor.png");
          }
        }
        &:nth-of-type(2){
          .icon{
            background-image: url("../../../static/images/service_icon_home_nor.png");
          }
        }
        &:nth-of-type(3){
          .icon{
            background-image: url("../../../static/images/service_icon3_home_nor.png");
          }
        }
        &:nth-of-type(4){
          .icon{
            background-image: url("../../../static/images/service_icon6_home_nor.png");
          }
        }
        &:nth-of-type(5){
          .icon{
            background-image: url("../../../static/images/service_icon2_home_nor.png");
          }
        }
        &:nth-of-type(6){
          .icon{
            background-image: url("../../../static/images/service_icon4_home_nor.png");
          }
        }
      }
    }
    .icon{
      display: inline-block;
      width: 74px;
      height: 74px;
      background-size: 100% 100%;
    }
    .name{
      text-align: center;
      font-size: 24px;
    }
    .description{
      text-align: center;
      font-size: 14px;
      line-height: 22px;
    }
  }
</style>
