<!-- 登录页 -->
<template lang="html">
  <div class="login-in w100">
    <div class="banner">
      <div class="login-box">
        <div class="" style="display:flex;">
          <div class="login_title">
            <ul>
              <li>账号:</li>
              <li>密码:</li>
            </ul>
          </div>
          <div class="login_msg">
            <ul>
              <li>
                <input type="text" @blur="noPhone()" v-model="userNumber" placeholder="请输入您的手机号/登录名" name="" value="">
                <span style="color:red;" v-show="isHasPhone">*请输入您的手机号或登录名</span>
              </li>
              <li>
                <input type="password" @blur="noPass()" v-model="userPass" placeholder="请输入您的密码" name="" value="">
                <span style="color:red;" v-show="isHasPass">*请输入您的密码</span>
              </li>
            </ul>
          </div>
        </div>
        <p>
          <button type="button" @click="subLogin()"
          :disabled="turnLogin"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(255,254,240,.7)"
          v-loading="isTurn">{{engText}}</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  inject:['reload'],
  data(){
    return{
      turnLogin:false,//是否禁用按钮
      engText:'登录',//按钮文本
      isTurn:false,//是否启用Loading
      isHasPhone:false,//是否填写账号
      isHasPass:false,//是否填写密码
      userNumber:null,//用户账号
      userPass:null,//用户密码
    }
  },
  methods:{
    ...mapMutations(['userMes_fn']),
    noPhone(){//检测账号
      if(this.userNumber==null){
        this.isHasPhone=true;
      }else{
        this.isHasPhone=false
      }
    },
    noPass(){//检测密码
      if(this.userPass==null){
        this.isHasPass=true
      }else{
        this.isHasPass=false;
      }
    },
    subLogin(){
      let _vm=this;
      if(_vm.userNumber==null){
        _vm.isHasPhone=true;
      }else if(_vm.userPass==null){
        _vm.isHasPass=true
      }else{
        _vm.engText='';
        _vm.turnLogin=true;
        _vm.isTurn=true;
        _vm.$ajax({
          method: 'post',
          url:_vm.dataURL('login'),
          params: {
            name:_vm.userNumber,
            password:_vm.userPass
          }
        }).then((res)=>{
          _vm.engText='登录';
          _vm.turnLogin=false;
          _vm.isTurn=false;
          if(res.data.code==0){
            _vm.userMes_fn(res.data.data);
            _vm.$notify({
              title: '提示',
              message: '登录成功',
              type: 'success',
              offset:100
            });
            _vm.$router.push('/');
            _vm.reload();
          }else{
            _vm.$notify.error({
              title: '提示',
              message: res.data.msg,
              offset:100
            });
          }
          console.log(res)
        }).catch((err)=>{
          _vm.engText='登录';
          _vm.turnLogin=false;
          _vm.isTurn=false;
          console.log(err)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-in{
  margin:0 auto;
}
.banner{
  width: 100%;
  height: 650px;
  min-height: 600px;
  background: url('../../../static/images/being.png');
  background-size: 100% 100%;
  box-sizing: border-box;
  position: relative;
  .login-box{
    width: 500px;
    height: 300px;
    min-width: 450px;
    min-height: 250px;
    position: absolute;
    top:15vh;
    right:8vh;
    background: white;
    border-radius:12px;
    box-shadow: 10px 20px 50px #000;
    padding-top:50px;
    p{
      width: 100%;
      text-align: center;
      margin-top: 20px;
      button{
        display: inline-block;
        width: 150px;
        height: 40px;
        background: #eb7a1d;
        border-radius:8px;
        line-height: 40px;
        font-size: 18px;
        color:white;
        outline: none;
        border:0;
      }
    }
    ul{
      li{
        float: none;
        line-height:70px;
        input{
          height: 30px;
          width: 250px;
          border:0;
          border-bottom:1px solid #ccc;
          outline:none;
          padding-left:10px;
        }
      }
    }
    .login_title{
      width: 30%;
      height: 80%;
      ul{
        li{
          text-align: right;
          font-weight: bold;
        }
      }
    }
    .login_msg{
      width: 70%;
      height: 80%;
      ul{
        li{
          padding-left:15px;
          position: relative;
          span{
            display:inline-block;
            position: absolute;
            left:12px;
            color:red;
            font-size: 12px;
            top:60px;
            line-height: 10px;
          }
        }
      }
    }
  }
}
</style>
