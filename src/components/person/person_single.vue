<!-- 接单赚钱 -->
<template lang="html">
  <div class="w100">
    <!-- <div class="banner"></div> -->
    <div class="person-single w1420">
      <ul>
        <router-link to="/person/personAnswer" tag="li" :class="{choseOrder:color==1}" @click.native="color=1">未接项目</router-link>
        <router-link to="/person/personReceived" tag="li" :class="{choseOrder:color==2}" @click.native="color=2">已接项目</router-link>
      </ul>
      <div class="">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     color:1
   }
  },
  methods: {

  },
  components:{
    Answer:resolve=>require(['./person_answer'],resolve),
    Received:resolve=>require(['./person_received'],resolve)
  }
}
</script>

<style lang="scss" scoped>
.banner{
  height: 300px;
  margin: 0 auto;
  background-size: 100% 100%;
  background-image: url("../../../static/images/service-banner.png");
}
.choseOrder{
  color:#eb7a1d;
  border-bottom:3px solid #eb7a1d;
  box-sizing: border-box;
}
.person-single{
  margin:0 auto;
  min-height: 800px;
  ul{
    width: 100%;
    height: 43px;
    border-bottom:2px solid #ccc;
    margin-top: 15px;
    li{
      width: 100px;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      cursor:pointer;
      line-height: 40px;
    }
    li:hover{
      color:#eb7a1d;
    }
  }
}

</style>
