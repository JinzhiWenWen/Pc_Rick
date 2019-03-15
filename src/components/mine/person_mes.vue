<!-- 用户资料页 -->
<template lang="html">
  <div class="person_mes">
    <div class="mes_title">
      <ul>
        <li>姓名：</li>
        <li>邮箱：</li>
        <li>联系方式：</li>
        <li>工作年限：</li>
        <li>工作区域：</li>
        <li>身份认证：</li>
        <li>技能评估：</li>
        <li>已认证技能：</li>
      </ul>
    </div>
    <div class="mes_con">
      <ul>
        <li>{{userMes.engineerVO.name}}</li>
        <li>{{userMes.email}}</li>
        <li>{{userMes.engineerVO.phone}}</li>
        <li>{{userMes.engineerVO.workYear}}年</li>
        <li>
          <span v-if="userMes.engineerVO.childPlaces.length!=0">{{place}}</span>
          <span v-else>未选择工作区域</span>
        </li>
        <li>
          <span v-if="userMes.engineerVO.state==1||userMes.engineerVO.state==2">已认证</span>
          <span v-else>未认证</span>
        </li>
        <li>
          <span v-if="userMes.engineerVO.identifyState==3">已评估</span>
          <span v-else>未评估</span>
        </li>
        <li>
          <span v-if="userMes.engineerVO.levels.length!=0">{{Ident}}</span>
          <span v-else>未认证</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{
      Ident:'派大星',//用户已认证身份
      place:'北京',//用户已选办公区域
    }
  },
  computed:{
    ...mapState(['userMes'])
  },
  mounted(){
    this.comIdent();
    this.comPlace();
  },
  methods:{
    //计算用户评估身份
    comIdent(){
      let identList=this.userMes.engineerVO.levels;
      let identName=[];
      identList.forEach((e)=>{
        identName.push(e.technology.name+'-'+e.name)
      });
      this.Ident=identName.join('/')
    },
    //计算用户工作区域
    comPlace(){
      console.log(this.userMes.engineerVO);
      let placeList=this.userMes.engineerVO.childPlaces;
      let placeName=[];
      placeList.forEach((e)=>{
        placeName.push(e.parentPlace.name+'-'+e.name)
      })
      this.place=placeName.join('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.person_mes{
  width: 100%;
  height: 80%;
  display: flex;
  .mes_title{
    width: 25%;
    height: 100%;
    ul{
      li{
        float: none;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        text-align: right;
      }
    }
  }
  .mes_con{
    width: 75%;
    height: 100%;
    ul{
      li{
        float: none;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        text-align: left;
        box-sizing: border-box;
        padding-left: 20px;
      }
    }
  }
}
</style>
