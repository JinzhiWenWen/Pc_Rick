<template>
  <div class="about-us w100">
    <div class="banner"></div>
    <ul class="about-item clearfix">
      <li class="f-l">
        <p class="title">企业概述</p>
        <p class="content">北京瑞得信息技术有限公司（Beijing Right Service TechCo Ltd以下简称瑞得音）是专业的ICT服务整体解决方案提供商从事项目实施、运行维护、故障处理、咨询培训等业务的高科技技术服务型企业。公司成立于2009年，现有员工近100人瑞得音立足于专业的ICT第三方服务，非常注重技术团队的建设工作公司技术服务人员均具备业内相关技能认证，其中资深技术专家约占30％多数员工为中高级专业技术人员。同时，瑞得音制定了全面的培训和考核机制，以提升技术服务人员的整体技术能力。保持公司在CT服务领域的专业竞争优势。</p>
        <p class="content">作为以CT技术服务为主营业务的专业公司，瑞得音上下及其重视所承接项目的客户满意度，并在长期的项目中建立了良好的口碑。瑞得音以专业的技术、深层次的服务、务实的服务风格，为运营商、政府、军队、交通、金融、教育、大企业等行业用户提供了语音、数据通信、视频会议、云服务、能基、光伏等产品和解决方案的优质的技术服务 。</p>
        <p class="content">瑞得音致力打造成为国内卓越的ICT服务提供商，为员工，股东和社会创造最大的价值，为客户提供最佳的服务。公司倡导“梦想，诚信，执着，务实”的企业文化，公司管理人员具有多年跨国公司管理经验，并有行业资深技术专家为公司提供雄厚的技术支持，公司上下齐心协力与合作伙伴和最终用户共创美好未来。</p>
      </li>
      <li class="f-l">
        <img src="../../../static/images/about_img2_nor.png" height="731px"/>
      </li>
    </ul>
    <ul class="about-item clearfix">
      <li class="f-l">
        <img src="../../../static/images/about_img_nor.png" height="483px"/>
      </li>
      <li class="f-l clearfix">
        <div class="stand-title f-l">企业文化</div>
        <div class="corporate-culture f-l">
          <p class="subhead">公司文化</p>
          <p class="description">梦想、诚信、执着、务实</p>
          <p class="subhead">公司使命</p>
          <p class="description">为员工、股东和社会创造最大价值，为客户提供最佳服务</p>
          <p class="subhead">公司愿景</p>
          <p class="description">成为卓越的CT服务提供商</p>
          <p class="subhead">企业核心价值观</p>
          <p class="description">以客户为中心，以执行力为本</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "about-us"
    }
</script>

<style lang="scss" scoped>
  .about-us{
    margin: 0 auto;
  }
  .banner{
    height: 300px;
    margin: 0 auto;
    background-size: 100% 100%;
    background-image: url("../../../static/images/about_banner_nor.png");
  }
  .about-item{
    width: 100%;
    margin: 0 auto;
    li{
      width: 50%;
      height: 100%;
      color: #202020;
      &>img{
        width: 100%;
        height: 100%;
      }
      .title{
        margin: 30px 0 30px 30px;
        font-size: 20px;
      }
      .content{
        margin-left: 60px;
        margin-bottom: 15px;
        line-height: 2.5;
        font-size: 16px;
        text-indent: 32px;
      }
      .stand-title{
        width: 36px;
        height: 100%;
        padding-top: 150px;
        margin: 0 40px;
        text-align: center;
        vertical-align: middle;
        font-size: 28px;
      }
      .corporate-culture{
        padding-top: 100px;
      }
      .subhead{
        font-size: 20px;
        margin-bottom: 10px;
      }
      .description{
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 20px;
      }
    }
    &:nth-of-type(1){
      height: 730px;
      /*margin-left: 100px;*/
    }
    &:nth-of-type(2){
      height: 480px;
    }
  }
</style>
