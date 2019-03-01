<template>
  <div class="footer w100">
    <div class="f-copy">
      <p>
        <router-link :to="{name:'aboutUs'}" @click.native="changeTab(1)">关于我们</router-link>
        <span>|</span>
        <a href="http://www.rightservicetech.com:8080/index" target="_blank">犀牛小哥平台</a>
        <span>|</span>
        <a href="#" @click.native="changeTab(2)">产品与解决方案</a>
        <span>|</span>
        <router-link :to="{name:'successfulCaseView'}" @click.native="changeTab(3)">成功案例</router-link>
        <span>|</span>
        <router-link :to="{name:'newsView'}" @click.native="changeTab(4)">新闻中心</router-link>
        <span>|</span>
        <router-link :to="{name:'contactUs'}" @click.native="changeTab(5)">联系我们</router-link>
      </p>
      <p>
        客服热线：010-62115806&nbsp;&nbsp;客服QQ：3324729049&nbsp;&nbsp;客服邮箱：service@rightservicetech.com&nbsp;&nbsp;
      </p>
      <p>
        Copyright ©2019-2029 北京瑞得音信息技术有限公司 All Rights Reserved. 版权所有 京ICP备13050733号
      </p>
    </div>
  </div>
</template>

<script>
    import bus from "../assets/eventBus"
    export default {
        name: "footer-nav",
        data(){
          return{
            activeArr:[false]
          }
        },
        methods:{
          changeTab(num){
            for(var i=0;i<this.activeArr.length;i++){
              if(i!=num)
                this.$set(this.activeArr,i,false);
            }
            this.$set(this.activeArr,num,true);
            bus.$emit("clickChannel",this.activeArr);
          }
        }
    }
</script>

<style lang="scss" scoped>
  .footer{
    background-color: rgba(49,49,49,10);
    .f-copy{
      width: 1380px;
      height: 100%;
      margin: 0 auto;
      padding: 30px 20px;
      background-color: rgba(49,49,49,10);
      color: #fff;
      font-size: 16px;
      &>p{
        &:nth-of-type(1){
          margin-top: 15px;
        }
        &:nth-of-type(2){
          margin: 20px 0;
        }
      }
    }
    a{
      color: #fff;
      font-size: 16px;
    }
  }
</style>
