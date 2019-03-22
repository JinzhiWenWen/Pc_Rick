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
          <li>{{userName}}</li>
          <li>{{userName}}</li>
          <li>{{userPhone}}</li>
          <li>{{userEmail}}</li>
          <li>
            <span v-if="hasPlace">{{place}}</span>
            <span v-else>未选择工作区域</span>
          </li>
          <li>
            <img :src="url+identPics[0]" alt="">
            <img :src="url+identPics[1]" alt="">
          </li>
          <li>
            <img :src="url+skillPic[0]" alt="">
            <img :src="url+skillPic[1]" alt="">
          </li>
          <li>
            {{workYear}}&nbsp;年
          </li>
        </ul>
      </div>
    </div>
    <div class="qr_box">
      <img class="phone" src="../../../static/images/cation_phone.png" alt="">
      <img class="qr" src="../../../static/images/company_qr.jpg" alt="">
      <br/><span>扫码关注微信公众号</span>
    </div>
    <p class="save_cation">
      <button type="button" name="button"
      :disabled="upCation"
      v-loading="upCation"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(255,254,240,.7)"
      @click="subCation()"
      >{{cation_text}}</button>
    </p>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data(){
    return{
      Ident:null,//用户资质
      place:null,//用户工作区域
      skillPic:[],
      upCation:false,//是否启用loading
      cation_text:'提交认证',
      userMes:{},
      userName:null,
      userEmail:'-',
      userPhone:null,
      workYear:null,
      hasPlace:false,
      hasCation:false,
      ment:false,
      hasIdent:false,
      identPics:[]
    }
  },
  mounted(){
    if(window.sessionStorage.getItem('user')){
      this.userMes=JSON.parse(window.sessionStorage.getItem('user'));
      this.comIdent();
      this.comPlace();
      if(this.userMes.engineerVO.certificateFiles.length>=1){
        this.userMes.engineerVO.certificateFiles.forEach((t)=>{
          this.skillPic.push(t.fileName)
        })
      }else{
        this.skillPic=[]
      }
      if(this.userMes.engineerVO.identityFiles.length>=1){
        this.userMes.engineerVO.identityFiles.forEach((e)=>{
          this.identPics.push(e.fileName)
        })
      }else{
        this.identPics=[];
      }
      this.userName=this.userMes.engineerVO.name;
      if(this.userMes.email==null){
        this.userEmail='-';
      }else{
        this.userEmail=this.userMes.email;
      }
      this.userPhone=this.userMes.engineerVO.phone;
      this.workYear=this.userMes.engineerVO.workYear;
      if(this.workYear==null){
        this.workYear='-'
      }
      if(this.userMes.engineerVO.childPlaces.length!=0){
        this.hasPlace=true
      };
      if(this.userMes.engineerVO.state==1||this.userMes.engineerVO.state==2){
        this.hasCation=true
      };
      if(this.userMes.engineerVO.identifyState==3){
        this.ment=true
      };
      if(this.userMes.engineerVO.levels.length!=0){
        this.hasIdent=true
      }
    }
  },
  computed:{
    // ...mapState(['userMes'])
  },
  methods:{
    ...mapMutations(['userMes_fn']),
    subCation(){//提交认证
      let _vm=this;
      _vm.cation_text='';
      _vm.upCation=true;
      let userState=_vm.userMes.engineerVO;
      if(userState.identifyState==0){
        _vm.$confirm('当前未进行资料完善，是否前往？', '提示', {
         confirmButtonText: '确定',
         cancelButtonText: '取消',
       }).then(() => {
         _vm.$router.push('/mine/personMes')
       }).catch(() => {
         // alert(2)
         _vm.upCation=false;
       });
     }else if(userState.identifyState==1){
       _vm.$confirm('当前未进行身份认证，是否前往？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(() => {
        _vm.$router.push('/mine/personCard')
      }).catch(() => {
        // alert(2)
        _vm.upCation=false;
      });
    }else if(userState.identifyState==2){
        _vm.$confirm('当前未进行技能认证，是否前往？', '提示', {
         confirmButtonText: '确定',
         cancelButtonText: '取消',
         }).then(() => {
          _vm.$router.push('/mine/personSkill')
         }).catch(() => {
           // alert(2)
           _vm.upCation=false
         });
     }else if(userState.identifyState==3){
        let formData=new FormData();
        formData.append('id',userState.id);
        _vm.$ajax.post(_vm.url+'/mobile/externalEngineerApply',formData).then((res)=>{
          _vm.cation_text='提交认证';
          _vm.upCation=false;
          if(res.data.code==0){
            window.sessionStorage.setItem('user',JSON.stringify(res.data.data))
            _vm.userMes=JSON.parse(window.sessionStorage.getItem('user'));
            _vm.userMes_fn(res.data.data);
            _vm.upCation=false;
            if(res.data.data.engineerVO.state==0){
              _vm.$alert(res.data.data.engineerVO.identifyMsg, '提示', {
                confirmButtonText: '确定'
              });
            }else if(res.data.data.engineerVO.state==1){
              _vm.$alert('已申请认证，请等待', '提示', {
                confirmButtonText: '确定'
              });
            }else{
              _vm.$alert('您已完成认证', '提示', {
                confirmButtonText: '确定'
              });
            }
          }else{
            _vm.upCation=false;
            _vm.$alert(res.data.msg, '提示', {
              confirmButtonText: '确定'
            });
          }
        }).catch((err)=>{
          _vm.upCation=false;
          _vm.$alert('未知错误', '提示', {
            confirmButtonText: '确定'
          });
          console.log(err)
        })
     }
    },
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
      let placeList=this.userMes.engineerVO.childPlaces;
      let placeName=[];
      placeList.forEach((e)=>{
        placeName.push(e.parentPlace.name+'-'+e.name)
      })
      this.place=placeName.join('/');
      if(this.place==''){
        this.place='未选择工作区域'
      }
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
      position: relative;
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
      height: 682px;
      position: relative;
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
          min-width: 240px;
          min-height: 120px;
          border-radius: 10px;
          border:2px solid #eb7a1d;
          background: url('../../../static/images/card_bg.png');
          background-size: 100% 100%;
        }
        img:nth-child(2){
          background: url('../../../static/images/skill_bg2.png');
          background-size: 100% 100%;
          margin-left: 20px;
        }
      }
      li:nth-child(7){
        line-height: 160px;
        img{
          width: 240px;
          height: 120px;
          min-width: 240px;
          min-height: 120px;
          border-radius: 10px;
          border:2px solid #eb7a1d;
          background: url('../../../static/images/skill_bg.jpg');
          background-size: 100% 100%;
        }
        img:nth-child(2){
          margin-left: 20px;
        }
      }
      li:nth-child(8){
        position: absolute;
        bottom:0;
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
      width: 100px;
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
