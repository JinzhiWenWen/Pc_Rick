<template>
  <header class="header-card w100">
    <div class="header-box w1420">
      <div class="ht-nav w100 clearfix">
        <!-- logo -->
        <div class="ht-logo f-l">
          <img src="../../static/images/tab_logo_home_nor.png" width="334" height="51">
        </div>
        <!-- 首页导航 -->
        <ul class="nav f-l clearfix">
          <li>
            <router-link :to="{name:'index'}" :class="{'active':activeArr[0]}" @click.native="changeTab(0)">
              首页
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'aboutUs'}" :class="{'active':activeArr[1]}" @click.native="changeTab(1)">关于我们</router-link>
          </li>
          <li>
            <router-link :to="{name:'servicePlatformView'}"  :class="{'active':activeArr[2]}" @click.native="changeTab(2)">犀牛小哥平台</router-link>
            <!-- <a href="http://www.rightservicetech.com:8080/index" target="_blank">犀牛小哥平台</a> -->
          </li>
          <li>
            <router-link :to="{name:'PlanPro'}" :class="{'active':activeArr[3]}" @click.native="changeTab(3)">产品与解决方案</router-link>
          </li>
          <li>
            <router-link :to="{name:'successfulCaseView'}" :class="{'active':activeArr[4]}" @click.native="changeTab(4)">成功案例</router-link>
          </li>
          <li>
            <router-link :to="{name:'newsView'}" :class="{'active':activeArr[5]}" @click.native="changeTab(5)">新闻中心</router-link>
          </li>
          <li>
            <!-- <router-link :to="{name:'contactUs'}" :class="{'active':activeArr[5]}" @click.native="changeTab(5)">联系我们</router-link> -->
          </li>
        </ul>
      </div>
      <!-- <img :src="doll" alt="" class="header-doll"> -->
      <div class="header-doll">

      </div>
    </div>
  </header>
</template>

<script>
  import bus from "../assets/eventBus"
  export default {
    name: 'head-nav',
    data () {
      return {
        activeArr:[true],
        doll:'/static/images/right_doll.png'
      }
    },
    mounted(){
      var that = this;
      bus.$on("clickChannel",function (activeArr) {
        that.activeArr = activeArr;
      });
    },
    methods:{
      changeTab(num){
        for(var i=0;i<this.activeArr.length;i++){
          if(i!=num)
            this.$set(this.activeArr,i,false);
        }
        this.$set(this.activeArr,num,true);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .header-card{
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: #fff;
    height: 111px;
    overflow-y: hidden;
  }
  .header-box{
    margin: 0 auto;
    background-color: #fff;
    position: relative;
    .header-doll{
      width:90px;
      height:75px;
      position: absolute;
      top:15px;
      right:55px;
      background: url('../../static/images/right_doll.png');
      background-size: 100% 100%;
    }
  }
  .ht-nav{
    height: 51px;
    margin: 0 auto;
    padding: 30px 0;
    .ht-logo{
      margin-left: 30px;
    }
    .nav {
      li{
        height: 51px;
      }
      a{
        display: block;
        color: #202020;
        font-size: 18px;
        font-weight: bold;
        padding:2px 5px;
        margin-top: 25px;
        background-color: transparent;
      }
      li:nth-child(1){
        margin-left: 50px;
      }
      li + li{
        margin-left: 50px;
      }
      .active{
        color: $fontColor;
      }
    }
  }
</style>
