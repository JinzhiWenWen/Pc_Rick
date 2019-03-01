<template>
  <div class="demand w100">
    <div class="banner"></div>
    <div class="demand-content w1420">
      <div class="promise">
        <p class="title">提交需求</p>
        <p class="remark">声明：瑞得音承诺不会泄露您的资料，请您放心填写</p>
      </div>
      <div class="content">
        <div class="clearfix">
          <div class="icon f-l"></div>
          <div class="f-l">
            <p class="title">请填写您的需求</p>
            <div class="input-row clearfix" style="margin-bottom: 200px;">
              <p class="f-l">您的需求描述</p>
              <div class="f-l">
                <textarea placeholder="请简单描述您的需求内容" id="content" class="form-control"/>
              </div>
            </div>
            <div class="input-row clearfix">
              <p class="f-l">您的预算</p>
              <div class="f-l">
                <input placeholder="请告诉我们您的需求预算金额" id="budget" class="form-control"/>
              </div>
            </div>
          </div>
        </div>
        <div class="clearfix">
          <div class="icon f-l"></div>
          <div class="f-l">
            <p class="title">请留下您的联系方式，以便我们能及时联系您</p>
            <div class="input-row clearfix">
              <p class="f-l">联系人</p>
              <div class="f-l">
                <input placeholder="请告诉我们如何称呼您" id="linkman" class="form-control"/>
              </div>
            </div>
            <div class="input-row clearfix">
              <p class="f-l">联系电话</p>
              <div class="f-l">
                <input placeholder="请输入您的手机号" id="contact" class="form-control"/>
              </div>
            </div>
          </div>
        </div>
        <div class="submit-btn" @click="registerSubmit">
          立即提交
        </div>
        <div class="success" v-show="successRemind">{{msg}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "demand",
        data(){
          return{
            successRemind:false,
            msg:"需求已提交成功，我们会尽快安排人员与您联系。"
          }
        },
        methods:{
          registerSubmit(){
            let content=this.$jq("#content").val(),
              budget=this.$jq("#budget").val().trim(),
              linkman=this.$jq("#linkman").val().trim(),
              contact=this.$jq("#contact").val().trim(),
              info="";
            if(content==""){
              info="请简要描述您的需求";
            }else if(budget==""){
              info="请填写您的需求预算金额";
            }else if(linkman==""){
              info="请填写您的称呼";
            }else  if(contact==""){
              info="请填写您的联系电话";
            }
            if(info==""){
              this.$ajax({
                method: 'post',
                url:this.dataURL('saveDemand'),
                params: {
                  content:content,
                  budget:budget,
                  linkman:linkman,
                  contact:contact
                }
              }).then((res)=>{
                if(res.data.code==0){
                  this.msg = "需求已提交成功，我们会尽快安排人员与您联系。";
                  this.successRemind = true;
                  setTimeout(() => {
                    this.successRemind = false;
                  }, 2000);
                }else{

                }
              });
            }else{
              this.msg = info;
              this.successRemind = true;
              setTimeout(() => {
                this.successRemind = false;
              }, 2000);
            }
          }
        }
    }
</script>

<style lang="scss" scoped>
  .demand{
    margin: 0 auto;
  }
  .banner{
    height: 300px;
    margin: 0 auto;
    background-size: 100% 100%;
    background-image: url("../../../static/images/img_need_nor.png");
  }
  .demand-content{
    margin: 20px auto;
    padding: 0 100px 0 200px;
    &>.promise{
      color: #202020;
      &>.title{
        font-size: 36px;
        margin-bottom: 20px;
      }
      &>.remark{
        font-size: 14px;
        margin-bottom: 50px;
      }
    }
    &>.content{
        position: relative;
        .icon{
          width: 30px;
          height: 30px;
          margin-right: 50px;
          background-color: $fontColor;
          transform: rotate(45deg);
        }
        .title{
          font-size: 24px;
        }
        .input-row{
          margin: 20px 0;
          &>p{
            width: 180px;
            font-size: 14px;
          }
          &>div{
            width: 800px;
            height: 40px;
          }
          textarea,input{
            width: 100%;
            height: 100%;
            border: 1px solid #000;
            text-indent: 10px;
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
          textarea{
            height: 200px;
            resize:none;
            &::-webkit-input-placeholder:after{
              display:inline-block;
              content:"fsdfs";/*  \A 表示换行  */
              color:red;
            }
            &::-moz-placeholder:after{
              display:inline-block;
              content:"请您简要描述您的需求，实现的功能、效果等;/A如：搭建企业视频会议，搭建企业云桌面;";/*  \A 表示换行  */
              color:red;
            }
          }
          textarea::-webkit-input-placeholder:after{
            display:block;
            content:"line@ \A line#";/*  \A 表示换行  */
            color:red;
          }
        }
        .submit-btn{
          position: relative;
          left: 500px;
          height: 70px;
          width: 250px;
          margin: 30px 0 50px;
          cursor: pointer;
          line-height: 70px;
          text-align: center;
          font-size: 34px;
          color:#fff;
          background-size: 100% 100%;
          background-image: url("../../../static/images/btn_need_nor.png");
        }
        .success{
          position: absolute;
          width: 400px;
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
  }
</style>
