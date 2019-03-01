<template>
  <div class="successful-case-detail w100">
    <div class="banner"></div>
    <div class="case-body">
      <p class="case-title">{{title}}</p>
      <div class="case-content" v-html="content"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "successful-case-detail",
      data() {
        return {
          urlPath:this.url,
          title:"",
          content:""
        }
      },
      mounted(){
        let solutionId = this.$route.query.id;
        if(solutionId){
          this.$ajax({
            method: 'post',
            url:this.dataURL('view/findSolutionById'),
            params: {
              solutionId:solutionId
            }
          }).then((res)=>{
            this.title=res.data.data.title;
            this.content=res.data.data.content;
          })
        }
      }
    }
</script>

<style lang="scss" scoped>
  .successful-case-detail{
    margin: 0 auto;
  }
  .banner{
    height: 300px;
    margin: 0 auto;
    background-size: 100% 100%;
    background-image: url("../../../static/images/successful-case-banner.png");
  }
  .case-body{
    border: 2px solid #ebebeb;
    margin: 20px auto;
    width: 75%;
  }
  .case-title{
    padding-top: 20px;
    font-size: 24px;
    text-align: center;
  }
  .case-content{
    width: 90%;
    height: 90%;
    margin: 0;
    padding: 40px 50px;
    background-color: #fff;
    -webkit-box-shadow:none;
    box-shadow:none;
  }
</style>
