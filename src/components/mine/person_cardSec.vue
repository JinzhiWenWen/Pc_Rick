<!-- 身份证上传二版 -->
<template lang="html">
  <div class="person_cardSec">
    <div class="card_up">
      <ul v-show="isHasService">
        <li v-for="(servicePic,index) in cardBefore" @mouseover="showDelServe(index)" @mouseout="hideDelServe(index)">
          <span class="isPic_card">
            <img :src="url+servicePic.fileName" alt="">
          </span>
          <span class="card_mask" ref="card_mask_service">
            <img src="../../../static/images/del_card.png" alt="" @click="delServicePic(index)">
          </span>
        </li>
      </ul>
      <ul>
        <li v-for="(locaPic,index) in cardShow" @mouseover="showDel(index)" @mouseout="hideDel(index)">
          <span class="isPic_card">
            <img :src="locaPic" alt="">
          </span>
          <span class="card_mask" ref="card_mask">
            <img src="../../../static/images/del_card.png" alt="" @click="delLocaPic(index)">
          </span>
        </li>
        <li v-show="isHasPic">
          <input type="file" accept="image/*" @change="upCard" name="" value="">
        </li>
      </ul>

    </div>
    <p class="save_title">
      <span style="color:red;">*</span>请上传清晰身份证正反面照片，并且为 .jpg或.png格式（图片将被等比压缩为260*180大小，长度相近的图片效果更佳）
    </p>
    <p class="save_btn">
      <button type="button" name="button" @click="upFile()">上传</button>
    </p>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data(){
    return{
      cardShow:[],//上传暂显列表
      cardFile:[],//上传文件列表
      hasLocaPic:false,//是否有本地图片
      cardBefore:[],//回显列表
      isHasPic:true,//当前图片数量判断
      isHasService:false,//是否有以上穿认证图片
      userMes:{}
    }
  },
  computed:{
    // ...mapState(['userMes']),
    picLength(){
      return this.cardFile.length+this.cardBefore.length
    }
  },
  watch:{
    picLength(val,oldVal){
      if(val>=2){
        this.isHasPic=false
      }else{
        this.isHasPic=true
      }
    }
  },
  mounted(){
    if(window.sessionStorage.getItem('user')){
      this.userMes=JSON.parse(window.sessionStorage.getItem('user'))
    }
    if(this.userMes.engineerVO){
      if(this.userMes.engineerVO.identityFiles.length>=1){
        this.cardBefore=this.userMes.engineerVO.identityFiles;
        this.isHasService=true;
      }else{
        this.isHasService=false;
      }
    };
    if(this.picLength>=2){
      this.isHasPic=false
    }else{
      this.isHasPic=true
    }
  },
  methods:{
    ...mapMutations(['userMes_fn']),
    showDel(index){//显示删除蒙层
      this.$refs.card_mask[index].style.display='block'
    },
    hideDel(index){//关闭显示蒙层
      this.$refs.card_mask[index].style.display='none';
    },
    delLocaPic(index){//删除当前选中照片
      this.cardShow.splice(index,1);
      this.cardFile.splice(index,1);
    },
    showDelServe(index){
      this.$refs.card_mask_service[index].style.display='block'
    },
    hideDelServe(index){
      this.$refs.card_mask_service[index].style.display='none';
    },
    delServicePic(index){//删除当前已上传图片
      let _vm=this;
      if(_vm.userMes.engineerVO.state==0){
        let formData=new FormData();
        formData.append('id',_vm.cardBefore[index].id);
        formData.append('type','identityFile');
        _vm.$ajax.post(_vm.url+'/mobile/deleteEngineerFile',formData).then((res)=>{
          if(res.data.code==0){
            this.$alert('删除成功', '提示', {
               confirmButtonText: '确定',
             });
            _vm.userMes_fn(res.data.data);
            _vm.cardBefore=res.data.data.engineerVO.identityFiles;
          }else{
            this.$alert('当前账户异常，请稍后再试', '提示', {
               confirmButtonText: '确定',
             });
          }
        }).catch((err)=>{
          this.$alert('网络异常，请稍后再试', '提示', {
             confirmButtonText: '确定',
           });
          console.log(err)
        })
      }else{
        this.$alert('当前资料认证中或已认证，如需修改请联系客服', '提示', {
           confirmButtonText: '确定',
         });
      }
    },
    upCard(e){//选择图片
      let _this=this;
      let file=e.target.files[0];
      _this.cardFile.push(file);
      let reader=new FileReader();
      reader.readAsDataURL(file);
      let img=new Image;
      reader.onload=function(e){
        var width=400,
        quality=0.1,
        canvas=document.createElement("canvas"),
        drawer=canvas.getContext("2d");
        img.src=this.result;
        img.onload=()=>{
          canvas.width=width;
          canvas.height=width*(img.height/img.width);
          drawer.drawImage(img,0,0,canvas.width,canvas.height);
          img.src=canvas.toDataURL('image/png',quality);
        };
        _this.cardShow.push(img.src)
      };
    },
    upFile(){//上传文件
      let _vm=this;
      let formData=new FormData();
      formData.append('id',_vm.userMes.engineerVO.id)
      formData.append('identityUploadFiles',_vm.cardFile[0]);
      formData.append('identityUploadFiles',_vm.cardFile[1]);
      _vm.$ajax.post(_vm.url+'/mobile/uploadEngineerFile',formData).then((res)=>{
        if(res.data.code==0){
          this.$alert('上传成功', '提示', {
             confirmButtonText: '确定',
           });
          _vm.userMes_fn(res.data.data);
          _vm.cardBefore=res.data.data.engineerVO.identityFiles;
          _vm.cardShow=[];
          _vm.cardFile=[];
        }else{
          this.$alert('当前账户异常，请稍后再试', '提示', {
             confirmButtonText: '确定',
           });
        }
      }).catch((err)=>{
        console.log(err);
        this.$alert('网络异常，请稍后再试', '提示', {
           confirmButtonText: '确定',
         });
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.person_cardSec{
  width: 100%;
  .card_up{
    width: 80%;
    margin:0 auto;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
    ul{
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-left: 20px;
      li{
        width: 45%;
        height: 230px;
        background: red;
        float: none;
        margin-top: 20px;
        border-radius:12px;
        box-shadow: 0px 5px 20px #999;
        position: relative;
        background: url('../../../static/images/card_bg.png');
        background-size:100% 100%;
        input{
          width: 100%;
          height: 100%;
          position: absolute;
          background:white;
          top:0;
          left:0;
          border-radius:12px;
          cursor:pointer;
          opacity: 0;
          z-index: 10;
        }
        img{
          width: 100%;
          height: 100%;
          border-radius:12px;
        }
        .card_mask{
          display: inline-block;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,.5);
          position: absolute;
          top:0;
          left:0;
          border-radius:12px;
          display: none;
          img{
            width: 80px;
            height: 80px;
            position: absolute;
            left:50%;
            top:50%;
            margin-left:-40px;
            margin-top:-40px;
            cursor:pointer;
          }
        }
      }
    }

  }
  .save_title{
    width: 50%;
    margin:0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .save_btn{
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
