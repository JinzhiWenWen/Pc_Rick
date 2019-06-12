<!-- 企业中心页 -->
<template lang="html">
  <div class="mine_wapper w1420">
    <!-- <h1>个人中心</h1> -->
    <div class="mine_table">
      <p class="user_pic">
        <img src="../../../static/images/comPic.png" alt="">
        <button type="button" name="button" @click="upPic()">编辑头像</button>
      </p>
      <ul>
        <router-link :to="{path:'/companyMine/personMes',query:{Mine:1}}"
         tag="li" :class="{turnChose:mine==1}"
         @click.native="personTitle='企业信息'"
         ><i class="iconfont icon-renzheng1"></i>企业信息</router-link>
        <!-- <router-link to="/mine/changeMes"
        tag="li" :class="{turnChose:mine==2}"
        @click.native="mine=2;personTitle='资料编辑'"
        >资料编辑</router-link> -->
        <router-link :to="{path:'/companyMine/companyCard',query:{Mine:3}}"
        tag="li" :class="{turnChose:mine==3}"
        @click.native="personTitle='企业认证'"
        ><i class="iconfont icon-renzheng"></i>企业认证</router-link>
        <router-link :to="{path:'/companyMine/personSkill',query:{Mine:4}}"
        tag="li" :class="{turnChose:mine==4}"
        @click.native="personTitle='企业评估'"
         ><i class="iconfont icon-approve"></i>企业评估</router-link>
        <router-link :to="{path:'/companyMine/personCation',query:{Mine:5}}"
        tag="li" :class="{turnChose:mine==5}"
        @click.native="personTitle='企业资质申请'"
        ><i class="iconfont icon-zizhizhengshu"></i>企业资质申请</router-link>
      </ul>
    </div>
    <p class="person_url">企业中心>{{personTitle}}</p>
    <div class="mine_con">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      mine:1,//样式切换
      personTitle:'个人资料'
    }
  },
  computed:{
    mineSel(){
      return this.$route.query.Mine
    }
  },
  watch:{
    mineSel(val,oldVal){
      if(val){
        this.mine=val;
      }else{
        this.mine=1;
      }
    }
  },
  methods:{
    upPic(){//头像上传
      this.$alert('该功能暂未开放', '提示', {
         confirmButtonText: '确定',
       });
    }
  }
}
</script>

<style lang="scss" scoped>
.turnChose{
  color:#eb7a1d!important;
  border-bottom:2px solid #eb7a1d;
}
.mine_wapper{
  margin:0 auto;
  height: 100%;
  display: flex;
  padding-top:15px;
  position: relative;
  .mine_table{
    width: 20%;
    height: 90vh;
    .user_pic{
      width: 100%;
      height: 180px;
      line-height: 150px;
      position: relative;
      box-shadow: 0px 0px 10px #999;
      margin-bottom: 5px;
      text-align: center;
      img{
        width: 100px;
        height: 100px;
        position: absolute;
        left:50%;
        top:50%;
        margin-top:-70px;
        margin-left: -50px;
        border-radius:50%;
      }
      button{
        width: 80px;
        height: 30px;
        line-height: 25px;
        outline: none;
        background: white;
        border:2px solid #eb7a1d;
        margin-top: 135px;
      }
    }
    ul{
      width: 100%;
      height: 75%;
      box-shadow: 0px 0px 10px #999;
      li{
        height: 80px;
        background: white;
        float: none;
        text-align: center;
        line-height: 80px;
        font-size: 18px;
        box-sizing: border-box;
        cursor:pointer;
        position: relative;
        i{
          font-size: 22px;
          position: absolute;
          left:25%;
        }
        .icon-zizhizhengshu{
          left:16%;
        }
      }
      li:hover{
        color:#eb7a1d;
        box-shadow: 0px 0px 20px #999;
        margin-bottom: 15px;
      }
    }
  }
  .person_url{
    width: 80%;
    font-size: 22px;
    height: 50px;
    line-height: 50px;
    box-sizing: border-box;
    border-bottom: 3px solid #eb7a1d;
    position: absolute;
    top:15px;
    left:300px;
  }
  .mine_con{
    width: 80%;
    height: 100vh;
    padding-left: 22px;
    margin-top: 55px;
  }
  .mine_con::-webkit-scrollbar {
        display: none;
    }
}
</style>
