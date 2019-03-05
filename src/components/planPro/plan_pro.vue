<!-- 产品解决方案页-->
<template lang="html">
  <div class="plan-pro w100">
    <div class="banner">

    </div>
    <p class="plan_title">
      提供<span style="fontSize:24px;">专业ICT</span>服务
    </p>
    <div class="plan_step">

    </div>
    <div class="plan_list">
      <ul>
        <li v-for="(plan,index) in list">
          <img :src="plan.img" alt="">
          <p>
            <span class="iconfont"></span>
            <span class="title">{{plan.title}}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Deve from '@/components/deve'
export default {
  data(){
    return{
      list:[
        {
          img:'../../../static/images/enter_home_img1.png',
          title:'UC&C'
        },
        {
          img:'../../../static/images/enter_home_img1.png',
          title:'UC&C'
        },
        {
          img:'../../../static/images/enter_home_img1.png',
          title:'UC&C'
        },
        {
          img:'../../../static/images/enter_home_img1.png',
          title:'UC&C'
        },
        {
          img:'../../../static/images/enter_home_img1.png',
          title:'UC&C'
        },
        {
          img:'../../../static/images/enter_home_img1.png',
          title:'UC&C'
        },
        {
          img:'../../../static/images/enter_home_img1.png',
          title:'UC&C'
        }
      ]
    }
  },
  components:{
    Deve
  }
}
</script>

<style lang="scss" scoped>
.plan-pro{
  margin:0 auto;
}
.banner{
  width: 100%;
  height:300px;
  background: url('../../../static/images/plan_bg.png');
  background-size: 100% 100%;
}
.plan_title{
  width: 50%;
  margin:0 auto;
  height: 60px;
  background: url('../../../static/images/plan_title_bg.png');
  background-size: 100% 100%;
  font-weight: bold;
  text-align: center;
  color:#eb7a1d;
  line-height: 60px;
  font-size: 18px;
}
.plan_step{
  width: 50%;
  margin:0 auto;
  background: url('../../../static/images/plan_step.png');
  background-size: 100% 100%;
  height: 142px;
  margin-bottom: 30px;
}
.plan_list{
  width: 50%;
  margin:0 auto;
  ul{
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    li{
      float: none;
      width: 240px;
      height: 200px;
      background: url('../../../static/images/plan_box_bg.png');
      background-size: 100% 100%;
      padding-top:20px;
      text-align: center;
      img{
        width: 180px;
        height: 120px;
      }
      p{
        position: relative;
        .iconfont{
          display: inline-block;
          width: 40px;
          height: 40px;
          background: red;
          border-radius:50%;
          position: absolute;
          left:60px;
          top:5px;
        }
        .title{
          font-size: 20px;
          position: absolute;
          top:10px;
        }
      }
    }
  }
}
</style>
