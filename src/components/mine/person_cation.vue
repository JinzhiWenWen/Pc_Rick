<!-- 资质申请页 -->
<template lang="html">
  <div class="person_cation">
    <div class="" style="width:100%;display:flex;">
      <div class="cation_title">
        <ul>
          <li>登录名：</li>
          <li>真实姓名：</li>
          <li>联系电话：</li>
          <li>电子邮箱：</li>
          <li>服务范围：</li>
          <li>身份认证：</li>
          <li>技能认证：</li>
          <li>工作年限：</li>
        </ul>
      </div>
      <div class="cation_con">
        <ul>
          <li>{{userMes.nickname}}</li>
          <li>{{userMes.engineerVO.name}}</li>
          <li>{{userMes.engineerVO.phone}}</li>
          <li>{{userMes.email}}</li>
          <li>{{place}}</li>
          <li>
            <img v-for="cardPic in userMes.engineerVO.identityFiles" :src="url+cardPic.fileName" alt="">
          </li>
          <li>
            <img v-for="skillPic in skillPic" :src="url+skillPic.fileName" alt="">
          </li>
          <li>{{userMes.engineerVO.workYear}}&nbsp;年</li>
        </ul>
      </div>
    </div>
    <div class="qr_box">
      <img class="phone" src="../../../static/images/cation_phone.png" alt="">
      <img class="qr" src="../../../static/images/company_qr.jpg" alt="">
      <br/><span>扫码关注微信公众号</span>
    </div>
    <p class="save_cation">
      <button type="button" name="button">提交认证</button>
    </p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{
      Ident:null,//用户资质
      place:null,//用户工作区域
      skillPic:[]
    }
  },
  mounted(){
    this.skillPic.push(this.userMes.engineerVO.certificateFiles[0]);
    this.skillPic.push(this.userMes.engineerVO.certificateFiles[1]);
    this.comIdent();
    this.comPlace()
  },
  computed:{
    ...mapState(['userMes'])
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
.person_cation{
  width: 100%;
  position: relative;
  height: 100%;
  .cation_title{
    width: 20%;
    height: 100%;
    ul{
      width: 100%;
      li{
        float: none;
        line-height: 60px;
        font-size: 18px;
        text-align: right;
      }
      li:nth-child(6){
        line-height: 160px;
      }
      li:nth-child(7){
        line-height: 160px;
      }
    }
  }
  .cation_con{
    width: 80%;
    height: 100%;
    ul{
      width: 100%;
      li{
        float: none;
        line-height: 60px;
        font-size: 18px;
        text-align: left;
        padding-left: 22px;
      }
      li:nth-child(6){
        line-height: 160px;
        img{
          width: 240px;
          height: 120px;
          border-radius: 10px;
          border:2px solid #eb7a1d;
        }
        img:nth-child(2){
          margin-left: 20px;
        }
      }
      li:nth-child(7){
        line-height: 160px;
        img{
          width: 240px;
          height: 120px;
          border-radius: 10px;
          border:2px solid #eb7a1d;
        }
        img:nth-child(2){
          margin-left: 20px;
        }
      }
    }
  }
  .qr_box{
    width: 220px;
    height: 450px;
    background: white;
    position: absolute;
    right:0px;
    top:20px;
    box-shadow: 0px 0px 20px #999;
    text-align: center;
    box-sizing: border-box;
    padding-top:20px;
    .phone{
      width: 60%;
      height: 55%;
    }
    .qr{
      width: 60%;
      margin-top: 20px;
    }
  }
  .save_cation{
    width: 100%;
    height: 40px;
    text-align: center;
    button{
      width: 80px;
      height: 100%;
      background: red;
      border:0;
      outline: none;
      background: #eb7a1d;
      color:white;
      border-radius:5px;
      font-size: 16px;
    }
  }
}
</style>
