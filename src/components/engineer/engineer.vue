<template>
  <div class="engineer w100">
    <div class="banner"></div>
    <div class="content">
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
    </div>
  </div>
</template>

<script>
    export default {
        name: "engineer",
        data(){
          return{
            name:"",
            phone:"",
            username:"",
            password:"",
            rPassword:"",
            nameRemind:false,
            phoneRemind:false,
            usernameRemind:false,
            passwordRemind:false,
            rPasswordRemind:false,
            usernameMsg:"必填项",
            phoneMsg:"必填项",
            passwordMsg:"必填项",
            phoneTest:/^1[3|4|5|7|8|9][0-9]{9}$/,
            successRemind:false
          }
        },
        methods:{
          registerSubmit(){
            let info=true;
            if(this.name.trim()==""){
              this.nameRemind=true;
              info=false;
            }
            if(this.phone.trim()==""){
              this.phoneRemind=true;
              this.phoneMsg="必填项";
              info=false;
            }else if(!this.phoneTest.test(this.phone.trim())){
              this.phoneRemind=true;
              this.phoneMsg="格式不正确";
              info=false;
            }
            if(this.username.trim()==""){
              this.usernameRemind = true;
              info=false;
            }
            if(this.password.trim()==""){
              this.passwordRemind = true;
              this.passwordMsg="必填项";
              info=false;
            }
            if(this.rPassword.trim()==""){
              this.rPasswordRemind = true;
              this.passwordMsg="必填项";
              info=false;
            }
            if(this.password.trim() != this.rPassword.trim()){
              this.passwordRemind = true;
              this.rPasswordRemind = true;
              this.passwordMsg="两次密码不一致";
              info=false;
            }
            if(info){
              this.$ajax({
                method: 'post',
                url:this.dataURL('saveExternalEngineer'),
                params: {
                  name:this.name.trim(),
                  phone:this.phone.trim(),
                  username:this.username.trim(),
                  password:this.password.trim()
                }
              }).then((res)=>{
                if(res.data.code==0){
                  this.successRemind = true;
                  setTimeout(() => {
                    this.successRemind = false;
                  }, 2000);
                }else if(res.data.code==115){
                  this.phoneRemind=true;
                  this.phoneMsg="已被使用";
                }else if(res.data.code==114){
                  this.usernameRemind=true;
                  this.usernameMsg="已被使用";
                }else{

                }
              });
            }
          },
          testValue(name){
            console.log(this);
            console.log(name);
          }
        },
        watch:{
          name: function (val) {
            if(val.trim()!="")
              this.nameRemind = false;
            else
              this.nameRemind = true;
          },
          phone: function (val) {
            if (val.trim() != "") {
              if(!this.phoneTest.test(this.phone.trim())){
                this.phoneRemind=true;
                this.phoneMsg="格式不正确";
              }else
                this.phoneRemind = false;
            }else{
              this.phoneMsg="必填项";
              this.phoneRemind = true;
            }

          },
          username: function (val) {
            if(val.trim()!="")
              this.usernameRemind = false;
            else {
              this.phoneMsg="已被注册";
              this.usernameRemind = true;
            }
          },
          password: function (val) {
            if(val.trim()!="")
              this.passwordRemind = false;
            else{
              this.passwordMsg="必填项";
              this.passwordRemind = true;
            }
            if(this.rPassword.trim()!="")
              this.rPasswordRemind = false;
            else
              this.rPasswordRemind = true;
          },
          rPassword: function (val) {
            if(val.trim()!="")
              this.rPasswordRemind = false;
            else{
              this.passwordMsg="必填项";
              this.rPasswordRemind = true;
            }
            if(this.password.trim()!="")
              this.passwordRemind = false;
            else
              this.passwordRemind = true;
          }
        }
    }
</script>

<style lang='scss' scoped>
  .engineer{
    margin: 0 auto;
  }
  .banner{
    height: 300px;
    margin: 0 auto;
    background-size: 100% 100%;
    background-image: url("../../../static/images/img_reg_nor.png");
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
