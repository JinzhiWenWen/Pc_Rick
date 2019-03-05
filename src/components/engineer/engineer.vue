<template>
  <div class="engineer w100">
    <!-- <div class="banner"></div> -->
    <!-- <div class="content">
      <div class="register-box">
        <div class="input-row clearfix">
          <p class="f-l">*姓名</p>
          <div class="f-l p-r">
            <input placeholder="请输入您的姓名" v-model="name"/>
            <span class="remind" v-show="nameRemind">必填项</span>
          </div>
        </div>
        <div class="input-row clearfix">
          <p class="f-l">*手机号码</p>
          <div class="f-l p-r">
            <input placeholder="请输入11位手机号码" v-model="phone"/>
            <span class="remind" v-show="phoneRemind">{{phoneMsg}}</span>
          </div>
        </div>
        <div class="input-row clearfix">
          <p class="f-l">*登录名</p>
          <div class="f-l p-r">
            <input placeholder="请输入6-16个字符" v-model="username"/>
            <span class="remind" v-show="usernameRemind">{{usernameMsg}}</span>
          </div>
        </div>
        <div class="input-row clearfix">
          <p class="f-l">*密码</p>
          <div class="f-l p-r">
            <input type="password" placeholder="请输入密码" v-model="password"/>
            <span class="remind" v-show="passwordRemind">{{passwordMsg}}</span>
          </div>
        </div>
        <div class="input-row clearfix">
          <p class="f-l">*确认密码</p>
          <div class="f-l p-r">
            <input type="password" placeholder="请确认密码" v-model="rPassword"/>
            <span class="remind" v-show="rPasswordRemind">{{passwordMsg}}</span>
          </div>
        </div>
        <div class="submit-btn" @click="registerSubmit">
          立即提交
        </div>
        <div class="success" v-show="successRemind">恭喜您，注册成功</div>
      </div>
    </div> -->
    <div class="engineer-content">
      <div class="engineer-box">
        <div class="" style="display:flex;">
          <div class="input_title">
            <ul>
              <li>姓名:</li>
              <li>手机号:</li>
              <li>登录名:</li>
              <li>密码:</li>
              <li>确认密码:</li>
            </ul>
          </div>
          <div class="input_msg">
            <ul>
              <li>
                <input type="text" name="" @blur="noName()" value="" v-model="userName" placeholder="请输入您的姓名">
                <span v-show="isHasName">{{turnName}}</span>
              </li>
              <li>
                <input type="text" name="" @blur="noPhone()" value="" v-model="userPhone" placeholder="请输入您的手机号">
                <span v-show="isHasPhone">{{isNumber}}</span>
              </li>
              <li>
                <input type="text" name="" value="" @blur="nickName()" v-model="userNickName" placeholder="请输入您的登录名">
                <span v-show="isHasNickName">{{isNickName}}</span>
              </li>
              <li>
                <input type="password" name="" value="" @blur="noPass()" v-model="userPass" placeholder="请输入您的密码">
                <span v-show="isHasPass">*请输入您的密码</span>
              </li>
              <li>
                <input type="password" name="" value="" @blur="turnPass()" v-model="turnPassW" placeholder="请再次输入您的密码">
                <span v-show="isTurnPass">{{isPass}}</span>
              </li>
            </ul>
          </div>
        </div>
        <p>
          <button type="button" @click="subEng()"
          :disabled="turnEng"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(255,254,240,.7)"
          v-loading="isTurn">{{engText}}</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "engineer",
        data(){
          return{
            successRemind:false,
            isNumber:'*请输入您的手机号',
            isPass:'*请再次输入您的密码',
            turnName:'*请输入您的姓名',
            isNickName:'*请输入您的登录名',
            isHasName:false,
            isHasPhone:false,
            isHasNickName:false,
            isHasPass:false,
            isTurnPass:false,
            userName:null,//用户姓名
            userPhone:null,//用户手机号
            userNickName:null,//用户登录名
            userPass:null,//用户密码
            turnPassW:null,//确认密码
            engText:'注册',
            turnEng:false,//是否禁用按钮
            isTurn:false,//是否启用loading
          }
        },
        methods:{
          noName(){//检测姓名
            if(this.userName==null){
              this.isHasName=true;
            }else if(this.userName.length<2){
              this.turnName='*请输入两位汉字以上的姓名'
              this.isHasName=true;
            }else{
              this.isHasName=false;
            }
          },
          noPhone(){//检测手机号
            if(this.userPhone==null){
              this.isHasPhone=true;
            }else if(!(/^1[34578]\d{9}$/.test(this.userPhone))){
              this.isNumber='*请输入正确的手机号';
              this.isHasPhone=true;
            }else{
              this.isHasPhone=false;
            }
          },
          nickName(){//检测用户名
            if(this.userNickName==null){
              this.isHasNickName=true;
            }else{
              this.isHasNickName=false;
            }
          },
          noPass(){//检测密码
            if(this.userPass==null){
              this.isHasPass=true
            }else{
              this.isHasPass=false;
            }
          },
          turnPass(){//检测二次密码
            if(this.turnPassW==null){
              this.isTurnPass=true;
            }else if(this.turnPassW!==this.userPass){
              this.isPass='*两次输入的密码不一致';
              this.isTurnPass=true;
            }else{
              this.isTurnPass=false;
            }
          },
          subEng(){//注册按钮
            let _vm=this;
            if(_vm.userName==null){
              _vm.isHasName=true;
            }else if(_vm.userName.length<2){
              _vm.turnName='*请输入两位汉字以上的姓名'
              _vm.isHasName=true;
            }else if(_vm.userPhone==null){
              _vm.isHasPhone=true;
            }else if(!(/^1[34578]\d{9}$/.test(_vm.userPhone))){
              _vm.isNumber='*请输入正确的手机号';
              _vm.isHasPhone=true;
            }else if(_vm.userNickName==null){
              _vm.isHasNickName=true;
            }else if(_vm.userPass==null){
              _vm.isHasPass=true
            }else if(_vm.turnPassW==null){
              _vm.isTurnPass=true;
            }else if(_vm.turnPassW!==_vm.userPass){
              _vm.isPass='*两次输入的密码不一致';
              _vm.isTurnPass=true;
            }else{
              _vm.isTurn=true;
              _vm.turnEng=true;
              _vm.engText='';
              _vm.$ajax({
                  method: 'post',
                  url:_vm.dataURL('saveExternalEngineer'),
                  params: {
                    name:_vm.userName,
                    phone:_vm.userPhone,
                    username:_vm.userNickName,
                    password:_vm.turnPassW
                  }
                }).then((res)=>{
                  _vm.isTurn=false;
                  _vm.turnEng=false;
                  _vm.engText='注册';
                  console.log(res)
                  if(res.data.code==0){
                    _vm.$notify({
                      title: '提示',
                      message: '注册成功，系统将默认为您登录',
                      type: 'success',
                      offset:100
                    });
                    _vm.$router.back(-1);
                  }else if(res.data.code==115){
                    _vm.isNumber='*此手机号已注册';
                    _vm.isHasPhone=true;
                  }else if(res.data.code==114){
                    _vm.isNickName='*此登录名已注册'
                    _vm.isHasNickName=true;
                  }
                  console.log(res)
                }).catch((err)=>{
                  console.log(err)
                })
            }
          },
          testValue(name){
            console.log(this);
            console.log(name);
          }
        }
    }
</script>

<style lang='scss' scoped>
  .engineer{
    margin: 0 auto;
  }
  .engineer-content{
    width: 100%;
    height: 650px;
    min-height: 600px;
    background:url("../../../static/images/login_bg.png");
    background-size: 100% 100%;
    padding-top:130px;
    .engineer-box{
      width: 500px;
      height: 350px;
      min-width: 450px;
      min-height: 250px;
      background: white;
      margin-left:1000px;
      border-radius:12px;
      box-shadow: 10px 20px 50px #000;
      padding-top:30px;
      p{
        width: 100%;
        text-align: center;
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
          line-height: 50px;
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
      .input_title{
        width: 30%;
        height: 80%;
        ul{
          li{
            text-align: right;
            font-weight: bold;
          }
        }
      }
      .input_msg{
        width: 70%;
        height: 80%;
        ul{
          li{
            position: relative;
            padding-left:15px;
            span{
              position: absolute;
              left:12px;
              color:red;
              font-size: 12px;
              bottom: -26px;
            }
          }
        }
      }
    }
  }
  .content{
    position: relative;
    height: 500px;
    margin: 0 auto;
  }
  .register-box{
    position: relative;
    width: 900px;
    height: 500px;
    margin: 0 auto;
    padding: 100px 0 0 100px;
    top: -100px;
    background-size: 100% 100%;
    background-image: url("../../../static/images/bg_reg_nor.png");
    .success{
      position: absolute;
      width: 200px;
      height: 50px;
      top:200px;
      left: 400px;
      border-radius: 3px;
      line-height: 50px;
      background: $fontColor;
      text-align: center;
      color: #fff;
    }
  }
  .input-row{
    margin: 20px auto;
    &>p{
      width: 130px;
      height: 50px;
      margin-right: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 18px;
      background-color: $fontColor;
      color: #fff;
    }
    &>div{
      width: 600px;
      height: 50px;
    }
    input{
      width: 100%;
      height: 100%;
      border: none;
      font-size: 18px;
      text-indent: 18px;
      background-image: url("../../../static/images/edit_reg_nor.png");
    }
    input::-webkit-input-placeholder{
      color:#bfbfbf;
    }
    input::-moz-placeholder{   /* Mozilla Firefox 19+ */
      color:#bfbfbf;
    }
    input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
      color:#bfbfbf;
    }
    input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
      color:#bfbfbf;
    }
    .remind{
      position: absolute;
      top: 15px;
      right: 20px;
      color: red;
    }
  }
  .submit-btn{
    position: relative;
    left: 300px;
    height: 70px;
    width: 250px;
    margin: 30px 0 20px;
    cursor: pointer;
    line-height: 70px;
    text-align: center;
    font-size: 34px;
    color:#fff;
    background-size: 100% 100%;
    background-image: url("../../../static/images/btn_need_nor.png");
  }
</style>
