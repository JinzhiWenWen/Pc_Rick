<!-- 个人中心页 -->
<template lang="html">
  <div class="mine_wapper">
    <!-- <h1>个人中心</h1> -->
    <div class="mine_table">
      <p class="user_pic">
        <img src="../../../static/images/UserPic.png" alt="">
        <button type="button" name="button" @click="upPic()">编辑头像</button>
      </p>
      <ul>
        <router-link to="/mine/personMes"
         tag="li" :class="{turnChose:mine==1}"
         @click.native="mine=1;personTitle='个人资料'"
         >个人资料</router-link>
        <!-- <router-link to="/mine/changeMes"
        tag="li" :class="{turnChose:mine==2}"
        @click.native="mine=2;personTitle='资料编辑'"
        >资料编辑</router-link> -->
        <router-link to="/mine/personCard"
        tag="li" :class="{turnChose:mine==3}"
        @click.native="mine=3;personTitle='身份认证'"
        >身份认证</router-link>
        <router-link to="/mine/personSkill"
        tag="li" :class="{turnChose:mine==4}"
        @click.native="mine=4;personTitle='技能评估'"
         >技能评估</router-link>
        <router-link to="/mine/personCation"
        tag="li" :class="{turnChose:mine==5}"
        @click.native="mine=5;personTitle='工程师资质申请'"
        >工程师资质申请</router-link>
      </ul>
    </div>
    <p class="person_url">个人中心>{{personTitle}}</p>
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
  width: 70%;
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
    left:21%;
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
