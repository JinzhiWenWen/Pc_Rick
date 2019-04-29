<!-- 身份证认证页 -->
<template lang="html">
  <div class="person_card">
    <div class="card_up">
      <ul>
        <li @mouseover="card_upIs()" @mouseout="card_cancelIs()">
          <span class="isPic_card">
            <img :src="cardIs" alt="">
          </span>
          <input type="file" accept="image/*" @change="upIs" name="" value="" v-show="HasIs">
          <span class="card_mask" v-show="isDelIs">
            <img src="../../../static/images/add_card.png" v-show="HasIs" alt="">
            <img src="../../../static/images/del_card.png" style="cursor:pointer;" v-show="noIs" @click="delCardIs()" alt="">
          </span>
        </li>
        <li @mouseover="card_upThe()" @mouseout="card_cancelThe()">
          <span class="thePic_card">
            <img :src="cardThe" alt="">
          </span>
          <input type="file" accept="image/*" v-show="hasThe" @change="upThe" name="" value="">
          <span class="card_mask" v-show="isDelThe">
            <img src="../../../static/images/add_card.png" v-show="hasThe" alt="">
            <img src="../../../static/images/del_card.png" style="cursor:pointer;" v-show="noThe" @click="delCardThe" alt="">
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data(){
    return{
      isDelIs:false,//正面照蒙层
      isDelThe:false,//反面照蒙层
      cardIs:'',//身份证正面照地址
      cardThe:'',//身份证反面照地址
      HasIs:true,//是否有正面照
      hasThe:true,//是否有反面照
      noIs:false,//正面照为空的时候
      noThe:false,//反面照为空的时候
      cardFile:[],//身份证文件列表
    }
  },
  computed:{
    ...mapState(['userMes'])
  },
  mounted(){
    if(this.userMes.engineerVO){
      if(this.userMes.engineerVO.identityFiles[0]){
        this.cardIs=this.url+this.userMes.engineerVO.identityFiles[0].fileName;
      }else{
        this.cardIs='';
      }
      if(this.userMes.engineerVO.identityFiles[1]){
        this.cardThe=this.url+this.userMes.engineerVO.identityFiles[1].fileName
      }else{
        this.cardThe='';
      }
    }
    if(this.cardIs===''){
      this.HasIs=true;
      this.noIs=false;
    }else{
      this.HasIs=false;
      this.noIs=true;
    };
    if(this.cardThe===''){
      this.hasThe=true;
      this.noThe=false;
    }else{
      this.hasThe=false;
      this.noThe=true;
    }
  },
  watch:{
    cardIs(val,oldVal){
      if(val===''){
        this.HasIs=true;
        this.noIs=false;
      }else{
        this.HasIs=false
        this.noIs=true;
      }
    },
    cardThe(val,oldVal){
      if(val===''){
        this.hasThe=true;
        this.noThe=false;
      }else{
        this.hasThe=false;
        this.noThe=true;
      }
    }
  },
  methods:{
    ...mapMutations(['userMes_fn']),
    delCardIs(){//删除正面照
      let _vm=this;
      if(_vm.userMes.engineerVO.identityFiles[0]){
        if(_vm.userMes.engineerVO.state==2){
          let formData=new FormData();
          formData.append('id',_vm.userMes.engineerVO.identityFiles[0].id);
          formData.append('type','identityFile')
          _vm.$ajax.post(_vm.url+'mobile/deleteEngineerFile',formData).then((res)=>{
            console.log(res)
            if(res.data.code=0){
              _vm.userMes_fn(res.data.data)
            }else{
              this.$alert('网络异常，请稍后再试', '提示', {
                 confirmButtonText: '确定',
               });
            }
          })
        }else{
          this.$alert('当前资料认证中或已认证，如需修改请联系客服', '提示', {
             confirmButtonText: '确定',
           });
        }
      }else{
        _vm.cardIs='';
      }
    },
    delCardThe(){//删除反面照
      let _vm=this;
      if(_vm.userMes.engineerVO.identityFiles[1]){
        if(_vm.userMes.engineerVO.state==0){
          let formData=new FormData();
          formData.append('id',_vm.userMes.engineerVO.identityFiles[1].id);
          formData.append('type','identityFile')
          _vm.$ajax.post(_vm.url+'mobile/deleteEngineerFile',formData).then((res)=>{
            if(res.data.code=0){
              _vm.userMes_fn(res.data.data)
            }else{
              this.$alert('网络异常，请稍后再试', '提示', {
                 confirmButtonText: '确定',
               });
            }
          }).catch((err)=>{
            this.$alert('当前账户异常，请稍后再试', '提示', {
               confirmButtonText: '确定',
             });
          })
        }else{
          this.$alert('当前资料认证中或已认证，如需修改请联系客服', '提示', {
             confirmButtonText: '确定',
           });
        }
      }else{
        _vm.cardThe='';
      }
    },
    card_upIs(){//鼠标移入正面照
      this.isDelIs=true;
    },
    card_cancelIs(){//鼠标移出正面照
      this.isDelIs=false;
    },
    card_upThe(){//鼠标移入反面照
      this.isDelThe=true;
    },
    card_cancelThe(){//鼠标移出反面照
      this.isDelThe=false;
    },
    upIs(e){//上传身份证正面照
      let _this=this;
      let file=e.target.files[0];
      let reader=new FileReader();
      reader.readAsDataURL(file);
      reader.onload=function(){
        _this.cardIs=this.src
      };
    },
    upThe(e){//上传身份证反面照
      let _this=this;
      let file=e.target.files[0];
      let reader=new FileReader();
      reader.readAsDataURL(file);
      reader.onload=function(){
        _this.cardThe=this.result
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.person_card{
  width: 100%;
  .card_up{
    width: 40%;
    margin:0 auto;
    ul{
      width: 100%;
      li{
        width: 100%;
        height: 230px;
        background: red;
        float: none;
        margin-top: 20px;
        border-radius:12px;
        box-shadow: 0px 5px 20px #999;
        position: relative;
        background: url('../../../static/images/UserPic.png');
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
        .card_mask{
          display: inline-block;
          position: absolute;
          border-radius:12px;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,.5);
          top:0;
          left:0;
          z-index: 1;
          img{
            width: 80px;
            height: 80px;
            position:absolute;
            top:50%;
            left:50%;
            margin-left: -40px;
            margin-top:-40px;
          }
        }
        img{
          width: 100%;
          height: 100%;
          border-radius:12px;
        }
        .isPic_card{
          i{
            color:#666;
            cursor:pointer;
            font-size: 18px;
            position: absolute;
            right:-10px;
            top:-10px;
          }
        }
        .thePic_card{
          i{
            color:#666;
            cursor:pointer;
            font-size: 18px;
            position: absolute;
            right:-10px;
            top:-10px;
          }
        }
      }
    }
  }
}
</style>
