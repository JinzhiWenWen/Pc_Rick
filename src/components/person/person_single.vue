<!-- 接单赚钱 -->
<template lang="html">
  <div class="w100">
    <!-- <div class="banner"></div> -->
    <div class="person-single w1420">
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="未接项目">
          <Answer/>
        </el-tab-pane>
        <el-tab-pane label="已接项目">
          <Received/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     tabPosition: 'top'
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
.person-single{
  margin:0 auto;
  min-height: 800px;
}

</style>
